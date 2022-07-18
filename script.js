var mysong1 =new Audio('song/raj.mp3')
//mysong.play();
let playsong = () =>{ 
    mysong1.play();
    mysong2.pause();
    mysong3.pause();
    mysong4.pause(); 
    mysong5.pause();
    mysong6.pause();   
    mysong7.pause();
}
const pausesong=()=>{
    mysong1.pause();
}
var mysong2 =new Audio('song/dil.mp3')
let playsong2 = () =>{ 
    mysong2.play();
    mysong1.pause();
    mysong3.pause();
    mysong4.pause();
    mysong5.pause();
    mysong6.pause();   
    mysong7.pause();
}
const pausesong2=()=>{
    mysong2.pause();
}
var mysong3 =new Audio('song/shambhu.mp3')
let playsong3 = () =>{ 
    mysong3.play();
    mysong2.pause();
    mysong1.pause();
    mysong4.pause();
    mysong5.pause();
    mysong6.pause();   
    mysong7.pause();
}
const pausesong3=()=>{
    mysong3.pause();
}
var mysong4 =new Audio('song/jan.mp3')
let playsong4 = () =>{ 
    mysong4.play();
    mysong2.pause();
    mysong3.pause();
    mysong1.pause();
    mysong5.pause();
    mysong6.pause();   
    mysong7.pause();
}
const pausesong4=()=>{
    mysong4.pause();
}
var mysong5=new Audio('song/natu.mp3')
let playsong5 = () =>{
    mysong5.play();
    mysong2.pause();
    mysong3.pause();
    mysong1.pause();
    mysong4.pause();
    mysong6.pause();   
    mysong7.pause();
}
const pausesong5=()=>{
    mysong5.pause();
}
var mysong6=new Audio('song/sami.mp3')
let playsong6 = () =>{
    mysong6.play();
    mysong2.pause();
    mysong3.pause();
    mysong5.pause();
    mysong4.pause();  
    mysong7.pause();
    mysong1.pause();
}
const pausesong6=()=>{
    mysong6.pause();
}
var mysong7=new Audio('song/little.mp3')
var mysong8=new Audio('song/little.mp3')
let playsong7 = () =>{
    mysong7.play();
    mysong2.pause();
    mysong3.pause();
    mysong1.pause();
    mysong4.pause();
    mysong6.pause();   
    mysong5.pause();
}
const pausesong7=()=>{
    mysong7.pause();

}
var mysong8=new Audio('song/little.mp3')
let playsong8 = () =>{
    
}



document.getElementById("themex").onclick= abc;

function abc(){
    document.getElementById("themex").style.background= "pink";
}


