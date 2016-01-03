
function Bullet(x,y,course){   // принимаем координаты ежа и курс
	var a = x;
	var b = y;
	this.x = x;
	this.y = y;
	this.alive = true;
	this.course = course;
	var that = this;
	that.checkSnake;
	this.timer = setInterval(
	
	function(){
		if(!game.indicatorGame) {
			that.timer = clearInterval(that.timer);
			that.checkSnake = clearInterval(that.checkSnake);
		} 
		if(that.x == a && that.y == b){ a = 0; b = 0;}
		else
		m1.setCell(that.x,that.y,false);
		
	switch(that.course) {
     case 'up':  
        --that.x;
		that.setBullet('vert');	
		break;

	case 'down': 
      ++that.x;
	  that.setBullet('vert');
		break;
		
    case 'left': 
      --that.y;
	  that.setBullet('horiz');
		break;
	
	case 'right': 
      ++that.y;
	  that.setBullet('horiz');
		break;
		}
	}
	, 1000);
	
	this.checkSnake = setInterval(function(){
		if(game.snake.body[0][0] == that.x && game.snake.body[0][1] == that.y){ 
			game.snake.kill();
			that.timer = clearInterval(that.timer);
		    delete that.timer;
			that.checkSnake = clearInterval(that.checkSnake);
			delete that.checkSnake;
		}
		//	return false;
		//} else 
			//return true;
	}, 2);
	
	this.checkBullet = function(){
		if(that.x>20 || that.x<1 || that.y>20 || that.y<1 || m1.getRedCell(that.x,that.y) || apple.isFood(that.x,that.y)){
			that.timer = clearInterval(that.timer);
		    delete that.timer;
			that.checkSnake = clearInterval(that.checkSnake);
			delete that.checkSnake;
			return false;
		}else
			return true;
	}
	this.setBullet = function(plane){
		if(that.checkBullet()){
			if(plane == 'horiz')
				m1.setBulletHorizCell(that.x,that.y);
			else
				m1.setBulletVertCell(that.x,that.y);
		}	    
	}
	
}