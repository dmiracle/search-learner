/**
 * Created by nlivni on 4/16/15.
 */
var siteUrl = 'http://searchlearner.twoifiplay.com/'

var bitlyToken = '729cb00cf7c2b6b22bb886bea679cfb85555774b';
var bitlyRequestUrl = 'https://api-ssl.bitly.com/v3/shorten?access_token='
                    + bitlyToken
                    + '&longUrl=http%3A%2F%2Fexample.com%2Fpage%3Fparameter%3Dvalue%23anchor&format=json';

var $urlTextContainer = $('#url-text-container');
var $theUrl = $('#the-url');
var $srchTerm = $('#srch-term');

$srchTerm.on('keypress', function() {
    var $generateBtn = $('#generate-btn');
    $generateBtn.removeClass("btn-disabled");
    $generateBtn.addClass("btn-primary");
});

$('#generate-btn').on('click', function() {
    var theSearch = $('#srch-term').val();
    $('#generate-btn.btn-primary').removeClass("btn-primary").addClass("btn-disabled");
    $urlTextContainer.removeClass("hidden");

    var searchUrl = encodeURI('https://www.google.com/search?q=' + theSearch);
    var searchLearnerUrl = siteUrl + '?search=' + searchUrl;
    $theUrl.text(searchUrl);


} );
