$.ajax({
    type: 'GET',
    dataType: 'json',
    url: 'https://api.rss2json.com/v1/api.json?rss_url=http://feeds.bbci.co.uk/news/world/rss.xml',
    success: function(response){
        var ncontent1 = (response.items[0].content)
        var ntitle1 = (response.items[0].title)
        var nlink1 = (response.items[0].guid)

        var ncontent2 = (response.items[1].content)
        var ntitle2 = (response.items[1].title)
        var nlink2 = (response.items[1].guid)

        var ncontent3 = (response.items[2].content)
        var ntitle3 = (response.items[2].title)
        var nlink3 = (response.items[2].guid)

        var ncontent4 = (response.items[3].content)
        var ntitle4 = (response.items[3].title)
        var nlink4 = (response.items[3].guid)

        var ncontent5 = (response.items[4].content)
        var ntitle5 = (response.items[4].title)
        var nlink5 = (response.items[4].guid)
        },
    error: function(data) {
        // `data` will not be JSON
    }
});
