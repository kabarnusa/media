var ListBlogLink = &quot;http://www.kabarnusa.com&quot;;
    var ListCount = 10;
    var ChrCount = 85;
    var TitleCount = 70;
    var ImageSize = 150;
    var showcomments = &quot;off&quot;;
    var showdate = &quot;off&quot;;
    var showauthor = &quot;off&quot;;
    var showthumbnail = &quot;off&quot;;
    var showlabel = &quot;off&quot;;
    var showcontent = &quot;off&quot;;

    var RandomArray = [];
    var TotalPosts  = 0;
    var RandomArray = new Array(ListCount);

    function TotalCount(json) {
        TotalPosts   = json.feed.openSearch$totalResults.$t
    }
    document.write(&#39;&lt;script type=\&quot;text/javascript\&quot; src=\&quot;/feeds/posts/default?alt=json-in-script&amp;callback=TotalCount\&quot;&gt;&lt;\/script&gt;&#39;);

    function GenerateNum() {
        for (var i = 0; i &lt; ListCount ; i++) {
        for (var j = 0; j &lt; RandomArray.length; j++){
        var RandomNum = Math.floor(Math.random() * (TotalPosts ) + 1);
        RandomArray[i] = RandomNum; }
                                                                      }
    }