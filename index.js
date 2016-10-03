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

