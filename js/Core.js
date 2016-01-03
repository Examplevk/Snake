//
// Ядро
function Core()
{
	
	this.snake;
	this.timerGame;
	this.timerHedgehog;
	this.count = new Score();
	
	var bullet;
	
	var hedgehog;  //hedgehog
	var hedgehogX = 15;
	var hedgehogY = 15;
	
	var timeCore;	
	var timeHedgehog;
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
			timeCore = 300;
			break;
			case 'Slow':
			timeCore = 400;
			break;
			case 'Fast':
			timeCore = 200;
			break;
		}
		timeHedgehog = timeCore * 2;
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
		
		clearInterval(that.timerGame);                               	
		clearInterval(that.timerHedgehog);                           
		that.timerGame = setInterval( function(){					  
			if(!that.snake.alive)				that.gameover();
						
			that.snake.move(that.snake.course);	
            if(hedgehogX == that.snake.body[0][0] && hedgehogY == that.snake.body[0][1] ) that.snake.kill();			
			           			
			} ,timeCore);
		that.timerHedgehog = setInterval(function(){
			hedgehog.postMessage(that.snake.body);	
			m1.setCell(hedgehogX,hedgehogY,false);			
		}, timeHedgehog);
	}
	
	this.gameover = function()
	{	
	
	    that.indicatorGame = false;
	    that.stopWorker();
	    delete that.snake;
		delete bullet;
	    that.timerGame = clearInterval(that.timerGame);
		that.timerHedgehog = clearInterval(that.timerHedgehog);
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
        if(typeof(hedgehog) == "undefined") {
            hedgehog = new Worker("Hedgehog.js");
        }
        hedgehog.onmessage = function(event) {
			hedgehogX = event.data[0];
			hedgehogY = event.data[1];
			//if(hedgehogX == that.snake.body[0][0] && hedgehogY == that.snake.body[0][1] ) that.snake.kill();
          m1.setBombCell(hedgehogX,hedgehogY);
		  if(event.data[2]){
			  bullet = new Bullet(event.data[0],event.data[1],event.data[3]);
			  
		  }
        };
    } else {
        alert("Sorry, your browser does not support Web Workers...");
    }
}

	this.stopWorker = function() { 
		hedgehog.terminate();
		hedgehog = undefined;
	}
	
	this.increaseScore = function(){
		that.count.increase();
	}
		
	this.cmdRight = function()
	{		
		that.changeSnakeCourse('left','right');
		//Change the course of the snake to the right
	}
	
	this.cmdLeft = function()
	{		
		that.changeSnakeCourse('right','left');
		//Change the course of the snake to the left.
	}
	
	this.cmdUp = function()
	{		
		that.changeSnakeCourse('down','up');		
	}
	
	this.cmdDown = function()
	{		
		that.changeSnakeCourse('up','down');		
	}
	
	this.changeSnakeCourse = function(currentCourse, newCourse){
		
		if(that.snake.course == currentCourse) {}else
		that.snake.course = newCourse;
	}
}