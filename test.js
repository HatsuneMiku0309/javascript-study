/**
 * Created by Administrator on 2015/8/28.
 */
const TEST = 1;  //無法使用於IE
document.write(TEST);

foo:
{
    document.write("a");
    break foo;
    document.write("b");
}

var version = window.navigator.appVersion;
//alert(version);

function func(arg1,arg2,arg3){
    //alert(arguments.length);  取得輸入參數個數
    alert(arg1+arg2);
    if ( arg3 != null )
        alert(arg3);
}

func(1,2);


function object_function(){
    alert('test');
}

var o = new Object();
o.F = object_function;
o.F();
object_function();
