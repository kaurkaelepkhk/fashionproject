$('.carousel').carousel()

$(document).ready(function() {
    $('map').imageMapResize();
});

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
  })

  $(document).ready(function()
  {
      // MAKE SURE YOUR SELECTOR MATCHES SOMETHING IN YOUR HTML!!!
      $('.asd').each(function() {
          $(this).qtip({
              content: {
                  text: $(this).next('.tooltiptext')
              },
              position: {
                target: 'mouse', // Track the mouse as the positioning target
                adjust: { x: 5, y: 5 } // Offset it slightly from under the mouse
            }
          });
      });
  });
