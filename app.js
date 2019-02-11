$(function(){
	var url = 'https://mindicador.cl/api';
	$(".btn-info").on("click", function(){
			var valor = $(".valorpeso").val();
			var valordolar = $(".dolar").html();
			var resultadodolar = valor/valordolar;
			console.log(valor, valordolar)

		})

	$(function(){
		$.ajax({
			url: url,
			method:'GET',
		}).then(function(data){
			console.log(data);
			$(".dolar").html("CLP " + (data.dolar.valor).toFixed(0));
			$(".Euro").html("CLP " + (data.euro.valor).toFixed(0));
			$(".uf").html("CLP " + (data.uf.valor).toFixed(0));
			$(".utm").html("CLP " + (data.utm.valor).toFixed(0));
		});
	})
});