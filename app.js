console.info("Looking for a developer? \n github.com/ojself");

const CANARIAS_ID = "ES70"; // geo_id_final

const COLOR_DICT = {
  Green: "grønn",
  Orange: "oransje",
  Red: "rød",
};

const getRegion = (data, id) => {
  return data.find((region) => region.LocationCode === id);
};

const setColorsToDom = (color) => {
  const languageFriendlyColor = COLOR_DICT[color] || "No data";
  const cssColor = color.toLowerCase();
  const header = document.getElementById("header-color");
  const paragraph = document.getElementById("country-color");

  header.innerText = languageFriendlyColor.toUpperCase();
  header.style.color = cssColor;
  paragraph.innerText = languageFriendlyColor;
  paragraph.style.color = cssColor;
};

const getData = async () => {
  const response = await fetch(
    "https://ecdc-proxy.awgaan.workers.dev/covid19/movementindicators/json/",
    {
      headers: {
        accept: "*/*",
        "accept-language":
          "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5",
        "sec-ch-ua":
          '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"',
        "sec-ch-ua-mobile": "?0",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
      },
      referrerPolicy: "strict-origin-when-cross-origin",
      body: null,
      method: "GET",
      mode: "cors",
      credentials: "omit",
    }
  );
  return await response.json();
};

const main = async () => {
  const data = await getData();
  const region = getRegion(data, CANARIAS_ID);

  setColorsToDom(region.Colour);
};
main();
