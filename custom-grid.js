function allNotActive(){
		setTimeout(function(){
  	$('.new-article-text.small-card.article').attr("style","min-height: 10em !important");
     }, 600);
     
     $('.img-cover.img-radius-24.small-card.media').attr("style", "border-bottom-left-radius: 0 !important");
     $('.article-category.article').css('display','none');
     $('.short-description.article').css('display','none');
     $('.new-article-img-wrapper.small-card.media ').attr("style","height: 20em !important");
     $('.new-article-card-text-wrapper.article').css("flex-direction", "row");
		 $('.featured-blog-rich-text.article').attr("style","font-size: 1.5em !important");
		 $('.new-article-text.small-card.article').attr("style","padding-top: 1.5em");
     $('.blog-article-item').attr("style", "grid-column: span 1 !important");
     $('.blog-article-item').css("display","flex");
     $('.blog-article-item').css("flex-direction", "column");
		 $('.img-cover.img-radius-24.small-card').attr("style", "border-top-right-radius: 1.5em !important");
  
}

function allActive(){
  	setTimeout(function(){
       customCMS();
    }, 800);
  	setTimeout(function(){
      loadArticles();
      $('.blog-article-item').removeAttr("style");
			}, 500);
}

$(document).ready(function() {
if (window.innerWidth > 767) {

	 $('.sort_field').click(function() {
    if ($("#all").is(":checked")) {
       $('.new-article-img-wrapper.small-card.media').removeAttr("style");
     	 setTimeout(function(){
       customCMS();
    }, 800);
  	setTimeout(function(){
      loadArticles();
      $('.blog-article-item').removeAttr("style");
			}, 700);
		}
  });
  $('.media-category-all').click(function() {
  	 setTimeout(function(){
       customCMS();
    }, 800);
  	setTimeout(function(){
      loadArticles();
      $('.blog-article-item').removeAttr("style");
		}, 700);
  });
  $('.media-category').click(function() { 
  	 allNotActive();
  });
}

$(".heading-32m").each(function() {
    var text = $(this).text().split(" ");
    var lastWord = text.pop();
    text = text.join(" ") + " <b>" + lastWord + "<span class='dot-color-orange'>.</span></b>";
    $(this).html(text);
  });
  
	jQuery(function($) {
        $lis2 = $('.blog-article-item-2'); 
        min2 = 6; 
        max2 = $lis2.length;
        var visible2 = min2;
        
        function showUpToIndex2(index) {
            $lis2.hide();
            $lis2.slice(0, index).show();
        }
    
        function disableButtons2(){
            if (visible2 >= max2){
                visible2 = max2;
                $('.load-more-btn').hide();
            }
            else
            {
                $('.load-more-btn').show();
            }
        }
        
        showUpToIndex2(visible2);
        disableButtons2();
        
        $('.load-more-btn').click(function(e) {
            e.preventDefault();
            visible2 = visible2 + 100;
            disableButtons2();  
            showUpToIndex2(visible2);
        });
    });
  
});

function customCMS(){
    var card_bg = $('.new-article-text.small-card.article');
    var card_img = $('.new-article-img-wrapper.small-card.media');
    var bg_num = 0;
    var blog_title = $('.featured-blog-rich-text.article');
    var blog_desc = $('.short-description.article');
    var blog_cat = $('.article-category.article');
    var blog_text_wrap = $('.new-article-card-text-wrapper.article');

    blog_cat.css('display','none');
    blog_desc.css('display','none');
    blog_title.css('font-size','1.5em');
    blog_text_wrap.css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between'
    });

    $('.article-category-and-button.article').css('max-width','5em');
    $('.white-arrow-button').css('margin-left','auto');

    for(var z=5; z<card_img.length;){

    $('.article-category-and-button.article').eq(z).css('max-width','none');

    $('.new-article-card-text-wrapper.article').eq(z).css('width','100%');

    blog_cat.eq(z).css('display','flex');
    blog_text_wrap.eq(z).css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between'
    });
        z = z + 5;
    }
    for(var y=0; y<card_img.length;){

    $('.article-category-and-button.article').eq(y).css('max-width','none');

     card_img.eq(y).css('height','100%');
        
    if (window.innerWidth > 767 && window.innerWidth < 992) {
		 blog_title.eq(y).css('font-size','2em');
     $('.blog-article-item').eq(y).css('max-height','23em');
   	 blog_cat.eq(y).css('display','flex');
        blog_text_wrap.eq(y).css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        blog_desc.eq(y).css('display','block');    
		}
		else{
				
    		$('.blog-article-item').eq(y).css('max-height','23em');
   			 blog_cat.eq(y).css('display','flex');
        blog_text_wrap.eq(y).css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        blog_title.eq(y).css('font-size','3.4375em');
        blog_desc.eq(y).css('display','block');    
        card_img.eq(y).css('max-width','27em');  
      
		}
    card_bg.eq(y).css({       
            "border-bottom-left-radius": "0"
          });
    $('.blog-article-item').eq(y).css({
            "border-top-left-radius": "1.5em",
            "border-top-right-radius": "1.5em",
            "border-bottom-left-radius": "1.5em"
          });
        $('.img-cover.img-radius-24.small-card').eq(y).css({
        "border-top-right-radius": "0",
          });
        y = y + 6;
    }
}

function customCMSArticle(){
    var card_bg = $('.new-article-text.small-card.article-2');
    var card_img = $('.new-article-img-wrapper.small-card.article-2');
    var bg_num = 0;
    var blog_title = $('.featured-blog-rich-text.article-2');
    var blog_desc = $('.short-description.article-2');
    var blog_cat = $('.article-category.article-2');
    var blog_text_wrap = $('.new-article-card-text-wrapper.article-2');

    blog_cat.css('display','none');
    blog_desc.css('display','none');
    blog_title.css('font-size','1.5em');
    blog_text_wrap.css({
        'display': 'flex',
        'flex-direction': 'row',
        'justify-content': 'space-between'
    });

    $('.article-category-and-button.article-2').css('max-width','5em');
    $('.white-arrow-button').css('margin-left','auto');

    for(var z=5; z<card_img.length;){

    $('.article-category-and-button.article-2').eq(z).css('max-width','none');
    $('.new-article-card-text-wrapper.article-2').eq(z).css('width','100%');

    blog_cat.eq(z).css('display','flex');
    blog_text_wrap.eq(z).css({
        'display': 'flex',
        'flex-direction': 'column',
        'justify-content': 'space-between'
    });
        z = z + 5;
    }

    for(var y=0; y<card_img.length;){

    $('.article-category-and-button.article-2').eq(y).css('max-width','none');
    card_img.eq(y).css('height','100%');
        
    if (window.innerWidth > 767 && window.innerWidth < 992) {
		 blog_title.eq(y).css('font-size','2em');
     $('.blog-article-item-2').eq(y).css('max-height','23em');
   	 blog_cat.eq(y).css('display','flex');
        blog_text_wrap.eq(y).css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        blog_desc.eq(y).css('display','block');    
     
		}
		else{
    		$('.blog-article-item-2').eq(y).css('max-height','23em');
   			 blog_cat.eq(y).css('display','flex');
        blog_text_wrap.eq(y).css({
            'display': 'flex',
            'flex-direction': 'column'
        });
        blog_title.eq(y).css('font-size','3.4375em');
        blog_desc.eq(y).css('display','block');    
        card_img.eq(y).css('max-width','27em');  
		}
    card_bg.eq(y).css({       
            "border-bottom-left-radius": "0"
          });
    $('.blog-article-item-2').eq(y).css({
            "border-top-left-radius": "1.5em",
            "border-top-right-radius": "1.5em",
            "border-bottom-left-radius": "1.5em"
          });
        $('.img-cover.img-radius-24.small-card.article-2').eq(y).css({
        "border-top-right-radius": "0",
          });
        y = y + 6;
    }
}

$(document).ready(function(){
loadArticles();
if (window.innerWidth > 767) {
  	setTimeout(function(){
    	customCMS();
   		customCMSArticle();
    }, 500);
}
});
