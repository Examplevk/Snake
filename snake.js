//
// ????? ????
//
function Snake(body, course)
{
	// ?????????? ????? ? ????????
	this.body = body;
	
	// ??????????? ????????
	this.course = course;

	// ??????? ?????? ?????
	this.eated = false;
	
	// ???? ?? ??????
	this.alive = true;
	
	var that = this;
	
	var LastX;
	var LastY;
	
	this.create = function()
	{
			that.manifestation();
	} 

	this.move = function(event)
 	{	
		that.eated = false;
						
		var last_body = that.body;
		LastX = last_body[last_body.length-1][0];
		LastY = last_body[last_body.length-1][1];
		
		
		switch(event)
		{		
			case 'right':
			
			if(that.course == 'left')
				break;
			that.course = 'right';
			
			//delete Snake from area
			that.deleteSnake(last_body);
			
			if(that.body[0][1] + 1 > 20){
				that.kill();
				break;
			}else{
					if(apple.isFood(that.body[0][0],that.body[0][1] + 1)){
						that.eat(LastX,LastY);
					}
			}	
						
			that.checkSnake(1,'increase');
			
				that.manifestation();
			   if(that.eated){
					apple.newFood();
				}
						
			break;	
			case 'left':
						
			if(that.course == 'right')
				break;
			that.course = 'left';
			
			//delete Snake from area
			that.deleteSnake(last_body);
			
			if(that.body[0][1] - 1 < 1){
					that.kill();
					break;
				}else{
				if(apple.isFood(that.body[0][0],that.body[0][1] - 1)){
						that.eat(LastX,LastY);
					}	
				}				
			
			that.checkSnake(1,'decrease');
					   
				that.manifestation();
			   if(that.eated){
					apple.newFood();
				}
			
			
			break;
			case 'down':
			
			if(that.course == 'up')
				break;
			that.course = 'down';
			//delete Snake from area
			that.deleteSnake(last_body);
			
			if(that.body[0][0] + 1 > 20){
					that.kill();
					break;
				}else{
				if(apple.isFood(that.body[0][0] + 1,that.body[0][1])){
							that.eat(LastX,LastY);
				}
			}
						
			that.checkSnake(0,'increase');
			    
				that.manifestation();
				if(that.eated){
					apple.newFood();
				}			
			
			break;
			case 'up':
			
			if(that.course == 'down')
				break;
			that.course = 'up';
			
			//delete Snake from area
			that.deleteSnake(last_body);
			
			if(that.body[0][0] - 1 < 1){
					that.kill();
					break;
				}else{
			    if(apple.isFood(that.body[0][0] - 1,that.body[0][1])){
						  that.eat(LastX,LastY);
					}
				}	
		
			that.checkSnake(0,'decrease');
			    
				that.manifestation();
			
			if(that.eated){
					apple.newFood();
				}
			
			break;
		}

	}	
	this.checkSnake = function(coord,change){
		
		for(var i = that.body.length-1; i > 0; i--){
				that.body[i] = that.body[i-1];
				if(i == 1){
					var temp = [that.body[0][0],that.body[0][1]];
			        that.body[1] = temp;					
			        if(change == 'decrease')--that.body[0][coord]; else ++that.body[0][coord];
					for(var k = 1; k<that.body.length; k++){
						if(that.body[0][0] == that.body[k][0]&& that.body[0][1] == that.body[k][1] || that.body[0][0] == LastX && that.body[0][1] == LastY){
							//alert("You lose");
							that.kill();
							
							break;
						}
					}					
				}                   
		}			
	}
	
	this.eat = function(x,y)
	{	
	//?????????? ?????
	    if(that.body[that.body.length-1][0] == that.body[that.body.length-2][0]){
			
			if(that.body[that.body.length-1][1] > that.body[that.body.length-2][1]){
				if(that.body[that.body.length-1][1] + 1 > 20){
					that.body.push([x,y]);		
				}else{
				that.body.push([that.body[that.body.length-1][0],that.body[that.body.length-1][1] + 1]);
				}
			} else{
				if(that.body[that.body.length-1][1] - 1 < 1){
					that.body.push([x,y]);
				}else{
				that.body.push([that.body[that.body.length-1][0],that.body[that.body.length-1][1] - 1]);
				}
			}
		} else{
			if(that.body[that.body.length-1][0] < that.body[that.body.length-2][0]){
				if(that.body[that.body.length-1][0] - 1 < 1){
					that.body.push([x,y]);
				}else{
				that.body.push([that.body[that.body.length-1][0] - 1,that.body[that.body.length-1][1]]);
				}
			} else{
				if(that.body[that.body.length-1][0] + 1 > 20){
					that.body.push([x,y]);
				}else{
				that.body.push([that.body[that.body.length-1][0] + 1,that.body[that.body.length-1][1]]);
				}
			}
		}	
	
	    var count = $('#count').html();
		
		var tempCount = parseInt(count) + 10;
		$('#count').html(tempCount)
	
		that.eated = true;
	}	
	
	this.kill = function()
	{	
		that.alive = false;
		
	}	

	this.manifestation = function(){
		m1.setHeadCell(that.body[0][0], that.body[0][1]);
		for(var i = 1; i<that.body.length; i++){
				
				m1.setCell(that.body[i][0], that.body[i][1], true);
			}
	}
    this.deleteSnake = function(preBody){
		
		for(var i = 0; i<preBody.length; i++){
				m1.setCell(preBody[i][0], preBody[i][1], false);
			}
		};
	
	}
    