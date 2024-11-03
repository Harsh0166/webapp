if(sessionStorage.getItem("user") == null){
    location.replace("../../index.html")
}
else{
    var all_contact = document.getElementById("all_contact");
var add_icon = document.getElementById("add_icon");
var contact_box_bg = document.getElementById("contact_box_bg");
var add = document.getElementById("add");
var back_icon = document.getElementById("back_icon");
var closes = document.getElementById("close");
var current_user = sessionStorage.getItem("user");

//open contact box
add_icon.onclick = function(){
    contact_box_bg.style.display = "block";
}

//back btn
back_icon.onclick = function(){
    location.replace("profile.html");
}

//close btn
closes.onclick = function(){
    contact_box_bg.style.display = "none";
}


//add contact
add.onclick = function(){
   
    var contact_name = document.getElementById("contact_name").value;
    var mob = document.getElementById("mob").value;

    var contact_object_data = {contact_name:contact_name,mob:mob};

    if(contact_name != "" && mob != "" ){
        var contact_text_data = JSON.stringify(contact_object_data);
        localStorage.setItem(current_user+"_contact"+contact_name,contact_text_data);
        add.style.backgroundColor="#29A61A";
        add.innerHTML="Added";
        setTimeout(
            function(){
                location.reload();
            },
            1000
        )
    }
    else{
        alert("Please enter contact name and phone");
    }

}

    function all_contacts(){
        var i;
        for(i=0;i<localStorage.length;i++){
            var contact_keys = localStorage.key(i);
            if(contact_keys.match(sessionStorage.getItem("user")+"_contact")){
                var user_contact_text = localStorage.getItem(contact_keys);
                var user_contact_obj = JSON.parse(user_contact_text);


                //design html through js
                var contact_details =document.createElement("DIV");
                contact_details.setAttribute("id","contact_details");

                var contact_name_display = document.createElement("P");
                contact_name_display.setAttribute("id","contact_name_dis");
                contact_name_display.setAttribute("class","contact_name_disp");

                var profile_icon = document.createElement("I");
                profile_icon.setAttribute("class","fa-solid fa-user");

                var contact_tools = document.createElement("DIV");
                contact_tools.setAttribute("id","tools");
                
                var contact_edit = document.createElement("I");
                contact_edit.setAttribute("class","fa-solid fa-pen tool");

                var contact_del = document.createElement("I");
                contact_del.setAttribute("class","fa-solid fa-trash tool");
                
                var line = document.createElement("HR");

                var contact_phone_display = document.createElement("P");
                contact_phone_display.setAttribute("id","contact_mob_dis");

                var contact_icon = document.createElement("I");
                contact_icon.setAttribute("class","fa-solid fa-mobile-screen");

                var all_contact = document.getElementById("all_contact");



                all_contact.appendChild(contact_details);

                contact_details.appendChild(contact_name_display);
                contact_details.appendChild(contact_tools);
                contact_details.appendChild(line);
                contact_details.appendChild(contact_phone_display);

                contact_name_display.appendChild(profile_icon);
                contact_name_display.innerHTML += " "+user_contact_obj.contact_name;

                contact_tools.appendChild(contact_edit);
                contact_tools.appendChild(contact_del);

                contact_phone_display.appendChild(contact_icon);
                contact_phone_display.innerHTML += " "+ user_contact_obj.mob;



            }
        }
    }
    all_contacts();

    var search = document.getElementById("search_contact");

    search.oninput = function(){
        var all_contact_name = document.getElementsByClassName("contact_name_disp");

        for(i=0;i<all_contact_name.length;i++){

            if(all_contact_name[i].innerHTML.toUpperCase().match(search.value.toUpperCase())){
                all_contact_name[i].parentElement.style.display="block";
            }
            else{
                all_contact_name[i].parentElement.style.display="none";
            }
        }
    }
}