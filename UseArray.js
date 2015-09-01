/**
 * Created by Administrator on 2015/9/1.
 */

/*
var oArray = new Array(["pic/image1.jpg",20],
                        ["pic/image4.jpg",10],
                        ["pic/image2.jpg",20],
                        ["pic/image3.jpg",40]);

// sort rule
//function sortFn (a,b){
//    if(a[1]<b[1]) return false;
//    else if (a[1]>b[1]) return true;
//    else if (a[1]==b[1]) return false;
//}

//oArray.sort(sortFn);
oArray.sort();
document.write(oArray);
*/

var person = new Object();
person.sex = "male";
person.age = 28;
person.birthday = new Date(2015,9,1);
var i ;
for (i in person){
    document.write(i+": "+person[i]+"<br>");
}
