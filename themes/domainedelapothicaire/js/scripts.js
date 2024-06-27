/*!
 * Lightbox v2.11.4
 * by Lokesh Dhakar
 *
 * More info:
 * http://lokeshdhakar.com/projects/lightbox2/
 *
 * Copyright Lokesh Dhakar
 * Released under the MIT license
 * https://github.com/lokesh/lightbox2/blob/master/LICENSE
 *
 * @preserve
 */
!function(a,b){"function"==typeof define&&define.amd?define(["jquery"],b):"object"==typeof exports?module.exports=b(require("jquery")):a.lightbox=b(a.jQuery)}(this,function(a){function b(b){this.album=[],this.currentImageIndex=void 0,this.init(),this.options=a.extend({},this.constructor.defaults),this.option(b)}return b.defaults={albumLabel:"Image %1 of %2",alwaysShowNavOnTouchDevices:!1,fadeDuration:600,fitImagesInViewport:!0,imageFadeDuration:600,positionFromTop:50,resizeDuration:700,showImageNumberLabel:!0,wrapAround:!1,disableScrolling:!1,sanitizeTitle:!1},b.prototype.option=function(b){a.extend(this.options,b)},b.prototype.imageCountLabel=function(a,b){return this.options.albumLabel.replace(/%1/g,a).replace(/%2/g,b)},b.prototype.init=function(){var b=this;a(document).ready(function(){b.enable(),b.build()})},b.prototype.enable=function(){var b=this;a("body").on("click","a[rel^=lightbox], area[rel^=lightbox], a[data-lightbox], area[data-lightbox]",function(c){return b.start(a(c.currentTarget)),!1})},b.prototype.build=function(){if(!(a("#lightbox").length>0)){var b=this;a('<div id="lightboxOverlay" tabindex="-1" class="lightboxOverlay"></div><div id="lightbox" tabindex="-1" class="lightbox"><div class="lb-outerContainer"><div class="lb-container"><img class="lb-image" src="data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==" alt=""/><div class="lb-nav"><a class="lb-prev" role="button" tabindex="0" aria-label="Previous image" href="" ></a><a class="lb-next" role="button" tabindex="0" aria-label="Next image" href="" ></a></div><div class="lb-loader"><a class="lb-cancel" role="button" tabindex="0"></a></div></div></div><div class="lb-dataContainer"><div class="lb-data"><div class="lb-details"><span class="lb-caption"></span><span class="lb-number"></span></div><div class="lb-closeContainer"><a class="lb-close" role="button" tabindex="0"></a></div></div></div></div>').appendTo(a("body")),this.$lightbox=a("#lightbox"),this.$overlay=a("#lightboxOverlay"),this.$outerContainer=this.$lightbox.find(".lb-outerContainer"),this.$container=this.$lightbox.find(".lb-container"),this.$image=this.$lightbox.find(".lb-image"),this.$nav=this.$lightbox.find(".lb-nav"),this.containerPadding={top:parseInt(this.$container.css("padding-top"),10),right:parseInt(this.$container.css("padding-right"),10),bottom:parseInt(this.$container.css("padding-bottom"),10),left:parseInt(this.$container.css("padding-left"),10)},this.imageBorderWidth={top:parseInt(this.$image.css("border-top-width"),10),right:parseInt(this.$image.css("border-right-width"),10),bottom:parseInt(this.$image.css("border-bottom-width"),10),left:parseInt(this.$image.css("border-left-width"),10)},this.$overlay.hide().on("click",function(){return b.end(),!1}),this.$lightbox.hide().on("click",function(c){"lightbox"===a(c.target).attr("id")&&b.end()}),this.$outerContainer.on("click",function(c){return"lightbox"===a(c.target).attr("id")&&b.end(),!1}),this.$lightbox.find(".lb-prev").on("click",function(){return 0===b.currentImageIndex?b.changeImage(b.album.length-1):b.changeImage(b.currentImageIndex-1),!1}),this.$lightbox.find(".lb-next").on("click",function(){return b.currentImageIndex===b.album.length-1?b.changeImage(0):b.changeImage(b.currentImageIndex+1),!1}),this.$nav.on("mousedown",function(a){3===a.which&&(b.$nav.css("pointer-events","none"),b.$lightbox.one("contextmenu",function(){setTimeout(function(){this.$nav.css("pointer-events","auto")}.bind(b),0)}))}),this.$lightbox.find(".lb-loader, .lb-close").on("click keyup",function(a){if("click"===a.type||"keyup"===a.type&&(13===a.which||32===a.which))return b.end(),!1})}},b.prototype.start=function(b){function c(a){d.album.push({alt:a.attr("data-alt"),link:a.attr("href"),title:a.attr("data-title")||a.attr("title")})}var d=this,e=a(window);e.on("resize",a.proxy(this.sizeOverlay,this)),this.sizeOverlay(),this.album=[];var f,g=0,h=b.attr("data-lightbox");if(h){f=a(b.prop("tagName")+'[data-lightbox="'+h+'"]');for(var i=0;i<f.length;i=++i)c(a(f[i])),f[i]===b[0]&&(g=i)}else if("lightbox"===b.attr("rel"))c(b);else{f=a(b.prop("tagName")+'[rel="'+b.attr("rel")+'"]');for(var j=0;j<f.length;j=++j)c(a(f[j])),f[j]===b[0]&&(g=j)}var k=e.scrollTop()+this.options.positionFromTop,l=e.scrollLeft();this.$lightbox.css({top:k+"px",left:l+"px"}).fadeIn(this.options.fadeDuration),this.options.disableScrolling&&a("body").addClass("lb-disable-scrolling"),this.changeImage(g)},b.prototype.changeImage=function(b){var c=this,d=this.album[b].link,e=d.split(".").slice(-1)[0],f=this.$lightbox.find(".lb-image");this.disableKeyboardNav(),this.$overlay.fadeIn(this.options.fadeDuration),a(".lb-loader").fadeIn("slow"),this.$lightbox.find(".lb-image, .lb-nav, .lb-prev, .lb-next, .lb-dataContainer, .lb-numbers, .lb-caption").hide(),this.$outerContainer.addClass("animating");var g=new Image;g.onload=function(){var h,i,j,k,l,m;f.attr({alt:c.album[b].alt,src:d}),a(g),f.width(g.width),f.height(g.height);var n=g.width/g.height;m=a(window).width(),l=a(window).height(),k=m-c.containerPadding.left-c.containerPadding.right-c.imageBorderWidth.left-c.imageBorderWidth.right-20,j=l-c.containerPadding.top-c.containerPadding.bottom-c.imageBorderWidth.top-c.imageBorderWidth.bottom-c.options.positionFromTop-70,"svg"===e?(n>=1?(i=k,h=parseInt(k/n,10)):(i=parseInt(j/n,10),h=j),f.width(i),f.height(h)):(c.options.fitImagesInViewport?(c.options.maxWidth&&c.options.maxWidth<k&&(k=c.options.maxWidth),c.options.maxHeight&&c.options.maxHeight<j&&(j=c.options.maxHeight)):(k=c.options.maxWidth||g.width||k,j=c.options.maxHeight||g.height||j),(g.width>k||g.height>j)&&(g.width/k>g.height/j?(i=k,h=parseInt(g.height/(g.width/i),10),f.width(i),f.height(h)):(h=j,i=parseInt(g.width/(g.height/h),10),f.width(i),f.height(h)))),c.sizeContainer(f.width(),f.height())},g.src=this.album[b].link,this.currentImageIndex=b},b.prototype.sizeOverlay=function(){var b=this;setTimeout(function(){b.$overlay.width(a(document).width()).height(a(document).height())},0)},b.prototype.sizeContainer=function(a,b){function c(){d.$lightbox.find(".lb-dataContainer").width(g),d.$lightbox.find(".lb-prevLink").height(h),d.$lightbox.find(".lb-nextLink").height(h),d.$overlay.trigger("focus"),d.showImage()}var d=this,e=this.$outerContainer.outerWidth(),f=this.$outerContainer.outerHeight(),g=a+this.containerPadding.left+this.containerPadding.right+this.imageBorderWidth.left+this.imageBorderWidth.right,h=b+this.containerPadding.top+this.containerPadding.bottom+this.imageBorderWidth.top+this.imageBorderWidth.bottom;e!==g||f!==h?this.$outerContainer.animate({width:g,height:h},this.options.resizeDuration,"swing",function(){c()}):c()},b.prototype.showImage=function(){this.$lightbox.find(".lb-loader").stop(!0).hide(),this.$lightbox.find(".lb-image").fadeIn(this.options.imageFadeDuration),this.updateNav(),this.updateDetails(),this.preloadNeighboringImages(),this.enableKeyboardNav()},b.prototype.updateNav=function(){var a=!1;try{document.createEvent("TouchEvent"),a=!!this.options.alwaysShowNavOnTouchDevices}catch(a){}this.$lightbox.find(".lb-nav").show(),this.album.length>1&&(this.options.wrapAround?(a&&this.$lightbox.find(".lb-prev, .lb-next").css("opacity","1"),this.$lightbox.find(".lb-prev, .lb-next").show()):(this.currentImageIndex>0&&(this.$lightbox.find(".lb-prev").show(),a&&this.$lightbox.find(".lb-prev").css("opacity","1")),this.currentImageIndex<this.album.length-1&&(this.$lightbox.find(".lb-next").show(),a&&this.$lightbox.find(".lb-next").css("opacity","1"))))},b.prototype.updateDetails=function(){var a=this;if(void 0!==this.album[this.currentImageIndex].title&&""!==this.album[this.currentImageIndex].title){var b=this.$lightbox.find(".lb-caption");this.options.sanitizeTitle?b.text(this.album[this.currentImageIndex].title):b.html(this.album[this.currentImageIndex].title),b.fadeIn("fast")}if(this.album.length>1&&this.options.showImageNumberLabel){var c=this.imageCountLabel(this.currentImageIndex+1,this.album.length);this.$lightbox.find(".lb-number").text(c).fadeIn("fast")}else this.$lightbox.find(".lb-number").hide();this.$outerContainer.removeClass("animating"),this.$lightbox.find(".lb-dataContainer").fadeIn(this.options.resizeDuration,function(){return a.sizeOverlay()})},b.prototype.preloadNeighboringImages=function(){if(this.album.length>this.currentImageIndex+1){(new Image).src=this.album[this.currentImageIndex+1].link}if(this.currentImageIndex>0){(new Image).src=this.album[this.currentImageIndex-1].link}},b.prototype.enableKeyboardNav=function(){this.$lightbox.on("keyup.keyboard",a.proxy(this.keyboardAction,this)),this.$overlay.on("keyup.keyboard",a.proxy(this.keyboardAction,this))},b.prototype.disableKeyboardNav=function(){this.$lightbox.off(".keyboard"),this.$overlay.off(".keyboard")},b.prototype.keyboardAction=function(a){var b=a.keyCode;27===b?(a.stopPropagation(),this.end()):37===b?0!==this.currentImageIndex?this.changeImage(this.currentImageIndex-1):this.options.wrapAround&&this.album.length>1&&this.changeImage(this.album.length-1):39===b&&(this.currentImageIndex!==this.album.length-1?this.changeImage(this.currentImageIndex+1):this.options.wrapAround&&this.album.length>1&&this.changeImage(0))},b.prototype.end=function(){this.disableKeyboardNav(),a(window).off("resize",this.sizeOverlay),this.$lightbox.fadeOut(this.options.fadeDuration),this.$overlay.fadeOut(this.options.fadeDuration),this.options.disableScrolling&&a("body").removeClass("lb-disable-scrolling")},new b});
//# sourceMappingURL=lightbox.min.map
/*!
 * jQuery Cookie Plugin v1.4.1
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2006, 2014 Klaus Hartl
 * Released under the MIT license
 */
(function (factory) {
	if (typeof define === 'function' && define.amd) {
		// AMD (Register as an anonymous module)
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		// Node/CommonJS
		module.exports = factory(require('jquery'));
	} else {
		// Browser globals
		factory(jQuery);
	}
}(function ($) {

	var pluses = /\+/g;

	function encode(s) {
		return config.raw ? s : encodeURIComponent(s);
	}

	function decode(s) {
		return config.raw ? s : decodeURIComponent(s);
	}

	function stringifyCookieValue(value) {
		return encode(config.json ? JSON.stringify(value) : String(value));
	}

	function parseCookieValue(s) {
		if (s.indexOf('"') === 0) {
			// This is a quoted cookie as according to RFC2068, unescape...
			s = s.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, '\\');
		}

		try {
			// Replace server-side written pluses with spaces.
			// If we can't decode the cookie, ignore it, it's unusable.
			// If we can't parse the cookie, ignore it, it's unusable.
			s = decodeURIComponent(s.replace(pluses, ' '));
			return config.json ? JSON.parse(s) : s;
		} catch(e) {}
	}

	function read(s, converter) {
		var value = config.raw ? s : parseCookieValue(s);
		return $.isFunction(converter) ? converter(value) : value;
	}

	var config = $.cookie = function (key, value, options) {

		// Write

		if (arguments.length > 1 && !$.isFunction(value)) {
			options = $.extend({}, config.defaults, options);

			if (typeof options.expires === 'number') {
				var days = options.expires, t = options.expires = new Date();
				t.setMilliseconds(t.getMilliseconds() + days * 864e+5);
			}

			return (document.cookie = [
				encode(key), '=', stringifyCookieValue(value),
				options.expires ? '; expires=' + options.expires.toUTCString() : '', // use expires attribute, max-age is not supported by IE
				options.path    ? '; path=' + options.path : '',
				options.domain  ? '; domain=' + options.domain : '',
				options.secure  ? '; secure' : ''
			].join(''));
		}

		// Read

		var result = key ? undefined : {},
			// To prevent the for loop in the first place assign an empty array
			// in case there are no cookies at all. Also prevents odd result when
			// calling $.cookie().
			cookies = document.cookie ? document.cookie.split('; ') : [],
			i = 0,
			l = cookies.length;

		for (; i < l; i++) {
			var parts = cookies[i].split('='),
				name = decode(parts.shift()),
				cookie = parts.join('=');

			if (key === name) {
				// If second argument (value) is a function it's a converter...
				result = read(cookie, value);
				break;
			}

			// Prevent storing a cookie that we couldn't decode.
			if (!key && (cookie = read(cookie)) !== undefined) {
				result[name] = cookie;
			}
		}

		return result;
	};

	config.defaults = {};

	$.removeCookie = function (key, options) {
		// Must not alter options, thus extending a fresh object...
		$.cookie(key, '', $.extend({}, options, { expires: -1 }));
		return !$.cookie(key);
	};

}));

/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */
( function() {
	var pageBody, container, button, menu, links, i, len;

	pageBody = document.getElementsByTagName('body');
	container = document.getElementById( 'site-navigation' );

	if ( ! container ) {
		return;
	}

	button = container.getElementsByTagName( 'button' )[0];
	if ( 'undefined' === typeof button ) {
		return;
	}

	menu = container.getElementsByClassName( 'nav-inner' )[0];

	// Hide menu toggle button if menu is empty and return early.
	if ( 'undefined' === typeof menu ) {
		button.style.display = 'none';
		return;
	}

	menu.setAttribute( 'aria-expanded', 'false' );
	if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
		menu.className += ' nav-menu';
	}

	button.onclick = function() {
		if ( -1 !== container.className.indexOf( 'toggled' ) ) {
			if(pageBody[0].classList.contains('menu-open')) {
				pageBody[0].classList.remove('menu-open');
			}
		//	pageBody.classList.remove(' menu-open');
			container.className = container.className.replace( ' toggled', '' );
			button.setAttribute( 'aria-expanded', 'false' );
			menu.setAttribute( 'aria-expanded', 'false' );

		} else {
			pageBody[0].classList.add('menu-open');
			container.className += ' toggled';
			button.setAttribute( 'aria-expanded', 'true' );
			menu.setAttribute( 'aria-expanded', 'true' );
		}
	};

	// Get all the link elements within the menu.
	links    = menu.getElementsByTagName( 'a' );

	// Each time a menu link is focused or blurred, toggle focus.
	for ( i = 0, len = links.length; i < len; i++ ) {
		links[i].addEventListener( 'focus', toggleFocus, true );
		links[i].addEventListener( 'blur', toggleFocus, true );
	}

	/**
	 * Sets or removes .focus class on an element.
	 */
	function toggleFocus() {
		var self = this;

		// Move up through the ancestors of the current link until we hit .nav-menu.
		while ( -1 === self.className.indexOf( 'nav-menu' ) ) {

			// On li elements toggle the class .focus.
			if ( 'li' === self.tagName.toLowerCase() ) {
				if ( -1 !== self.className.indexOf( 'focus' ) ) {
					self.className = self.className.replace( ' focus', '' );
				} else {
					self.className += ' focus';
				}
			}

			self = self.parentElement;
		}
	}

	/**
	 * Toggles `focus` class to allow submenu access on tablets.
	 */
	( function( container ) {
		var touchStartFn, i,
			parentLink = container.querySelectorAll( '.menu-item-has-children > a, .page_item_has_children > a' );

		if ( 'ontouchstart' in window ) {
			touchStartFn = function( e ) {
				var menuItem = this.parentNode, i;

				if ( ! menuItem.classList.contains( 'focus' ) ) {
					e.preventDefault();
					for ( i = 0; i < menuItem.parentNode.children.length; ++i ) {
						if ( menuItem === menuItem.parentNode.children[i] ) {
							continue;
						}
						menuItem.parentNode.children[i].classList.remove( 'focus' );
					}
					menuItem.classList.add( 'focus' );
				} else {
					menuItem.classList.remove( 'focus' );
				}
			};

			for ( i = 0; i < parentLink.length; ++i ) {
				parentLink[i].addEventListener( 'touchstart', touchStartFn, false );
			}
		}
	}( container ) );
} )();

/* sticky Menu
   ========================================================================== */

jQuery(document).ready(function ($) {
  //if ($(window).width() >= 992) {

    // init sticky menu
    var lastScrollPosition = 0;
    currentScrollPosition = $(window).scrollTop();
    //$("body").addClass("has-sticky-menu");

    if (currentScrollPosition > 120) {
      $("body").addClass("sticky-menu");
    } else {
      $("body").removeClass("sticky-menu");
    }
    lastScrollPosition = currentScrollPosition;

    $(window).scroll(function () {
      currentScrollPosition = $(window).scrollTop();
      if (currentScrollPosition > 120) {
        $("body").addClass("sticky-menu");
      } else {
        $("body").removeClass("sticky-menu");
      }
      if (currentScrollPosition > lastScrollPosition) {
        jQuery("body").removeClass("scroll-up");
        jQuery("body").addClass("scroll-down");
      } else {
        jQuery("body").removeClass("scroll-down");
        jQuery("body").addClass("scroll-up");
      }
      lastScrollPosition = currentScrollPosition;
    });
  //}
  
  /* **************************
  *
  * Extra-conf for onepages
  *
  * ************************** */
/*  jQuery(".menu-item a").click(function() {
      event.preventDefault();
      var menuItem = jQuery(this).attr('href');

      jQuery('.main-navigation').removeClass('toggled');
      jQuery('body').removeClass('menu-toggled');

      jQuery([document.documentElement, document.body]).animate({
          scrollTop: jQuery(menuItem).offset().top-100
      }, 800).delay(200);
  });*/
});
/**
 * File skip-link-focus-fix.js.
 *
 * Helps with accessibility for keyboard only users.
 *
 * Learn more: https://git.io/vWdr2
 */
( function() {
	var isIe = /(trident|msie)/i.test( navigator.userAgent );

	if ( isIe && document.getElementById && window.addEventListener ) {
		window.addEventListener( 'hashchange', function() {
			var id = location.hash.substring( 1 ),
				element;

			if ( ! ( /^[A-z0-9_-]+$/.test( id ) ) ) {
				return;
			}

			element = document.getElementById( id );

			if ( element ) {
				if ( ! ( /^(?:a|select|input|button|textarea)$/i.test( element.tagName ) ) ) {
					element.tabIndex = -1;
				}

				element.focus();
			}
		}, false );
	}
} )();

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

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxpZ2h0Ym94Lm1pbi5qcyIsImpxdWVyeS5jb29raWUuanMiLCJuYXZpZ2F0aW9uLmpzIiwic3RpY2t5LW1lbnUuanMiLCJza2lwLWxpbmstZm9jdXMtZml4LmpzIiwibWFpbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUNkQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQ2xIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FDcERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6InNjcmlwdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiFcbiAqIExpZ2h0Ym94IHYyLjExLjRcbiAqIGJ5IExva2VzaCBEaGFrYXJcbiAqXG4gKiBNb3JlIGluZm86XG4gKiBodHRwOi8vbG9rZXNoZGhha2FyLmNvbS9wcm9qZWN0cy9saWdodGJveDIvXG4gKlxuICogQ29weXJpZ2h0IExva2VzaCBEaGFrYXJcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cHM6Ly9naXRodWIuY29tL2xva2VzaC9saWdodGJveDIvYmxvYi9tYXN0ZXIvTElDRU5TRVxuICpcbiAqIEBwcmVzZXJ2ZVxuICovXG4hZnVuY3Rpb24oYSxiKXtcImZ1bmN0aW9uXCI9PXR5cGVvZiBkZWZpbmUmJmRlZmluZS5hbWQ/ZGVmaW5lKFtcImpxdWVyeVwiXSxiKTpcIm9iamVjdFwiPT10eXBlb2YgZXhwb3J0cz9tb2R1bGUuZXhwb3J0cz1iKHJlcXVpcmUoXCJqcXVlcnlcIikpOmEubGlnaHRib3g9YihhLmpRdWVyeSl9KHRoaXMsZnVuY3Rpb24oYSl7ZnVuY3Rpb24gYihiKXt0aGlzLmFsYnVtPVtdLHRoaXMuY3VycmVudEltYWdlSW5kZXg9dm9pZCAwLHRoaXMuaW5pdCgpLHRoaXMub3B0aW9ucz1hLmV4dGVuZCh7fSx0aGlzLmNvbnN0cnVjdG9yLmRlZmF1bHRzKSx0aGlzLm9wdGlvbihiKX1yZXR1cm4gYi5kZWZhdWx0cz17YWxidW1MYWJlbDpcIkltYWdlICUxIG9mICUyXCIsYWx3YXlzU2hvd05hdk9uVG91Y2hEZXZpY2VzOiExLGZhZGVEdXJhdGlvbjo2MDAsZml0SW1hZ2VzSW5WaWV3cG9ydDohMCxpbWFnZUZhZGVEdXJhdGlvbjo2MDAscG9zaXRpb25Gcm9tVG9wOjUwLHJlc2l6ZUR1cmF0aW9uOjcwMCxzaG93SW1hZ2VOdW1iZXJMYWJlbDohMCx3cmFwQXJvdW5kOiExLGRpc2FibGVTY3JvbGxpbmc6ITEsc2FuaXRpemVUaXRsZTohMX0sYi5wcm90b3R5cGUub3B0aW9uPWZ1bmN0aW9uKGIpe2EuZXh0ZW5kKHRoaXMub3B0aW9ucyxiKX0sYi5wcm90b3R5cGUuaW1hZ2VDb3VudExhYmVsPWZ1bmN0aW9uKGEsYil7cmV0dXJuIHRoaXMub3B0aW9ucy5hbGJ1bUxhYmVsLnJlcGxhY2UoLyUxL2csYSkucmVwbGFjZSgvJTIvZyxiKX0sYi5wcm90b3R5cGUuaW5pdD1mdW5jdGlvbigpe3ZhciBiPXRoaXM7YShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKXtiLmVuYWJsZSgpLGIuYnVpbGQoKX0pfSxiLnByb3RvdHlwZS5lbmFibGU9ZnVuY3Rpb24oKXt2YXIgYj10aGlzO2EoXCJib2R5XCIpLm9uKFwiY2xpY2tcIixcImFbcmVsXj1saWdodGJveF0sIGFyZWFbcmVsXj1saWdodGJveF0sIGFbZGF0YS1saWdodGJveF0sIGFyZWFbZGF0YS1saWdodGJveF1cIixmdW5jdGlvbihjKXtyZXR1cm4gYi5zdGFydChhKGMuY3VycmVudFRhcmdldCkpLCExfSl9LGIucHJvdG90eXBlLmJ1aWxkPWZ1bmN0aW9uKCl7aWYoIShhKFwiI2xpZ2h0Ym94XCIpLmxlbmd0aD4wKSl7dmFyIGI9dGhpczthKCc8ZGl2IGlkPVwibGlnaHRib3hPdmVybGF5XCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwibGlnaHRib3hPdmVybGF5XCI+PC9kaXY+PGRpdiBpZD1cImxpZ2h0Ym94XCIgdGFiaW5kZXg9XCItMVwiIGNsYXNzPVwibGlnaHRib3hcIj48ZGl2IGNsYXNzPVwibGItb3V0ZXJDb250YWluZXJcIj48ZGl2IGNsYXNzPVwibGItY29udGFpbmVyXCI+PGltZyBjbGFzcz1cImxiLWltYWdlXCIgc3JjPVwiZGF0YTppbWFnZS9naWY7YmFzZTY0LFIwbEdPRGxoQVFBQkFJQUFBUC8vL3dBQUFDSDVCQUVBQUFBQUxBQUFBQUFCQUFFQUFBSUNSQUVBT3c9PVwiIGFsdD1cIlwiLz48ZGl2IGNsYXNzPVwibGItbmF2XCI+PGEgY2xhc3M9XCJsYi1wcmV2XCIgcm9sZT1cImJ1dHRvblwiIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9XCJQcmV2aW91cyBpbWFnZVwiIGhyZWY9XCJcIiA+PC9hPjxhIGNsYXNzPVwibGItbmV4dFwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPVwiTmV4dCBpbWFnZVwiIGhyZWY9XCJcIiA+PC9hPjwvZGl2PjxkaXYgY2xhc3M9XCJsYi1sb2FkZXJcIj48YSBjbGFzcz1cImxiLWNhbmNlbFwiIHJvbGU9XCJidXR0b25cIiB0YWJpbmRleD1cIjBcIj48L2E+PC9kaXY+PC9kaXY+PC9kaXY+PGRpdiBjbGFzcz1cImxiLWRhdGFDb250YWluZXJcIj48ZGl2IGNsYXNzPVwibGItZGF0YVwiPjxkaXYgY2xhc3M9XCJsYi1kZXRhaWxzXCI+PHNwYW4gY2xhc3M9XCJsYi1jYXB0aW9uXCI+PC9zcGFuPjxzcGFuIGNsYXNzPVwibGItbnVtYmVyXCI+PC9zcGFuPjwvZGl2PjxkaXYgY2xhc3M9XCJsYi1jbG9zZUNvbnRhaW5lclwiPjxhIGNsYXNzPVwibGItY2xvc2VcIiByb2xlPVwiYnV0dG9uXCIgdGFiaW5kZXg9XCIwXCI+PC9hPjwvZGl2PjwvZGl2PjwvZGl2PjwvZGl2PicpLmFwcGVuZFRvKGEoXCJib2R5XCIpKSx0aGlzLiRsaWdodGJveD1hKFwiI2xpZ2h0Ym94XCIpLHRoaXMuJG92ZXJsYXk9YShcIiNsaWdodGJveE92ZXJsYXlcIiksdGhpcy4kb3V0ZXJDb250YWluZXI9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1vdXRlckNvbnRhaW5lclwiKSx0aGlzLiRjb250YWluZXI9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1jb250YWluZXJcIiksdGhpcy4kaW1hZ2U9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1pbWFnZVwiKSx0aGlzLiRuYXY9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1uYXZcIiksdGhpcy5jb250YWluZXJQYWRkaW5nPXt0b3A6cGFyc2VJbnQodGhpcy4kY29udGFpbmVyLmNzcyhcInBhZGRpbmctdG9wXCIpLDEwKSxyaWdodDpwYXJzZUludCh0aGlzLiRjb250YWluZXIuY3NzKFwicGFkZGluZy1yaWdodFwiKSwxMCksYm90dG9tOnBhcnNlSW50KHRoaXMuJGNvbnRhaW5lci5jc3MoXCJwYWRkaW5nLWJvdHRvbVwiKSwxMCksbGVmdDpwYXJzZUludCh0aGlzLiRjb250YWluZXIuY3NzKFwicGFkZGluZy1sZWZ0XCIpLDEwKX0sdGhpcy5pbWFnZUJvcmRlcldpZHRoPXt0b3A6cGFyc2VJbnQodGhpcy4kaW1hZ2UuY3NzKFwiYm9yZGVyLXRvcC13aWR0aFwiKSwxMCkscmlnaHQ6cGFyc2VJbnQodGhpcy4kaW1hZ2UuY3NzKFwiYm9yZGVyLXJpZ2h0LXdpZHRoXCIpLDEwKSxib3R0b206cGFyc2VJbnQodGhpcy4kaW1hZ2UuY3NzKFwiYm9yZGVyLWJvdHRvbS13aWR0aFwiKSwxMCksbGVmdDpwYXJzZUludCh0aGlzLiRpbWFnZS5jc3MoXCJib3JkZXItbGVmdC13aWR0aFwiKSwxMCl9LHRoaXMuJG92ZXJsYXkuaGlkZSgpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiBiLmVuZCgpLCExfSksdGhpcy4kbGlnaHRib3guaGlkZSgpLm9uKFwiY2xpY2tcIixmdW5jdGlvbihjKXtcImxpZ2h0Ym94XCI9PT1hKGMudGFyZ2V0KS5hdHRyKFwiaWRcIikmJmIuZW5kKCl9KSx0aGlzLiRvdXRlckNvbnRhaW5lci5vbihcImNsaWNrXCIsZnVuY3Rpb24oYyl7cmV0dXJuXCJsaWdodGJveFwiPT09YShjLnRhcmdldCkuYXR0cihcImlkXCIpJiZiLmVuZCgpLCExfSksdGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1wcmV2XCIpLm9uKFwiY2xpY2tcIixmdW5jdGlvbigpe3JldHVybiAwPT09Yi5jdXJyZW50SW1hZ2VJbmRleD9iLmNoYW5nZUltYWdlKGIuYWxidW0ubGVuZ3RoLTEpOmIuY2hhbmdlSW1hZ2UoYi5jdXJyZW50SW1hZ2VJbmRleC0xKSwhMX0pLHRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItbmV4dFwiKS5vbihcImNsaWNrXCIsZnVuY3Rpb24oKXtyZXR1cm4gYi5jdXJyZW50SW1hZ2VJbmRleD09PWIuYWxidW0ubGVuZ3RoLTE/Yi5jaGFuZ2VJbWFnZSgwKTpiLmNoYW5nZUltYWdlKGIuY3VycmVudEltYWdlSW5kZXgrMSksITF9KSx0aGlzLiRuYXYub24oXCJtb3VzZWRvd25cIixmdW5jdGlvbihhKXszPT09YS53aGljaCYmKGIuJG5hdi5jc3MoXCJwb2ludGVyLWV2ZW50c1wiLFwibm9uZVwiKSxiLiRsaWdodGJveC5vbmUoXCJjb250ZXh0bWVudVwiLGZ1bmN0aW9uKCl7c2V0VGltZW91dChmdW5jdGlvbigpe3RoaXMuJG5hdi5jc3MoXCJwb2ludGVyLWV2ZW50c1wiLFwiYXV0b1wiKX0uYmluZChiKSwwKX0pKX0pLHRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItbG9hZGVyLCAubGItY2xvc2VcIikub24oXCJjbGljayBrZXl1cFwiLGZ1bmN0aW9uKGEpe2lmKFwiY2xpY2tcIj09PWEudHlwZXx8XCJrZXl1cFwiPT09YS50eXBlJiYoMTM9PT1hLndoaWNofHwzMj09PWEud2hpY2gpKXJldHVybiBiLmVuZCgpLCExfSl9fSxiLnByb3RvdHlwZS5zdGFydD1mdW5jdGlvbihiKXtmdW5jdGlvbiBjKGEpe2QuYWxidW0ucHVzaCh7YWx0OmEuYXR0cihcImRhdGEtYWx0XCIpLGxpbms6YS5hdHRyKFwiaHJlZlwiKSx0aXRsZTphLmF0dHIoXCJkYXRhLXRpdGxlXCIpfHxhLmF0dHIoXCJ0aXRsZVwiKX0pfXZhciBkPXRoaXMsZT1hKHdpbmRvdyk7ZS5vbihcInJlc2l6ZVwiLGEucHJveHkodGhpcy5zaXplT3ZlcmxheSx0aGlzKSksdGhpcy5zaXplT3ZlcmxheSgpLHRoaXMuYWxidW09W107dmFyIGYsZz0wLGg9Yi5hdHRyKFwiZGF0YS1saWdodGJveFwiKTtpZihoKXtmPWEoYi5wcm9wKFwidGFnTmFtZVwiKSsnW2RhdGEtbGlnaHRib3g9XCInK2grJ1wiXScpO2Zvcih2YXIgaT0wO2k8Zi5sZW5ndGg7aT0rK2kpYyhhKGZbaV0pKSxmW2ldPT09YlswXSYmKGc9aSl9ZWxzZSBpZihcImxpZ2h0Ym94XCI9PT1iLmF0dHIoXCJyZWxcIikpYyhiKTtlbHNle2Y9YShiLnByb3AoXCJ0YWdOYW1lXCIpKydbcmVsPVwiJytiLmF0dHIoXCJyZWxcIikrJ1wiXScpO2Zvcih2YXIgaj0wO2o8Zi5sZW5ndGg7aj0rK2opYyhhKGZbal0pKSxmW2pdPT09YlswXSYmKGc9ail9dmFyIGs9ZS5zY3JvbGxUb3AoKSt0aGlzLm9wdGlvbnMucG9zaXRpb25Gcm9tVG9wLGw9ZS5zY3JvbGxMZWZ0KCk7dGhpcy4kbGlnaHRib3guY3NzKHt0b3A6aytcInB4XCIsbGVmdDpsK1wicHhcIn0pLmZhZGVJbih0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uKSx0aGlzLm9wdGlvbnMuZGlzYWJsZVNjcm9sbGluZyYmYShcImJvZHlcIikuYWRkQ2xhc3MoXCJsYi1kaXNhYmxlLXNjcm9sbGluZ1wiKSx0aGlzLmNoYW5nZUltYWdlKGcpfSxiLnByb3RvdHlwZS5jaGFuZ2VJbWFnZT1mdW5jdGlvbihiKXt2YXIgYz10aGlzLGQ9dGhpcy5hbGJ1bVtiXS5saW5rLGU9ZC5zcGxpdChcIi5cIikuc2xpY2UoLTEpWzBdLGY9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1pbWFnZVwiKTt0aGlzLmRpc2FibGVLZXlib2FyZE5hdigpLHRoaXMuJG92ZXJsYXkuZmFkZUluKHRoaXMub3B0aW9ucy5mYWRlRHVyYXRpb24pLGEoXCIubGItbG9hZGVyXCIpLmZhZGVJbihcInNsb3dcIiksdGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1pbWFnZSwgLmxiLW5hdiwgLmxiLXByZXYsIC5sYi1uZXh0LCAubGItZGF0YUNvbnRhaW5lciwgLmxiLW51bWJlcnMsIC5sYi1jYXB0aW9uXCIpLmhpZGUoKSx0aGlzLiRvdXRlckNvbnRhaW5lci5hZGRDbGFzcyhcImFuaW1hdGluZ1wiKTt2YXIgZz1uZXcgSW1hZ2U7Zy5vbmxvYWQ9ZnVuY3Rpb24oKXt2YXIgaCxpLGosayxsLG07Zi5hdHRyKHthbHQ6Yy5hbGJ1bVtiXS5hbHQsc3JjOmR9KSxhKGcpLGYud2lkdGgoZy53aWR0aCksZi5oZWlnaHQoZy5oZWlnaHQpO3ZhciBuPWcud2lkdGgvZy5oZWlnaHQ7bT1hKHdpbmRvdykud2lkdGgoKSxsPWEod2luZG93KS5oZWlnaHQoKSxrPW0tYy5jb250YWluZXJQYWRkaW5nLmxlZnQtYy5jb250YWluZXJQYWRkaW5nLnJpZ2h0LWMuaW1hZ2VCb3JkZXJXaWR0aC5sZWZ0LWMuaW1hZ2VCb3JkZXJXaWR0aC5yaWdodC0yMCxqPWwtYy5jb250YWluZXJQYWRkaW5nLnRvcC1jLmNvbnRhaW5lclBhZGRpbmcuYm90dG9tLWMuaW1hZ2VCb3JkZXJXaWR0aC50b3AtYy5pbWFnZUJvcmRlcldpZHRoLmJvdHRvbS1jLm9wdGlvbnMucG9zaXRpb25Gcm9tVG9wLTcwLFwic3ZnXCI9PT1lPyhuPj0xPyhpPWssaD1wYXJzZUludChrL24sMTApKTooaT1wYXJzZUludChqL24sMTApLGg9aiksZi53aWR0aChpKSxmLmhlaWdodChoKSk6KGMub3B0aW9ucy5maXRJbWFnZXNJblZpZXdwb3J0PyhjLm9wdGlvbnMubWF4V2lkdGgmJmMub3B0aW9ucy5tYXhXaWR0aDxrJiYoaz1jLm9wdGlvbnMubWF4V2lkdGgpLGMub3B0aW9ucy5tYXhIZWlnaHQmJmMub3B0aW9ucy5tYXhIZWlnaHQ8aiYmKGo9Yy5vcHRpb25zLm1heEhlaWdodCkpOihrPWMub3B0aW9ucy5tYXhXaWR0aHx8Zy53aWR0aHx8ayxqPWMub3B0aW9ucy5tYXhIZWlnaHR8fGcuaGVpZ2h0fHxqKSwoZy53aWR0aD5rfHxnLmhlaWdodD5qKSYmKGcud2lkdGgvaz5nLmhlaWdodC9qPyhpPWssaD1wYXJzZUludChnLmhlaWdodC8oZy53aWR0aC9pKSwxMCksZi53aWR0aChpKSxmLmhlaWdodChoKSk6KGg9aixpPXBhcnNlSW50KGcud2lkdGgvKGcuaGVpZ2h0L2gpLDEwKSxmLndpZHRoKGkpLGYuaGVpZ2h0KGgpKSkpLGMuc2l6ZUNvbnRhaW5lcihmLndpZHRoKCksZi5oZWlnaHQoKSl9LGcuc3JjPXRoaXMuYWxidW1bYl0ubGluayx0aGlzLmN1cnJlbnRJbWFnZUluZGV4PWJ9LGIucHJvdG90eXBlLnNpemVPdmVybGF5PWZ1bmN0aW9uKCl7dmFyIGI9dGhpcztzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7Yi4kb3ZlcmxheS53aWR0aChhKGRvY3VtZW50KS53aWR0aCgpKS5oZWlnaHQoYShkb2N1bWVudCkuaGVpZ2h0KCkpfSwwKX0sYi5wcm90b3R5cGUuc2l6ZUNvbnRhaW5lcj1mdW5jdGlvbihhLGIpe2Z1bmN0aW9uIGMoKXtkLiRsaWdodGJveC5maW5kKFwiLmxiLWRhdGFDb250YWluZXJcIikud2lkdGgoZyksZC4kbGlnaHRib3guZmluZChcIi5sYi1wcmV2TGlua1wiKS5oZWlnaHQoaCksZC4kbGlnaHRib3guZmluZChcIi5sYi1uZXh0TGlua1wiKS5oZWlnaHQoaCksZC4kb3ZlcmxheS50cmlnZ2VyKFwiZm9jdXNcIiksZC5zaG93SW1hZ2UoKX12YXIgZD10aGlzLGU9dGhpcy4kb3V0ZXJDb250YWluZXIub3V0ZXJXaWR0aCgpLGY9dGhpcy4kb3V0ZXJDb250YWluZXIub3V0ZXJIZWlnaHQoKSxnPWErdGhpcy5jb250YWluZXJQYWRkaW5nLmxlZnQrdGhpcy5jb250YWluZXJQYWRkaW5nLnJpZ2h0K3RoaXMuaW1hZ2VCb3JkZXJXaWR0aC5sZWZ0K3RoaXMuaW1hZ2VCb3JkZXJXaWR0aC5yaWdodCxoPWIrdGhpcy5jb250YWluZXJQYWRkaW5nLnRvcCt0aGlzLmNvbnRhaW5lclBhZGRpbmcuYm90dG9tK3RoaXMuaW1hZ2VCb3JkZXJXaWR0aC50b3ArdGhpcy5pbWFnZUJvcmRlcldpZHRoLmJvdHRvbTtlIT09Z3x8ZiE9PWg/dGhpcy4kb3V0ZXJDb250YWluZXIuYW5pbWF0ZSh7d2lkdGg6ZyxoZWlnaHQ6aH0sdGhpcy5vcHRpb25zLnJlc2l6ZUR1cmF0aW9uLFwic3dpbmdcIixmdW5jdGlvbigpe2MoKX0pOmMoKX0sYi5wcm90b3R5cGUuc2hvd0ltYWdlPWZ1bmN0aW9uKCl7dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1sb2FkZXJcIikuc3RvcCghMCkuaGlkZSgpLHRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItaW1hZ2VcIikuZmFkZUluKHRoaXMub3B0aW9ucy5pbWFnZUZhZGVEdXJhdGlvbiksdGhpcy51cGRhdGVOYXYoKSx0aGlzLnVwZGF0ZURldGFpbHMoKSx0aGlzLnByZWxvYWROZWlnaGJvcmluZ0ltYWdlcygpLHRoaXMuZW5hYmxlS2V5Ym9hcmROYXYoKX0sYi5wcm90b3R5cGUudXBkYXRlTmF2PWZ1bmN0aW9uKCl7dmFyIGE9ITE7dHJ5e2RvY3VtZW50LmNyZWF0ZUV2ZW50KFwiVG91Y2hFdmVudFwiKSxhPSEhdGhpcy5vcHRpb25zLmFsd2F5c1Nob3dOYXZPblRvdWNoRGV2aWNlc31jYXRjaChhKXt9dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1uYXZcIikuc2hvdygpLHRoaXMuYWxidW0ubGVuZ3RoPjEmJih0aGlzLm9wdGlvbnMud3JhcEFyb3VuZD8oYSYmdGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1wcmV2LCAubGItbmV4dFwiKS5jc3MoXCJvcGFjaXR5XCIsXCIxXCIpLHRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItcHJldiwgLmxiLW5leHRcIikuc2hvdygpKToodGhpcy5jdXJyZW50SW1hZ2VJbmRleD4wJiYodGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1wcmV2XCIpLnNob3coKSxhJiZ0aGlzLiRsaWdodGJveC5maW5kKFwiLmxiLXByZXZcIikuY3NzKFwib3BhY2l0eVwiLFwiMVwiKSksdGhpcy5jdXJyZW50SW1hZ2VJbmRleDx0aGlzLmFsYnVtLmxlbmd0aC0xJiYodGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1uZXh0XCIpLnNob3coKSxhJiZ0aGlzLiRsaWdodGJveC5maW5kKFwiLmxiLW5leHRcIikuY3NzKFwib3BhY2l0eVwiLFwiMVwiKSkpKX0sYi5wcm90b3R5cGUudXBkYXRlRGV0YWlscz1mdW5jdGlvbigpe3ZhciBhPXRoaXM7aWYodm9pZCAwIT09dGhpcy5hbGJ1bVt0aGlzLmN1cnJlbnRJbWFnZUluZGV4XS50aXRsZSYmXCJcIiE9PXRoaXMuYWxidW1bdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0udGl0bGUpe3ZhciBiPXRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItY2FwdGlvblwiKTt0aGlzLm9wdGlvbnMuc2FuaXRpemVUaXRsZT9iLnRleHQodGhpcy5hbGJ1bVt0aGlzLmN1cnJlbnRJbWFnZUluZGV4XS50aXRsZSk6Yi5odG1sKHRoaXMuYWxidW1bdGhpcy5jdXJyZW50SW1hZ2VJbmRleF0udGl0bGUpLGIuZmFkZUluKFwiZmFzdFwiKX1pZih0aGlzLmFsYnVtLmxlbmd0aD4xJiZ0aGlzLm9wdGlvbnMuc2hvd0ltYWdlTnVtYmVyTGFiZWwpe3ZhciBjPXRoaXMuaW1hZ2VDb3VudExhYmVsKHRoaXMuY3VycmVudEltYWdlSW5kZXgrMSx0aGlzLmFsYnVtLmxlbmd0aCk7dGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1udW1iZXJcIikudGV4dChjKS5mYWRlSW4oXCJmYXN0XCIpfWVsc2UgdGhpcy4kbGlnaHRib3guZmluZChcIi5sYi1udW1iZXJcIikuaGlkZSgpO3RoaXMuJG91dGVyQ29udGFpbmVyLnJlbW92ZUNsYXNzKFwiYW5pbWF0aW5nXCIpLHRoaXMuJGxpZ2h0Ym94LmZpbmQoXCIubGItZGF0YUNvbnRhaW5lclwiKS5mYWRlSW4odGhpcy5vcHRpb25zLnJlc2l6ZUR1cmF0aW9uLGZ1bmN0aW9uKCl7cmV0dXJuIGEuc2l6ZU92ZXJsYXkoKX0pfSxiLnByb3RvdHlwZS5wcmVsb2FkTmVpZ2hib3JpbmdJbWFnZXM9ZnVuY3Rpb24oKXtpZih0aGlzLmFsYnVtLmxlbmd0aD50aGlzLmN1cnJlbnRJbWFnZUluZGV4KzEpeyhuZXcgSW1hZ2UpLnNyYz10aGlzLmFsYnVtW3RoaXMuY3VycmVudEltYWdlSW5kZXgrMV0ubGlua31pZih0aGlzLmN1cnJlbnRJbWFnZUluZGV4PjApeyhuZXcgSW1hZ2UpLnNyYz10aGlzLmFsYnVtW3RoaXMuY3VycmVudEltYWdlSW5kZXgtMV0ubGlua319LGIucHJvdG90eXBlLmVuYWJsZUtleWJvYXJkTmF2PWZ1bmN0aW9uKCl7dGhpcy4kbGlnaHRib3gub24oXCJrZXl1cC5rZXlib2FyZFwiLGEucHJveHkodGhpcy5rZXlib2FyZEFjdGlvbix0aGlzKSksdGhpcy4kb3ZlcmxheS5vbihcImtleXVwLmtleWJvYXJkXCIsYS5wcm94eSh0aGlzLmtleWJvYXJkQWN0aW9uLHRoaXMpKX0sYi5wcm90b3R5cGUuZGlzYWJsZUtleWJvYXJkTmF2PWZ1bmN0aW9uKCl7dGhpcy4kbGlnaHRib3gub2ZmKFwiLmtleWJvYXJkXCIpLHRoaXMuJG92ZXJsYXkub2ZmKFwiLmtleWJvYXJkXCIpfSxiLnByb3RvdHlwZS5rZXlib2FyZEFjdGlvbj1mdW5jdGlvbihhKXt2YXIgYj1hLmtleUNvZGU7Mjc9PT1iPyhhLnN0b3BQcm9wYWdhdGlvbigpLHRoaXMuZW5kKCkpOjM3PT09Yj8wIT09dGhpcy5jdXJyZW50SW1hZ2VJbmRleD90aGlzLmNoYW5nZUltYWdlKHRoaXMuY3VycmVudEltYWdlSW5kZXgtMSk6dGhpcy5vcHRpb25zLndyYXBBcm91bmQmJnRoaXMuYWxidW0ubGVuZ3RoPjEmJnRoaXMuY2hhbmdlSW1hZ2UodGhpcy5hbGJ1bS5sZW5ndGgtMSk6Mzk9PT1iJiYodGhpcy5jdXJyZW50SW1hZ2VJbmRleCE9PXRoaXMuYWxidW0ubGVuZ3RoLTE/dGhpcy5jaGFuZ2VJbWFnZSh0aGlzLmN1cnJlbnRJbWFnZUluZGV4KzEpOnRoaXMub3B0aW9ucy53cmFwQXJvdW5kJiZ0aGlzLmFsYnVtLmxlbmd0aD4xJiZ0aGlzLmNoYW5nZUltYWdlKDApKX0sYi5wcm90b3R5cGUuZW5kPWZ1bmN0aW9uKCl7dGhpcy5kaXNhYmxlS2V5Ym9hcmROYXYoKSxhKHdpbmRvdykub2ZmKFwicmVzaXplXCIsdGhpcy5zaXplT3ZlcmxheSksdGhpcy4kbGlnaHRib3guZmFkZU91dCh0aGlzLm9wdGlvbnMuZmFkZUR1cmF0aW9uKSx0aGlzLiRvdmVybGF5LmZhZGVPdXQodGhpcy5vcHRpb25zLmZhZGVEdXJhdGlvbiksdGhpcy5vcHRpb25zLmRpc2FibGVTY3JvbGxpbmcmJmEoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwibGItZGlzYWJsZS1zY3JvbGxpbmdcIil9LG5ldyBifSk7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1saWdodGJveC5taW4ubWFwIiwiLyohXG4gKiBqUXVlcnkgQ29va2llIFBsdWdpbiB2MS40LjFcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9jYXJoYXJ0bC9qcXVlcnktY29va2llXG4gKlxuICogQ29weXJpZ2h0IDIwMDYsIDIwMTQgS2xhdXMgSGFydGxcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICovXG4oZnVuY3Rpb24gKGZhY3RvcnkpIHtcblx0aWYgKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZCkge1xuXHRcdC8vIEFNRCAoUmVnaXN0ZXIgYXMgYW4gYW5vbnltb3VzIG1vZHVsZSlcblx0XHRkZWZpbmUoWydqcXVlcnknXSwgZmFjdG9yeSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKSB7XG5cdFx0Ly8gTm9kZS9Db21tb25KU1xuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeShyZXF1aXJlKCdqcXVlcnknKSk7XG5cdH0gZWxzZSB7XG5cdFx0Ly8gQnJvd3NlciBnbG9iYWxzXG5cdFx0ZmFjdG9yeShqUXVlcnkpO1xuXHR9XG59KGZ1bmN0aW9uICgkKSB7XG5cblx0dmFyIHBsdXNlcyA9IC9cXCsvZztcblxuXHRmdW5jdGlvbiBlbmNvZGUocykge1xuXHRcdHJldHVybiBjb25maWcucmF3ID8gcyA6IGVuY29kZVVSSUNvbXBvbmVudChzKTtcblx0fVxuXG5cdGZ1bmN0aW9uIGRlY29kZShzKSB7XG5cdFx0cmV0dXJuIGNvbmZpZy5yYXcgPyBzIDogZGVjb2RlVVJJQ29tcG9uZW50KHMpO1xuXHR9XG5cblx0ZnVuY3Rpb24gc3RyaW5naWZ5Q29va2llVmFsdWUodmFsdWUpIHtcblx0XHRyZXR1cm4gZW5jb2RlKGNvbmZpZy5qc29uID8gSlNPTi5zdHJpbmdpZnkodmFsdWUpIDogU3RyaW5nKHZhbHVlKSk7XG5cdH1cblxuXHRmdW5jdGlvbiBwYXJzZUNvb2tpZVZhbHVlKHMpIHtcblx0XHRpZiAocy5pbmRleE9mKCdcIicpID09PSAwKSB7XG5cdFx0XHQvLyBUaGlzIGlzIGEgcXVvdGVkIGNvb2tpZSBhcyBhY2NvcmRpbmcgdG8gUkZDMjA2OCwgdW5lc2NhcGUuLi5cblx0XHRcdHMgPSBzLnNsaWNlKDEsIC0xKS5yZXBsYWNlKC9cXFxcXCIvZywgJ1wiJykucmVwbGFjZSgvXFxcXFxcXFwvZywgJ1xcXFwnKTtcblx0XHR9XG5cblx0XHR0cnkge1xuXHRcdFx0Ly8gUmVwbGFjZSBzZXJ2ZXItc2lkZSB3cml0dGVuIHBsdXNlcyB3aXRoIHNwYWNlcy5cblx0XHRcdC8vIElmIHdlIGNhbid0IGRlY29kZSB0aGUgY29va2llLCBpZ25vcmUgaXQsIGl0J3MgdW51c2FibGUuXG5cdFx0XHQvLyBJZiB3ZSBjYW4ndCBwYXJzZSB0aGUgY29va2llLCBpZ25vcmUgaXQsIGl0J3MgdW51c2FibGUuXG5cdFx0XHRzID0gZGVjb2RlVVJJQ29tcG9uZW50KHMucmVwbGFjZShwbHVzZXMsICcgJykpO1xuXHRcdFx0cmV0dXJuIGNvbmZpZy5qc29uID8gSlNPTi5wYXJzZShzKSA6IHM7XG5cdFx0fSBjYXRjaChlKSB7fVxuXHR9XG5cblx0ZnVuY3Rpb24gcmVhZChzLCBjb252ZXJ0ZXIpIHtcblx0XHR2YXIgdmFsdWUgPSBjb25maWcucmF3ID8gcyA6IHBhcnNlQ29va2llVmFsdWUocyk7XG5cdFx0cmV0dXJuICQuaXNGdW5jdGlvbihjb252ZXJ0ZXIpID8gY29udmVydGVyKHZhbHVlKSA6IHZhbHVlO1xuXHR9XG5cblx0dmFyIGNvbmZpZyA9ICQuY29va2llID0gZnVuY3Rpb24gKGtleSwgdmFsdWUsIG9wdGlvbnMpIHtcblxuXHRcdC8vIFdyaXRlXG5cblx0XHRpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgISQuaXNGdW5jdGlvbih2YWx1ZSkpIHtcblx0XHRcdG9wdGlvbnMgPSAkLmV4dGVuZCh7fSwgY29uZmlnLmRlZmF1bHRzLCBvcHRpb25zKTtcblxuXHRcdFx0aWYgKHR5cGVvZiBvcHRpb25zLmV4cGlyZXMgPT09ICdudW1iZXInKSB7XG5cdFx0XHRcdHZhciBkYXlzID0gb3B0aW9ucy5leHBpcmVzLCB0ID0gb3B0aW9ucy5leHBpcmVzID0gbmV3IERhdGUoKTtcblx0XHRcdFx0dC5zZXRNaWxsaXNlY29uZHModC5nZXRNaWxsaXNlY29uZHMoKSArIGRheXMgKiA4NjRlKzUpO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gKGRvY3VtZW50LmNvb2tpZSA9IFtcblx0XHRcdFx0ZW5jb2RlKGtleSksICc9Jywgc3RyaW5naWZ5Q29va2llVmFsdWUodmFsdWUpLFxuXHRcdFx0XHRvcHRpb25zLmV4cGlyZXMgPyAnOyBleHBpcmVzPScgKyBvcHRpb25zLmV4cGlyZXMudG9VVENTdHJpbmcoKSA6ICcnLCAvLyB1c2UgZXhwaXJlcyBhdHRyaWJ1dGUsIG1heC1hZ2UgaXMgbm90IHN1cHBvcnRlZCBieSBJRVxuXHRcdFx0XHRvcHRpb25zLnBhdGggICAgPyAnOyBwYXRoPScgKyBvcHRpb25zLnBhdGggOiAnJyxcblx0XHRcdFx0b3B0aW9ucy5kb21haW4gID8gJzsgZG9tYWluPScgKyBvcHRpb25zLmRvbWFpbiA6ICcnLFxuXHRcdFx0XHRvcHRpb25zLnNlY3VyZSAgPyAnOyBzZWN1cmUnIDogJydcblx0XHRcdF0uam9pbignJykpO1xuXHRcdH1cblxuXHRcdC8vIFJlYWRcblxuXHRcdHZhciByZXN1bHQgPSBrZXkgPyB1bmRlZmluZWQgOiB7fSxcblx0XHRcdC8vIFRvIHByZXZlbnQgdGhlIGZvciBsb29wIGluIHRoZSBmaXJzdCBwbGFjZSBhc3NpZ24gYW4gZW1wdHkgYXJyYXlcblx0XHRcdC8vIGluIGNhc2UgdGhlcmUgYXJlIG5vIGNvb2tpZXMgYXQgYWxsLiBBbHNvIHByZXZlbnRzIG9kZCByZXN1bHQgd2hlblxuXHRcdFx0Ly8gY2FsbGluZyAkLmNvb2tpZSgpLlxuXHRcdFx0Y29va2llcyA9IGRvY3VtZW50LmNvb2tpZSA/IGRvY3VtZW50LmNvb2tpZS5zcGxpdCgnOyAnKSA6IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gY29va2llcy5sZW5ndGg7XG5cblx0XHRmb3IgKDsgaSA8IGw7IGkrKykge1xuXHRcdFx0dmFyIHBhcnRzID0gY29va2llc1tpXS5zcGxpdCgnPScpLFxuXHRcdFx0XHRuYW1lID0gZGVjb2RlKHBhcnRzLnNoaWZ0KCkpLFxuXHRcdFx0XHRjb29raWUgPSBwYXJ0cy5qb2luKCc9Jyk7XG5cblx0XHRcdGlmIChrZXkgPT09IG5hbWUpIHtcblx0XHRcdFx0Ly8gSWYgc2Vjb25kIGFyZ3VtZW50ICh2YWx1ZSkgaXMgYSBmdW5jdGlvbiBpdCdzIGEgY29udmVydGVyLi4uXG5cdFx0XHRcdHJlc3VsdCA9IHJlYWQoY29va2llLCB2YWx1ZSk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBQcmV2ZW50IHN0b3JpbmcgYSBjb29raWUgdGhhdCB3ZSBjb3VsZG4ndCBkZWNvZGUuXG5cdFx0XHRpZiAoIWtleSAmJiAoY29va2llID0gcmVhZChjb29raWUpKSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0XHRcdHJlc3VsdFtuYW1lXSA9IGNvb2tpZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9O1xuXG5cdGNvbmZpZy5kZWZhdWx0cyA9IHt9O1xuXG5cdCQucmVtb3ZlQ29va2llID0gZnVuY3Rpb24gKGtleSwgb3B0aW9ucykge1xuXHRcdC8vIE11c3Qgbm90IGFsdGVyIG9wdGlvbnMsIHRodXMgZXh0ZW5kaW5nIGEgZnJlc2ggb2JqZWN0Li4uXG5cdFx0JC5jb29raWUoa2V5LCAnJywgJC5leHRlbmQoe30sIG9wdGlvbnMsIHsgZXhwaXJlczogLTEgfSkpO1xuXHRcdHJldHVybiAhJC5jb29raWUoa2V5KTtcblx0fTtcblxufSkpO1xuIiwiLyoqXHJcbiAqIEZpbGUgbmF2aWdhdGlvbi5qcy5cclxuICpcclxuICogSGFuZGxlcyB0b2dnbGluZyB0aGUgbmF2aWdhdGlvbiBtZW51IGZvciBzbWFsbCBzY3JlZW5zIGFuZCBlbmFibGVzIFRBQiBrZXlcclxuICogbmF2aWdhdGlvbiBzdXBwb3J0IGZvciBkcm9wZG93biBtZW51cy5cclxuICovXHJcbiggZnVuY3Rpb24oKSB7XHJcblx0dmFyIHBhZ2VCb2R5LCBjb250YWluZXIsIGJ1dHRvbiwgbWVudSwgbGlua3MsIGksIGxlbjtcclxuXHJcblx0cGFnZUJvZHkgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnYm9keScpO1xyXG5cdGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCAnc2l0ZS1uYXZpZ2F0aW9uJyApO1xyXG5cclxuXHRpZiAoICEgY29udGFpbmVyICkge1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0YnV0dG9uID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlUYWdOYW1lKCAnYnV0dG9uJyApWzBdO1xyXG5cdGlmICggJ3VuZGVmaW5lZCcgPT09IHR5cGVvZiBidXR0b24gKSB7XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cclxuXHRtZW51ID0gY29udGFpbmVyLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoICduYXYtaW5uZXInIClbMF07XHJcblxyXG5cdC8vIEhpZGUgbWVudSB0b2dnbGUgYnV0dG9uIGlmIG1lbnUgaXMgZW1wdHkgYW5kIHJldHVybiBlYXJseS5cclxuXHRpZiAoICd1bmRlZmluZWQnID09PSB0eXBlb2YgbWVudSApIHtcclxuXHRcdGJ1dHRvbi5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHJcblx0bWVudS5zZXRBdHRyaWJ1dGUoICdhcmlhLWV4cGFuZGVkJywgJ2ZhbHNlJyApO1xyXG5cdGlmICggLTEgPT09IG1lbnUuY2xhc3NOYW1lLmluZGV4T2YoICduYXYtbWVudScgKSApIHtcclxuXHRcdG1lbnUuY2xhc3NOYW1lICs9ICcgbmF2LW1lbnUnO1xyXG5cdH1cclxuXHJcblx0YnV0dG9uLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcclxuXHRcdGlmICggLTEgIT09IGNvbnRhaW5lci5jbGFzc05hbWUuaW5kZXhPZiggJ3RvZ2dsZWQnICkgKSB7XHJcblx0XHRcdGlmKHBhZ2VCb2R5WzBdLmNsYXNzTGlzdC5jb250YWlucygnbWVudS1vcGVuJykpIHtcclxuXHRcdFx0XHRwYWdlQm9keVswXS5jbGFzc0xpc3QucmVtb3ZlKCdtZW51LW9wZW4nKTtcclxuXHRcdFx0fVxyXG5cdFx0Ly9cdHBhZ2VCb2R5LmNsYXNzTGlzdC5yZW1vdmUoJyBtZW51LW9wZW4nKTtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSA9IGNvbnRhaW5lci5jbGFzc05hbWUucmVwbGFjZSggJyB0b2dnbGVkJywgJycgKTtcclxuXHRcdFx0YnV0dG9uLnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAnZmFsc2UnICk7XHJcblx0XHRcdG1lbnUuc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICdmYWxzZScgKTtcclxuXHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRwYWdlQm9keVswXS5jbGFzc0xpc3QuYWRkKCdtZW51LW9wZW4nKTtcclxuXHRcdFx0Y29udGFpbmVyLmNsYXNzTmFtZSArPSAnIHRvZ2dsZWQnO1xyXG5cdFx0XHRidXR0b24uc2V0QXR0cmlidXRlKCAnYXJpYS1leHBhbmRlZCcsICd0cnVlJyApO1xyXG5cdFx0XHRtZW51LnNldEF0dHJpYnV0ZSggJ2FyaWEtZXhwYW5kZWQnLCAndHJ1ZScgKTtcclxuXHRcdH1cclxuXHR9O1xyXG5cclxuXHQvLyBHZXQgYWxsIHRoZSBsaW5rIGVsZW1lbnRzIHdpdGhpbiB0aGUgbWVudS5cclxuXHRsaW5rcyAgICA9IG1lbnUuZ2V0RWxlbWVudHNCeVRhZ05hbWUoICdhJyApO1xyXG5cclxuXHQvLyBFYWNoIHRpbWUgYSBtZW51IGxpbmsgaXMgZm9jdXNlZCBvciBibHVycmVkLCB0b2dnbGUgZm9jdXMuXHJcblx0Zm9yICggaSA9IDAsIGxlbiA9IGxpbmtzLmxlbmd0aDsgaSA8IGxlbjsgaSsrICkge1xyXG5cdFx0bGlua3NbaV0uYWRkRXZlbnRMaXN0ZW5lciggJ2ZvY3VzJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcclxuXHRcdGxpbmtzW2ldLmFkZEV2ZW50TGlzdGVuZXIoICdibHVyJywgdG9nZ2xlRm9jdXMsIHRydWUgKTtcclxuXHR9XHJcblxyXG5cdC8qKlxyXG5cdCAqIFNldHMgb3IgcmVtb3ZlcyAuZm9jdXMgY2xhc3Mgb24gYW4gZWxlbWVudC5cclxuXHQgKi9cclxuXHRmdW5jdGlvbiB0b2dnbGVGb2N1cygpIHtcclxuXHRcdHZhciBzZWxmID0gdGhpcztcclxuXHJcblx0XHQvLyBNb3ZlIHVwIHRocm91Z2ggdGhlIGFuY2VzdG9ycyBvZiB0aGUgY3VycmVudCBsaW5rIHVudGlsIHdlIGhpdCAubmF2LW1lbnUuXHJcblx0XHR3aGlsZSAoIC0xID09PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCAnbmF2LW1lbnUnICkgKSB7XHJcblxyXG5cdFx0XHQvLyBPbiBsaSBlbGVtZW50cyB0b2dnbGUgdGhlIGNsYXNzIC5mb2N1cy5cclxuXHRcdFx0aWYgKCAnbGknID09PSBzZWxmLnRhZ05hbWUudG9Mb3dlckNhc2UoKSApIHtcclxuXHRcdFx0XHRpZiAoIC0xICE9PSBzZWxmLmNsYXNzTmFtZS5pbmRleE9mKCAnZm9jdXMnICkgKSB7XHJcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSA9IHNlbGYuY2xhc3NOYW1lLnJlcGxhY2UoICcgZm9jdXMnLCAnJyApO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRzZWxmLmNsYXNzTmFtZSArPSAnIGZvY3VzJztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdHNlbGYgPSBzZWxmLnBhcmVudEVsZW1lbnQ7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHQvKipcclxuXHQgKiBUb2dnbGVzIGBmb2N1c2AgY2xhc3MgdG8gYWxsb3cgc3VibWVudSBhY2Nlc3Mgb24gdGFibGV0cy5cclxuXHQgKi9cclxuXHQoIGZ1bmN0aW9uKCBjb250YWluZXIgKSB7XHJcblx0XHR2YXIgdG91Y2hTdGFydEZuLCBpLFxyXG5cdFx0XHRwYXJlbnRMaW5rID0gY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoICcubWVudS1pdGVtLWhhcy1jaGlsZHJlbiA+IGEsIC5wYWdlX2l0ZW1faGFzX2NoaWxkcmVuID4gYScgKTtcclxuXHJcblx0XHRpZiAoICdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdyApIHtcclxuXHRcdFx0dG91Y2hTdGFydEZuID0gZnVuY3Rpb24oIGUgKSB7XHJcblx0XHRcdFx0dmFyIG1lbnVJdGVtID0gdGhpcy5wYXJlbnROb2RlLCBpO1xyXG5cclxuXHRcdFx0XHRpZiAoICEgbWVudUl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCAnZm9jdXMnICkgKSB7XHJcblx0XHRcdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XHJcblx0XHRcdFx0XHRmb3IgKCBpID0gMDsgaSA8IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW4ubGVuZ3RoOyArK2kgKSB7XHJcblx0XHRcdFx0XHRcdGlmICggbWVudUl0ZW0gPT09IG1lbnVJdGVtLnBhcmVudE5vZGUuY2hpbGRyZW5baV0gKSB7XHJcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0bWVudUl0ZW0ucGFyZW50Tm9kZS5jaGlsZHJlbltpXS5jbGFzc0xpc3QucmVtb3ZlKCAnZm9jdXMnICk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRtZW51SXRlbS5jbGFzc0xpc3QuYWRkKCAnZm9jdXMnICk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG1lbnVJdGVtLmNsYXNzTGlzdC5yZW1vdmUoICdmb2N1cycgKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH07XHJcblxyXG5cdFx0XHRmb3IgKCBpID0gMDsgaSA8IHBhcmVudExpbmsubGVuZ3RoOyArK2kgKSB7XHJcblx0XHRcdFx0cGFyZW50TGlua1tpXS5hZGRFdmVudExpc3RlbmVyKCAndG91Y2hzdGFydCcsIHRvdWNoU3RhcnRGbiwgZmFsc2UgKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH0oIGNvbnRhaW5lciApICk7XHJcbn0gKSgpO1xyXG4iLCIvKiBzdGlja3kgTWVudVxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cblxualF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuICAvL2lmICgkKHdpbmRvdykud2lkdGgoKSA+PSA5OTIpIHtcblxuICAgIC8vIGluaXQgc3RpY2t5IG1lbnVcbiAgICB2YXIgbGFzdFNjcm9sbFBvc2l0aW9uID0gMDtcbiAgICBjdXJyZW50U2Nyb2xsUG9zaXRpb24gPSAkKHdpbmRvdykuc2Nyb2xsVG9wKCk7XG4gICAgLy8kKFwiYm9keVwiKS5hZGRDbGFzcyhcImhhcy1zdGlja3ktbWVudVwiKTtcblxuICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24gPiAxMjApIHtcbiAgICAgICQoXCJib2R5XCIpLmFkZENsYXNzKFwic3RpY2t5LW1lbnVcIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICQoXCJib2R5XCIpLnJlbW92ZUNsYXNzKFwic3RpY2t5LW1lbnVcIik7XG4gICAgfVxuICAgIGxhc3RTY3JvbGxQb3NpdGlvbiA9IGN1cnJlbnRTY3JvbGxQb3NpdGlvbjtcblxuICAgICQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xuICAgICAgY3VycmVudFNjcm9sbFBvc2l0aW9uID0gJCh3aW5kb3cpLnNjcm9sbFRvcCgpO1xuICAgICAgaWYgKGN1cnJlbnRTY3JvbGxQb3NpdGlvbiA+IDEyMCkge1xuICAgICAgICAkKFwiYm9keVwiKS5hZGRDbGFzcyhcInN0aWNreS1tZW51XCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgJChcImJvZHlcIikucmVtb3ZlQ2xhc3MoXCJzdGlja3ktbWVudVwiKTtcbiAgICAgIH1cbiAgICAgIGlmIChjdXJyZW50U2Nyb2xsUG9zaXRpb24gPiBsYXN0U2Nyb2xsUG9zaXRpb24pIHtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInNjcm9sbC11cFwiKTtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5hZGRDbGFzcyhcInNjcm9sbC1kb3duXCIpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgalF1ZXJ5KFwiYm9keVwiKS5yZW1vdmVDbGFzcyhcInNjcm9sbC1kb3duXCIpO1xuICAgICAgICBqUXVlcnkoXCJib2R5XCIpLmFkZENsYXNzKFwic2Nyb2xsLXVwXCIpO1xuICAgICAgfVxuICAgICAgbGFzdFNjcm9sbFBvc2l0aW9uID0gY3VycmVudFNjcm9sbFBvc2l0aW9uO1xuICAgIH0pO1xuICAvL31cbiAgXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICpcbiAgKiBFeHRyYS1jb25mIGZvciBvbmVwYWdlc1xuICAqXG4gICogKioqKioqKioqKioqKioqKioqKioqKioqKiogKi9cbi8qICBqUXVlcnkoXCIubWVudS1pdGVtIGFcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgdmFyIG1lbnVJdGVtID0galF1ZXJ5KHRoaXMpLmF0dHIoJ2hyZWYnKTtcblxuICAgICAgalF1ZXJ5KCcubWFpbi1uYXZpZ2F0aW9uJykucmVtb3ZlQ2xhc3MoJ3RvZ2dsZWQnKTtcbiAgICAgIGpRdWVyeSgnYm9keScpLnJlbW92ZUNsYXNzKCdtZW51LXRvZ2dsZWQnKTtcblxuICAgICAgalF1ZXJ5KFtkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIGRvY3VtZW50LmJvZHldKS5hbmltYXRlKHtcbiAgICAgICAgICBzY3JvbGxUb3A6IGpRdWVyeShtZW51SXRlbSkub2Zmc2V0KCkudG9wLTEwMFxuICAgICAgfSwgODAwKS5kZWxheSgyMDApO1xuICB9KTsqL1xufSk7IiwiLyoqXHJcbiAqIEZpbGUgc2tpcC1saW5rLWZvY3VzLWZpeC5qcy5cclxuICpcclxuICogSGVscHMgd2l0aCBhY2Nlc3NpYmlsaXR5IGZvciBrZXlib2FyZCBvbmx5IHVzZXJzLlxyXG4gKlxyXG4gKiBMZWFybiBtb3JlOiBodHRwczovL2dpdC5pby92V2RyMlxyXG4gKi9cclxuKCBmdW5jdGlvbigpIHtcclxuXHR2YXIgaXNJZSA9IC8odHJpZGVudHxtc2llKS9pLnRlc3QoIG5hdmlnYXRvci51c2VyQWdlbnQgKTtcclxuXHJcblx0aWYgKCBpc0llICYmIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkICYmIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyICkge1xyXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoICdoYXNoY2hhbmdlJywgZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBpZCA9IGxvY2F0aW9uLmhhc2guc3Vic3RyaW5nKCAxICksXHJcblx0XHRcdFx0ZWxlbWVudDtcclxuXHJcblx0XHRcdGlmICggISAoIC9eW0EtejAtOV8tXSskLy50ZXN0KCBpZCApICkgKSB7XHJcblx0XHRcdFx0cmV0dXJuO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRlbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoIGlkICk7XHJcblxyXG5cdFx0XHRpZiAoIGVsZW1lbnQgKSB7XHJcblx0XHRcdFx0aWYgKCAhICggL14oPzphfHNlbGVjdHxpbnB1dHxidXR0b258dGV4dGFyZWEpJC9pLnRlc3QoIGVsZW1lbnQudGFnTmFtZSApICkgKSB7XHJcblx0XHRcdFx0XHRlbGVtZW50LnRhYkluZGV4ID0gLTE7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHRlbGVtZW50LmZvY3VzKCk7XHJcblx0XHRcdH1cclxuXHRcdH0sIGZhbHNlICk7XHJcblx0fVxyXG59ICkoKTtcclxuIiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xyXG5cclxuICBqUXVlcnkoJ2JvZHkuc2luZ2xlIC53cC1ibG9jay1nYWxsZXJ5IC53cC1ibG9jay1pbWFnZSBhJykuZWFjaChmdW5jdGlvbigpIHtcclxuICAgIC8vIEFkZCB0aGUgZGF0YS1saWdodGJveCBhdHRyaWJ1dGUgd2l0aCBhIHZhbHVlIChlLmcuLCAnaW1hZ2UnKSB0byBlYWNoIDxhPiB0YWdcclxuICAgIGpRdWVyeSh0aGlzKS5hdHRyKCdkYXRhLWxpZ2h0Ym94JywgJ2dhbGxlcmllJyk7XHJcbiAgfSk7XHJcblxyXG5cdGlmIChsb2NhdGlvbi5oYXNoKSBsb2NhdGlvbi5ocmVmID0gbG9jYXRpb24uaGFzaDtcclxuXHJcblx0aWYgKGpRdWVyeS5jb29raWUoJ2hpZGVjb29raWUnKSAhPSBcImhpZGRlblwiICkge1xyXG5cdFx0JCgnI2Nvb2tpZWJhbm5lcicpLnJlbW92ZUNsYXNzKCdoaWRkZW4nKTtcclxuXHR9XHJcblxyXG5cdGlmIChqUXVlcnkuY29va2llKCdoaWRlcG9wdXAnKSAhPSBcImhpZGRlblwiICkge1xyXG5cdFx0JCgnI3BvcHVwJykucmVtb3ZlQ2xhc3MoJ2hpZGRlbicpO1xyXG5cdH1cclxuXHRcclxuXHQkKCcjY29va2llYmFubmVyIGJ1dHRvbicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAgIHZhciBkYXRlID0gbmV3IERhdGUoKTtcclxuICAgICAgZGF0ZS5zZXRUaW1lKGRhdGUuZ2V0VGltZSgpKygzNjAqMjQqNjAqNjAqMTAwMCkpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImhpZGVjb29raWVcIiArIFwiPVwiICsgXCJoaWRkZW5cIiArIFwiOyBleHBpcmVzPVwiICsgZGF0ZS50b0dNVFN0cmluZygpO1xyXG5cclxuICAgICAgJCgnI2Nvb2tpZWJhbm5lcicpLmFkZENsYXNzKCdoaWRkZW4nKTtcclxuXHR9KTtcclxuXHRcclxuXHRqUXVlcnkoXCIucG9wX21hamV1clwiKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdFx0XHRldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICB2YXIgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgIGRhdGUuc2V0VGltZShkYXRlLmdldFRpbWUoKSsoNjAqNjAqMTAwMCkpO1xyXG4gICAgICBkb2N1bWVudC5jb29raWUgPSBcImhpZGVwb3B1cFwiICsgXCI9XCIgKyBcImhpZGRlblwiICsgXCI7IGV4cGlyZXM9XCIgKyBkYXRlLnRvR01UU3RyaW5nKCk7XHJcblx0ICBcclxuXHQgIGpRdWVyeSgnI3BvcHVwJykuYWRkQ2xhc3MoJ2hpZGRlbicpO1xyXG5cdCAgalF1ZXJ5KCdib2R5JykucmVtb3ZlQ2xhc3MoJ3BvcHVwLW9wZW4nKTtcclxuXHR9KTtcclxuXHJcblx0aWYoalF1ZXJ5KCcjcG9wdXAnKS5oYXNDbGFzcygnZnVsbHNjcmVlbicpICYmICFqUXVlcnkoJyNwb3B1cCcpLmhhc0NsYXNzKCdoaWRkZW4nKSkge1xyXG5cdFx0alF1ZXJ5KCdib2R5JykuYWRkQ2xhc3MoJ3BvcHVwLW9wZW4nKTtcclxuXHR9XHJcblxyXG59KVxyXG5cclxubGlnaHRib3gub3B0aW9uKHtcclxuICAnYWxidW1MYWJlbCc6IFwiSW1hZ2UgJTEgc3VyICUyXCIsXHJcbn0pXHJcbiJdfQ==
