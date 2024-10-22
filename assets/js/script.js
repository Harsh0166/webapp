var show = document.getElementById("show");
var hide = document.getElementById("hide");
var pass = document.getElementById("pass");
var sign_click = document.getElementById("sign_click");
var login_click = document.getElementById("login_click");
var login_pg = document.getElementById("login_pg");
var signup_pg = document.getElementById("signup_pg");
var log_sign_box = document.getElementById("log_sign_box");


show.onclick=function(){
    pass.type="text";
    show.style.display= "none";
    hide.style.display ="block";
}
hide.onclick= function(){
    pass.type = "password"
    show.style.display= "block";
    hide.style.display ="none";
}
sign_click.onclick=function(){
    login_pg.style.display ="none";
    signup_pg.style.display ="flex";
    signup_pg.style.flexDirection="column"
    signup_pg.style.alignItems ="center";
    log_sign_box.style.height ="600px";
    
    }

login_click.onclick=function(){
    login_pg.style.display ="flex";
    signup_pg.style.display ="none";
    log_sign_box.style.height ="500px";

}
