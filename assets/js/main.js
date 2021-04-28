/**
* Template Name: iPortfolio - v1.5.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
var json = (function(){
  var json = null;
  $.ajax({
    'async': false,
    'global': false,
    'url': 'assets/data/data.json',
    'datatype': 'json',
    'success': function(data){
      json = data;
    }
  });
  return json;
})();


!(function($) {
  "use strict";

  //Testimonial cards

  var testimonial_data = json['testimonial_data']

  for (var j = 0; j < testimonial_data.length; j++) {
    var testimonial_body = '';
    testimonial_body += '<div class="testimonial-item" data-aos="fade-up" data-aos-delay="' + String(j * 100) + '">';
    testimonial_body += '<p>';
    testimonial_body += '<i class="bx bxs-quote-alt-left quote-icon-left"></i>';
    testimonial_body += testimonial_data[j]['content'];
    testimonial_body += '<i class="bx bxs-quote-alt-right quote-icon-right"></i>';
    testimonial_body += '</p>';
    testimonial_body += '<img src="assets/img/testimonials/' + String(j + 1) + '.jpg" class="testimonial-img" alt="">'
    testimonial_body += '<h3>' + testimonial_data[j]['name'] + '</h3>';
    testimonial_body += '<h4>' + testimonial_data[j]['desig'] + '</h4>';
    testimonial_body += '</div>';
    $('#testimonial-parent').append(testimonial_body);
  }

  // Hero typed
  if ($('.typed').length) {
    var typed_strings = $(".typed").data('typed-items');
    typed_strings = typed_strings.split(',')
    new Typed('.typed', {
      strings: typed_strings,
      loop: true,
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000
    });
  }

  // Smooth scroll for the navigation menu and links with .scrollto classes
  $(document).on('click', '.nav-menu a, .scrollto', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      e.preventDefault();
      var target = $(this.hash);
      if (target.length) {

        var scrollto = target.offset().top;

        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
        }
        return false;
      }
    }
  });

  // Activate smooth scroll on page load with hash links in the url
  $(document).ready(function() {
    if (window.location.hash) {
      var initial_nav = window.location.hash;
      if ($(initial_nav).length) {
        var scrollto = $(initial_nav).offset().top;
        $('html, body').animate({
          scrollTop: scrollto
        }, 1500, 'easeInOutExpo');
      }
    }
  });

  $(document).on('click', '.mobile-nav-toggle', function(e) {
    $('body').toggleClass('mobile-nav-active');
    $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
  });

  $(document).click(function(e) {
    var container = $(".mobile-nav-toggle");
    if (!container.is(e.target) && container.has(e.target).length === 0) {
      if ($('body').hasClass('mobile-nav-active')) {
        $('body').removeClass('mobile-nav-active');
        $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      }
    }
  });

  // Navigation active state on scroll
  var nav_sections = $('section');
  var main_nav = $('.nav-menu, .mobile-nav');

  $(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop() + 200;

    nav_sections.each(function() {
      var top = $(this).offset().top,
        bottom = top + $(this).outerHeight();

      if (cur_pos >= top && cur_pos <= bottom) {
        if (cur_pos <= bottom) {
          main_nav.find('li').removeClass('active');
        }
        main_nav.find('a[href="#' + $(this).attr('id') + '"]').parent('li').addClass('active');
      }
      if (cur_pos < 300) {
        $(".nav-menu ul:first li:first").addClass('active');
      }
    });
  });

  // Back to top button
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('.back-to-top').fadeIn('slow');
    } else {
      $('.back-to-top').fadeOut('slow');
    }
  });

  $('.back-to-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
    }, 1500, 'easeInOutExpo');
    return false;
  });

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  // $('.skills-content').waypoint(function() {
  //   $('.progress .progress-bar').each(function() {
  //     $(this).css("width", $(this).attr("aria-valuenow") + '%');
  //   });
  // }, {
  //   offset: '80%'
  // });

  // Porfolio isotope and filter
  $(window).on('load', function() {
    var portfolioIsotope = $('.portfolio-container').isotope({
      itemSelector: '.portfolio-item',
      layoutMode: 'fitRows'
    });


    $('#portfolio-flters li').on('click', function() {
      $("#portfolio-flters li").removeClass('filter-active');
      $(this).addClass('filter-active');

      portfolioIsotope.isotope({
        filter: $(this).data('filter')
      });
      aos_init();
    });

    // Initiate venobox (lightbox feature used in portofilo)
    $(document).ready(function() {
      $('.venobox').venobox();
    });
  });

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  // Init AOS
  function aos_init() {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out-back",
      once: true
    });
  }
  $(window).on('load', function() {
    aos_init();
  });

})(jQuery);

//Facts

var fact_data = json['fact_data'];

for(var n = 0; n<fact_data.length; n++){
  var fact_card = '';
  fact_card += '<div class="col-lg-3 col-md-6 d-md-flex align-items-md-stretch" data-aos="fade-up" data-aos-delay="' + String(n*100) + '">';
  fact_card += '<div class="count-box">';
  fact_card += '<i class="' + fact_data[n]['icon'] + '"></i>';
  fact_card += '<span data-toggle="counter-up">' + String(fact_data[n]["value"]) + '</span>';
  fact_card += '<p><strong>' + fact_data[n]['title'] + '</strong>' + fact_data[n]['content'] + '</p>';
  fact_card += '</div></div>';
  $('#fact-parent').append(fact_card);
}

//Skills

// var skill_data = json['skill_data']

// for(var m = 0; m<skill_data.length; m++){
//   var skill_body = ''
//   skill_body = '<div class="col-lg-6" data-aos="fade-up" data-aos-delay="' + String(m*100)+ '" >'
//   for(var l = 0; l < skill_data[m].length; l++){
//     var skill_card = '';
//     skill_card += '<div class="progress">';
//     skill_card += '<span class="skill">' + skill_data[m][l]['skill'] + '<i class="val">' + skill_data[m][l]['value'] + '%</i></span>';
//     skill_card += '<div class="progress-bar-wrap">'
//     skill_card += '<div class="progress-bar" role="progressbar" aria-valuenow="' + skill_data[m][l]['value'] + '" aria-valuemin="0" aria-valuemax="100"></div>';
//     skill_card += '</div></div>';
//     skill_body += skill_card;
//   }
//   $('#skill-parent').append(skill_body);
// }

//Services

var services_data = json['services_data']

for(var k = 0; k<services_data.length; k++){
  var service_card = "";
  service_card += '<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="'+ String(k*100) + '">';
  service_card += '<div class="icon"><i class=' + services_data[k]['icon'] + '></i></div>';
  service_card += '<h4 class="title"><a href="">' + services_data[k]['title'] + '</a></h4>';
  service_card += '<p class="description">' + services_data[k]['content'] + '</p></div>';
  $('#service-parent').append(service_card);
}

//Portfolio Modals

var iframelink = json['iframelink'];

for (var i = 0; i < Object.keys(iframelink).length; i++){
  var portfolio_body = "";
  portfolio_body += '<div class="col-lg-4 col-md-6 portfolio-item filter-' + iframelink[i+1]['filter'] + '">';
  portfolio_body += '<div class="portfolio-wrap">';
  portfolio_body += '<img src="assets/img/portfolio/'+ String(i+1) + '.jpg" class="img-fluid" alt="">';
  portfolio_body += '<div class="portfolio-links">';
  portfolio_body += '<a href="assets/img/portfolio/' + String(i+1) + '.jpg data-gall="portfolioGallery" class="venobox" title="App 1"><i class="bx bx-plus"></i></a>';
  portfolio_body += '<a onclick="portfolioModal('+ String(i+1) + ')" title="More Details" class="modal-anim"><i class="bx bx-link"></i></a>';
  portfolio_body += '</div></div></div>';
  $("#modal-portfolio-ancestor").append(portfolio_body);
}

function portfolioModal() {
  $('#modal-container').removeAttr('class').addClass("modal-anim");
  $('body').addClass('modal-active');
  $('#modal-heading').html(iframelink[arguments[0]]['title']);
  $('#modal-iframe').attr("src", iframelink[arguments[0]]['url']);
}

$('#modal-container').click(function () {
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

var url = 'https://script.google.com/macros/s/AKfycbwlC92ZNwDRDVRw9s91QVfUroZfgnlNcfGdwUM7_5SBALlBWRbCrFRnmNZXAc3TQG3YXw/exec'

function sendEmail() {
  var mail = {};
  for (var i = 0; i < Object.keys(arguments[0]).length; i++){
    mail[arguments[0][i]['name']] = arguments[0][i]['value'];
  }
  var mail_body = `<p>Someone Tried to contact you</p> 
                    <h4>Name : `+ mail['name'] + `</h4> 
                    <h4>Email : ` + mail['email'] + `</h4><h4> Message</h4>
                    <p>` + mail['message'] + '</p>';
  console.log(mail);
  Email.send({
    SecureToken: "7a0d1175-c94d-4f2a-83df-caafa0363b9a",
    To: 'commonpeople02@gmail.com',
    From: "commonpeople02@gmail.com",
    Subject: mail['subject'],
    Body: mail_body,
  })
    .then(function (message) {
      console.log(message);
    });
}

$('form.php-email-form').submit(function(e){
  e.preventDefault();

  var this_form = $(this);
  var form_response = $("#myForm").serializeArray();
  this_form.find('.loading').slideDown();

  $.ajax({
    url: 'https://api.apispreadsheets.com/data/11523/',
    type: 'post',
    data: $("#myForm").serializeArray(),
    success: function () {
      this_form.find('.loading').slideUp();
      this_form.find('.sent-message').slideDown();
      this_form.find("input:not(input[type=submit]), textarea").val('');
      sendEmail(form_response);
    },
    error: function () {
      alert("There was an error :(")
    }
  });
});