/**
 * Created by Administrator on 2015/8/31.
 */
/*
function HelloWord(){
     //var printInfo;
     this.printInfo = function() {
         //return "HelloWord";
         alert("HelloWord");
     }
    //return printInfo
}
//var ohelloword = HelloWord();
//ohelloword();
var ohelloword =  new HelloWord();
var result = ohelloword.printInfo();
*/

function Person (){
    this.age;
    this.name;
    this.getInfo = function(){
        alert("my arg is "+this.age+"\n\rmy name is "+this.name);
    }
}

var dai = new Person();
dai.name = "daitsushun";
dai.age = 16;
dai.getInfo();