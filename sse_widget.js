// JavaScript Document	http://softwarepda.net

/*
var head = document.getElementsByTagName("head")[0];
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js';
head.appendChild(script);
*/

var head = document.getElementsByTagName("head")[0];
script = document.createElement('script');
script.type = 'text/javascript';
script.src = 'https://assets.pinterest.com/js/pinit.js';
head.appendChild(script);

/************* Facebook Script *************/
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

/*****************Google Script ****************/
(function() {
    var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;
    po.src = 'https://apis.google.com/js/plusone.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);
  })();

/***************** Twitter Script ****************/
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

/***********************************************************/
$(document).ready(function(){
	$('.sse_button_facebook_like').append('<div class="fb-like" data-send="false" data-layout="button_count" data-width="100" data-show-faces="true"></div>');
	$('.sse_button_google').append('<div class="g-plusone" data-size="medium"></div>');
	$('.sse_button_tweet').append('<a href="https://twitter.com/share" class="twitter-share-button">Tweet</a>');
	$('.sse_button_pinterest_pinit').append('<a href="//pinterest.com/pin/create/button/" data-pin-do="buttonBookmark" ><img src="//assets.pinterest.com/images/pidgets/pin_it_button.png" /></a>');
	
	$('.sse_followbutton_facebook_like').attr('href','http://facebook.com/'+$('.sse_followbutton_facebook_like').attr('userid'));
	$('.sse_followbutton_google').attr('href','https://plus.google.com/u/0/'+$('.sse_followbutton_google').attr('userid'));
	$('.sse_followbutton_tweet').attr('href','https://twitter.com/intent/user?screen_name='+$('.sse_followbutton_tweet').attr('userid'));
	$('.sse_followbutton_pinterest_pinit').attr('href','http://pinterest.com/'+$('.sse_followbutton_pinterest_pinit').attr('userid'));
	$('.sse_followbutton_youtube').attr('href','http://www.youtube.com/user/'+$('.sse_followbutton_youtube').attr('userid'));
	
	$('.sse_followbutton_facebook_like').append('<img src="http://web2rule.com/html-code/images/facebook.png" style="width:32px;" />');
	$('.sse_followbutton_google').append('<img src="http://web2rule.com/html-code/images/google.png" style="width:32px;" />');
	$('.sse_followbutton_tweet').append('<img src="http://web2rule.com/html-code/images/twitter.png" style="width:32px;" />');
	$('.sse_followbutton_pinterest_pinit').append('<img src="http://web2rule.com/html-code/images/pinterest-icon.png" style="width:32px;" />');
	$('.sse_followbutton_youtube').append('<img src="http://web2rule.com/html-code/images/youtube.png" style="width:32px;" />');
});