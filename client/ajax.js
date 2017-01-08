const ajax = (function (){

  let getMessageList = function () {
    console.log('get');
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        JSON.parse(http.response);
      };
    };

    http.open('GET', 'http://localhost:3000/decode/all', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };

  let postMessage = function (shift, text) {
    console.log('post');
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        JSON.stringify({"shift": shift, "text": text});
        console.log(JSON.stringify({"shift": shift, "text": text}));

      };
    };

    http.open('POST', 'http://localhost:3000/decode', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send();
  };

  return {
    postMessage: function() {
      console.log('return x');
      return postMessage();
    },
    getMessageList: function () {
      return getMessageList();
    }
  }
}) ();
