function send() {
    var newtitleinput = JSON.parse(localStorage.getItem("newtitleinput"));
    newtitleinput.push(document.getElementById("newtitleinput").value);
    localStorage.setItem("newtitleinput", JSON.stringify(newtitleinput));
    var newdescriptioninput = JSON.parse(localStorage.getItem("newdescriptioninput"));
    newdescriptioninput.push(document.getElementById("newdescriptioninput").value);
    localStorage.setItem("newdescriptioninput", JSON.stringify(newdescriptioninput));
    window.location = '/cas-fee/index.html';
};

/* ------- zurück-button (cancel) ----- */
document.getElementById("cancel").onclick = function () {
    window.history.back();
}