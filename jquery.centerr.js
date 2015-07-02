// centerr by Stephen Widom 2015-05-27 - stephenwidom.com
(function($){ // Absolutely center an element vertically and horizontally within its parent
	$.fn.centerr = function(o){
		var s = $.extend({
			mobile: 767 // Mobile breakpoint - don't do anything on mobile
		},o);
		var w = Math.max(document.documentElement.clientWidth,window.innerWidth || 0); // Get the viewport width
		if(w > s.mobile){ // If we're NOT on a mobile view
			this.css({
				position:   'absolute',
			    visibility: 'hidden', // So the element isn't displayed before we position it properly
			    display:    'block'
			});
			optionHeight = this.outerHeight();
			optionWidth = this.outerWidth();
			this.css({
				top: 		'50%',
				left: 		'50%',
				visibility: 'visible',
				marginLeft: -Math.abs(optionWidth / 2),
				marginTop:  -Math.abs(optionHeight / 2)
			});
		} else { // If we ARE mobile...
			this.css({
				visibility:'visible',
				display:'block' // Make sure we're still rendering target element
			});
		}
		return this;
	}
}(jQuery));