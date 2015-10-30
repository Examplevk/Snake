//
//  ласс матрицы.
//
function Matrix(containerId, rows, cols)
{
	// id контейнера
	this.containerId = containerId;
	
	// число строк
	this.rows = rows;
	
	// число столбцов
	this.cols = cols;
	
	// создание сетки
	this.create = function()
	{
		var matrix = document.getElementById(this.containerId);
		var n = this.rows * this.cols;	
		
		matrix.innerHTML = '';
		
		for (var i = 0; i < n; i++)
		{
			var div = document.createElement('div');
			div.className = 'cell';
			matrix.appendChild(div);
		}
	}
	
	// получить значение €чейки
	this.getCell = function(row, col)
	{
		
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
	
		if(cell.style.background == 'url(ico/apple.jpg)'){
			return true;
		} else{
			return false;
		}
	}
	this.getRedCell = function(row, col){
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
	
		if(cell.style.background == 'red'){
			return true;
		} else{
			return false;
		}
	}
	
	// установить значение €чейки
	this.setCell = function(row, col, val)
	{
		var ind = (row - 1) * this.cols + col - 1;
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[ind];	
		//cell.className = (val ? 'cell on' : 'cell');
		if(val)
			cell.style.background = 'red';
		else 
			cell.style.background = 'white';
		
	}	
	this.setCellforFood = function(n)
	{
		
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[n];	
		//cell.className = (val ? 'cell on' : 'cell');
		
			cell.style.background = 'url(ico/apple.jpg)';
		
		
	}	
	this.setHeadCell = function(row,col){
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
		
		cell.style.background = '#7A0808';
		
	}
	this.getHeadCell = function(row, col)
	{
		
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
	
		if(cell.style.background == '#7A0808')
			return true;
		else
			return false;
		
	}
	
	this.setBombCell = function(row,col){
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
		
		cell.style.background = 'url(ico/bomb.jpg)';
		
	}
	this.setBulletVertCell = function(row,col){
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
		
		cell.style.background = 'url(ico/KopieVert.jpg)';
		
	}
	this.setBulletHorizCell = function(row,col){
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
		
		cell.style.background = 'url(ico/KopieHoriz.jpg)';
		
	}
}
		
