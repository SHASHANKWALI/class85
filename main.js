 var array_img=['mars1.png','mars2.png','mars3.png'];
 
 canvas=document.getElementById('Mycanvas');
 ctx=canvas.getContext("2d");
 rvr_height=100;
 rvr_width=150;
 rvr_x=10;
 rvr_y=10;

 var rndm_nmbr=Math.floor(Math.random()*4);
 console.log(rndm_nmbr);
if (rndm_nmbr>2){
    rndm_nmbr=0;
}

 bg_image=array_img[rndm_nmbr];
 rover_image="rover.png";
 

 function add(){
     bg_img=new Image();
    bg_img.onload=upld_bg_img;
    bg_img.src=bg_image;
    rover_img=new Image();
    rover_img.onload=upld_rvr_img;
    rover_img.src=rover_image;
   
}


function upld_bg_img(){
    ctx.drawImage(bg_img, 0, 0, canvas.width, canvas.height);
    
} 

function upld_rvr_img(){
    ctx.drawImage(rover_img,rvr_x,rvr_y,rvr_height,rvr_width);
    
} 

window.addEventListener("keydown",ky_dwn);

function ky_dwn(e){
keypress=e.keyCode;
console.log(keypress);
if (keypress=='38'){
    up();
    console.log("up");
}
if (keypress=='40'){
    down();
    console.log("down");
}
if (keypress=='37'){
    left();
    console.log("left");
}
if (keypress=='39'){
    right();
    console.log("right");
}
}


function up(){
    if (rvr_y>=0){
        rvr_y=rvr_y-10;
        upld_bg_img();
        upld_rvr_img();
    }
}

function down(){
    if (rvr_y<=300){
        rvr_y=rvr_y+10;
        upld_bg_img();
        upld_rvr_img();
    }
}

function left(){
    if (rvr_x>=0){
        rvr_x=rvr_x-10;
        upld_bg_img();
        upld_rvr_img();
    }
}

function right(){
    if (rvr_x<=700){
        rvr_x=rvr_x+10;
        upld_bg_img();
        upld_rvr_img();
    }
}