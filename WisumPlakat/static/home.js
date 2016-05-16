/* Javscript file*/

var poster = {

            '1' : {'width': '400px', 'height': '600px'},
            '2' : {'width': '600px', 'height': '400px'},
            '3' : {'width': '1200px', 'height': '500px'},
            '4' : {'width': '1500px', 'height': '400px'}
        }

function switchPoster(ID) {
    displayDebug("Hello number: " + ID);

    $('.currentposter').css( 
                        {
                        'width' : poster[ID]['width'],
                        'height' : poster[ID]['height']
                        }
    );
};


function displayDebug(string) {
    
    $("#debuginfo").empty();
    $("#debuginfo").append(string);
    console.log(string);
};


var selectedObject = false;
var $newSelected = '';

function selectMe(obj) {

    $newSelected = $(obj);

    /* When clicked object is already selected */
    if ($newSelected.hasClass('selected')) {
        $newSelected.removeClass('selected');
        selectedObject = false;

    /* When nothing is selected */
    } else if (selectedObject == false){
        $newSelected.addClass('selected');
        selectedObject = $newSelected;

    /* When someone else is selected*/
    } else {
        selectedObject.removeClass('selected');
        $newSelected.addClass('selected');
        selectedObject = $newSelected;

    }; 
};

function insertText(){

    if (selectedObject == false){
        displayDebug("Select an object.");


    } else if (selectedObject.hasClass("textobject")){
        displayDebug("Text INSERTED!");
        selectedObject.removeClass('selected');
        selectedObject = false;

    } else {
        displayDebug("Select a text object");
    };
};

function insertImage(){

    if (selectedObject == false){
        displayDebug("Select an object.")


    } else if (selectedObject.hasClass("imageobject")){
        displayDebug("Image INSERTED!");
        selectedObject.removeClass('selected');
        selectedObject = false;
    } else {
        displayDebug("Select an image object");
    };
};

function insertIcon(){

    if (selectedObject == false){
        displayDebug("Select an object.");

    } else if (selectedObject.hasClass("iconobject")){
        displayDebug("Icon INSERTED!");
        selectedObject.removeClass('selected');
        selectedObject = false;

    } else {
        displayDebug("Select an icon object");
    };
};

$(document).ready(function(){

    $('.textholder').on('click', insertText);
    $('.imageholder').on('click', insertImage);
    $('.iconholder').on('click', insertIcon);
});