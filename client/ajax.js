const Ajax = function (){

  let getMessageList = function () {

    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        JSON.parse(http.response);
      };
    };

    http.open('GET', 'http://localhost:3000/decode/all', true);
    request.setRequestHeader("Content-Type", "application/json");
    http.send();
  };

  let postMessage = function (input) {

    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        JSON.parse(http.response);
      };
    };

    http.open('POST', 'http://localhost:3000/decode', true);
    request.setRequestHeader("Content-Type", "application/json");
    http.send();
  }
}
