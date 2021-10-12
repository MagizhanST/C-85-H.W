
var c = "car_right.png";
var h = 55;
var w = 100;

canvas = document.getElementById("myCanvas")
ctx = canvas.getContext("2d");

canvas_width=800;
canvas_height=400;

background_image = "parkingLot.jpg";
greencar_image = c;

greencar_x=50;
greencar_y=160;

function add() {
       background_imgTag = new Image();
	   background_imgTag.onload = uploadBackground;
	   background_imgTag.src = background_image;

	   greencar_imgTag = new Image();
	   greencar_imgTag.onload = uploadgreencar;
	   greencar_imgTag.src = greencar_image;
}

function uploadBackground() {
    ctx.drawImage(background_imgTag , 0 , 0 ,canvas_width , canvas_height);
}

function uploadgreencar() {
	greencar_image = c;
	greencar_imgTag.src = greencar_image;

	ctx.drawImage(greencar_imgTag , greencar_x , greencar_y , w , h);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
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
		
		
}

function up(){
	c = "car_up.png";
    if(greencar_y >= 40)
    {
        greencar_y = greencar_y - 5;
        uploadBackground();
		w = 55;
		h = 100;
        uploadgreencar();
    }
}

function down(){
	c = "car_down.png";
    if(greencar_y <= 260)
    {
        greencar_y = greencar_y + 5;
        uploadBackground();
		w = 55;
		h = 100;
        uploadgreencar();
    }
}

function left(){
	c = "car_left.png";
    if(greencar_x >= 60)
    {
        greencar_x = greencar_x - 5;
        uploadBackground();
		w = 100;
		h = 55;
        uploadgreencar();       
    }
}

function right(){
	c = "car_right.png";
    if(greencar_x <= 640)
    {
        greencar_x = greencar_x + 5; 
        uploadBackground();
		w = 100;
		h = 55;
        uploadgreencar();     
    }
}