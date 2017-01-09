
const postMessage = (function () {
  let textarea = document.querySelector('.textarea');
  let shift = document.querySelector('.shift');
  let button = document.querySelector('.button');
  button.addEventListener('click', sendMessage);

  function sendMessage() {
    console.log(shift.value);
    console.log(textarea.value);
    ajax.postMessage(shift.value, textarea.value);
    textarea.value = '';
  };

  return {
    sendMessage: sendMessage
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
    // createElement: createElement,
    renderList: renderList,
    changeText: changeText
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
    console.log(shift);
    console.log(text);
    let http = new XMLHttpRequest();
    http.onreadystatechange = function () {
      if (http.readyState == XMLHttpRequest.DONE) {
        JSON.parse(http.response);
      };
    };

    http.open('POST', 'http://localhost:3000/decode', true);
    http.setRequestHeader("Content-Type", "application/json");
    http.send(JSON.stringify({"shift": shift, "text": text}));
    console.log({"shift": shift, "text": text});
  };

  return {
    postMessage: postMessage,
    getMessageList: getMessageList
  };
}) ();

console.log('script');
