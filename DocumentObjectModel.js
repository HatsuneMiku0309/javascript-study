/**
 * Created by Administrator on 2015/9/1.
 */

/*
 alert("imanotaipu: "+ document.readyState);
 document.onreadystatechange = function(evt){
 alert("imanotaipu: "+ document.readyState);
 }
*/

/*
 window.onload=function(evt){alert("ima file load complete (load)");}

 document.onreadystatechange = function(evt){
   if("complete"==document.readyState){
     alert("ima file load complete (document)");
   }
 }
// window object load event must wait page include image,<a>...load complete can run
// document object readystatechange event when DOM structure draw complete can run
// 優先序: readystatechange > load
*/

// fetch screen width and height
var screenWidth = screen.width;
var screenHeight = screen.availHeight;
// 計算小視窗與螢幕左側與上側距離使之置中
var screenleft = (screenWidth-350)/2;
var screentop = (screenHeight-150)/2;

var newWindow = open("","_blank","width=350,height=150,top="+screentop+"," +
                      "left="+screenleft+",menubar=no,toolbar=no,directories=no," +
                      "location=no,status=no,resizable=no,scrollbars=no")
newWindow.document.write("<center><b>重要發布</b></center>");
newWindow.document.write("<p>這邊是重要內容，詳情請看...</p>");
newWindow.document.write('<p align="right"><a href="javascript:self.close()">close window</a></p> ');

/*
//  readonly  //
//col
//colgroup
//frameset
//head
//html
//style
//table
//tbody
//tfoot
//thead
//title
//tr
*/

/*********************************/
/*    根據CSS選擇符號存取元素    */
/*********************************/
// Selectors API Level1 and Selectors API Level2
/*
Element querySelector(selectors);
NodeList querySelectorAll(selectors);
 */

/****************************/
/*    DOM 處理 CSS樣式表    */
/****************************/
//document.styleSheets[0];
