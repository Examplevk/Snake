function Score(){
	
	this.count = 0;
	
	var that = this;
	
	this.getCount = function(){
		return that.count;
	}
	this.reset = function(){
		that.count = 0;
		that.updateCount();
	}
	this.increase = function(){
		that.count += 10;
		that.updateCount();
	}
	this.updateCount = function(){
		$('#count').html(that.count);
	}
}