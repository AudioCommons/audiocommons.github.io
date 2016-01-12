$(document).ready(function(){
    /**
     * This part handles the highlighting functionality.
     * We use the scroll functionality again, some array creation and 
     * manipulation, class adding and class removing, and conditional testing
     */
    var aChildren = $("nav li").children(); // find the a children of the list items
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        if (ahref.substr(0, 2) == '/#'){
        	aArray.push(ahref.substr(1));
        }
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            var nextDivPos = docHeight;
            if (i < aArray.length - 1){
            	nextDivPos = $(aArray[i+1]).offset().top;
            }
            var divHeight =  nextDivPos - divPos;
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='/" + theID + "']").parent().addClass("active");
            } else {
                $("a[href='/" + theID + "']").parent().removeClass("active");
            }
        }
    });

    // Show arrow to scroll up when needed
    $('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
});