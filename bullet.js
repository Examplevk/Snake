
function Bullet(x,y,course){   // принимаем координаты жабы и курс
	var a = x;
	var b = y;
	this.x = x;
	this.y = y;
	this.alive = true;
	this.course = course;
	var that = this;
	this.timer = setInterval(
	
	function(){
		if(!game.indicatorGame) that.timer = clearInterval(that.timer);
		if(that.x == a && that.y == b){ a = 0; b = 0;}
		else
		m1.setCell(that.x,that.y,false);
		
	switch(that.course) {
     case 'up':  
        --that.x;
		if(that.check())
	    m1.setBulletVertCell(that.x,that.y);
	
		break;

	case 'down': 
      ++that.x;
	  if(that.check())
	  m1.setBulletVertCell(that.x,that.y);
		break;
		
    case 'left': 
      --that.y;
	  if(that.check())
	  m1.setBulletHorizCell(that.x,that.y);
		break;
	
	case 'right': 
      ++that.y;
	  if(that.check())
	  m1.setBulletHorizCell(that.x,that.y);
		break;
		}
		
		/*if(that.x>20 || that.x<1 || that.y>20 || that.y<1 || m1.getRedCell(that.x,that.y) || apple.isFood(that.x,that.y)){
			that.timer = clearInterval(that.timer);
		    delete that.timer;
		}
		else if(game.snake.body[0][0] == that.x && game.snake.body[0][1] == that.y){ 
			game.snake.kill();
		}
		//else 
		//     m1.setHeadCell(that.x,that.y); */
	    
		 
	}
	, 1000);
	
	this.check = function(){
		if(that.x>20 || that.x<1 || that.y>20 || that.y<1 || m1.getRedCell(that.x,that.y) || apple.isFood(that.x,that.y)){
			that.timer = clearInterval(that.timer);
		    delete that.timer;
			return false;
		}
		else if(game.snake.body[0][0] == that.x && game.snake.body[0][1] == that.y){ 
			game.snake.kill();
			return false;
		} else 
			return true;
	}
	
}