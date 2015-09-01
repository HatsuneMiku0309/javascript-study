/**
 * Created by Administrator on 2015/8/28.
 */
(function(a,b){
    alert(a+b);
})(10,20);


var o = new Object();
(function(_obj){
    _obj.myfunc = function(){
        return "some data";
    };
})(o);

alert(o.myfunc())
