$(document).ready( function(){
	$("nav.tabs ul li a").click( function (event){
		event.preventDefault();
		$(this).parent().siblings().removeClass('selected').end().end().parent().addClass('selected');
		var iframeSRC = $(this).attr("href");
		$("#app-iframe").attr("src",iframeSRC);
	});
});