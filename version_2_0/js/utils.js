google.load("feeds", "1");

//elementId is a div
function Feed(feedURL, elementId) {
	var feedObj = new google.feeds.Feed(feedURL);
	feedObj.setNumEntries(5);
	
	function load() {
		feedObj.load(function(result) {
			var inner = "";
			for(var i = 0; i < result.feed.entries.length; i ++) {
				inner += createElement(result.feed.entries[i]);
			}
			document.getElementById(elementId).innerHTML = inner;
		});
	}

	function createElement(feedEntry) {
		return "<a class='feed-link' href='" + feedEntry.link + "'><p class='feed-title'>" + feedEntry.title + "</p><p class='feed-content'>" + feedEntry.contentSnippet + "</p></a>";
	}

	function setNumEntries(numEntries) {
		feedObj.setNumEntries(numEntries);
	}

	load();
	setInterval(function() {load();}, 10000);

	$("#google-news").click(function() {
		$("#world-news").css('display', 'block')
		.siblings()
		.css('display', 'none');
	});

	$("#reddit-news").click(function() {
		$("#reddit-programming").css('display', 'block')
		.siblings()
		.css('display', 'none');
	});

	$("#acm-news").click(function() {
		$("#acm").css('display', 'block')
		.siblings()
		.css('display', 'none');
	});
}
