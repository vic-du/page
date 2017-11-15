// jQuery UI - 日期选择器 Datepicker，
// 用法：http://www.runoob.com/jqueryui/example-datepicker.html
$(function() {
    $( "#datepicker" ).datepicker({
        showOn: "button",
        buttonImage: "resources/img/calendar.png",
        buttonImageOnly: true ,
        showButtonPanel: true
    });
    $( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd" );
});

$(document).ready(function() {

    /* For the sticky navigation */
    $('.js--section-about-us').waypoint(function(direction) {
        if (direction == "down") {
            $('nav').addClass('sticky');
        } else {
            $('nav').removeClass('sticky');
        }
    }, {
      offset: '60px;'
    });
    
    
    /* Scroll on buttons */
    $('.js--scroll-to-steps').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-steps').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-start').click(function () {
       $('html, body').animate({scrollTop: $('.header').offset().top}, 1000); 
    });
    
    $('.js--scroll-to-plans').click(function () {
       $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000); 
    });
    
    
    /* Navigation scroll */
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top
            }, 1000);
            return false;
          }
        }
      });
    });
    
    
    /* Animations fadeIn on scroll */
    $('.js--wp-1').waypoint(function(direction) {
        $('.js--wp-1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-2').waypoint(function(direction) {
        $('.js--wp-2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-3').waypoint(function(direction) {
        $('.js--wp-3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });
    
    $('.js--wp-4').waypoint(function(direction) {
        $('.js--wp-4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-5').waypoint(function(direction) {
        $('.js--wp-5').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-6').waypoint(function(direction) {
        $('.js--wp-6').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-7').waypoint(function(direction) {
        $('.js--wp-7').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Animations fadeInRight on scroll */
    $('.js--wp-fr1').waypoint(function(direction) {
        $('.js--wp-fr1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fr2').waypoint(function(direction) {
        $('.js--wp-fr2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fr3').waypoint(function(direction) {
        $('.js--wp-fr3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fr4').waypoint(function(direction) {
        $('.js--wp-fr4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    /* Animations fadeInLeft on scroll */
    $('.js--wp-fl1').waypoint(function(direction) {
        $('.js--wp-fl1').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fl2').waypoint(function(direction) {
        $('.js--wp-fl2').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fl3').waypoint(function(direction) {
        $('.js--wp-fl3').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });

    $('.js--wp-fl4').waypoint(function(direction) {
        $('.js--wp-fl4').addClass('animated fadeIn');
    }, {
        offset: '50%'
    });


    /* Animations pulse on scroll */
    $('.js--wp-p1').waypoint(function(direction) {
        $('.js--wp-p1').addClass('animated pulse');
    }, {
        offset: '50%'
    });


    /* Mobile navigation */
    $('.js--nav-icon').click(function() {
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.slideToggle(400);
        
        if (icon.hasClass('ion-navicon-round')) {
            icon.addClass('ion-close-round');
            icon.removeClass('ion-navicon-round');
        } else {
            icon.addClass('ion-navicon-round');
            icon.removeClass('ion-close-round');
        }        
    });
    
    
    /* animate news items*/
    function switchNewsItem(){
        $('#news div:visible').fadeOut(function(){
        $(this).next().length ? $(this).next().fadeIn() : $('#news div').eq(0).fadeIn();
    });
    };
        
    $('#news div').hide().eq(0).show(); // show only the first news item
    setInterval(switchNewsItem, 3500);
    
    
    /*  dialog box：show book */
    var dialogBook = document.querySelector('#dialog');
    if(dialogBook != null) {
        dialogPolyfill.registerDialog(dialogBook); // Now dialog acts like a native <dialog>
        
        var openBook = document.getElementById("show-book");
        var closeBook = document.getElementById("done-book");
        
        openBook.onclick = function() {
            dialogBook.showModal();
        }
        
        closeBook.onclick = function() {
            dialogBook.close();
        }
    }
    
    /*  dialog box：show banner */
    var dialogBanner = document.querySelector('#dialog-banner');
    if(dialogBanner != null) {
        dialogPolyfill.registerDialog(dialogBanner); // Now dialog acts like a native <dialog>
        
        var openBanner = document.getElementById("show-banner");
        var closeBanner = document.getElementById("done-banner");
        
        openBanner.onclick = function() {
            dialogBanner.showModal();
        }
        
        closeBanner.onclick = function() {
            dialogBanner.close();
        }
    }

    /*  dialog box：show activitie */
    var dialogActivitie = document.querySelector('#dialog-activitie');
    if(dialogActivitie != null) {
        dialogPolyfill.registerDialog(dialogActivitie); // Now dialog acts like a native <dialog>
        
        var openActivitie = document.getElementById("show-activitie");
        var closActivitie = document.getElementById("done-activitie");
        
        openActivitie.onclick = function() {
            dialogActivitie.showModal();
        }
        
        closActivitie.onclick = function() {
            dialogActivitie.close();
        }
    }

    /*  dialog box：show bookclub */
    var dialogBookclub = document.querySelector('#dialog-bookclub');
    if(dialogBookclub != null) {
        dialogPolyfill.registerDialog(dialogBookclub); // Now dialog acts like a native <dialog>
        
        var openBookclub = document.getElementById("show-bookclub");
        var closBookclub = document.getElementById("done-bookclub");
        
        openBookclub.onclick = function() {
            dialogBookclub.showModal();
        }
        
        closBookclub.onclick = function() {
            dialogBookclub.close();
        }
    }

    /*  dialog box：show message */
    var dialogMessage = document.querySelector('#dialog-message');
    if(dialogMessage != null) {
        dialogPolyfill.registerDialog(dialogMessage); // Now dialog acts like a native <dialog>
        
        var openMessage = document.getElementById("tb-share");
        var closeMessage = document.getElementById("done-message");
        
        openMessage.onclick = function() {
            dialogMessage.showModal();
        }
        
        closeMessage.onclick = function() {
            dialogMessage.close();
        }
    }
   
    /* return the form value of "read" or "buy" 
    document.querySelector('dialog').onclick = function() {
    var value = document.querySelector('#return_value').value;
      dialog.close(value);
    };
    */

    /* this is for debugging purpose */
    document.querySelector('dialog').addEventListener('close', function() {
        if (this.returnValue !== "" && this.returnValue !== null) {
            alert(this.returnValue);
        }
    this.returnValue= "";
    }); 

    // Message Board tool set
    $( "#tb-leavaMsgACT" ).click(1000, function() {
      if ($(this).css("opacity") == 1) {
        $(this).css({ "opacity": 0.5});
        $("#section-msgBoardACT .leavaMsgTest").css({ "visibility":"visible" });
        $("#section-msgBoardACT").css({ "bottom": 0 });
      } else {
        $(this).css({ "opacity": 1});
        $("#leavaMsgTest .leavaMsgTest").css({ "visibility":"hidden" });
        $("#section-msgBoardACT").css({ "bottom": -230 });
      }
    });

    $( "#tb-leavaMsgBCB" ).click(1000, function() {
      if ($(this).css("opacity") == 1) {
        $(this).css({ "opacity": 0.5});
        $("#section-msgBoardBCB .leavaMsgTest").css({ "visibility":"visible" });
        $("#section-msgBoardBCB").css({ "bottom": 0 });
      } else {
        $(this).css({ "opacity": 1});
        $("#leavaMsgTest .leavaMsgTest").css({ "visibility":"hidden" });
        $("#section-msgBoardBCB").css({ "bottom": -230 });
      }
    });
    

    /* about us texts toggle with icons */
    var showX = document.getElementById("show-origin");
    var showY = document.getElementById("show-vision");
    var showZ = document.getElementById("show-goal");
    
    showX.style.color = "#a1a1a1";
    showY.style.color = "#a1a1a1";
    showZ.style.color = "#a1a1a1";
        
    showX.onclick = function() {
        if (document.getElementById("origin").style.display === "block") {
            document.getElementById("origin").style.display = "none"; 
            showX.style.color = "#a1a1a1";
        }
        else {
            document.getElementById("origin").style.display = "block";
            document.getElementById("vision").style.display = "none";
            document.getElementById("goal").style.display = "none";
            showX.style.color = "#e67e22";
            showY.style.color = "#a1a1a1";
            showZ.style.color = "#a1a1a1";
        }
    }
    showY.onclick = function() {
        if (document.getElementById("vision").style.display === "block") {
            document.getElementById("vision").style.display = "none"; 
            showY.style.color = "#a1a1a1";
        }
        else {
            document.getElementById("origin").style.display = "none";
            document.getElementById("vision").style.display = "block";
            document.getElementById("goal").style.display = "none";
            showX.style.color = "#a1a1a1";
            showY.style.color = "#e67e22";
            showZ.style.color = "#a1a1a1";
        }
    }
    showZ.onclick = function() {
        if (document.getElementById("goal").style.display === "block") {
            document.getElementById("goal").style.display = "none"; 
            showZ.style.color = "#a1a1a1";
        }
        else {
            document.getElementById("origin").style.display = "none";
            document.getElementById("vision").style.display = "none";
            document.getElementById("goal").style.display = "block";
            showX.style.color = "#a1a1a1";
            showY.style.color = "#a1a1a1";
            showZ.style.color = "#e67e22";
        }
    }

}); //close document.ready