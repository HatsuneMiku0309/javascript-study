/**
 * Created by Administrator on 2015/8/28.
 */
    // 注意IDE編碼，如果不是UTF-8，編碼結果將會錯誤
var text = "你是誰?~!()";
//var escodeStr = escape(text); // escape not encode ASCII encode ,so error. and not encode unicode .
//var escodeStr = encodeURI(text);
// encodeURI not to (; , / ? : @ & = + $)
// and (english number - _ . ! ~ * ' ())
// and (#) encoding
// Because encodeURI not encoding where up so this encodeURI not to GET or POST , if you need to GET or POST than you must use encodeURIComponent()
var escodeStr = encodeURIComponent(text); //encode Chinese garbled(亂碼) , than you must use window.btoa
// encodeURIComponent not encoding (english number - _ . ! ~ * ' ())
alert(escodeStr);
//var unescStr = unescape(escStr);
//var unescStr = decodeURI(escStr);
var unescStr = decodeURIComponent(escodeStr);  //decode Chinese garbled(亂碼) , than you must use window.atob
alert(unescStr);

/*
 var x3 = "good";
 var x = 3;
 var y = eval("x"+3);  // then string change to VariableName
 alert(y);
 */