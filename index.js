var now = new Date();
console.log(now);
var curyear = now.getYear();
var curmonth = now.getMonth();
var curdate = now.getDate();
document.getElementById('date').defaultValue=curdate;
document.getElementById('yearrr').defaultValue= now.getFullYear();
var myselect=document.getElementById('select2');
myselect.selectedIndex=curmonth;



document.getElementById('result').style.display = "none";
function calculate() {
    var date1 = parseInt(document.getElementById('datt').value);
    var year1 = parseInt(document.getElementById('yearr').value);
    var date2 = parseInt(document.getElementById('date').value);
    var year2 = parseInt(document.getElementById('yearrr').value);
    var e1 = document.getElementById("select1");
    var month1 = parseInt(e1.options[e1.selectedIndex].value);
    var e2 = document.getElementById("select2");
    var month2 = parseInt(e2.options[e2.selectedIndex].value);
    var year = year2 - year1;
    var month = 0;
    var days = 0;
    var m=12;
    var d=31;
    if(date1>31){
        date1=Math.floor(date1/31);
    }
    //get months
    if (month2 >= month1) {
        month = month2 - month1;
    } else {
        year--;
        month = m + month2 - month1;
    }
    //get days
    if (date2 >= date1) {
        days = date2 - date1;
    }
    else {
        month--;
        days = d + date2 - date1;
        if (month < 0) {
            month = 11;
            year--;
        }
    }
    document.getElementById('result').style.display = "block";

    document.getElementById('para').innerHTML = year + " " + "Years ," + " " + month + "Months ," + " " + days + " " + "Days";


}
//function to reset inputs
function reset(){
    document.getElementById('result').style.display = "none";
    document.getElementById('datt').value="";
    document.getElementById('yearr').value="";
    document.getElementById('select1').selectedIndex=0;


}