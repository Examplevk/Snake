
var x = 15;
var y = 15;
var shot = false;
var course;
var changes;

var lengthX;
var lengthY;

//var timer;

onmessage = function(ev){      
	lengthX = Math.abs(ev.data[0][0] - x);
	lengthY = Math.abs(ev.data[0][1] - y);
	if(lengthX < lengthY){   //Move by x
		if(ev.data[0][0] < x){
			--x;
			shot = false;
			changes = '--x';
		}
		else if(ev.data[0][0] == x){
			shot = true;
			if(ev.data[0][1] > y) course = 'right'; else course = 'left';
		}
		else{
			++x;
			shot = false;
			changes = '++x';
		}
			
	}else{                   //Move by y
		if(ev.data[0][1] < y){
			--y;
			shot = false;
			changes = '--y';
		}
			
		else if(ev.data[0][1] == y){
			shot = true;
			if(ev.data[0][0] > x) course = 'down'; else course = 'up';
		}
			
			
		else{
			++y;
			shot = false;
			changes = '++y';
		}
			
	}
	for(var i = 0; i < ev.data.length ; i++){
		if(ev.data[i][0] == x && ev.data[i][1] == y){
			switch(changes){
				case '--x':
				   ++x;
				   break;
				case '++x':
                   --x;
				   break;
				case '--y':
                   ++y;
                   break;
                case '++y':
                   --y;
                   break;				   
			}
			
		}
			
	}
	//timer = setInterval(function(){shot = false;}, 600);
	 postMessage([x,y,shot,course]);
}