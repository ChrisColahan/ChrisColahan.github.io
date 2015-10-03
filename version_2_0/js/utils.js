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
	
	$("#" + elementId + "_sidebar").click(function() {
		$("#" + elementId).css('display', 'block')
		.siblings()
		.css('display', 'none');
	});
}

function Element(jsonElement) {
	$("#sidebar").append("<a id='" + jsonElement.name + "_sidebar' class='sidebar-item'><img src='" + jsonElement.icon_url + "'></img></a>");
	
	$("#info-bar").append("<div class='info-bar-item' id='" + jsonElement.name + "'></div>");
	
	if(jsonElement.type === 'rss') {
		new Feed(jsonElement.rss_url, jsonElement.name);
	}
}

function loadFromConfig(configFile) {
	$.getJSON(configFile, function(result) {
		for(var i = 0; i < result.side_items.length; i++) {
			var jsonElement = result.side_items[i];
			new Element(jsonElement);
		}
	});
}
