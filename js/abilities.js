$(document).ready(function() {

  applyJson('../resources/abilities.json', function(data) {
    var abilities = data.abilities;
    var colors = ["#2ecc71", "#3498db", "#9b59b6", "#1abc9c", "#f1c40f", "#e67e22", "#e74c3c"];
    for (var i = 0; i < abilities.length; i++) {
      var ability = abilities[i];
      var element = `<div class="language"><p class="name">` + ability.name + `</p><div class="progress-bar"><p class="progress-percent">` + ability.level + `%</p><span class="bar"><span class="progress"style="width: ` + ability.level + `%;background: ` + colors.random() + `;"></span></span></div></div>`;
      $('main>div>.languages>.categories').append(element)
    }
  });

  $('main > div> .languages > a').click(function() {
    var text = $(this).text();
    if (text === 'Masquer') {
      $(this).text('Compétences').append('<span></span>');
      $('main > div > .languages > .categories').addClass('hidden')
    } else {
      $(this).text('Masquer').append('<span></span>');
      $('main > div > .languages > .categories').removeClass('hidden')
    }
  });

});
