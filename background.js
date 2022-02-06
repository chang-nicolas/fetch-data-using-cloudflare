(function () {
  window.onload = function () {
    var myHeaders = new Headers();
    myHeaders.append("url", "https://tokensniffer.com/tokens/top");
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

    var urlencoded = new URLSearchParams();
    urlencoded.append("email", "maksymkozu@gmail.com\n");
    urlencoded.append("firstname", "Maksym");
    urlencoded.append("lastname", "Kozu");
    urlencoded.append("visitDate", "2021-5-13");

    var requestOptions = {
      method: "GET",
      headers: myHeaders,
      body: urlencoded,
      redirect: "follow",
    };

    fetch("https://proxy.custom-cors-proxy.workers.dev", requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error));
  };
})();
