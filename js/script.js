
document.addEventListener("DOMContentLoaded", function(){
		
  window.addEventListener('scroll', function() {
       
    if (window.scrollY > 50) {
      document.getElementById('navbar_top').classList.add('fixed-top');
      // add padding top to show content behind navbar
      navbar_height = document.querySelector('.navbar').offsetHeight;
      document.body.style.paddingTop = navbar_height + 'px';
      document.getElementById("navbar_top").classList.add("bg-nav-dark");
      document.getElementById("navbar_top").classList.remove("navbar-light");
      document.getElementById("navbar_top").classList.remove("navbg");

    } else {
       document.getElementById('navbar_top').classList.remove('fixed-top');
       // remove padding top from body
      document.body.style.paddingTop = '0';
      document.getElementById("navbar_top").classList.add("navbar-light");
      document.getElementById("navbar_top").classList.add("navbg");
      document.getElementById("navbar_top").classList.remove("bg-nav-dark");

    } 
  });
}); 
$(document).ready(function(){

  /***********Ripple water***************/
  $('main').ripples({
    resolution: 512,
    dropRadius: 12, //px
    perturbance: 0.05,
  });
  /*************End Ripple water***********/


   /***************start Count up********************** */
  $('.count').counterUp({
    delay: 10,
    time: 1000
  });

  /***************End Count up********************** */

  $("#arabic").trigger("click");
    
  });

  // ******************* Button top up ***********************//
  const toTop = document.querySelector(".to-top");
  window.onscroll = function(){
  //  console.log(this.scrollY);
   if(this.scrollY >= 800){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
  }
  // ******************* End Button top up *****************//


  // *******************Button Translate Localization *****************//
  function english(){
    document.getElementById("translatecss1").setAttribute("href","css/custom.css");
    document.getElementById("translatecss2").setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css");
    document.getElementById("translatejs").setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
    document.getElementById("form-navbar").classList.add("me-auto");
    document.getElementById("flags-icons").style.float= "right";
    document.getElementById("eng-Name").style.textAlign = "right";
    document.getElementById("btnemail").classList.add("fa-share");
    document.getElementById("btnemail").classList.remove("fa-reply");
    // document.getElementById("emailSignup").style.direction = "ltr";

    }
    function arabic(){
    document.getElementById("translatecss1").setAttribute("href","css/customArabic.css");
    document.getElementById("translatecss2").setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.rtl.min.css");
    document.getElementById("translatejs").setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js");
    document.getElementById("ul-navbar").classList.add("me-auto");
    document.getElementById("flags-icons").style.float= "left";
    document.getElementById("eng-Name").style.textAlign = "left"
    document.getElementById("btnemail").classList.add("fa-reply");
    document.getElementById("btnemail").classList.remove("fa-share");
    // document.getElementById("emailSignup").style.direction = "rtl";




  }
// *******************Button Translate Localization *******************//
