/**********************************************************
 * IMAGE SLIDER
 * 
 * The slider will have two arrows (icons) that allow you
 * to scroll through the images of the slider.
 * In addition, to scroll through the images also allow
 * the use of the left and right arrows on the keyboard.
 **********************************************************/

$(document).ready(function(){

    // references
    var chevronRight = $('.angle-sx > a');
    var chevronLeft = $('.angle-dx > a');

    chevronRight.click(nextImg);
    chevronLeft.click(prevImg);
    
    $(document).keydown( function(push) {
        if ( push.keyCode == 39 ) {
            nextImg();
        } else if ( push.keyCode == 37 ) {
            prevImg();
        }
    });



});


// function for next image

function nextImg() {
    var showImg = $('.img-container.show');
    var firstImg = $('img-container.first');
    
    showImg.toggleClass('show');
    if ( showImg.hasClass('last') ) {
        firstImg.addClass('show');
    } else {
        showImg.next().addClass('show');
    }
}

// function previous image

function prevImg() {
    var showImg = $('.img-container.show');
    var lastImg = $('.img-container.last');

    showImg.toggleClass('show');
    if ( showImg.hasClass('first') ) {
        lastImg.addClass('show');
    } else {
        showImg.prev().addClass('show');
    }
}
