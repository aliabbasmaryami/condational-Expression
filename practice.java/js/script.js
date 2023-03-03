let a = prompt("what is your age?")
a = Number.parseInt(a);
if(a<0){
    alert("this is a valid age");
}
else if(a<9){
    alert("you are kid you cant think about driving");
}
else if(a<18 && a>=9){
    alert("you are kid you can think about driving after eighteen");
}
else{
    alert("u can derived you are now above the eighteen");
}
console.log("you can", (a<18? "not derive" :"derive"))
