var flag =1;
var print = document.getElementById("print");
function show_alert(e){
    alert("برنده"+e);
    func_reset();
}
function func_reset(){
    location.reload();
    b1.value='';
    b2.value='';
    b3.value='';
    b4.value='';
    b5.value='';
    b6.value='';
    b7.value='';
    b8.value='';
    b9.value='';
    flag=1;
}

function myFunc_1(){
    if (flag==1){
        b1.value="X";
        b1.style.color="dodgerblue";
        b1.disabled=true
        flag=0;
    }
    else{
        b1.value="O"
        b1.style.color="#ec3333";
        b1.disabled=true;
        flag=1;
    }
}

function myFunc_2(){
    if (flag==1){
        b2.value="X";
        b2.style.color="dodgerblue";
        b2.disabled=true
        flag=0;
    }
    else{
        b2.value="O";
        b2.style.color="#ec3333";
        b2.disabled=true;
        flag=1;
    }
}

function myFunc_3(){
    if (flag==1){
        b3.value="X";
        b3.style.color="dodgerblue";
        b3.disabled=true
        flag=0;
    }
    else{
        b3.value="O"
        b3.style.color="#ec3333";
        b3.disabled=true;
        flag=1;
    }
}

function myFunc_4(){
    if (flag==1){
        b4.value="X";
        b4.style.color="dodgerblue";
        b4.disabled=true
        flag=0;
    }
    else{
        b4.value="O";
        b4.style.color="#ec3333";
        b4.disabled=true;
        flag=1;
    }
}

function myFunc_5(){
    if (flag==1){
        b5.value="X";
        b5.style.color="dodgerblue";
        b5.disabled=true
        flag=0;
    }
    else{
        b5.value="O";
        b5.style.color="#ec3333";
        b5.disabled=true;
        flag=1;
    }
}

function myFunc_6(){
    if (flag==1){
        b6.value="X";
        b6.style.color="dodgerblue";
        b6.disabled=true
        flag=0;
    }
    else{
        b6.value="O";
        b6.style.color="#ec3333";
        b6.disabled=true;
        flag=1;
    }
}

function myFunc_7(){
    if (flag==1){
        b7.value="X";
        b7.style.color="dodgerblue";
        b7.disabled=true
        flag=0;
    }
    else{
        b7.value="O";
        b7.style.color="#ec3333";
        b7.disabled=true;
        flag=1;
    }
}

function myFunc_8(){
    if (flag==1){
        b8.value="X";
        b8.style.color="dodgerblue";
        b8.disabled=true
        flag=0;
    }
    else{
        b8.value="O";
        b8.style.color="#ec3333";
        b8.disabled=true;
        flag=1;
    }
}

function myFunc_9(){
    if (flag==1){
        b9.value="X";
        b9.style.color="dodgerblue";
        b9.disabled=true
        flag=0;
    }
    else{
        b9.value="O"
        b9.disabled=true;
        b9.style.color="#ec3333";
        flag=1;
    }
}

function myFunc(){
    var b1,b2,b3,b4,b5,b6,b7,b8,b9;
    b1 =document.getElementById("b1").value;
    b2 =document.getElementById("b2").value;
    b3 =document.getElementById("b3").value;
    b4 =document.getElementById("b4").value;
    b5 =document.getElementById("b5").value;
    b6 =document.getElementById("b6").value;
    b7 =document.getElementById("b7").value;
    b8 =document.getElementById("b8").value;
    b9 =document.getElementById("b9").value;

    // *************************************************************************************************
    //  start state of X win
   
    // state of 1 X win
    if((b1==="X" || b1==="X") && (b2==="X" || b2==="X") && (b3==="X" || b3==="X")){
       
        print.innerHTML="برنده player X";
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("x");
    }
        // state of 2 X win

    else if((b1=='X' || b1=='X') && (b4=='X' || b4=='X') && (b7=='X' || b7=='X')){
        print.innerHTML="برنده player X";
        b2.disabled=true;
        b3.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("x");
    }

        // state of 3 X win

    else if((b7=='X' || b7=='X') && (b8=='X' || b8=='X') && (b9=='X' || b9=='X')){
        print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        show_alert("x");
    }

        // state of 4 X win

    else if((b3=='X' || b3=='X') && (b6=='X' || b6=='X') && (b9=='X' || b9=='X')){
        print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        show_alert("x");
    }

    // state of 5 X win

    else if((b4=='X' || b4=='X') && (b5=='X' || b5=='X') && (b6=='X' || b6=='X')){
        print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("x");
    }

     // state of 6 X win

     else if((b2=='X' || b2=='X') && (b5=='X' || b5=='X') && (b8=='X' || b8=='X')){
        print.innerHTML="برنده player X";
        b1.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b9.disabled=true;
        show_alert("x");
    }

    // state of 7 X win

    else if((b3=='X' || b3=='X') && (b5=='X' || b5=='X') && (b7=='X' || b7=='X')){
        print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("x");
    }

     // state of 8 X win

     else if((b1=='X' || b1=='X') && (b5=='X' || b5=='X') && (b9=='X' || b9=='X')){
        print.innerHTML="برنده player X";
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        show_alert("x");
    }

//  End state of X win
// ******************************************************************************************************

// ****************************************************************************************************
// Start state of O win

// state of 1 O win
else if((b1=='O' || b1=='O') && (b2=='O' || b2=='O') && (b3=='O' || b3=='O')){
    print.innerHTML="برنده player X";
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("O");
}
    // state of 2 o win

else if((b1=='O' || b1=='O') && (b4=='O' || b4=='O') && (b7=='O' || b7=='O')){
    print.innerHTML="برنده player X";
    b2.disabled=true;
    b3.disabled=true;
    b5.disabled=true;
    b6.disabled=true;
    b8.disabled=true;
    b9.disabled=true;
    show_alert("O");
}

    // state of 3 O win

else if((b7=='O' || b7=='O') && (b8=='O' || b8=='O') && (b9=='O' || b9=='O')){
    print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b6.disabled=true;
        show_alert("O");
}

    // state of 4 O win

else if((b3=='O' || b3=='X') && (b6=='O' || b6=='O') && (b9=='O' || b9=='O')){
    print.innerHTML="برنده player X";
        b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b5.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        show_alert("O");
}

// state of 5 O win

else if((b4=='O' || b4=='O') && (b5=='O' || b5=='O') && (b6=='O' || b6=='O')){
    b1.disabled=true;
        b2.disabled=true;
        b3.disabled=true;
        b7.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("O");
}

 // state of 6 O win

 else if((b2=='O' || b2=='O') && (b5=='O' || b5=='O') && (b8=='O' || b8=='O')){
    print.innerHTML="برنده player X";
    b1.disabled=true;
        b3.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b7.disabled=true;
        b9.disabled=true;
        show_alert("O");
}

// state of 7 O win

else if((b3=='O' || b3=='O') && (b5=='O' || b5=='O') && (b7=='O' || b7=='O')){
    print.innerHTML="برنده player X";
    b1.disabled=true;
        b2.disabled=true;
        b4.disabled=true;
        b6.disabled=true;
        b8.disabled=true;
        b9.disabled=true;
        show_alert("O");
}

 // state of 8 O win

 else if((b1=='O' || b1=='O') && (b5=='O' || b5=='O') && (b9=='O' || b9=='O')){
    print.innerHTML="برنده player X";
    b2.disabled=true;
    b3.disabled=true;
    b4.disabled=true;
    b6.disabled=true;
    b7.disabled=true;
    b8.disabled=true;
    show_alert("O");
}
//  End state of X win
// ******************************************************************************************************

// start state of Match Tie

else if ((b1=='X' || b1=='O') && (b2=='X' || b2=='O') && (b3=='X' || b3=='O')&& (b4=='X' || b4=='O')
&& (b5=='X' || b5=='O')&& (b6=='X' || b6=='O')&& (b7=='X' || b7=='O')&& (b8=='X' || b8=='O')
&& (b9=='X' || b9=='O')){
    print.innerHTML="بازی بدون برنده";
    alert("بازی مساوی");
    func_reset();
}
else{
    if(flag==1){
        print.innerHTML="X نوبت بازیکن";
    }
    else{
        print.innerHTML="O نوبت بازیکن ";
    }
} 
}