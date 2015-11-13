//
// Точка входа.
//
$(document).ready(function()
{   $("#scope,#matrix1").hide();
	$('#formDialog').hide();
	
	window.showOfferDialog = function(form){
		$(form).dialog('open');
	}
	
	$(function(){
		$('#formDialog').dialog({
			autoOpen: false,
			modal: true,
			//position: 'center'
		
		});
	});
	$( "#speed" ).selectmenu();
	
	$('#buttonName').click(function(){
	
		var m_name = $('#nameField').val();
		
	
		$.post("add.php", {name: m_name},
				function(data) {
					
					if(data == 'empty')
					{
						$('#resultOffer').html('<span style="color: green; font-weight: bold;">Заявка успешко оформлена!</span>');
						$('#formDialog').fadeOut(1000);
						setTimeout(function(){$('#formDialog').dialog('close');
						game = new Core;
	                    game.load();
						}, 1000);
						
					}
					else
					{
						$('#resultOffer').html('<span style="color: red; ">Пожалуйста заполните корректно все поля формы: <b>'+ data + '</b></span>');
					}
		});
	});
	
	
	
	
	
	
	
	
	window.onkeydown = function (event) 
	{		
		switch(event.keyCode)
		{
			case 37: //left
				game.cmdLeft();
			break;
			
			case 38: //up
				game.cmdUp();
			break;
			
			case 39: //right
				game.cmdRight();
			break;
			
			case 40: //down
				game.cmdDown();
			break;
			
			default:
			break;
		}
	}	
});		