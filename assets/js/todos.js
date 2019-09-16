//Check off 
$("ul").on("click", "li", function() {
	$(this).toggleClass("completed");
});

//clicking X to delete todo
$("ul").on("click", "span", function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
		var todotext = $(this).val();
		//create a new todo
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todotext + "</li>");
	}
})

$(".fa-plus").click(function(){
	$("input[type='text']").fadeToggle();
})