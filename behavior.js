var screenWidth = $(window).width();
var screenSize;
var number = 0;
var done;
var open;
$(document).ready( function(){
	//get the screen width and height. Also instantiate the screenSize variable
	screenWidth = $(window).width();
	done = false;
	open = false;
	$( "#width" ).text( screenWidth );


	//set the width, height and size text variables
	$(window).resize( function(){
		screenWidth = $(window).width();
		sceenSize = getScreenSize( screenWidth );

		$( "#width" ).text( screenWidth );
		$( "#size" ).text( getScreenSize( screenWidth ) );
		doActions( getScreenSize( screenWidth ) );
	});
});

var getScreenSize = function( screenWidth ){
		if( screenWidth >= 960 ){
			screenSize = "large";
		}
		if( screenWidth <= 460 ){
			screenSize = "small"
		}
		if( screenWidth < 960 && screenWidth > 460 ){
			screenSize = "medium";
		}
		return screenSize;
	};

var doActions = function( screenSize ){
	switch (screenSize){
		case 'small':
			$( 'body' ).css( "background-color", "green" );
			$( '#display' ).unbind();
			done = false;
			break;
		case 'medium':
			$( 'body' ).css( "background-color", "yellow" );
			$( '#display' ).unbind();
			done = false;
			break;
		case 'large':
			$( 'body' ).css( "background-color", "white" );
			$( '#display' ).click( function(){
				if( false === done ){
					number += 1;
					console.log( number );
					$( '#div1' ).animate({width: 'toggle'}, 1);
					done = true;
				}
			});
			
	}
};	