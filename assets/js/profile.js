window.onload=function(){
    if(sessionStorage.getItem("user")== null){
        location.replace("../../index.html");
    }
    else{

        // logout coding
        var logout = document.getElementById("logout");
        logout.onclick = function(){
            sessionStorage.clear();
            logout.innerHTML = "Please wait..."
            setTimeout(function(){location.replace("../../index.html")}, 2000);
        }

        // username coding
        var user_email = sessionStorage.getItem("user");
        var profile_name = document.getElementById("profile_name")
        var text_data = localStorage.getItem(user_email);
        var object_data = JSON.parse(text_data);
        profile_name.innerHTML = atob(object_data.name);

        var profile_names = document.getElementById("profile_names");
        profile_names.innerHTML = atob(object_data.name);

        // profile_picture
        var profile_picture = document.getElementById("profile_picture");
        var img = localStorage.getItem( user_email+"image");
        profile_picture.style.backgroundImage = "url("+img+")";
        profile_picture.style.backgroundSize = "cover";
        profile_picture.style.backgroundPosition = "center";


        if(localStorage.getItem( user_email+"image") != null){
            var container = document.getElementById("container");
            container.style.display="none";
        }

        // image upload coding  
        var upload = document.getElementById("upload");
        var btn = document.getElementById("next_btn")
        upload.onchange= function(){
            var reader = new FileReader();
        reader.readAsDataURL(upload.files[0]);
        reader.onload=function(){
            var icon = document.getElementById("icon");
            var file_name = reader.result;
            var profile_pic = document.getElementById("profile_pic");
            profile_pic.style.backgroundImage = "url("+file_name+")";
            profile_pic.style.backgroundSize = "cover";
            profile_pic.style.backgroundPosition = "center";
            icon.style.display="none";
            btn.style.display = "block";
        }
        btn.onclick = function(){
            var file_name = reader.result;
                localStorage.setItem( user_email+"image",file_name);
                var container = document.getElementById("container");
                container.style.display="none";
                window.location = location.href;
        }
        }
        
        
    }
}

