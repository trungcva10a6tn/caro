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
var k=0,win="";
function danh(i,j) {
    if (win===""){
        var tk=document.getElementById("m"+i+j).innerHTML;
        if(tk === ""){
            if(k%2===0){
                document.getElementById("m"+i+j).innerHTML="X";
            }else {
                document.getElementById("m"+i+j).innerHTML="O";
            }
            k++;
            if(check_ngang(i,j,document.getElementById("m"+i+j).innerHTML)!== 0){
                alert("Quân "+document.getElementById("m"+i+j).innerHTML+" đã thắng");
                win=document.getElementById("m"+i+j).innerHTML;
                document.getElementById("ketqua").innerHTML="Quân "+document.getElementById("m"+i+j).innerHTML+" đã thắng";
            }
        }else
            alert("Ô ĐÃ CÓ NỘI DUNG");
    }else {
        alert("Game đã kết thúc rồi THÍM");
    }
}
function check_ngang(x,y,value) {
    var dx=x,dem=0;
    for(var i=0;i<10;i++ ){
        if(document.getElementById("m"+dx+i).innerHTML===value){
            dem+=1;
            if (dem>4){
                break;
            }
        }else {
            dem=0;
        }
    }
    if(dem>4){
        return 1;
    }else {
       return check_doc(x,y,value);
    }
}
function check_doc(x,y,value) {
    var dy=y,dem=0;
    for(var i=0;i<10;i++ ){
        if(document.getElementById("m"+i+dy).innerHTML===value){
            dem+=1;
            if (dem>4){
                break;
            }
        }else {
            dem=0;
        }
    }
    if(dem>4){
        return 1;
    }else {
        return check_phai(x,y,value);
    }
}
function check_phai(x,y,value) {
    var dx=x,dy=y,dem=0;
    while (dx>0&&dy>0){
        dx-=1;
        dy-=1;
    }

    while (dx<10&&dy<10){
        if(document.getElementById("m"+dx+dy).innerHTML===value){
            dem+=1;
            if (dem>4){
                break;
            }
        }else {
            dem=0;
        }
        dx+=1;
        dy+=1;
    }
    if(dem>4){
        return 1;
    }else {
        return check_trai(x,y,value);
    }
}
function check_trai(x,y,value) {
    var dx=x,dy=y,dem=0;
    while (dx>0&&dy<9){
        dx-=1;
        dy+=1;
    }
    while (dx<9&&dy>0){
        if(document.getElementById("m"+dx+dy).innerHTML===value){
            dem+=1;
            if (dem>4){
                break;
            }
        }else {
            dem=0;
        }
        dx+=1;
        dy-=1;
    }
    if(dem>4){
        return 1;
    }else {
        return 0;
    }
}
