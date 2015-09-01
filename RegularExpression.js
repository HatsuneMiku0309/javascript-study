/**
 * Created by Administrator on 2015/8/31.
 */

/*
var str="Visit W3School!"
alert(str.search(/[S]/));  //search dir indexof
// output = 8
*/

/*
var str = "a/b";
alert(str.match(/[a-z]/g));   //g is global
//output = a,/,b
*/

/*
var str="Visit W3School!";
alert(str.replace(/[\s+]/,"-")); // \s is \n,\r,\t... 空白字元  ,  將其替換成-
*/

/*
var str = "flipsdfads-flop";
document.write(str.replace(/(\w+)-(\w+)/g,"$1-$2"));
*/

/* two method create RegExp class
var re = /pattern/[flags];
var re = new RegExp("pattern",["flags"]);
*/

var oString = "ECMAScript version 5.0 provides many new features.";
var re = /\w+/g;
var oArray;

while((oArray=re.exec(oString))!=null) {
    document.write(oArray.index+"-"+re.lastIndex+"\t"+oArray+"<br>");
}