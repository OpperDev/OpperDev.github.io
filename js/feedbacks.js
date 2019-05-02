$(document).ready(function() {

  applyJson('../resources/feedbacks.json', function(data) {
    var feedBacks = data.feedbacks;
    for (var i = 0; i < feedBacks.length; i++) {
      var feedBack = feedBacks[i];
      var element = `<div class="feedback"><p class="message">` + feedBack.message + `</p><div class="infos"><p class="project">` + feedBack.project + `</p><p class="name">` + feedBack.name + `</p></div><img src="` + feedBack.avatar + `"alt="Profile pic"width="50px"></div>`;
      $('main>.feedbacks').append(element)
    }
  });

});
