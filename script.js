
var clicks = 0;
function stylechange() {
  clicks += 1;
  


if(clicks==1){
    document.getElementById('pink-part').style.width='auto';
    document.getElementById('pink-part').style.height='100vh';
    document.getElementById('pink-part').style.left='1051px'
    document.getElementById('pink-part').style.top='0';
    document.getElementById('btn').style.left='20px';
    document.getElementById('btn').style.top='222px';
    document.getElementById('image').style.width='204px';
    document.getElementById('image').style.height='204px';
    document.getElementById('image-container').style.width='204px';
    document.getElementById('image-container').style.height='204px';
    document.getElementById('image-container').style.top='18px';
    document.getElementById('image-container').style.left='948px';

}else if(clicks==2){

    document.getElementById('image-container').style.width='100%';
    document.getElementById('image-container').style.top='0px';
    document.getElementById('image-container').style.left='0px';
    document.getElementById('image-container').style.height='100vh';
    document.getElementById('image').style.width='100%';
    document.getElementById('image').style.height='100vh';
    document.getElementById('image').style.borderRadius='0px';
    document.getElementById('image').style.backgroundImage="url('image/Rectangle\ 5.png')";

}

};

