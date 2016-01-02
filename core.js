//
// Ядро
function Core()
{
	
	this.snake;
	this.timer;
	this.timerFrog;
	this.count = new Score();
	
	var bullet;
	
	var w;  //hedgehog
	var wX = 15;
	var wY = 15;
	
	var timeCore;
	var timeFrog;
	this.indicatorGame;
			
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
		
		$('#wrap-index,#startButton').hide();
		
	    $("#scope,#inputName").toggle();		
		
		$( "#matrix1,#scope" ).draggable();	
		 runEffect();
	
		function runEffect(){
               $( "#matrix1" ).effect( "bounce", {
                  times: 10,
                  distance: 100
               }, 3000
            );
		};
		
		that.startWorker();		
	}

	this.start = function()
	{	
		that.count.reset();
		
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
		
		var countPlayer = that.count.getCount();
			
		$.post("add.php",
				{score: countPlayer}, 
				"html" 
				);
		//set game over block		
		m1.setGameOverBlock(countPlayer);							
									
		$( "#scope" ).effect( "explode", {}, 500);
		$("#results").click(function(elem){
		$.post("get.php",
							"data=content" ///* 
							//{data: "content"} //*/
							, that.chatResults,
								'json'
							);
	    $("#findUser").remove();						
		
		m1.appendSearchField();

		
	});
		$("#restart").click(function(){					
			game.load();
			that.start();						
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
		            $("#resultsUser").remove(); 
					m1.addTableUsers();
					for(var l = 0; l < msgs.length; l++){
						var tempProfile = msgs[l]['name'];
						
						if(userProfile == tempProfile){
							
							m1.addUserToTable(msgs[l]['name'],msgs[l]['score']);
							
							}
				
					};
			 }
			});		
		$("#resultsUser").remove();	
				
		m1.addTableUsers();		
		
		for(var j = 0; j < 5 ;j++){
			
			m1.addUserToTable(msgs[j]['name'],msgs[j]['score']);						
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
	
	this.increaseScore = function(){
		that.count.increase();
	}
		
	this.cmdRight = function()
	{		
		that.changeSnakeCourse('left','right');
		//меняем курс змеи вправо, если это возможно
	}
	
	this.cmdLeft = function()
	{		
		that.changeSnakeCourse('right','left');
		//меняем курс змеи влево, если это возможно
	}
	
	this.cmdUp = function()
	{		
		that.changeSnakeCourse('down','up');
		//меняем курс змеи вверх, если это возможно
	}
	
	this.cmdDown = function()
	{		
		that.changeSnakeCourse('up','down');
		//меняем курс змеи вниз, если это возможно
	}
	
	this.changeSnakeCourse = function(currentCourse, newCourse){
		
		if(that.snake.course == currentCourse) {}else
		that.snake.course = newCourse;
	}
}