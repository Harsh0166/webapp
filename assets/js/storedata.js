
// signup process 

var signup_form = document.getElementById("signup_form");
var sub_btn = document.getElementById("sub_btn");
var warnning = document.getElementById("warn");

signup_form.onsubmit=function(){
    var names = btoa(document.getElementById("name").value);
    var pass = btoa(document.getElementById("passs").value);
    var phone = btoa(document.getElementById("phone").value); 
    var email = btoa(document.getElementById("email").value);
    var user_object_data = {name:names,email:email,password:pass,phone:phone};
    var user_text_data = JSON.stringify(user_object_data);

    if(names != "" && email != "" && pass !="" && phone != ""){
        localStorage.setItem(email,user_text_data);
        sub_btn.style.backgroundColor="#29A61A";
        sub_btn.style.color="white";
        sub_btn.innerHTML="<i class='fa-solid fa-circle-check'></i> Submitted";
    
    
        setTimeout(
            function(){
                sub_btn.style.backgroundColor="#F8F8F8";
                sub_btn.style.color="black";
                sub_btn.innerHTML="Submit";
                signup_form.reset();
            },
            3000
        )
        return false;
    }

}

// email validation 


var email_input = document.getElementById("email");
email_input.onchange = function(){
    var email = btoa(document.getElementById("email").value);
    if(localStorage.getItem(email)!= null){
        warnning.style.display="block";
        email_input.style.borderBottomColor="red";
        sub_btn.disabled= true;           
    }
    else{
        warnning.style.display="none";
        email_input.style.borderBottomColor="black";
        sub_btn.disabled=false;
    }
    
}



// login process 

var login_form = document.getElementById("login_form");
var log_warn = document.getElementById("log_warn");
var log_warns = document.getElementById("log_warns");

login_form.onsubmit= function(){
var log_email = btoa(document.getElementById("log_email").value);
var log_pass = btoa(document.getElementById("log_pass").value);

    if(localStorage.getItem(log_email) == null ){
        log_warn.innerHTML="<i class='fa-solid fa-triangle-exclamation'></i> email not found";
    }
    else{
        var text_data = localStorage.getItem(log_email);
        var object_data = JSON.parse(text_data);
        var correct_email = object_data.email;
        var correct_pass = object_data.password;

        if(log_email == correct_email){
            if(log_pass == correct_pass){
                sessionStorage.setItem("user",log_email);
                location.replace("assets/html/profile.html");
            }
            else{
                log_warns.innerHTML = "<i class='fa-solid fa-triangle-exclamation'></i> wrong password" ;
            }
        }
    }
    return false;
}