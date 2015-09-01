/**
 * Created by Administrator on 2015/8/31.
 */

var text = "as typewrite one one display";
var block = document.getElementById("odiv");  // must id_name down line can get
var count =0;
function type(){
    //document.write(count);
    if(count <= text.length){
        count++;
        block.innerHTML = text.substring(0,count);
        //alert(count);

    }else{
        window.clearInterval(intervalID);
    }

}
var intervalID = window.setInterval(type,200);