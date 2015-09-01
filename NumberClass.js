/**
 * Created by Administrator on 2015/9/1.
 */
var myNumber = new Number(3.14159);
document.write("Fixed: "+myNumber.toFixed(3));  // 小數點後N位,N必須在[0~20], if outside output error RangeError;
document.write("<br />");
document.write("Exponential: "+myNumber.toExponential(2));
document.write("<br />");

document.write("Precision: "+myNumber.toPrecision(4)); // N is display 數字位數 , is range [0~21]
document.write("<br />");

var PrecisionNumber = new Number(1234);
document.write("PrecisionNumber: "+PrecisionNumber.toPrecision(3)); //because number of digits short of N , so display Exp
// output 1.23e+3

document.write("<br />");

var myMethod = function(arg1,arg2){
    document.write(this==obj);
}

var obj = new Object();
myMethod.call(obj,"one","two");
document.write("<br />");
document.write("<br />");

var theFunction = function (arg){
    document.write(arg);
    document.write("<br />");
    document.write(arguments);
    document.write("<br />");
    document.write(this==myObj);
    document.write("<br />");
}

var myObj = new Object();
var firstArray = new Array(1,2,3);
theFunction.apply(null,firstArray);

var secondArray = new Array("a","b","c");
theFunction.apply(myObj,secondArray);

document.write("<br />");
document.write("<br />");

function showBind(){
    var objWithProps = {
        minimum:50,
        maximum:100,
        checkRange:function(value){
            if(typeof value !== 'number')
                return false;
            else
                return value >= this.minimum && value<= this.maximum;
        }
    }

    var result = objWithProps.checkRange(10);
    document.write(result);
    document.write("<br>");
    var oRange = {minimum:10,maximum:20};
    var checkRange2 = objWithProps.checkRange.bind(oRange);
    var result = checkRange2(10);
    document.write(result);
}
showBind();

document.write("<br>");
document.write("<br>");

function factorial(n){
    if(n<=0){
        return 1;
    }else{
        return n*arguments.callee(n-1);
    }
}
document.write(factorial(5));
