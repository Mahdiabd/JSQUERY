$("#B1").click(function(){
	$("#TUN").css("font-weight","bold");
});
$("#B2").click(function(){
	$("#TUN").css("font-style","italic");
});
$("#B3").click(function(){
	$("#TUN").css("text-decoration","underline");
});
$("#choice").change(function(){
	$("#TUN").css("font-size", $("#choice").val() +'px'  )
	// console.log( $("#choice").html() )
}
)
$("#police").change(function(){
	$("#TUN").css("font-family", $("#police").val()  )
	// console.log( $("#choice").html() )
}
)

