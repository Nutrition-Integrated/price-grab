function appendHtml(el, str) {
  var div = document.createElement('div'); //container to append to
  div.innerHTML = str;
  while (div.children.length > 0) {
    el.appendChild(div.children[0]);
  }
}

function postData(endpoint,paramObj)
{
    var http = new XMLHttpRequest();
    var url = 'get_data.php';
    var params = 'orem=ipsum&name=binny';
    http.open('POST', url, true);
    
    //Send the proper header information along with the request
    http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);    
}

$.post('https://api.retool.com/v1/workflows/d1bad400-c1a8-410d-902e-36b51a765901/startTrigger?workflowApiKey=retool_wk_cc80001866794303b0a9894233b519d2', {url: window.location.href}, function(result){
    console.log(result);
  });


  $.ajax({
    url: "https://api.retool.com/v1/workflows/d1bad400-c1a8-410d-902e-36b51a765901/startTrigger?workflowApiKey=retool_wk_cc80001866794303b0a9894233b519d2",
    data: {url: window.location.href},
    dataType: "jsonp",
    success: function( response ) {
        console.log( response ); // server response
    }

});

$.post("demo_test.asp", function(data, status){
    alert("Data: " + data + "\nStatus: " + status);
  });


function getPriceHistory()
{
    var http = new XMLHttpRequest();
    var url = 'https://api.retool.com/v1/workflows/d1bad400-c1a8-410d-902e-36b51a765901/startTrigger?workflowApiKey=retool_wk_cc80001866794303b0a9894233b519d2';
    var params = 'url='+window.location.href;
    http.open('POST', url, true);
    
    //Send the proper header information along with the request
//default-src
http.setRequestHeader('Content-Security-Policy', 'default-src retool.com');
    http.setRequestHeader('Content-type', 'application/json');
    http.setRequestHeader('Access-Control-Allow-Origin', '*');
    http.onreadystatechange = function() {//Call a function when the state changes.
        if(http.readyState == 4 && http.status == 200) {
            alert(http.responseText);
        }
    }
    http.send(params);

}


getPriceHistory

let author = "me";
let message = "Message...";
let time = "15:21";

var html = `<div style="z-index:99;position:fixed;left:0px;top:0px;background-color:white;height:100px;width:100px">
                <li><label>price</label><input class="price" on>
                <input class="message">
</li>
                </div>`;
appendHtml(document.body, html);



$('body').prepend(`<div style="z-index:99;position:fixed;left:0px;top:0px;background-color:white;height:500px;width:500px">
<ul>
<li><label>was price</label><input style="border:solid black 1px;"  class="prd_prc" on> <label class = "prd_prc_value"></label>
</li>
<li>
<label>sale price</label><input style="border:solid black 1px;"  class="prd_dprc"> <label class = "prd_dprc_value"></label>
</li>
<li>
<label>prd_ps_verbatim</label><input style="border:solid black 1px;"  class="prd_ps_verbatim"> <label class = "prd_ps_verbatim_value"></label>
</li>
<li>
<label>oos</label><input style="border:solid black 1px;" class="oos"> <label class = "oos_value"></label>
</li>
</ul>
<button style="background-color:blue;color:white;" class="getJSON">JSON</button>
</div>`)


$('.prd_prc').change(function() {$('.prd_prc_value').text(document.querySelector($('.prd_prc').val())?.innerText
)})

$('.prd_dprc').change(function() {$('.prd_dprc_value').text(document.querySelector($('.prd_dprc').val())?.innerText
)})

$('button.getJSON').click(function() {navigator.clipboard.writeText('copyText.value');})


