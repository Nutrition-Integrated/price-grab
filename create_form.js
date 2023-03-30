function appendHtml(el, str) {
  var div = document.createElement('div'); //container to append to
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

let author = "me";
let message = "Message...";
let time = "15:21";

var html = `<div style="z-index:99;position:fixed;background-color:white;height:100px;width:100px">
                <li><span class="author">${author}</span>
                <span class="message">${message}</span>
                <span class="time"><div class="line"></div>${time}</span></li>
                </div>`;
appendHtml(document.body, html);