function triangleContainer(){var e=$(window).width(),t=.2679497913*e,n=t+"px",u="-"+(t-1)+"px";$(".triangleContainer").css("height",n),$(".triangleContainer").css("top",u)}!function(e,t,n,u,i,o,a){e.GoogleAnalyticsObject=i,e[i]=e[i]||function(){(e[i].q=e[i].q||[]).push(arguments)},e[i].l=1*new Date,o=t.createElement(n),a=t.getElementsByTagName(n)[0],o.async=1,o.src=u,a.parentNode.insertBefore(o,a)}(window,document,"script","//www.google-analytics.com/analytics.js","ga"),ga("create","UA-46316402-2","auto"),ga("send","pageview"),$(function(){/Android|iPhone|iPad|iPod|BlackBerry|Windows Phone/i.test(navigator.userAgent||navigator.vendor||window.opera)||skrollr.init({forceHeight:!1}),window.sr=new scrollReveal,$(document).foundation(),$(".bxslider").bxSlider()}),$(document).ready(function(){setTimeout(function(){$("#loading").css("opacity","0")},250),setTimeout(function(){$("#loading").remove()},1500)}),$(window).load(function(){$(".NOSBeforeAfter").twentytwenty()}),$(window).scroll(function(){var e=$(window).height(),t=$(document).height()-2*e,n=$(window).scrollTop();n>t?$(".scrollTopButton").css("opacity","1"):$(".scrollTopButton").css("opacity","0")}),$(".scrollTopButton").click(function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},1e3,"easeOutQuart")}),$(triangleContainer);var resizeTimer;$(window).resize(function(){clearTimeout(resizeTimer),resizeTimer=setTimeout(triangleContainer,100)}),$(document).ready(function(){$("#grid").imagesLoaded(function(){$("#grid").shuffle({itemSelector:"li",speed:500})})}),$("#filter a").click(function(e){e.preventDefault(),$("#filter a").removeClass("active"),$(this).addClass("active");var t=$(this).attr("data-group");$("#grid").shuffle("shuffle",t)}),$(window).on("resize","load",function(){var e=$(window).innerHeight(),t=$(window).innerWidth(),n=window.matchMedia("(orientation: portrait)");600>e&&(n.matches?$(".rotateDevice").remove():$("body").append('<div class="rotateDevice"></div>'),n.addListener(function(e){e.matches?$(".rotateDevice").remove():$("body").append('<div class="rotateDevice"></div>')}))}),$("#mijnWerk .itemBlock").mouseover(function(){$("#mijnWerk .itemBlock").not(this).addClass("fadeOut")}),$("#mijnWerk .itemBlock").not(".itemBlock.fadeOut").mouseout(function(){$("#mijnWerk .itemBlock.fadeOut").removeClass("fadeOut")}),$(document).ready(function(){$("#contactform").submit(function(e){function t(e){var t=new RegExp(/^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?$/i);return t.test(e)}e.preventDefault();var n=$("#name").val(),u=$("#email").val(),i=$("#text").val(),o="name="+n+"&email="+u+"&text="+i;return t(u)&&i.length>1&&n.length>1?$.ajax({type:"POST",url:"script/functions.php",data:o,success:function(){$(".success").fadeIn(1e3,function(){$(this).delay(5e3).fadeOut(1e3)})}}):$(".error").fadeIn(1e3,function(){$(this).delay(5e3).fadeOut(1e3)}),!1})});