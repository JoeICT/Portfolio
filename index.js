// document.getElementById("container").target;
var radius = 100; // adjust to move out items in and out 
var fields = $('.item'),
  container = $('#container'),
  width = container.width(),
  height = container.height();
var angle = 0,
  step = (2 * Math.PI) / fields.length;
fields.each(function() {
  var x = Math.round(width / 2 + radius * Math.cos(angle) - $(this).width() / 2);
  var y = Math.round(height / 2 + radius * Math.sin(angle) - $(this).height() / 2);
  if (window.console) {
    console.log($(this).text(), x, y);
  }
  $(this).css({
    left: x + 'px',
    top: y + 'px'
  });
  angle += step;
});

// about me 

$(document).ready(function(){
	$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
		$(this).toggleClass('open');
	});
});