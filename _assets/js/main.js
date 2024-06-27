jQuery(document).ready(function ($) {

  jQuery('body.single .wp-block-gallery .wp-block-image a').each(function() {
    // Add the data-lightbox attribute with a value (e.g., 'image') to each <a> tag
    jQuery(this).attr('data-lightbox', 'gallerie');
  });

	if (location.hash) location.href = location.hash;

	if (jQuery.cookie('hidecookie') != "hidden" ) {
		$('#cookiebanner').removeClass('hidden');
	}

	if (jQuery.cookie('hidepopup') != "hidden" ) {
		$('#popup').removeClass('hidden');
	}
	
	$('#cookiebanner button').click(function(event) {
      var date = new Date();
      date.setTime(date.getTime()+(360*24*60*60*1000));
      document.cookie = "hidecookie" + "=" + "hidden" + "; expires=" + date.toGMTString();

      $('#cookiebanner').addClass('hidden');
	});
	
	jQuery(".pop_majeur").click(function(event) {
			event.preventDefault();
      var date = new Date();
      date.setTime(date.getTime()+(60*60*1000));
      document.cookie = "hidepopup" + "=" + "hidden" + "; expires=" + date.toGMTString();
	  
	  jQuery('#popup').addClass('hidden');
	  jQuery('body').removeClass('popup-open');
	});

	if(jQuery('#popup').hasClass('fullscreen') && !jQuery('#popup').hasClass('hidden')) {
		jQuery('body').addClass('popup-open');
	}

})

lightbox.option({
  'albumLabel': "Image %1 sur %2",
})
