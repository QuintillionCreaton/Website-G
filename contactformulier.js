/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function validateForm() {
    var x = document.forms["contactformulier"]["Voornaam"].value;
    if (x===null || x==="") {
        alert("Voer alstublieft uw voornaam in");
        return false;
    }
    var i = document.forms["contactformulier"]["Achternaam"].value;
    if (i===null || i==="") {
        alert("Voer alstublieft uw achternaam in");
        return false;
    }
//    var j = document.forms["contactformulier"]["Emailadres"].value;
//    if (j===null || j==="") {
//        alert("is not a valid email");
//        return false;
//    }
//    var k = document.forms["contactformulier"]["bericht"].value;
//    if (k===null || k==="") {
//        alert("Voer alstublieft het tekstveld in");
//        return false;
//    }
 
    var x = document.forms["contactformulier"]["Emailadres"].value;
    var atpos = x.indexOf("@");
    var dotpos = x.lastIndexOf(".");
    if (atpos< 1 || dotpos<atpos+2 || dotpos+2>=x.length) {
    alert("Dit is geen geldig emailadres");
    return false;
    }
    
}

