//
// Area
//
function Matrix(containerId, rows, cols)
{
	
	this.containerId = containerId;
	
	// number of lines
	this.rows = rows;
	
	// number of columns
	this.cols = cols;
	
	var that = this;
	
	// creating the grid
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
	
	// get the value of a cell
	this.getCell = function(row, col)
	{
		
		var n = row * 20 - 21 + col;
	
	    var matrix = document.getElementById(this.containerId);
	
		var cell = matrix.children[n];
	
		return cell;
	} 
	this.getRedCell = function(row, col){
		
		var cell = that.getCell(row,col);
	
		if(cell.style.background == '#e11a64'){
			return true;
		} else{
			return false;
		}
	}
	
	// set the value of a cell
	this.setCell = function(row, col, val)
	{
		var cell = that.getCell(row,col);	
		
		if(val)
			cell.style.background = '#e11a64';
		else 
			cell.style.background = 'white';
		
	}	
	this.setCellforFood = function(n)
	{
		
		var matrix = document.getElementById(this.containerId);
		var cell = matrix.children[n];	
				
			cell.style.background = 'url(ico/apple.jpg)';
		
		
	}	
	this.setHeadCell = function(row,col){
		
		var cell = that.getCell(row,col);
		
		cell.style.background = '#7A0808';
		
	}
	this.getHeadCell = function(row, col)
	{
		
		var cell = that.getCell(row,col);
	
		if(cell.style.background == '#7A0808')
			return true;
		else
			return false;
		
	}
	
	this.setBombCell = function(row,col){
		
		var cell = that.getCell(row,col);
		
		cell.style.background = 'url(ico/bomb.jpg)';
		
	}
	this.setBulletVertCell = function(row,col){
		
		var cell = that.getCell(row,col);
		
		cell.style.background = 'url(ico/KopieVert.jpg)';
		
	}
	this.setBulletHorizCell = function(row,col){
		
		var cell = that.getCell(row,col);
		
		cell.style.background = 'url(ico/KopieHoriz.jpg)';
		
	}
	this.isCellEmpty = function(row,col){
		
		var cell = that.getCell(row,col);
		
		if(cell.style.background = 'white')
			return true;
		else 
			false;
		
	}
	this.setGameOverBlock = function(score){
		        $("#matrix1").css({"text-align": "center", "color": "#e11a64"});
				$("#matrix1").html("<h1>You lose!</h1>"+
								"<h4>Your score: "+score+"</h4>"+
								   "<div class=\"col-xs-12 game-over-btns\"><p>"+
										"<button id=\"restart\" class=\"btn btn-info btn-lg\" type=\"submit\">New game</button>"+
										"<button id=\"results\" class=\"btn btn-info btn-lg\" type=\"submit\">Results</button>"+
									"</p></div>");
	}	
	this.appendSearchField = function(){
		$("#matrix1").append("<p><input type=\"text\" id=\"findUser\"/></p>");
	}
	this.addTableUsers = function(){
		$("#matrix1").append("<div id=\"resultsUser\" class=\"col-xs-12\">"+
								"<table id=\"results-tbl\" class=\"col-xs-8 col-xs-offset-2\">"+
								"<tr><td class=\"left-col\"><b>Name:</b></td><td class=\"right-col\"><b>Score:</b></td></tr>"+
								"</table>"+
							"</div>");
	}
	this.addUserToTable = function(name, score){
		$("#results-tbl").append("<tr>"+
										"<td class=\"left-col\">"+name+"</td><td class=\"right-col\">"+score+"</td>"+
									"</tr>");
	}
}
		
