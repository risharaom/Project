var canvas = new fabric.Canvas('myCanvas');

person_x = 10;
person_y = 10;

block_image_width = 30;
block_image_height = 30;

var person_object= "";
var block_image_object= "";

function player_update()
{
	fabric.Image.fromURL("person.png", function(Img) {
	person_object = Img;

	person_object.scaleToWidth(150);
	person_object.scaleToHeight(140);
	person_object.set({
	top:person_y,
	left:person_x
	});
	canvas.add(person_object);

	});
}

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function(Img) {
	block_image_object = Img;

	block_image_object.scaleToWidth(block_image_width);
	block_image_object.scaleToHeight(block_image_height);
	block_image_object.set({
	top:person_y,
	left:person_x
	});
	canvas.add(block_image_object);

	});

}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
    if(keyPressed == '38')
	{
		up();
		console.log("up");
	}
	if(keyPressed == '40')
	{
		down();
		console.log("down");
	}
	if(keyPressed == '37')
	{
		left();
		console.log("left");
	}
	if(keyPressed == '39')
	{
		right();
		console.log("right");
	}
    if(keyPressed == '84')
	{
		new_image('tree.jpeg'); 
		console.log("t");
	}
}

   
	

function up()
{
	if(person_y >=0)
	{
		person_y = person_y - block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Up arrow key is pressed, X =  " + person_x + " , Y = "+person_y);
		canvas.remove(person_object);
		person_update();
	}
}

function down()
{
	if(person_y <=500)
	{
		person_y = person_y + block_image_height;
		console.log("block image height = " + block_image_height);
		console.log("When Down arrow key is pressed, X =  " + person_x + " , Y = "+person_y);
		canvas.remove(person_object);
		person_update();
	}
}

function left()
{
	if(person_x >0)
	{
		person_x = person_x - block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Left arrow key is pressed, X =  " + person_x + " , Y = "+person_y);
		canvas.remove(person_object);
		person_update();
	}
}

function right()
{
	if(person_x <=850)
	{
		person_x = person_x + block_image_width;
		console.log("block image width = " + block_image_width);
		console.log("When Right arrow key is pressed, X =  " + person_x + " , Y = "+person_y);
		canvas.remove(person_object);
		person_update();
	}
}
