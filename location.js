/**
 * Created by Administrator on 2015/9/1.
 */
/*
document.write(" hash: "+location.hash+"<br>");
document.write(" host: "+location.host+"<br>");
document.write(" hostname: "+location.hostname+"<br>");
document.write(" pathname: "+location.pathname+"<br>");
document.write(" port: "+location.port+"<br>");
document.write(" protocol: "+location.protocol+"<br>");
document.write(" search: "+location.search+"<br>");
document.write("<br>");
document.write("<br>");
*/

/*
// HTMLDocument   Document
document.write("document object<br>");
document.write("location: "+document.location+"<br>");
document.write("URL: "+document.URL+"<br>");
document.write("domain: "+document.domain+"<br>");
document.write("referrer: "+document.referrer+"<br>");
document.write("lastModified: "+document.lastModified+"<br>");
document.write("compatMode: "+document.compatMode+"<br>");
document.write("characterSet: "+document.characterSet+"<br>");
document.write("<br>");
*/


/*
// get browser data
for(var i in window.navigator){
    document.write(i+"==="+window.navigator[i]+"<br />");
}
*/

/*
var appVersion = navigator.appVersion;
var ischrome = (appVersion.indexOf("Chrome")!=-1)?true:false;
var isWin = (appVersion.toLowerCase().indexOf("win")!=-1)?true:false;
var isIE = (appVersion.indexOf("MSIE")!=-1)?true:false;

if(isIE&&isWin  && !ischrome){
    alert("is IE");
}else if(ischrome){
    alert("is chrome");
}else{
    alert("is another browser");
}
*/