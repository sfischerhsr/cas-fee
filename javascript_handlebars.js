$(function () {
    Handlebars.registerHelper('times', function (n, block) {
        var accum = '';
        for (var i = 0; i < n; ++i)
            accum += block.fn(i);
        return accum;
    });

    var notes = [
        { "id": 1,
            "finished": true,
            "title": "CAS FEE Selbststudium",
            "description": "HTML für die note App erstellen",
            "importance": 2,
            "createddate": "2016-09-27",
            "finishdate": "2016-10-03"
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
            "finishdate": "2016-10-02"
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

    function comparefinishdate(d1, d2) {
        if (!Date.parse(d1.finishdate)) {
            return true;
        }
        if (!Date.parse(d2.finishdate)) {
            return false;
        }
        return new Date(d2.finishdate) < new Date(d1.finishdate);
    }

    function comparecreateddate(d1, d2) {
        return new Date(d2.createddate) < new Date(d1.createddate);
    }

    function compareimportance(i1, i2) {
        return i1.importance < i2.importance;
    }


    $(function () {
        $(".sort").on("click", "input", sortNotes);
        $(".filter").on("click", "input", filterNotes);
    });

    function filterNotes() {
        if ($('#filter-by-finished:checked').length > 0) {
            currentNotes = $.grep(notes, function (note) {
                return note.finished === true;
            });
        }
        else {
            currentNotes = notes;
        }
    else
        if ($('#filter-by-unfinished:checked').length > 0) {
            currentNotes = $.grep(notes, function (note) {
                return note.finished === false;
            });
        }
        $(".content-placeholder").html(createNotesHtml(currentNotes));
    }

    function sortNotes() {
        if ($('#sort-by-finish-date:checked').length > 0) {
            currentNotes = currentNotes.sort(comparefinishdate);
        } else if ($('#sort-by-created-date:checked').length > 0) {
            currentNotes = currentNotes.sort(comparecreateddate);
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