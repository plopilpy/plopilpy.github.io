var minmax = 0;
function truncate(str, n){
  return (str.length > n) ? str.slice(0, n-1) + '&hellip;' : str;
};
function getnews() {
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: 'https://api.rss2json.com/v1/api.json?rss_url=' + newsurl,
        success: function (response) {
            
            if ($('ol').children().length < 5); {
            $('ol').html("");
            for (let g = 0; g < 5; g++) {
                    $('ol').append('<li value="'+ ((g + minmax) + 1) +'"><p class="feed' + (g + minmax) + '">Loading...</p></li>')
                }
            }
            setTimeout(function () {
                for (let i = 0; i < 5; i++) {
                    this["ncontent" + (i + minmax)] = truncate((response.items[(i + minmax)].content).replace(/\n/g, ""), 100);
                    this["ntitle" + (i + minmax)] = truncate((response.items[(i + minmax)].title), 80);
                    this["nlink" + (i + minmax)] = (response.items[(i + minmax)].guid);
                    $(".feed" + (i + minmax)).html('<b><a target="_blank" href="' + this["nlink" + (i + minmax)] + '"><p class="ntitle">' + this["ntitle" + (i + minmax)] + '</p></b></a><p class="ncontent">' + this["ncontent" + (i + minmax)] + '</p>')
                    
                    var feedlist = document.querySelector('.feed'+ (i + minmax));
                    var feedncontent = document.querySelector('.feed'+ (i + minmax) +' .ncontent');
                    var feedlen = document.querySelector('.feed'+ (i + minmax)).childNodes.length;

                    if (feedncontent.innerHTML == "" && feedlen == 2){
                    feedncontent.innerHTML = "&lt;no description&gt;"
                    } else if (feedncontent.innerHTML !== "" && feedlist.childNodes.length > 2) {
                            while (feedlist.childNodes.length > 2) {
                                feedlist.removeChild(feedlist.lastChild);
                            }
                    } else if (feedncontent.innerHTML == "" && feedlist.childNodes.length > 2) {
                    feedncontent.remove();
                            while (feedlist.childNodes.length > 2) {
                                feedlist.removeChild(feedlist.lastChild);
                            }
                    }

                    if (minmax !== 0) {
                        $("#page1").attr("style", "")
                        $("#page2").attr("style", "color: black; text-decoration: none; cursor: url('system/resource/cursors/default.png'),auto;")
                    } else if (minmax == 0) {
                        $("#page2").attr("style", "")
                        $("#page1").attr("style", "color: black; text-decoration: none; cursor: url('system/resource/cursors/default.png'),auto;")
                    }
                }
            }, 10);

        },
        error: function (data) {
            // data will not be JSON
        }
    });
}
newsurl = 'http://feeds.bbci.co.uk/news/world/rss.xml';
getnews();

async function getweather() {
    var sw_config = `{
        "location": "Etobicoke",
        "unit": "m"
    }`
    var sw_config_parsed = parent.JSON.parse(sw_config);
    var sw_city = sw_config_parsed.location
    var sw_unit = sw_config_parsed.unit
    $("#weather-icon").load("https://wttr.in/" + sw_city + "?format=%c&" + sw_unit, function(){     if (w96.ui.Theme.currentTheme == "xp") { $("#weather-icon").css("text-shadow", "1px 1px 1px") }}  )
    $("#weather-temp").load("https://wttr.in/" + sw_city + "?format=%t&" + sw_unit, function(){ $("#weather-temp").text($("#weather-temp").text().replace("+","")) }  )
    $("#wind-speed").load("https://wttr.in/" + sw_city + "?format=%w&" + sw_unit)
    setInterval(function () { 
        $("#weather-icon").load("https://wttr.in/" + sw_city + "?format=%c&" + sw_unit)
        $("#weather-temp").load("https://wttr.in/" + sw_city + "?format=%t&" + sw_unit, function(){ $("#weather-temp").text($("#weather-temp").text().replace("+","")) }  )
        $("#wind-speed").load("https://wttr.in/" + sw_city + "?format=%w&" + sw_unit)
     }, 8000);
}

getweather();


var _0x8ff8ee=_0x3804;function _0x238f(){var _0x36dda2=['865730NmWXvx','6608497YSFReG','<style>#sp-cr{font-size:\x2011px;\x20position:\x20absolute;\x20right:\x201px;\x20bottom:\x201px;\x20filter:\x20opacity(0.2);\x20transition:\x20filter\x201s;}\x20#sp-cr:hover{filter:\x20opacity(1);}</style><div\x20id=\x22sp-cr\x22>SlatePanel\x20&copy;<a\x20href=\x22https://github.com/plopilpy\x22>Plopilpy</a>,\x202023</div>','7190361IdKlkW','5cxJCUb','12jnBBTe','.slatepanel-app','710924mRzXeQ','6539448FboVxe','274454JhdbAU','286WhnyJY','3929154qxcYPs','2RXTKiy'];_0x238f=function(){return _0x36dda2;};return _0x238f();}function _0x3804(_0x1ac6e0,_0x4cf411){var _0x238fee=_0x238f();return _0x3804=function(_0x3804b3,_0x1a83bf){_0x3804b3=_0x3804b3-0xa3;var _0x55c9b4=_0x238fee[_0x3804b3];return _0x55c9b4;},_0x3804(_0x1ac6e0,_0x4cf411);}(function(_0x1d298e,_0x1c6a2d){var _0x1e4220=_0x3804,_0x500658=_0x1d298e();while(!![]){try{var _0x2bfb9b=-parseInt(_0x1e4220(0xaf))/0x1*(-parseInt(_0x1e4220(0xac))/0x2)+-parseInt(_0x1e4220(0xa8))/0x3*(parseInt(_0x1e4220(0xaa))/0x4)+parseInt(_0x1e4220(0xa7))/0x5*(-parseInt(_0x1e4220(0xae))/0x6)+parseInt(_0x1e4220(0xa4))/0x7+-parseInt(_0x1e4220(0xab))/0x8+-parseInt(_0x1e4220(0xa6))/0x9+-parseInt(_0x1e4220(0xa3))/0xa*(-parseInt(_0x1e4220(0xad))/0xb);if(_0x2bfb9b===_0x1c6a2d)break;else _0x500658['push'](_0x500658['shift']());}catch(_0x94eaff){_0x500658['push'](_0x500658['shift']());}}}(_0x238f,0x76f70),$(_0x8ff8ee(0xa9))['append'](_0x8ff8ee(0xa5)));
