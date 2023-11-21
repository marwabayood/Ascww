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
    
  });

  const toTop = document.querySelector(".to-top");
  window.onscroll = function(){
  //  console.log(this.scrollY);
   if(this.scrollY >= 900){
    toTop.classList.add("active");
  }else{
    toTop.classList.remove("active");
  }
  }


