My home page

####How to configure your own homepage

######Prerequisets:
- HTTP Server
- git

######Configuring
The first step is to clone the repository to your server:
```
cd path/to/your/htttp/server/directory/
git clone https://github.com/ChrisColahan/ChrisColahan.github.io.git
```
The next step is to configure your new home page.
```
cd ChrisColahan.github.io/config/
```

Now edit the config.json to your liking.

######The config.json
The config.json must be valid JSON.

Note the structure of the JSON:
```
{
	"side_items":[
		{
			"name":"background-image",
			"icon_url":"img/home.png",
			"type":"background",

			"background_image":"img/background_night_sky_1900_600.jpg"
		},
		{

			"name":"google_news",
			"icon_url":"img/google.png",
			"type":"rss",

			"rss_url":"https://news.google.com/?output=rss",
			"rss_num_items":5
		},
		{
			"name":"reddit-programming",
			"icon_url":"img/reddit.jpg",
			"type":"rss",

			"rss_url":"http://www.reddit.com/r/programming/.rss",
			"rss_num_items":5
		},
		{
			"name":"acm",
			"icon_url":"img/acm.jpg",
			"type":"rss",

			"rss_url":"http://rss.acm.org/technews/TechNews.xml",
			"rss_num_items":5
		}

	]
}
```

NOTE: the sidebar is ordered in the order items appear in the config.

The whole config is a single JSON object conatining an array named side_items. Each object in side_items corresponds to an item on the sidebar that can be clicked. Here is a list of the required attributes and the valid values that can be in them:
Attribute | valid values | description
--------- | ------------ | -----------
name      | String (must be unique) | A name for your item. Must be unique. Required.
icon_url  | String. must be valid url (can be relative or absolute) | Url of the image that will be used for the icon of the image in the sidebar. Required.
type      | String. Valid values are background (only use one of these in your page) and rss (an rss feed) | The type of "stuff" the icon displays when clicked. Required.

Here is a list of the optional values for each type:
Type       | Attribute    | valid values | description
---------- | ------------ | ------------ | -----------
background | backgrond_image | string. (url to the image to use) | An image to use for the background. It is better to use images that are close to the resolution of your screen. (or a common resolution)
rss        | rss_url      | string (url) | The url to the rss feed to load text from
rss        | rss_num_items | integer     | The number of items from the rss feed to load.

Extra note about RSS feeds: currently, rss feeds re-load themselves once every 10 seconds via AJAX. This may cause bandwidth issues if you have a slow connection or are loading a very large amount of feeds and/or number of items in feeds.
