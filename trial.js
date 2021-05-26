

var slideshowDuration = 4000;
var slideshow=$('.main-content .slideshow');


function slideshowSwitch(slideshow,index,auto){
  if(slideshow.data('wait')) return;

  var slides = slideshow.find('.slide');
  var pages = slideshow.find('.pagination');
  var activeSlide = slides.filter('.is-active');
  var activeSlideImage = activeSlide.find('.image-container');
  var newSlide = slides.eq(index);
  var newSlideImage = newSlide.find('.image-container');
  var newSlideContent = newSlide.find('.slide-content');
  var newSlideElements=newSlide.find('.caption > *');
  if(newSlide.is(activeSlide))return;

  newSlide.addClass('is-new');
  var timeout=slideshow.data('timeout');
  clearTimeout(timeout);
  slideshow.data('wait',true);
  var transition=slideshow.attr('data-transition');
  if(transition=='fade'){
    newSlide.css({
      display:'block',
      zIndex:2
    });
    newSlideImage.css({
      opacity:0
    });

    TweenMax.to(newSlideImage,1,{
      alpha:1,
      onComplete:function(){
        newSlide.addClass('is-active').removeClass('is-new');
        activeSlide.removeClass('is-active');
        newSlide.css({display:'',zIndex:''});
        newSlideImage.css({opacity:''});
        slideshow.find('.pagination').trigger('check');
        slideshow.data('wait',false);
        if(auto){
          timeout=setTimeout(function(){
            slideshowNext(slideshow,false,true);
          },slideshowDuration);
          slideshow.data('timeout',timeout);}}});
  } else {
    if(newSlide.index()>activeSlide.index()){
      var newSlideRight=0;
      var newSlideLeft='auto';
      var newSlideImageRight=-slideshow.width()/8;
      var newSlideImageLeft='auto';
      var newSlideImageToRight=0;
      var newSlideImageToLeft='auto';
      var newSlideContentLeft='auto';
      var newSlideContentRight=0;
      var activeSlideImageLeft=-slideshow.width()/4;
    } else {
      var newSlideRight='';
      var newSlideLeft=0;
      var newSlideImageRight='auto';
      var newSlideImageLeft=-slideshow.width()/8;
      var newSlideImageToRight='';
      var newSlideImageToLeft=0;
      var newSlideContentLeft=0;
      var newSlideContentRight='auto';
      var activeSlideImageLeft=slideshow.width()/4;
    }

    newSlide.css({
      display:'block',
      width:0,
      right:newSlideRight,
      left:newSlideLeft
      ,zIndex:2
    });

    newSlideImage.css({
      width:slideshow.width(),
      right:newSlideImageRight,
      left:newSlideImageLeft
    });

    newSlideContent.css({
      width:slideshow.width(),
      left:newSlideContentLeft,
      right:newSlideContentRight
    });

    activeSlideImage.css({
      left:0
    });

    TweenMax.set(newSlideElements,{y:20,force3D:true});
    TweenMax.to(activeSlideImage,1,{
      left:activeSlideImageLeft,
      ease:Power3.easeInOut
    });

    TweenMax.to(newSlide,1,{
      width:slideshow.width(),
      ease:Power3.easeInOut
    });

    TweenMax.to(newSlideImage,1,{
      right:newSlideImageToRight,
      left:newSlideImageToLeft,
      ease:Power3.easeInOut
    });

    TweenMax.staggerFromTo(newSlideElements,0.8,{alpha:0,y:60},{alpha:1,y:0,ease:Power3.easeOut,force3D:true,delay:0.6},0.1,function(){
      newSlide.addClass('is-active').removeClass('is-new');
      activeSlide.removeClass('is-active');
      newSlide.css({
        display:'',
        width:'',
        left:'',
        zIndex:''
      });

      newSlideImage.css({
        width:'',
        right:'',
        left:''
      });

      newSlideContent.css({
        width:'',
        left:''
      });

      newSlideElements.css({
        opacity:'',
        transform:''
      });

      activeSlideImage.css({
        left:''
      });

      slideshow.find('.pagination').trigger('check');
      slideshow.data('wait',false);
      if(auto){
        timeout=setTimeout(function(){
          slideshowNext(slideshow,false,true);
        },slideshowDuration);
        slideshow.data('timeout',timeout);
      }
    });
  }
}

function slideshowNext(slideshow,previous,auto){
  var slides=slideshow.find('.slide');
  var activeSlide=slides.filter('.is-active');
  var newSlide=null;
  if(previous){
    newSlide=activeSlide.prev('.slide');
    if(newSlide.length === 0) {
      newSlide=slides.last();
    }
  } else {
    newSlide=activeSlide.next('.slide');
    if(newSlide.length==0)
      newSlide=slides.filter('.slide').first();
  }

  slideshowSwitch(slideshow,newSlide.index(),auto);
}

function homeSlideshowParallax(){
  var scrollTop=$(window).scrollTop();
  if(scrollTop>windowHeight) return;
  var inner=slideshow.find('.slideshow-inner');
  var newHeight=windowHeight-(scrollTop/2);
  var newTop=scrollTop*0.8;

  inner.css({
    transform:'translateY('+newTop+'px)',height:newHeight
  });
}

$(document).ready(function() {
 $('.slide').addClass('is-loaded');

 $('.slideshow .arrows .arrow').on('click',function(){
  slideshowNext($(this).closest('.slideshow'),$(this).hasClass('prev'));
});


 $('.slideshow .pagination .item').on('click',function(){
  slideshowSwitch($(this).closest('.slideshow'),$(this).index());
});

 $('.slideshow .pagination').on('check',function(){
  var slideshow=$(this).closest('.slideshow');
  var pages=$(this).find('.item');
  var index=slideshow.find('.slides .is-active').index();
  pages.removeClass('is-active');
  pages.eq(index).addClass('is-active');
});


/* Lazyloading
$('.slideshow').each(function(){
  var slideshow=$(this);
  var images=slideshow.find('.image').not('.is-loaded');
  images.on('loaded',function(){
    var image=$(this);
    var slide=image.closest('.slide');
    slide.addClass('is-loaded');
  });
*/

var timeout=setTimeout(function(){
  slideshowNext(slideshow,false,true);
},slideshowDuration);

slideshow.data('timeout',timeout);
});

if($('.main-content .slideshow').length > 1) {
  $(window).on('scroll',homeSlideshowParallax);
}





function balbal1() {
  var x, text, text_s;

  x = document.getElementById("balbal1").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "sags") {
    text = "&#x2705;  Ang Sags ay nangangahulugang pilit";
  }
  else {
    text = "&#10060;  Ang Sags ay......";
  }

  document.getElementById("b1").innerHTML = text;
}

function b1hint1() {
  document.getElementById("b1").innerHTML = "una";
}
function b1hint2() {
  document.getElementById("b1").innerHTML = "dalawa";
}
function b1hint3() {
  document.getElementById("b1").innerHTML = "tres";
}


function balbal2() {
  var x, text;

  x = document.getElementById("balbal2").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b2").innerHTML = text;
}

function b2hint1() {
  document.getElementById("b2").innerHTML = "unasda";
}
function b2hint2() {
  document.getElementById("b2").innerHTML = "dalasdawa";
}
function b2hint3() {
  document.getElementById("b2").innerHTML = "trasdes";
}


function balbal3() {
  var x, text;

  x = document.getElementById("balbal3").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b3").innerHTML = text;
}

function b3hint1() {
  document.getElementById("b3").innerHTML = "unasda";
}
function b3hint2() {
  document.getElementById("b3").innerHTML = "dalasdawa";
}
function b3hint3() {
  document.getElementById("b3").innerHTML = "trasdes";
}


function balbal4() {
  var x, text;

  x = document.getElementById("balbal4").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b4").innerHTML = text;
}

function b4hint1() {
  document.getElementById("b4").innerHTML = "unasda";
}
function b4hint2() {
  document.getElementById("b4").innerHTML = "dalasdawa";
}
function b4hint3() {
  document.getElementById("b4").innerHTML = "trasdes";
}


function balbal5() {
  var x, text;

  x = document.getElementById("balbal5").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b5").innerHTML = text;
}

function b5hint1() {
  document.getElementById("b5").innerHTML = "unasda";
}
function b5hint2() {
  document.getElementById("b5").innerHTML = "dalasdawa";
}
function b5hint3() {
  document.getElementById("b5").innerHTML = "trasdes";
}


function balbal6() {
  var x, text;

  x = document.getElementById("balbal6").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b6").innerHTML = text;
}

function b6hint1() {
  document.getElementById("b6").innerHTML = "unasda";
}
function b6hint2() {
  document.getElementById("b6").innerHTML = "dalasdawa";
}
function b6hint3() {
  document.getElementById("b6").innerHTML = "trasdes";
}


function balbal7() {
  var x, text;

  x = document.getElementById("balbal7").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b7").innerHTML = text;
}

function b7hint1() {
  document.getElementById("b7").innerHTML = "unasda";
}
function b7hint2() {
  document.getElementById("b7").innerHTML = "dalasdawa";
}
function b7hint3() {
  document.getElementById("b7").innerHTML = "trasdes";
}


function balbal8() {
  var x, text;

  x = document.getElementById("balbal8").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b8").innerHTML = text;
}

function b8hint1() {
  document.getElementById("b8").innerHTML = "unasda";
}
function b8hint2() {
  document.getElementById("b8").innerHTML = "dalasdawa";
}
function b8hint3() {
  document.getElementById("b8").innerHTML = "trasdes";
}


function balbal9() {
  var x, text;

  x = document.getElementById("balbal9").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b9").innerHTML = text;
}

function b9hint1() {
  document.getElementById("b9").innerHTML = "unasda";
}
function b9hint2() {
  document.getElementById("b9").innerHTML = "dalasdawa";
}
function b9hint3() {
  document.getElementById("b9").innerHTML = "trasdes";
}


function balbal10() {
  var x, text;

  x = document.getElementById("balbal10").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b10").innerHTML = text;
}

function b10hint1() {
  document.getElementById("b10").innerHTML = "unasda";
}
function b10hint2() {
  document.getElementById("b10").innerHTML = "dalasdawa";
}
function b10hint3() {
  document.getElementById("b10").innerHTML = "trasdes";
}


function balbal11() {
  var x, text;

  x = document.getElementById("balbal11").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b11").innerHTML = text;
}

function b11hint1() {
  document.getElementById("b11").innerHTML = "unasda";
}
function b11hint2() {
  document.getElementById("b11").innerHTML = "dalasdawa";
}
function b11hint3() {
  document.getElementById("b11").innerHTML = "trasdes";
}


function balbal12() {
  var x, text;

  x = document.getElementById("balbal12").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b12").innerHTML = text;
}

function b12hint1() {
  document.getElementById("b12").innerHTML = "unasda";
}
function b12hint2() {
  document.getElementById("b12").innerHTML = "dalasdawa";
}
function b12hint3() {
  document.getElementById("b12").innerHTML = "trasdes";
}


function balbal13() {
  var x, text;

  x = document.getElementById("balbal13").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b13").innerHTML = text;
}

function b13hint1() {
  document.getElementById("b13").innerHTML = "unasda";
}
function b13hint2() {
  document.getElementById("b13").innerHTML = "dalasdawa";
}
function b13hint3() {
  document.getElementById("b13").innerHTML = "trasdes";
}


function balbal14() {
  var x, text;

  x = document.getElementById("balbal14").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b14").innerHTML = text;
}

function b14hint1() {
  document.getElementById("b14").innerHTML = "unasda";
}
function b14hint2() {
  document.getElementById("b14").innerHTML = "dalasdawa";
}
function b14hint3() {
  document.getElementById("b14").innerHTML = "trasdes";
}


function balbal15() {
  var x, text;

  x = document.getElementById("balbal15").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b15").innerHTML = text;
}

function b15hint1() {
  document.getElementById("b15").innerHTML = "unasda";
}
function b15hint2() {
  document.getElementById("b15").innerHTML = "dalasdawa";
}
function b15hint3() {
  document.getElementById("b15").innerHTML = "trasdes";
}


function balbal16() {
  var x, text;

  x = document.getElementById("balbal16").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b16").innerHTML = text;
}

function b16hint1() {
  document.getElementById("b16").innerHTML = "unasda";
}
function b16hint2() {
  document.getElementById("b16").innerHTML = "dalasdawa";
}
function b16hint3() {
  document.getElementById("b16").innerHTML = "trasdes";
}


function balbal17() {
  var x, text;

  x = document.getElementById("balbal17").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b17").innerHTML = text;
}

function b17hint1() {
  document.getElementById("b17").innerHTML = "unasda";
}
function b17hint2() {
  document.getElementById("b17").innerHTML = "dalasdawa";
}
function b17hint3() {
  document.getElementById("b17").innerHTML = "trasdes";
}


function balbal18() {
  var x, text;

  x = document.getElementById("balbal18").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b18").innerHTML = text;
}

function b18hint1() {
  document.getElementById("b18").innerHTML = "unasda";
}
function b18hint2() {
  document.getElementById("b18").innerHTML = "dalasdawa";
}
function b18hint3() {
  document.getElementById("b18").innerHTML = "trasdes";
}


function balbal19() {
  var x, text;

  x = document.getElementById("balbal19").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b19").innerHTML = text;
}

function b19hint1() {
  document.getElementById("b19").innerHTML = "unasda";
}
function b19hint2() {
  document.getElementById("b19").innerHTML = "dalasdawa";
}
function b19hint3() {
  document.getElementById("b19").innerHTML = "trasdes";
}


function balbal20() {
  var x, text;

  x = document.getElementById("balbal20").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b20").innerHTML = text;
}

function b20hint1() {
  document.getElementById("b20").innerHTML = "unasda";
}
function b20hint2() {
  document.getElementById("b20").innerHTML = "dalasdawa";
}
function b20hint3() {
  document.getElementById("b20").innerHTML = "trasdes";
}


function balbal21() {
  var x, text;

  x = document.getElementById("balbal21").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b21").innerHTML = text;
}

function b21hint1() {
  document.getElementById("b21").innerHTML = "unasda";
}
function b21hint2() {
  document.getElementById("b21").innerHTML = "dalasdawa";
}
function b21hint3() {
  document.getElementById("b21").innerHTML = "trasdes";
}


function balbal22() {
  var x, text;

  x = document.getElementById("balbal22").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b22").innerHTML = text;
}

function b22hint1() {
  document.getElementById("b22").innerHTML = "unasda";
}
function b22hint2() {
  document.getElementById("b22").innerHTML = "dalasdawa";
}
function b22hint3() {
  document.getElementById("b22").innerHTML = "trasdes";
}


function balbal23() {
  var x, text;

  x = document.getElementById("balbal23").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b23").innerHTML = text;
}

function b23hint1() {
  document.getElementById("b23").innerHTML = "unasda";
}
function b23hint2() {
  document.getElementById("b23").innerHTML = "dalasdawa";
}
function b23hint3() {
  document.getElementById("b23").innerHTML = "trasdes";
}

function balbal24() {
  var x, text;

  x = document.getElementById("balbal24").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b24").innerHTML = text;
}

function b24hint1() {
  document.getElementById("b24").innerHTML = "unasda";
}
function b24hint2() {
  document.getElementById("b24").innerHTML = "dalasdawa";
}
function b24hint3() {
  document.getElementById("b24").innerHTML = "trasdes";
}


function balbal25() {
  var x, text;

  x = document.getElementById("balbal25").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b25").innerHTML = text;
}

function b25hint1() {
  document.getElementById("b25").innerHTML = "unasda";
}
function b25hint2() {
  document.getElementById("b25").innerHTML = "dalasdawa";
}
function b25hint3() {
  document.getElementById("b25").innerHTML = "trasdes";
}


function balbal26() {
  var x, text;

  x = document.getElementById("balbal26").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b26").innerHTML = text;
}

function b26hint1() {
  document.getElementById("b26").innerHTML = "unasda";
}
function b26hint2() {
  document.getElementById("b26").innerHTML = "dalasdawa";
}
function b26hint3() {
  document.getElementById("b26").innerHTML = "trasdes";
}


function balbal27() {
  var x, text;

  x = document.getElementById("balbal27").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b27").innerHTML = text;
}

function b27hint1() {
  document.getElementById("b27").innerHTML = "unasda";
}
function b27hint2() {
  document.getElementById("b27").innerHTML = "dalasdawa";
}
function b27hint3() {
  document.getElementById("b27").innerHTML = "trasdes";
}


function balbal28() {
  var x, text;

  x = document.getElementById("balbal28").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b28").innerHTML = text;
}

function b28hint1() {
  document.getElementById("b28").innerHTML = "unasda";
}
function b28hint2() {
  document.getElementById("b28").innerHTML = "dalasdawa";
}
function b28hint3() {
  document.getElementById("b28").innerHTML = "trasdes";
}


function balbal29() {
  var x, text;

  x = document.getElementById("balbal29").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b29").innerHTML = text;
}

function b29hint1() {
  document.getElementById("b29").innerHTML = "unasda";
}
function b29hint2() {
  document.getElementById("b29").innerHTML = "dalasdawa";
}
function b29hint3() {
  document.getElementById("b29").innerHTML = "trasdes";
}


function balbal30() {
  var x, text;

  x = document.getElementById("balbal30").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b30").innerHTML = text;
}

function b30hint1() {
  document.getElementById("b30").innerHTML = "unasda";
}
function b30hint2() {
  document.getElementById("b30").innerHTML = "dalasdawa";
}
function b30hint3() {
  document.getElementById("b30").innerHTML = "trasdes";
}


function balbal31() {
  var x, text;

  x = document.getElementById("balbal31").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b31").innerHTML = text;
}

function b31hint1() {
  document.getElementById("b31").innerHTML = "unasda";
}
function b31hint2() {
  document.getElementById("b31").innerHTML = "dalasdawa";
}
function b31hint3() {
  document.getElementById("b31").innerHTML = "trasdes";
}


function balbal32() {
  var x, text;

  x = document.getElementById("balbal32").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b32").innerHTML = text;
}

function b32hint1() {
  document.getElementById("b32").innerHTML = "unasda";
}
function b32hint2() {
  document.getElementById("b32").innerHTML = "dalasdawa";
}
function b32hint3() {
  document.getElementById("b32").innerHTML = "trasdes";
}


function balbal33() {
  var x, text;

  x = document.getElementById("balbal33").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b33").innerHTML = text;
}

function b33hint1() {
  document.getElementById("b33").innerHTML = "unasda";
}
function b33hint2() {
  document.getElementById("b33").innerHTML = "dalasdawa";
}
function b33hint3() {
  document.getElementById("b33").innerHTML = "trasdes";
}


function balbal34() {
  var x, text;

  x = document.getElementById("balbal34").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b34").innerHTML = text;
}

function b34hint1() {
  document.getElementById("b34").innerHTML = "unasda";
}
function b34hint2() {
  document.getElementById("b34").innerHTML = "dalasdawa";
}
function b34hint3() {
  document.getElementById("b34").innerHTML = "trasdes";
}


function balbal35() {
  var x, text;

  x = document.getElementById("balbal35").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b35").innerHTML = text;
}

function b35hint1() {
  document.getElementById("b35").innerHTML = "unasda";
}
function b35hint2() {
  document.getElementById("b35").innerHTML = "dalasdawa";
}
function b35hint3() {
  document.getElementById("b35").innerHTML = "trasdes";
}


function balbal36() {
  var x, text;

  x = document.getElementById("balbal36").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b36").innerHTML = text;
}

function b36hint1() {
  document.getElementById("b36").innerHTML = "unasda";
}
function b36hint2() {
  document.getElementById("b36").innerHTML = "dalasdawa";
}
function b36hint3() {
  document.getElementById("b36").innerHTML = "trasdes";
}


function balbal37() {
  var x, text;

  x = document.getElementById("balbal37").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b37").innerHTML = text;
}

function b37hint1() {
  document.getElementById("b37").innerHTML = "unasda";
}
function b37hint2() {
  document.getElementById("b37").innerHTML = "dalasdawa";
}
function b37hint3() {
  document.getElementById("b37").innerHTML = "trasdes";
}


function balbal38() {
  var x, text;

  x = document.getElementById("balbal38").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b38").innerHTML = text;
}

function b38hint1() {
  document.getElementById("b38").innerHTML = "unasda";
}
function b38hint2() {
  document.getElementById("b38").innerHTML = "dalasdawa";
}
function b38hint3() {
  document.getElementById("b38").innerHTML = "trasdes";
}


function balbal39() {
  var x, text;

  x = document.getElementById("balbal39").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b39").innerHTML = text;
}

function b39hint1() {
  document.getElementById("b39").innerHTML = "unasda";
}
function b39hint2() {
  document.getElementById("b39").innerHTML = "dalasdawa";
}
function b39hint3() {
  document.getElementById("b39").innerHTML = "trasdes";
}


function balbal40() {
  var x, text;

  x = document.getElementById("balbal40").value

  l_case = x.toLowerCase();

  if (l_case == "") {
    text = "Punan ang patlang ng salitang balbal.";
  } else if (l_case == "caps") {
    text = "&#x2705;";
  }
  else {
    text = "&#10060;";
  }

  document.getElementById("b40").innerHTML = text;
}

function b40hint1() {
  document.getElementById("b40").innerHTML = "unasda";
}
function b40hint2() {
  document.getElementById("b40").innerHTML = "dalasdawa";
}
function b40hint3() {
  document.getElementById("b40").innerHTML = "trasdes";
}






