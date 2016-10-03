function updateTime() {
    var date = new Date();
    var stunden = date.getHours();
    var minuten = date.getMinutes();
    var tag = date.getDate();
    var monatDesJahres = date.getMonth();
    var jahr = date.getFullYear();
    var tagInWoche = date.getDay();
    var wochentag = new Array("Sonntag", "Montag", "Dienstag", "Mittwoch", "Donnerstag", "Freitag", "Samstag");
    var monat = new Array("Januar", "Februar", "M&auml;rz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");

    var datum = tag + ". " + monat[monatDesJahres] + " " + jahr;

    document.getElementById("created").innerHTML = datum;
    setTimeout(updateTime, 60000);
}
window.addEventListener("load", updateTime);

$(function () {
    Handlebars.registerHelper('times', function (n, block) {
        var accum = '';
        for (var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    });

    var notes = [
        {
            "id": 1,
            "finished": true,
            "title": "CAS FEE Selbststudium",
            "description": "HTML für die note App erstellen",
            "importance": 2,
            "createddate": "2016-09-27",
            "finishdate": "2016-11-03"
        }, {
            "id": 2,
            "finished": true,
            "title": "Einkaufen",
            "description": "Butter, Eier, ...",
            "importance": 1,
            "createddate": "2016-09-28",
            "finishdate": "2016-10-01"
        }, {
            "id": 3,
            "finished": false,
            "title": "Mami anrufen",
            "description": "888 888 88 88",
            "importance": 4,
            "createddate": "2016-09-29",
            "finishdate": "2016-11-02"
        }
    ];
    /*$(function () {
     // Grab the template script
     var theTemplateScript = $("#notes-template").html();

     // Compile the template
     var theTemplate = Handlebars.compile(theTemplateScript);

     // Define our data object (sh. oben var context notes)


     // Pass our data to the template
     var theCompiledHtml = theTemplate(context);

     // Add the compiled html to the page
     $('.content-placeholder').html(theCompiledHtml);
     });*/

    var currentNotes = notes;


    var notesTemplate = $('#notesTemplate').html();
    var createNotesHtml = Handlebars.compile(notesTemplate);

    renderNotes();

//add sort and filter

    function comparecreateddate(d1, d2) {
        if (!Date.parse(d1.createddate)) {
            return true;
        }
        if (!Date.parse(d2.createddate)) {
            return false;
        }
        return new Date(d2.createddate) < new Date(d1.createddate);
    }

    function comparefinishdate(d1, d2) {
        return new Date(d2.finishdate) < new Date(d1.finishdate);
    }

    function compareimportance(i1, i2) {
        return i1.importance < i2.importance;
    }


    $(function () {
        $(".sort").on("click", "input", sortNotes);
        $(".filter").on("click", "input", filterNotes);
        /*$(".filter2").on("click", "input", filterNotes2);*/
    });

    /*function filterNotes() {
     if ($('#filter-by-finished:checked').length > 0) {
     currentNotes = $.grep(notes, function (note) {
     return note.finished === true;
     });
     }
     else if ($('#filter-by-finished').length > 0) {
     currentNotes = $.grep(notes, function (note) {
     return note.finished === false;
     });
     }
     $(".content-placeholder").html(createNotesHtml(currentNotes));
     }
     function filterNotes2() {
     if ($('#filter-by-unfinished:checked').length > 0) {
     currentNotes = $.grep(notes, function (note) {
     return note.finished === false;
     });
     }
     else if ($('#filter-by-unfinished').length > 0) {
     currentNotes = $.grep(notes, function (note) {
     return note.finished === true;
     });
     }
     $(".content-placeholder").html(createNotesHtml(currentNotes));
     }*/
    function filterNotes() {
        if ($('#filter-by-finished:checked').length > 0) {
            currentNotes = $.grep(notes, function (note) {
                return note.finished === true;
            });
        } else {
            currentNotes = notes;
        }

        $(".content-placeholder").html(createNotesHtml(currentNotes));
    }

    function sortNotes() {
        if ($('#sort-by-created-date:checked').length > 0) {
            currentNotes = currentNotes.sort(comparecreateddate);
        } else if ($('#sort-by-finish-date:checked').length > 0) {
            currentNotes = currentNotes.sort(comparefinishdate);
        } else if ($('#sort-by-importance:checked').length > 0) {
            currentNotes = currentNotes.sort(compareimportance);
        }
        $(".content-placeholder").html(createNotesHtml(currentNotes));
    }


    function renderNotes() {
        filterNotes();
        sortNotes();
    }
});

/* ------ Style Switcher ----- */


function addEvent(obj, type, fn) {
    if (obj.attachEvent) {
        obj['e' + type + fn] = fn;
        obj[type + fn] = function () {
            obj['e' + type + fn](window.event);
        }
        obj.attachEvent('on' + type, obj[type + fn]);
    } else obj.addEventListener(type, fn, false);
}

function trigger(action, el) {
    if (document.createEvent) {
        var event = document.createEvent('HTMLEvents');
        event.initEvent(action, true, false);
        el.dispatchEvent(event);
    } else {
        el.fireEvent('on' + action);
    }
}

function switchStyles() {
    var selectedOption = this.options[this.selectedIndex],
        className = selectedOption.value;

    document.body.className = className;
    localStorage.setItem("bodyClassName", className);
}

var styleSwitcher = document.getElementById("styleSwitcher");
addEvent(styleSwitcher, "change", switchStyles);

var storedClassName = localStorage.getItem("bodyClassName");
if (storedClassName) {
    for (var i = 0; i < styleSwitcher.options.length; i++) {
        if (styleSwitcher.options[i].value === storedClassName) {
            styleSwitcher.selectedIndex = i;
            trigger("change", styleSwitcher);
        }
    }
}


/* -------- datepicker ----- */
$('#cmd').click(function () {
    $('#newfinish').append('<br>a datepicker <input class="datepicker_recurring_start"/>');
});
$('body').on('focus', ".datepicker_recurring_start", function () {
    $(this).datepick();
});


