/**
 * Created by Administrator on 2015/8/31.
 */
var myDate = new Date(1441037014000);
//get unix to ms
var mytime = (myDate.getFullYear()+" "+myDate.getMonth()+" "+myDate.getDate());
// getMonth() range 0~11 ;
document.write(mytime);