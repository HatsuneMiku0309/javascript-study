/**
 * Created by Administrator on 2015/8/28.
 */
var add =  new Function(["x","y","z"],"alert(x+y+z)");
// new Function(["x,y,z"],"functionBody")

add(10,20,30);
//add('10','20',"30");
// output : 102030

//add(10,20,'30');
// output : 3030