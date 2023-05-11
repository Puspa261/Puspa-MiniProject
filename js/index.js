
function validateForm(){
    var name = document.forms["contact-us"]["name"].value;
    var email = document.forms["contact-us"]["email"].value;
    var option = document.forms["contact-us"]["number"].value;
    var option = document.forms["contact-us"]["messages"].value;

    if (name == "" || email == "" || number == "" || messages == ""){
        alert("Data Tidak Boleh Kosong!");
        return false;
    }
}