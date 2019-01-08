$("ul").on("click", "li",function(){
	$(this).toggleClass("completed");
}); 

//click on X to delete the notes
$("ul").on("click","span", function(){
	$(this).parent().fadeOut(function(){
		$(this).remove();
	});
	event.stopPropagation();
});
//add note to list
$("input").keypress(function(event){
	if(event.which === 13){
		var toDoNote = $(this).val();
		$(this).val("");
		//create new li and add to ul
		$("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + toDoNote + "</li>")
	}
});