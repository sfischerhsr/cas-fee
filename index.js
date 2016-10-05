var newtitleinput = localStorage.getItem("newtitleinput");
if (!newtitleinput) {
    localStorage.setItem("newtitleinput", JSON.stringify([]));
    newtitleinput = localStorage.getItem("newtitleinput");
}
newtitleinput = JSON.parse(newtitleinput);

document.getElementById("newtitleinput").innerHTML = newtitleinput.length == 0 ? "none" : newtitleinput.join("</br>"); //very very simple solution!

var newdescriptioninput = localStorage.getItem("newdescriptioninput");
if (!newdescriptioninput) {
    localStorage.setItem("newdescriptioninput", JSON.stringify([]));
    newdescriptioninput = localStorage.getItem("newdescriptioninput");
}
newdescriptioninput = JSON.parse(newdescriptioninput);

document.getElementById("newdescriptioninput").innerHTML = newdescriptioninput.length == 0 ? "none" : newdescriptioninput.join("</br>");

var created = localStorage.getItem("created");
if (!created) {
    localStorage.setItem("created", JSON.stringify([]));
    created = localStorage.getItem("created");
}
created = JSON.parse(created);

document.getElementById("created").innerHTML = created.length == 0 ? "none" : created.join("</br>");

/*var datepicker_recurring_start = localStorage.getItem("datepicker_recurring_start");
 if (!datepicker_recurring_start) {
 localStorage.setItem("datepicker_recurring_start", JSON.stringify([]));
 datepicker_recurring_start = localStorage.getItem("datepicker_recurring_start");
 }
 datepicker_recurring_start = JSON.parse(datepicker_recurring_start);

 document.getElementsByClassName("datepicker_recurring_start").innerHTML = datepicker_recurring_start.length == 0 ? "none" : datepicker_recurring_start.join("</br>"); geht nicht */

