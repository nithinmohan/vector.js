var Vector=function(x,y){
	this.x=x;
	this.y=y;
}
Vector.prototype.add=function(vector){
	this.x+=vector.x;
	this.y+=vector.y;
	return this;
}
Vector.prototype.sub=function(vector){
	this.add(this.multiply_scalar(-1));
	return this;
}
Vector.prototype.multiply_scalar=function(scalar){
	this.x*=scalar;
	this.y*=scalar;
	return this;
}
Vector.prototype.divide_scalar=function(scalar){
	this.multiply_scalar(1/scalar);
	return this;
}
Vector.prototype.dot_product=function(vector){
	return this.x*vector.x+this.y*vector.y;
}
Vector.prototype.magnitude=function(){
	return Math.sqrt(this.x*this.x+this.y*this.y);
}
Vector.prototype.getAngleInRadient=function(){
	return Math.atan2(this.x,this.y);
}
Vector.prototype.getAngleInDegree=function(){
	return Math.atan2(this.x,this.y)*(180/Math.PI);
}