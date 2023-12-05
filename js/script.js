$(document).ready(function(){



  $(".xp-menubar").on('click',function(){
    $('#sidebar').toggleClass('active');
    $('#content').toggleClass('active');
  });
  
   $(".xp-menubar,.body-overlay").on('click',function(){
     $('#sidebar,.body-overlay').toggleClass('show-nav');
   });


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
    document.getElementById("translatecss2").setAttribute("href","https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/css/bootstrap.min.css");
    document.getElementById("translatejs").setAttribute("src","https://cdn.jsdelivr.net/npm/bootstrap@4.1.3/dist/js/bootstrap.min.js");
    }
    function arabic(){
    document.getElementById("translatecss1").setAttribute("href","css/customArabic.css");
    document.getElementById("translatecss2").setAttribute("href","https://cdn.rtlcss.com/bootstrap/v4.1.3/css/bootstrap.min.css");
    document.getElementById("translatejs").setAttribute("src","https://cdn.rtlcss.com/bootstrap/v4.1.3/js/bootstrap.min.js");
    }
// *******************Button Translate Localization *******************//
