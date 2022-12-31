var x=document.getElementById("id_dk");
var form_modal=document.getElementById("login");
var form_login=document.getElementById("form_login");
var form_register=document.getElementById("form_register");

function dangky()
{
    form_modal.style.display="flex";
    form_register.style.display="block";
    form_login.style.display="none";
}

function click_over_lay(){
    form_modal.style.display="none"; 
}

function dangnhap_btn(){
    form_register.style.display="none";
    dangnhap();
}

function dangnhap(){
    form_modal.style.display="flex";
    form_login.style.display="block";
    form_register.style.display="none";
}

function dangky_btn(){
    form_login.style.display="none";
    dangky();
}