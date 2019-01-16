$('.carousel').carousel()

$(document).ready(function() {
    $('map').imageMapResize();
});

$(document).ready(function()
  {
      // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
      $('.whiteshirt').each(function() {
          $(this).qtip({
              content: {
                  text: $(this).next('.tooltiptext')
              },
              show: 'click',
            hide: 'click unfocus',
              position: {
                at: 'bottom center',
                my: 'bottom center',
                target: $(window), // Track the mouse as the positioning target
            }
          });
      });
  });


  