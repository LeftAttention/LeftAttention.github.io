/**
* Template Name: iPortfolio - v1.5.1
* Template URL: https://bootstrapmade.com/iportfolio-bootstrap-portfolio-websites-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  //Testimonial cards

  var testimonial_data = [
    { "name": "Saul GOodnam", 'desig': "Ceo &amp; Founder", 'content': 'Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.' },
    { "name": "Sara Wilson", 'desig': "Designer", 'content': "Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa." },
    { "name": "Jena Karlis", "desig": "Store Owner", "content": "Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." },
    { "name": "Matt Brandon", "desig": "Freelancer", "content": "Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam." },
    { "name": "John Larson", "desig": "Enterpreneur", "content": "Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid." }
  ]

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
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });

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

//Skills

var skill_data = [
  [
    { 'skill': "HTML", 'value' : 100},
    { 'skill': "CSS", 'value': 90 },
    { 'skill': "JavaScript", 'value': 75 }
  ],
  [
    { 'skill': "PHP", 'value': 80 },
    { 'skill': "Wordpress", 'value': 90 },
    { 'skill': "Photoshop", 'value': 55 }
  ]
]

for(var m = 0; m<skill_data.length; m++){
  var skill_body = ''
  skill_body = '<div class="col-lg-6" data-aos="fade-up" data-aos-delay="' + String(m*100)+ '" >'
  for(var l = 0; l < skill_data[m].length; l++){
    var skill_card = '';
    skill_card += '<div class="progress">';
    skill_card += '<span class="skill">' + skill_data[m][l]['skill'] + '<i class="val">' + skill_data[m][l]['value'] + '%</i></span>';
    skill_card += '<div class="progress-bar-wrap">'
    skill_card += '<div class="progress-bar" role="progressbar" aria-valuenow="' + skill_data[m][l]['value'] + '" aria-valuemin="0" aria-valuemax="100"></div>';
    skill_card += '</div></div>';
    skill_body += skill_card;
  }
  $('#skill-parent').append(skill_body);
}

//Services

var services_data = [
  { "title" : "Lorem Ipsum", "content" : "Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident", "icon" : "icofont-computer"},
  { "title" : "Dolor Sitema", "content" : "Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat tarad limino ata", "icon" : "icofont-chart-bar-graph"},
  { "title": "Sed ut perspiciatis", "content": "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur", "icon": "icofont-earth"},
  { "title": "Magni Dolores", "content": "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum", "icon": "icofont-image"},
  { "title": "Nemo Enim", "content": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque", "icon": "icofont-settings"},
  { "title": "Eiusmod Tempor", "content": "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi", "icon": "icofont-tasks-alt"}
]

for(var k = 0; k<services_data.length; k++){
  var service_card = "";
  service_card += '<div class="col-lg-4 col-md-6 icon-box" data-aos="fade-up" data-aos-delay="'+ String(k*100) + '">';
  service_card += '<div class="icon"><i class=' + services_data[k]['icon'] + '></i></div>';
  service_card += '<h4 class="title"><a href="">' + services_data[k]['title'] + '</a></h4>';
  service_card += '<p class="description">' + services_data[k]['content'] + '</p></div>';
  $('#service-parent').append(service_card);
}

//Portfolio Modals

var iframelink = {
  1: { "url": "https://docs.google.com/document/d/e/2PACX-1vQquIBgaOJeohsHXOq4SEtxISvCgzV2cni1CZewAOst0w9p_qIK-zV6w2xKA7qYgh-pu10-uCeIi9iQ/pub?embedded=true", "title": "3D Pose", "filter": "app" },
  2: { "url": "https://docs.google.com/document/d/e/2PACX-1vRRFaQegzl8tzsYukBnyS8O9F5SbkKwK-VYUtxxPtcLw2zxg1__ryAIWtoDD03WtcpqKnQTkYO6HIfh/pub?embedded=true", "title": "Deep Fake", "filter": "app" },
  3: { "url": "https://docs.google.com/document/d/e/2PACX-1vRWDsdB8P6VlxmtTMKVuGoAb8fQ3h3db7pbjgslVt3MBwmZMbAMBW05v256OWYAHDCzLGldu1oH3Zk-/pub?embedded=true", "title": "Temperature", "filter": "web" },
  4: { "url": "https://docs.google.com/document/d/e/2PACX-1vQHvnkCC71MQ3MJt-yPx5wtqVVVZygtu54O_P7dXUYANyqi3BNWLazoK26d-wWMVYpNe-fgC5ZMqNmN/pub?embedded=true", "title": "CARD", "filter": "card" },
  5: { "url": "https://docs.google.com/document/d/e/2PACX-1vQu-x4PiW4VCrJSBNPWKoxL1rQgtej2XHUp0id505IiNd1wrDsJfQJ_dkK8azOoHHUGUdZ9jX_aFCTy/pub?embedded=true", "title": "TimeGAN", "filter": "web" },
  6: { "url": "https://docs.google.com/document/d/e/2PACX-1vSxHc45kbEbVM0BhFPNMlXOaiLuc9g-M9i9OP48c2uWh_lqCIm4DFYZWMA0ZEmtEfbd9UHvayXH5qs4/pub?embedded=true", "title": "One Step Ahead of UNet", "filter": "card" },
  7: { "url": "https://docs.google.com/document/d/e/2PACX-1vTgiNTWzi9-nDndKhoJmUNdCSholi7X1dWjeoL9iv0eegFQ5AXW6Wi2JTOVd9F20W74poIFs7sk7eH4/pub?embedded=true", "title": "E2E_Chatbot", "filter": "card" },
  8: { "url": "https://docs.google.com/document/d/e/2PACX-1vT4eaZwTaBggO7mvSdRWawhsyqY1kg-4lzo5kYII2GUNgfxm2ESAmB7Gb80R7F5_LBq7DZAgfpRGGDJ/pub?embedded=true", "title": "Panoptic Segmentation", "filter": "app" },
  9: { "url": "", "title": "", "filter": "app" }
};

for (var i = 0; i < Object.keys(iframelink).length; i++){
  var portfolio_body = "";
  portfolio_body += '<div class="col-lg-4 col-md-6 portfolio-item filter-' +iframelink[i+1]['filter'] + '">';
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