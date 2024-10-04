
var signup_form = document.getElementById("signup_form");
var sub_btn = document.getElementById("sub_btn");
var warnning = document.getElementById("warn");

signup_form.onsubmit=function(){
    var names = document.getElementById("name").value;
    var pass = document.getElementById("passs").value;
    var phone = document.getElementById("phone").value; 
    var email = document.getElementById("email").value;
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
    // else{
    //     sub_btn.disabled = true;
        
    // }
}


var email_input = document.getElementById("email");
email_input.onchange = function(){
    var email = document.getElementById("email").value;
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


