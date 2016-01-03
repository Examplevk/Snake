function Food(){
	this.coord = 8;
	
	var that = this;
	
	this.newFood = function(){
		
		top:
		do{
			var rand = Math.floor(Math.random()*400);
			
			for(var i = 0; i<game.snake.body.length; i++){
				    var a = game.snake.body[i][0];
					var b = game.snake.body[i][1];
					var n = a * 20 - 21 + b;
					if(rand == n) continue top;

					
			}
			   
		       this.coord = rand;
			    m1.setCellforFood(rand);
			   break;
		   
		  }while(true);
		
		
	}
	this.isFood = function(x,y){
		var n = x * 20 - 21 + y;
		if(that.coord == n) 
			return true;
		else 
			return false;
	}
}