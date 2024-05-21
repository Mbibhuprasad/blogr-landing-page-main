let mobile_dropbar=document.getElementsByClassName("mobile-dropbar");
let mobile_showbar=document.getElementsByClassName("mobile-showbar");
let desktop_dropbar=document.getElementsByClassName("desktop-dropbar");
let desktop_showbar=document.getElementsByClassName("desktop-showbar");
let mobileOption=document.getElementById("mobile_Option");
let sidebarImg=document.getElementById("side-bar-img");
let crossImg=document.getElementById("cross-img");


for(let i=0;i<desktop_dropbar.length;i++){
    desktop_dropbar[i].addEventListener('click',(e)=>{
        if(desktop_showbar[i].style.display == "block"){
            desktop_showbar[i].style.display="none";
        }
        else {
            desktop_showbar[i].style.display="block";
        }
        
    })
    mobile_dropbar[i].addEventListener('click',(e)=>{
        if(mobile_showbar[i].style.display == "block"){
            mobile_showbar[i].style.display="none";
        }
        else {
            mobile_showbar[i].style.display="block";
        }
        
    })
}

function mobileDisplay(){
    mobileOption.style.display="block";
    crossImg.style.display="block";
    sidebarImg.style.display="none";
    
}
function mobiledisplayNone(){
    mobileOption.style.display="none";
    crossImg.style.display="none";
    sidebarImg.style.display="block";
}
