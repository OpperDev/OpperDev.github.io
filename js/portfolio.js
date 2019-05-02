$(document).ready(function() {

  applyJson('../resources/portfolio.json', function(data) {
    var demos = data.portfolio;
    for (var i = 0; i < demos.length; i++) {
      var demo = demos[i];
      var element = `<div class="demo"><a href="../` + demo.images[0] + `"data-fancybox="images"><img src="../` + demo.images[0] + `"></a><div class="subimages">`;
      for (var j = 1; j < demo.images.length; j++) {
        element += `<a href="../` + demo.images[j] + `"data-fancybox="images"><img src="../` + demo.images[j] + `"></a>`
      }
      element += `</div></div>`;
      $('main>.demos').append(element)
    }
  });

  $('[data-fancybox="images"]').fancybox();

});
