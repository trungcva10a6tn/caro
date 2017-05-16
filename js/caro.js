/**
 * Created by trung on 16/05/2017.
 */
var ban_co=[10][10];
function new_table() {
    document.write("<table>");
    for(var i=0;i<10;i++){
        document.write("<tr>");
        for(var j=0;j<10;j++){
            document.write("<td id='m"+i+j+"' onclick='danh("+i+","+j+")'>"+"</td>");
        }
        document.write("</tr>");
    }
    document.write("<table>");
}
var k=0;
function danh(i,j) {
    var tk=document.getElementById("m"+i+j).innerHTML;
    if(tk === ""){
        if(k%2===0){
            document.getElementById("m"+i+j).innerHTML="X";
        }else {
            document.getElementById("m"+i+j).innerHTML="O";
        }
        k++;
    }else
    alert("Ô ĐÃ CÓ NỘI DUNG");
}
