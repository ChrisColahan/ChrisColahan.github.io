google.load("feeds", "1");

//load some stuff from feed into element
function loadFromFeed(feed, elementId) {
	feed.load(function(result) {
	    if(!result.error) {
	        var output = "<ul>";
	        var container = document.getElementById(elementId);
	        for(var i = 0; i < result.feed.entries.length; i ++) {
	            var entry = result.feed.entries[i];
	            output += ("<li><div class='inner-box'><a href='" + entry.link + "'><p class='box-title'>" + entry.title + "</p></a>" + entry.contentSnippet + "</div></li>");
	        }
	        output += "</ul>";
	        container.innerHTML = output;
	    }
	});
	}

function addRSSFeed(feedURL, elementId) {
	var feed = new google.feeds.Feed(feedURL);
	feed.setNumEntries(5);
	loadFromFeed(feed, elementId);
	setInterval(function() {
	    loadFromFeed(feed, elementId);
	}, 1000*30);
}

function parallaxEffect() {
    var scrolled = $(window).scrollTop();
    $('.background').css('top', -(scrolled * 0.33) + 'px');
}

function parallaxEffectLayer() {
    var scrolled = $(window).scrollTop();
    $('.background-layer').css('top', -(scrolled * 0.66) + 'px');
}

$(window).scroll(function(e) {
    parallaxEffect();
});

//for time
function padZeros(numToPad, size) {
    var s = numToPad + "";
    while(s.length < size) s = "0" + s;
    return s;
}

function updateTime() {
    var time = new Date();
    document.getElementById("time").innerHTML = "<p>" + padZeros(time.getHours(), 2) + ":" + padZeros(time.getMinutes(), 2) + ":" + padZeros(time.getSeconds(), 2) + "</p>";
}

function setRandomTiledBackground(imageLinks) {
    $("#bg").css("background-image","url(" + imageLinks[Math.floor(Math.random() * imageLinks.length)]  + ")");
}

window.onload = function() {
	setInterval(function() {updateTime();}, 100);
}