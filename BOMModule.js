/**
 * Created by Administrator on 2015/9/1.
 */
//BOM  Browser Object Model

/*
var a = alert('test');
var b = confirm("click");
if(b){
    alert("you click yes");
}else{
    alert("you click no");
}

var c = prompt("content","input to here")
if(c != null){
    alert("you input: "+c);
}else{
    alert("you click no");
}
*/

//********************************//
//        myDialog.html           //
//********************************//
/*
var  sUserName = "";

function fnCallDialog(){
    window.showModalDialog("myDialog.html",window);
    // this showModalDialog() with open() different , showModalDialog alway get focus;
    // ●chrome is not use showModalDialog , must edit (register file)
}

function fnUpdate(){
    var oName = document.getElementById("oName");
    oName.firstChild.nodeValue = sUserName;
}
*/


//********************************//
//         button_text2           //
//********************************//

function openbrowser(){
    var newWindow = window.open("https://zh.wikipedia.org/wiki/%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F","_blank","width=200,height=100,menubar=yes,toolbar=yes,resizable=yes,scrollbars=yes");
    newWindow.navigate("http://stackoverflow.com/questions/25663053/how-can-i-make-window-showmodaldialog-work-in-chrome-37");
    //menubar and toolbar invalid in chrome...
    // yes(1) or no(0)
    //channelmode  指定是否按照劇場模式顯示視窗 (no)
    //directories  定義新視窗是否出現連結條 (yes)
    //fullscreen  定義新視窗是否全螢幕顯示 (no)
    //height
    //left  視窗左端離螢幕左端的像素
    //location  定義新視窗是否出現地址欄 (yes)
    //menubar  定義新視窗是否出現選單條 (yes)
    //resizable  定義新視窗是否能夠調整大小 (yes)
    //scrollbars  定是新視窗是否出現卷軸 (yes)
    //status  定義新視窗是否出現底部的狀態列 (yes)
    //toolbar 定義新視窗是否出現工具列 (yes)
    //top
    //widht
}
