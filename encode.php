<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <link rel="icon" href="./Mid.png" type="image/ico" />
    <title></title>
        <!--
        <script src="./test.js"></script>
        <script src="AnonymousFunction.js"></script>
        <script src="FunctionClassDefine.js"></script>
        <script src="ClosuresFunction.js"></script>

        -->
        <script src="php.js"></script>
    <script>
		var text = "你是誰?~!()";
		//var escStr = escape(text); // escape not encode ASCII encode ,so error. and not encode unicode .
		//var escStr = encodeURI(text);
		// encodeURI not to (; , / ? : @ & = + $)
		// and (english number - _ . ! ~ * ' ())
		// and (#) encoding
		// Because encodeURI not encoding where up so this encodeURI not to GET or POST , if you need to GET or POST than you must use encodeURIComponent()
		var escStr = encodeURIComponent("中文"); //encode Chinese garbled(亂碼) , than you must use window.btoa
		// encodeURIComponent not encoding (english number - _ . ! ~ * ' ())
		alert(escStr);
		//var unescStr = unescape(escStr);
		//var unescStr = decodeURI(escStr);
		var unescStr = decodeURIComponent("%E4%B8%AD%E6%96%87");  //decode Chinese garbled(亂碼) , than you must use window.atob
		alert(unescStr);
    </script>
</head>
<body>
<input type="button" id="text" onclick="javascript:window.open('about:blank');" value="text"/>
</body>
</html>