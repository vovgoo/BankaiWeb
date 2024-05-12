$(document).ready(function(){
  $('.toggle-dropdown').click(function(){
    var $thisToggle = $(this);
    var $thisDropdown = $thisToggle.closest('div');
    var $parentparentDiv = $thisDropdown.parent().parent();
    $('.dropdown-content').not($parentparentDiv.find('.dropdown-content')).slideUp();
    $('.toggle-dropdown').not($thisToggle).removeClass('rotate-45');
    $thisToggle.toggleClass('rotate-45');
    $parentparentDiv.find('.dropdown-content').slideToggle();
  });
});


$(document).ready(function() {
  setTimeout(function() {
    function logPositionDifference() {
      var posY1 = $('#1-step').offset().top;
      var posY4 = $('#4-step').offset().top;
      $('#splash').height(posY4 - posY1);
    }

    logPositionDifference();

    $(window).on('resize', function() {
      logPositionDifference();
    });
  }, 4000);
});

$(document).ready(function() {
  setTimeout(function() {
    $("#main-image").animate({ opacity: 1, left: 40 }, 1000);

    let translateY = 0;
    let direction = -1;

    function animateUpDown() {
      setInterval(function() {
        translateY += direction;
        if (translateY === 0 && direction === 1) {
          direction = -1;
        } else if (translateY === -50 && direction === -1) {
          direction = 1;
        }
        $("#main-image").css('transform', 'translate(0, ' + translateY + 'px)');
      }, 20);
    }

    $(document).ready(function() {
      animateUpDown();
    });

  }, 2500);
});

$(document).ready(function() {
  setTimeout(function() {
    var startValue = 0;
    var endValue = 4.7;

    var duration = 100; 

    function animateValue(obj, start, end, duration) {
        var range = end - start;
        var current = start;
        var increment = end > start ? 0.1 : -0.1;
        var stepTime = Math.abs(Math.floor(duration / range));
        var timer = setInterval(function() {
            current += increment;
            obj.text(current.toFixed(1));
            if (current >= end) {
                clearInterval(timer);
            }
        }, stepTime);
    }

    animateValue($('#rating-counter'), startValue, endValue, duration);
  }, 2500);
});

$(document).ready(function(){
  setTimeout(function() {
    var tempElement = $('<p id="typed_content" class="text-white">The Next Big Thing In Digital Money Transfer</p>');
    $('#typed').append(tempElement);
    var containerHeight = $('#typed').height();
    tempElement.remove();

    $('#typed').height(containerHeight);
    var typed = new Typed('#typed', {
      strings: ['The Next Big Thing In Digital Money Transfer'],
      typeSpeed: 30,
      showCursor: false,
    });
  }, 3200); 
});


$(document).ready(function() {
  setTimeout(function() {
    $('.stars i').each(function(index) {
      $(this).delay(100 * index).queue(function(next) {
        $(this).removeClass('hidden').css('opacity', '1');
        next();
      });
    });
  }, 3000);
});


$(document).ready(function(){
  function animateElementsOnScroll(elementClass, animationProperties) {
    var scrollHandler = function() {
      var scrollPosition = $(window).scrollTop();
      var elementOffset = $(elementClass).offset().top;
      var windowHeight = $(window).height();
      var offset = 0.2; 

      if(scrollPosition + windowHeight >= elementOffset + offset * windowHeight){
        $(animationProperties.selector).animate(animationProperties.styles, animationProperties.duration);
        $(window).off('scroll', scrollHandler);
      }
    };

    scrollHandler();
    $(window).scroll(scrollHandler);
  }

  var animations = [
    {
      elementClass: '.scene-1',
      animationProperties: {
        selector: '.scene-1-item',
        styles: { top: '0' },
        duration: 500
      }
    },
    {
      elementClass: '.scene-2',
      animationProperties: {
        selector: '.scene-2-item-left, .scene-2-item-right',
        styles: { left: '0', opacity: '1' },
        duration: 500
      }
    },
    {
      elementClass: '.scene-3',
      animationProperties: {
        selector: '.scene-3-item-left, .scene-3-item-right',
        styles: { left: '0', opacity: '1' },
        duration: 500
      }
    },
    {
      elementClass: '.scene-4',
      animationProperties: {
        selector: '.scene-4-item',
        styles: { top: '0' },
        duration: 500
      }
    }
  ];

  $(window).scroll(function() {
    animations.forEach(function(animation) {
      animateElementsOnScroll(animation.elementClass, animation.animationProperties);
    });
  });
});



$(document).ready(function() {
  function animateUpDown() {
      $("#last-image").animate({ top: '270px' }, 1500, function() {
          $(this).animate({ top: '240px' }, 1500, animateUpDown); 
      });
  }

  if ($(window).width() > 1024) {
      animateUpDown();
  }

  $(window).resize(function() {
      if ($(window).width() > 1024) {
          animateUpDown();
      } else {
          $("#last-image").stop(true, false);
      }
  });
});

$(document).ready(function(){
  setTimeout(function(){
      $('.placeholder').fadeOut(500, function() {
          $('.content').css('display', 'flex');
      });
  }, 2500); 
});

$(document).ready(function() {
  $('#burger-icon').click(function() {
      $('#mobile-menu').toggleClass('show'); 
  });

  $('#burger-icon-1').click(function() {
      $('#mobile-menu').toggleClass('show'); 
  });
});