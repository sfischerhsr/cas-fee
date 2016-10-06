document.getElementById("send").onclick = function () { //statt onclick "submit",
    //dann funktioniert formular aber localStorage nicht mehr
    var newtitleinput = JSON.parse(localStorage.getItem("newtitleinput"));
    newtitleinput.push(document.getElementById("newtitleinput").value);
    localStorage.setItem("newtitleinput", JSON.stringify(newtitleinput));
    var newdescriptioninput = JSON.parse(localStorage.getItem("newdescriptioninput"));
    newdescriptioninput.push(document.getElementById("newdescriptioninput").value);
    localStorage.setItem("newdescriptioninput", JSON.stringify(newdescriptioninput));
    var rateyoid = JSON.parse(localStorage.getItem("rateyoid"));
    rateyoid.push(document.getElementById("rateYo").value);
    localStorage.setItem("rateyoid", JSON.stringify(rateyoid));
    var datepicker_recurring_start = JSON.parse(localStorage.getItem("datepicker_recurring_start"));
     datepicker_recurring_start.push(document.getElementsByClassName("datepicker_recurring_start").value);
    localStorage.setItem("datepicker_recurring_start", JSON.stringify(datepicker_recurring_start));
    window.location = 'index.html';
};

/* ------- zurück-button (cancel) ----- */
document.getElementById("cancel").onclick = function () {
    window.history.back();
};