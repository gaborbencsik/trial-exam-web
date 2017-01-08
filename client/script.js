
const postMessage = (function () {
  let textarea = document.querySelector('.textarea');
  let shift = document.querySelector('.shift');
  let button = document.querySelector('.button');
  button.addEventListener('click', sendMessage);

  function sendMessage() {
    ajax.postMessage(shift.value, textarea.value);
    console.log(shift.value);
    console.log(textarea.value);
  };

  return {
    sendMessage: function() {
      return sendMessage();
    }
  }
}) ();

const changeUi = (function () {
  let p = document.getElementsByTagName('p');
  let listContainer = document.querySelector('.previous');

  function createElement(text) {
    let listItem = document.createElement('li');
    listContainer.appendChild(listItem);
    listItem.innerHTML = text;
  };

  function renderList(data) {
    data.forEach(function(item){
      createElement(item.text)
    });
  };

  function changeText(decoded) {
    p.innerHTML = decoded;
  };

  return {
    createElement: function () {
      return createElement();
    },
    renderList: function () {
      return renderList();
    },
    changeText: function () {
      return changeText();
    }
  }

}) ();


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

console.log('script');
