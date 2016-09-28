var context = {
    notes: [
        { "id": 1,
            "title": "CAS FEE Selbststudium",
            "description": "HTML für die note App erstellen",
            "importance": 2,
            "createddate": "2016-09-08",
            "finishdate": "2016-09-23"
        }, {
            "id": 2,
            "title": "Einkaufen",
            "description": "Butter, Eier, ...",
            "importance": 1,
            "createddate": "2016-09-09",
            "finishdate": "2016-10-01"
        }, {
            "id": 3,
            "title": "Mami anrufen",
            "description": "888 888 88 88",
            "importance": 4,
            "createddate": "2016-09-10",
            "finishdate": "2016-10-01"
        }
    ]
};
$(function () {
    // Grab the template script
    var theTemplateScript = $("#notes-template").html();

    // Compile the template
    var theTemplate = Handlebars.compile(theTemplateScript);

    // Define our data object (sh. oben var context notes)


    // Pass our data to the template
    var theCompiledHtml = theTemplate(context);

    // Add the compiled html to the page
    $('.content-placeholder').html(theCompiledHtml);
});

//document.getElementById("notesimportance").innerHTML = context.notes;

/*function sortimportance() {
    context.notes.sort(function(a, b){return a.importance - b.importance});
    $('#notesimportance').innerHTML = context.notes;
}*/

function sortimportance() {
    context.notes.importance.sort(function (a, b) {
        return a.importance - b.importance
    });
}