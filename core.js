//
// Ядро
function Core()
{
	
	this.snake;
	this.timer;
	this.timerFrog;
	
	var bullet;
	var count;
	var w;  //frog
	var wX = 15;
	var wY = 15;
	
	var timeCore;
	var timeFrog;
	this.indicatorGame;
	
	// итд, переменных сколько вам нужно (можете вместо переменных использовать поля)
	
	var that = this;
	
	this.load = function()
	{
		m1 = new Matrix('matrix1', 20, 20);
		m1.create();
		that.snake = new Snake([[1,2],[1,1]]);
		that.snake.create();
		apple = new Food();
		apple.newFood();
		//m1.setCellforFood(150);
		that.indicatorGame = true;
		
		
		//alert($( "#speed" ).val());
		switch($( "#speed" ).val()){
			case 'Medium':
			timeCore = 600;
			break;
			case 'Slow':
			timeCore = 1000;
			break;
			case 'Fast':
			timeCore = 250;
			break;
		}
		timeFrog = timeCore * 2;
		that.start();
		
		$('#wrap-index').hide();
		
	    $("#scope,#inputName").toggle();
		$('#startButton').hide();
		
		$( "#matrix1" ).draggable();
		$( "#scope" ).draggable();
		 runEffect();
	
		function runEffect(){
               $( "#matrix1" ).effect( "bounce", {
                  times: 10,
                  distance: 100
               }, 3000
            );
		};
		
		that.startWorker();
	    
		
	    
		
		
		
		/*
		   простор для фантазии, что вы ещё хотите делать при подгрузке игры (например, сразу нарисуйте фрукт)
		*/
	}

	this.start = function()
	{	
		count = 0;
		
		clearInterval(that.timer);                               // Пересмотреть таймера, не всегда срабатывает килл  и можно съесть себя(вниз и назад)		
		clearInterval(that.timerFrog);                           
		that.timer = setInterval( function(){					  
			if(!that.snake.alive){				
				that.gameover();
			}			
			that.snake.move(that.snake.course);	
            if(wX == that.snake.body[0][0] && wY == that.snake.body[0][1] ) that.snake.kill();			
			
            			
			} ,timeCore);
		that.timerFrog = setInterval(function(){
			w.postMessage(that.snake.body);	
			m1.setCell(wX,wY,false);			
		}, timeFrog);
	}
	
	this.gameover = function()
	{	
	
	    that.indicatorGame = false;
	    that.stopWorker();
	    delete that.snake;
		delete bullet;
	    that.timer = clearInterval(that.timer);
		that.timerFrog = clearInterval(that.timerFrog);
		//завершаем игру
		$("#matrix1").css({"text-align": "center", "color": "red"});
		var countPlayer = $("#count").html();
		
			
		$.post("add.php",
				{score: countPlayer}, 
				//function(data){
				//		$("#matrix1")
				//					.append("</hr>DAts: " + data);
				//	},
				"html" // "xml", "script", "json", "jsonp", "text"
				);
		
        		
	
		
		
		$("#matrix1").html("<h1>Вы проиграли!</h1><h4>Ваш счет: "+countPlayer+"</h4><div class=\"col-md-6 col-md-offset-3\"><button id=\"restart\" class=\"btn btn-info btn-lg btn-block\" type=\"submit\">Заново</button><button id=\"results\" class=\"btn btn-info btn-lg btn-block\" type=\"submit\">Результаты</button></div>");
		//$("#scope").hide();
		$( "#scope" ).effect( "explode", {}, 500);
		$("#results").click(function(elem){
		$.post("get.php",
							"data=content" ///* 
							//{data: "content"} //*/
							, that.chatResults,
								'json'
							);
	    $("#findUser").remove();						
		$("#matrix1").append("<p><input type=\"text\" id=\"findUser\"/></p>");

		
	});
		$("#restart").click(function(){
			
			//game = new Core();
			game.load();
			that.start();
			//$("#scope,#matrix1").show();
			
			//$( "#scope,#matrix1" ).effect( "slide", {}, 500);
			$("#count").html("0");
			
		});
	}
	this.chatResults = function(msgs){
		
		    var availableTags = [];
			for(var i = 0; i < msgs.length; i++){
				
				availableTags[i] = msgs[i]['name'];
				
			}
			
		
		    $("#findUser").autocomplete({
			   source: availableTags,
			   
			   select: function( event, ui ) {
				   
				 
				   
				   var userProfile = ui.item.value;
				  
		            $("#resultsUser").empty(); 
					for(var l = 0; l < msgs.length; l++){
						var tempProfile = msgs[l]['name'];
						if(userProfile == tempProfile){
							$("#resultsUser").append("<p>Name: "+msgs[l]['name']+"________ Score: "+msgs[l]['score']+"</p>");
							}
				
					};
			 }
			});
		
		/*for(var k = msgs.length - 1; k >=2; k-- ){       //Сортировка пузырьком
	
		var sorted = true;
	
		for(var i = 0; i<k; i++){
			var temp1 = msgs[i];
			var temp2 = msgs[i + 1];
			if(parseInt(temp1['score']) < parseInt(temp2['score'])){
		
				var temp = msgs[i+1];
				msgs[i+1] = msgs[i];
				msgs[i] = temp;
				sorted = false;
			}
	
	
		}
		if(sorted) {
        break;
		}   
		};*/
		$("#resultsUser").remove();	
		$("#matrix1").append("<div id=\"resultsUser\" class=\"col-xs-12\"><table id=\"results-tbl\" class=\"col-xs-8 col-xs-offset-2\"></table></div>");
		for(var j = 0; j < 5 ;j++){
			
			$("#results-tbl").append("<tr><td class=\"left-col\">"+msgs[j]['name']+"</td><td class=\"right-col\">"+msgs[j]['score']+"</td></tr>");
			
		};
		
		
	}
	
	//Workers
	this.startWorker = function() {
    if(typeof(Worker) !== "undefined") {
        if(typeof(w) == "undefined") {
            w = new Worker("frog.js");
        }
        w.onmessage = function(event) {
			wX = event.data[0];
			wY = event.data[1];
			//if(wX == that.snake.body[0][0] && wY == that.snake.body[0][1] ) that.snake.kill();
          m1.setBombCell(wX,wY);
		  if(event.data[2]){
			  bullet = new Bullet(event.data[0],event.data[1],event.data[3]);
			  
		  }
        };
    } else {
        alert("Sorry, your browser does not support Web Workers...");
    }
}

	this.stopWorker = function() { 
		w.terminate();
		w = undefined;
	}
	
	
	this.cmdRight = function()
	{
		if(that.snake.course == 'left') {}else
		that.snake.course = 'right';
		//меняем курс змеи вправо, если это возможно
	}
	
	this.cmdLeft = function()
	{
		if(that.snake.course == 'right') {}else
		that.snake.course = 'left';
		//меняем курс змеи влево, если это возможно
	}
	
	this.cmdUp = function()
	{
		if(that.snake.course == 'down') {}else
		that.snake.course = 'up';
		//меняем курс змеи вверх, если это возможно
	}
	
	this.cmdDown = function()
	{
		if(that.snake.course == 'up') {}else
		that.snake.course = 'down';
		//меняем курс змеи вниз, если это возможно
	}
}