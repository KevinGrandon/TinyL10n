(function() {
	var dict = false, tagMatcher = /\{\{([^}]+)\}\}/g;

	function gotLocale(o) {
		dict = o.obj
		window.dispatchEvent(new CustomEvent('localized'))
	}

	var oReq = new XMLHttpRequest()
	oReq.onload = gotLocale
	oReq.open('get', '/locale/' + navigator.language + '.json', true)
	oReq.send()

	window._ = function(key, data) {
		var val = dict[key]

		// Only run the regex on strings that may contain tags
		if (val.indexOf('{{') !== -1) {
			val.replace(tagMatcher, function(match, property) {
				return data[property]
			});
		}
		return val
	}

	window.l10n = {
		ready: function(callback) {
			if (dict) {
				return callback()
			}
			window.addEventListener('localized', callback)	
		}
	}
}());
