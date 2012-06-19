(function($){

	var _defaults =	{
		startLineHeight: null
	};

	var methods = {
		init: function(options)
		{
			return this.each(function() {
				var self = $(this);
				var settings = $.extend({}, _defaults);
				var originalValue = self.html();

				self.html('.');
				settings.startLineHeight = self.height();
				self.html(originalValue);

				_adjustFontSize(self, settings.startLineHeight);
			})
		}
	};

	// Private functions
	function _adjustFontSize(self, startLineHeight)
	{
		if (startLineHeight == null) return; // height can't be determined

		while(self.height() > startLineHeight) {
			var fs = parseInt(self.css('font-size').replace('px', ''));
			self.css('font-size', fs - 1);
		}
	};

	// Plugin entry
	$.fn.stringfitter = function(method)
	{
		if(methods[method]) { return methods[method].apply(this, Array.prototype.slice.call(arguments, 1)); }
		else if(typeof method === "object" || !method) { return methods.init.apply(this, arguments); }
		else { $.error("Method "+ method + " does not exist on stringfitter"); }
	};

})(jQuery);