let clearSketch;
let colorPicker;
let stroke_color;

let text_input;
//let text_input_chk;
let text_arr;

let fill_checkbox;



function preload() {
    
    pen_img = loadImage('img/pen.png');
    eraser_img = loadImage('img/eraser.png');
    close_img =  loadImage('img/close.png');
    
    //fonts
    basker_font = loadFont('fonts/Baskervville-Regular.ttf');
    mont_font = loadFont('fonts/Montserrat-Regular.ttf');
    open_font = loadFont('fonts/OpenSans-Regular.ttf');
    play_font = loadFont('fonts/PlayfairDisplay-Regular.ttf');
    roboto_font = loadFont('fonts/Roboto-Regular.ttf');
    
}


function setup() {
    createCanvas(windowWidth, windowHeight);
  
    frameRate(60);
    
    
    //clear sketch button
    clearSketchBtn = createButton('CLEAR');
    clearSketchBtn.id("clear-btn")
    clearSketchBtn.mousePressed(clearpg);
    clearSketchBtn.style('width', '80px');
    clearSketchBtn.style('height', '50px');
    
    //color picker - https://p5js.org/reference/#/p5/createColorPicker
    colorPicker = createColorPicker('#ff52ad');
    colorPicker.style('width', '80px');
    colorPicker.style('height', '50px');
    
    //fill_checkbox
    fill_checkbox = createCheckbox('FILL', false);
    
    //text input
    text_input = createInput('');
    text_input.style('width', '90px');

    

    radio_func();
    pen_sketch();
    rect_sketch();
    circ_sketch();
    eraser_sketch();
    create_select();
    
    
    
    
    //font select
    font_sel = createSelect();
    // font_sel.option('Baskervville', basker_font);
  font_sel.option('Baskervville', "basker_font");
    font_sel.option('Montserrat', "mont_font");
    font_sel.option('OpenSans', "open_font");
    font_sel.option('PlayfairDisplay', "play_font");
    font_sel.option('Roboto', "roboto_font");
    font_sel.style('width', '100px');
    
    
    
//    bottomBar();
    resposBar(); 

    
}



function insert_text(){
    textSize(font_size_sel.value());
    text(text_input.value(), mouseX, mouseY);
}



function mouseDragged() {
    
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio2.value() === "PEN" ){
        strokeWeight(pen_size_slider.value());
        stroke(colorPicker.color());
      //reference to create drawing  - https://p5js.org/reference/#/p5/pmouseX
        line(mouseX, mouseY, pmouseX, pmouseY);
        
    }
  
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio1.value() === "ERASER" ){
        strokeWeight(er_size_slider.value());
        stroke(255);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

}



function mousePressed() {
    //fill(255);
    let text_size_val = font_size_sel.value()
  
    if (fill_checkbox.checked()){
        fill(colorPicker.color());
    }else{fill(255);}
    
    //draw rect
      if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio3.value() === "RECT" ){
         //fill(255);
        strokeWeight(2);
        stroke(colorPicker.color());
        rectMode(CORNER);
        rect(mouseX, mouseY, rect_size_slider.value(), rect_size_slider.value());
    }
    
    
    //draw circle
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio4.value() === "CIRC" ){
        //fill(255);
        strokeWeight(2);
        stroke(colorPicker.color());
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, circle_size_slider.value(), circle_size_slider.value());
    }
    
    
    //draw text
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio5.value() === "TEXT"){
        
    if (font_sel.value() === "basker_font"){
    textFont(basker_font);
    }
      if (font_sel.value() === "mont_font"){
    textFont(mont_font);
    }
      if (font_sel.value() === "open_font"){
    textFont(open_font);
    }
      if (font_sel.value() === "play_font"){
    textFont(play_font);
    }
      if (font_sel.value() === "roboto_font"){
    textFont(roboto_font);
    }
        strokeWeight(3);
        stroke(colorPicker.color());
        textSize(text_size_val);
        text(text_input.value(), mouseX, mouseY);
    }
    
    
    
    
    if (mouseX > width-75 && mouseX < width-20 && mouseY > 8 && mouseY < 33 ){
        clearpg();
    }
  
}



function clearpg(){
    background(255);
    bottomBar();
}



function draw() {  
    print(font_sel.value());

    bottomBar();
    textSize(font_size_sel.value());

    
    
    push();
        strokeWeight(2);
        stroke (colorPicker.color())
            if (fill_checkbox.checked()){
        fill(colorPicker.color());
        }else{
            fill(255);
        }
        rect(90, 150, 20, 20);
        circle(100, 230, 20, 20);
    
  
  
  
    //   basker_font = loadFont('fonts/Baskervville-Regular.ttf');
    // mont_font = loadFont('fonts/Montserrat-Regular.ttf');
    // open_font = loadFont('fonts/OpenSans-Regular.ttf');
    // play_font = loadFont('fonts/PlayfairDisplay-Regular.ttf');
    // roboto_font = loadFont('fonts/Roboto-Regular.ttf');
  
  
  
    if (font_sel.value() === "basker_font"){
    textFont(basker_font);
    }
      if (font_sel.value() === "mont_font"){
    textFont(mont_font);
    }
      if (font_sel.value() === "open_font"){
    textFont(open_font);
    }
      if (font_sel.value() === "play_font"){
    textFont(play_font);
    }
      if (font_sel.value() === "roboto_font"){
    textFont(roboto_font);
    }
    textSize(16);
    text("ABC", 85, 65);
    
    pop();
    
    
    
    if(radio2.value() === "PEN"){
        image(pen_img, 340, height-110);
        image(eraser_img, 220, height-95);
    }
    else if(radio1.value() === "ERASER"){
        image(pen_img, 340, height-100);
        image(eraser_img, 220, height-110);
    }
    else{
        image(pen_img, 340, height-100);
        image(eraser_img, 220, height-95);   
    }

    
    image(close_img, width-75, 8, 55, 25)
    
}



function resposBar() {

    
    radio5.position(17, 50);
    text_input.position(20, 70);
    font_sel.position(20, 95);
    font_size_sel.position(17, 115);
    
  
    //radio3 - rect
    radio3.position(17, 150);  
    rect_size_slider.position(17, 170);
    
    
    //radio4 - circle
    radio4.position(17, 220);  
    circle_size_slider.position(17, 240);
    
    
    //////////////////////////////////////
    colorPicker.position(20, height-100);
    
    fill_checkbox.position(17, height-45);
    
    
    
    /////////////////////////////////////////
        //radio1 - eraser
    radio1.position(135, height-70);
    er_size_slider.position(135, height-50);
  
    
    //radio2 - pen
    radio2.position(275, height-70);
    pen_size_slider.position(275, height-50);

    
    //clear btn
    clearSketchBtn.position(width-100, height-90);

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  resposBar(); 
  
}


