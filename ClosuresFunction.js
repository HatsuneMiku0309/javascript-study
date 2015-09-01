/**
 * Created by Administrator on 2015/8/28.
 * */
function B(){
    var temp = "test";
    function A() {
        alert("temp:"+temp);
    }
    return A;
}

var myfunc = B();
myfunc();

//B();  unable call


var F;
function BB() {
    var temp = "test";
    F = function(){
        alert("var F function temp:"+temp);
    }
}

BB();
F();

function outer(param){
    return (function(){
        alert(param);
    });
}

var funcRef = outer("abc");
setTimeout(funcRef,1000); //delay set time display funcRef content
//setInterval(funcRef,1000);  each than set time repeat the funcRef

