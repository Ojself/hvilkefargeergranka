console.info("Looking for a developer? \n github.com/ojself");

const getData = async () => {
  const myHeaders = new Headers();
  myHeaders.append("Connection", "keep-alive");
  myHeaders.append("Cache-Control", "max-age=0");
  myHeaders.append(
    "sec-ch-ua",
    '" Not;A Brand";v="99", "Google Chrome";v="91", "Chromium";v="91"'
  );
  myHeaders.append("sec-ch-ua-mobile", "?0");
  myHeaders.append("Upgrade-Insecure-Requests", "1");
  myHeaders.append(
    "User-Agent",
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.114 Safari/537.36"
  );
  myHeaders.append(
    "Accept",
    "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9"
  );
  myHeaders.append("Sec-Fetch-Site", "none");
  myHeaders.append("Sec-Fetch-Mode", "navigate");
  myHeaders.append("Sec-Fetch-User", "?1");
  myHeaders.append("Sec-Fetch-Dest", "document");
  myHeaders.append(
    "Accept-Language",
    "nb-NO,nb;q=0.9,no;q=0.8,nn;q=0.7,en-US;q=0.6,en;q=0.5"
  );
  myHeaders.append(
    "Cookie",
    "cookieConsent=accepted; _ga=GA1.3.786191108.1625827944; _gid=GA1.3.1492744311.1625827944; Server=u0021cBP7iOQaptpfzGr1B9LnI57DCN3REB3YU+QYAFKY/2OKns4b7N7faMHkuQr7r/b5E0GGNpbn67win8c=; Server=!993x/zk9XqY0Frv1B9LnI57DCN3REG65y0F4dAuqJ11Gfhc/eYkEBUF856nzLiN593yEHIpfYlY9FdU="
  );

  const requestOptions = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  const data = await fetch(
    "https://opendata.ecdc.europa.eu/covid19/movementindicators/json/",
    requestOptions
  )
    .then((response) => response.text())
    .catch((error) => console.log("error", error));
  console.log(data);
};
getData();
