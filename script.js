//In this program i have to append the value of a and b so that it can 
//stay when the next key is pressed

let a='';
let b='';
let operator='';
let c=0;
let disp=document.getElementById("display");
let fun=document.getElementById("func");
let but1=document.getElementById("but1");
let but2=document.getElementById("but2");
let but3=document.getElementById("but3");
let but4=document.getElementById("but4");
let but5=document.getElementById("but5");
let but6=document.getElementById("but6");
let but7=document.getElementById("but7");
let but8=document.getElementById("but8");
let but9=document.getElementById("but9");
let but10=document.getElementById("but10");
let but11=document.getElementById("but11");//=
let but12=document.getElementById("but12");//+

let but13=document.getElementById("but13");//-
let but14=document.getElementById("but14");//*
let but15=document.getElementById("but15");//clear
let but16=document.getElementById("but16");// /


but1.addEventListener("click", () => {
    if (operator === '') {
        a += '1';
    } else {
        b += '1';
    }
    disp.innerHTML += '1';
});

but2.addEventListener("click", () => {
    if (operator === '') {
        a += '2';
    } else {
        b += '2';
    }
    disp.innerHTML += '2';
});
but3.addEventListener("click", () => {
    if (operator === '') {
        a += '3';
    } else {
        b += '3';
    }
    disp.innerHTML += '3';
});
but4.addEventListener("click", () => {
    if (operator === '') {
        a += '4';
    } else {
        b += '4';
    }
    disp.innerHTML += '4';
});
but5.addEventListener("click", () => {
    if (operator === '') {
        a += '5';
    } else {
        b += '5';
    }
    disp.innerHTML += '5';
});
but6.addEventListener("click", () => {
    if (operator === '') {
        a += '6';
    } else {
        b += '6';
    }
    disp.innerHTML += '6';
});
but7.addEventListener("click", () => {
    if (operator === '') {
        a += '7';
    } else {
        b += '7';
    }
    disp.innerHTML += '7';
});
but8.addEventListener("click", () => {
    if (operator === '') {
        a += '8';
    } else {
        b += '8';
    }
    disp.innerHTML += '8';
});
but9.addEventListener("click", () => {
    if (operator === '') {
        a += '9';
    } else {
        b += '9';
    }
    disp.innerHTML += '9';
});
but10.addEventListener("click", () => {
    if (operator === '') {
        a += '0';
    } else {
        b += '0';
    }
    disp.innerHTML += '0';
});
but12.addEventListener("click",()=>{
    operator='+';
    disp.innerHTML+='+';
})
but13.addEventListener("click",()=>{
    operator='-';
    disp.innerHTML+='-';
})
but14.addEventListener("click",()=>{
    operator='*';
    disp.innerHTML+='*';
})
but15.addEventListener("click",()=>{
    disp.innerHTML='';
    a='';
    b='';
    operator='';
    c=0;
})
but16.addEventListener("click",()=>{
    operator='/';
    disp.innerHTML+='/';
})
but11.addEventListener("click",()=>{
    if(operator==='+'){
        c=parseInt(a)+parseInt(b);
    }
    else if(operator==='-'){
        c=parseInt(a)-parseInt(b);
    }
    else if(operator==='*'){
        c=parseInt(a)*parseInt(b);
    }
    else if(operator==='/'){
        c=parseInt(a)/parseInt(b);
    }
    disp.innerHTML='';
    disp.innerHTML+=`${c}`;
    a='';
    a+=c;
    b='';
})