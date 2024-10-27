var all_contact = document.getElementById("all_contact");
var add_icon = document.getElementById("add_icon");
var contact_box_bg = document.getElementById("contact_box_bg");
var add = document.getElementById("add");
var closes = document.getElementById("close");



add_icon.onclick = function(){
    contact_box_bg.style.display = "block";
}

closes.onclick = function(){
    contact_box_bg.style.display = "none";
}

add.onclick = function(){
   
    var contact_name = document.getElementById("contact_name").value;
    var mob = document.getElementById("mob").value;
    var contact_object_data = {contact_name:contact_name,mob:mob};
    var contact_text_data = JSON.stringify(contact_object_data);

    if(contact_name != "" && mob != "" ){
        localStorage.setItem(mob,contact_text_data);
        add.style.backgroundColor="#29A61A";
        add.innerHTML="Added";
    }
    setTimeout(
        function(){
            add.style.backgroundColor="#735DA5";
            add.innerHTML="Add";
            // contact_name.reset();
        },
        3000
    )
    all_contact.style.width ="100%";
    all_contact.style.height ="100px";
    all_contact.style.backgroundColor = "white";
    all_contact.innerHTML = localStorage.getItem(contact_name);
}