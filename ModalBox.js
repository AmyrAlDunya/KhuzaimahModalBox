// Copyright(c) 2018 - Khuzaimah
// All rights reserved

var CreateNewModalBox = function( name, hdr, cnt, hld ) {
 var mdlcss = "." + name + " {\r\n display: none;\r\n position: fixed;\r\n top: 0;\r\n left: 0;\r\n width: 100%;\r\n height: 100%;\r\n z-index: 1;\r\n background-color: rgb( 0, 0, 0 );\r\n background-color: rgba( 0, 0, 0, 0.4 );\r\n}\r\n." + name + "-content {\r\n margin: 10% auto;\r\n width: 80%;\r\n padding: 20px;\r\n}\r\n." + name + "-header {\r\n background-color: #4782e0;\r\n color: white;\r\n padding: 2px 16px;\r\n}\r\n." + name + "-body {\r\n background-color: white;\r\n color: black;\r\n padding: 2px 16px;\r\n}";
 var mdljs = "var hd = document.getElementById('"+hld+"');\r\nvar mdl = document.getElementById(\'" + name + "\');\r\n\r\nhd.onclick = function() {\r\n mdl.style.display = \"block\";\r\n}\r\nwindow.onclick = function( event ) {\r\n if( event.target == mdl ) {\r\n  mdl.style.display = \"none\";\r\n }\r\n}";
 var mdlhtml = "<div class=\"" + name + "\" id=\"" + name + "\">\r\n <div class=\"" + name + "-content\">\r\n  <div class=\"" + name + "-header\">\r\n " + hdr + " <\/div>\r\n  <div class=\"" + name + "-body\">\r\n " + cnt + " <\/div>\r\n <\/div>\r\n<\/div>";
 var out = "<style>" + mdlcss + "</style>" + mdlhtml + "<script>" + mdljs + "</script>";

 document.body.innerHTML = document.body.innerHTML + out;
 return document.getElementById(name);
}
var ShowModalBox = function( mdl ) {
 mdl.style.display = "block";
 window.onclick = function( event ) {
  if( event.target == mdl ) {
   mdl.style.display = "none";
  }
 };
}
var HideModalBox = function( mdl ) {
 mdl.style.display = "none";
}
