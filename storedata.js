
var signup_form = document.getElementById("signup_form");

signup_form.onclick=function(){
    var names = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var pass = document.getElementById("passs").value;
    var phone = document.getElementById("phone").value; 
    var user_object_data = {name:names,email:email,password:pass,phone:phone};
    var user_text_data = JSON.stringify(user_object_data);

    if(names != "" && email != "" && pass !="" && phone != ""){
        localStorage.setItem(email,user_text_data);
    }
}

