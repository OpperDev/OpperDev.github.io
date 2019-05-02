$(document).ready(function() {

  $('header > nav > ul > li.hamburger').click(function() {
    if (window.matchMedia('(max-width: 900px)').matches) {
      if ($('header > nav > ul > li.right').css('display') === 'none') $('header > nav > ul > li.right').css('display', 'block');
      else $('header > nav > ul > li.right').css('display', 'none')
    }
  });

});
