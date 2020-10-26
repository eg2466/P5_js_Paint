let clearSketch;
let colorPicker;
let stroke_color;

let text_input;
//let text_input_chk;
let text_arr;

let fill_checkbox;



function preload() {
    
//    bkg_img = loadImage('img/bkg.png');
    
    pen_img = loadImage('img/pen.png');
    eraser_img = loadImage('img/eraser.png');
    close_img =  loadImage('img/close.png');
}


function setup() {
    createCanvas(windowWidth, windowHeight);
  
    frameRate(60);
    
    //background(255);
    
    
    
    
    
    //clear sketch button
    clearSketchBtn = createButton('clear');
    clearSketchBtn.mousePressed(clearpg);
    clearSketchBtn.style('width', '80px');
    clearSketchBtn.style('height', '50px');

    
    //color picker - https://p5js.org/reference/#/p5/createColorPicker
    colorPicker = createColorPicker('#ff52ad');
    colorPicker.style('width', '80px');
    colorPicker.style('height', '50px');
    
    //fill_checkbox
    fill_checkbox = createCheckbox('Fill', false);
    
    //text input
    text_input = createInput('');
    text_input.style('width', '90px');
//    text_input_chk = createCheckbox('Apply Text', false);
    //text_input.mousePressed(insert_text);
    
//    text('Font Size :', 5, height-450);
    
    // text_input_btn = createButton('Enter');
    // text_input_btn.style('width', '98px');
    // text_input_btn.mousePressed(insert_text);

    radio_func();
    pen_sketch();
    rect_sketch();
    circ_sketch();
    eraser_sketch();
//    tri_sketch();
    create_select();
    
//    bottomBar();
    resposBar(); 
    
//    image(eraser_img, 150, height-70);
    
    //let window_rect = createGraphics(width, height);
    
    //window_rect.fill(255, 0, 0);
    //window_rect.rect(0,0, width, height);
    //bkg_img.mask(window_rect);
    
//    bkg_img.resize(width, height);
    
}



function insert_text(){
    textSize(font_size_sel.value());
    text(text_input.value(), mouseX, mouseY);
}



function mouseDragged() {
    
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio2.value() === "pen" ){
        // print("helelel")
        strokeWeight(pen_size_slider.value());
        stroke(colorPicker.color());
      //reference to create drawing  - https://p5js.org/reference/#/p5/pmouseX
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
  
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio1.value() === "eraser" ){
        // print("helelel")
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
      if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio3.value() === "rect" ){
         //fill(255);
        strokeWeight(2);
        stroke(colorPicker.color());
        rectMode(CORNER);
        rect(mouseX, mouseY, rect_size_slider.value(), rect_size_slider.value());
    }
    
    
    //draw circle
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio4.value() === "circle" ){
        //fill(255);
        strokeWeight(2);
        stroke(colorPicker.color());
        ellipseMode(CENTER);
        ellipse(mouseX, mouseY, circle_size_slider.value(), circle_size_slider.value());
    }
    
    
    //draw text
    if (mouseX > 145 && mouseX < width-15 && mouseY > 50 && mouseY < height-120 && radio5.value() === "text"){
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
//    print(mouseX, mouseY);
    //uncomment
//    image(bkg_img, 0, 0);

    bottomBar();
    textSize(font_size_sel.value());
//    print(colorPicker.color()); 
    //print(text_arr);
//    print(font_size_sel.value());
    
    if(radio2.value() === "pen"){
        image(pen_img, 330, height-110);
        image(eraser_img, 210, height-95);
    }
    else if(radio1.value() === "eraser"){
        image(pen_img, 330, height-100);
        image(eraser_img, 210, height-110);
    }
    else{
        image(pen_img, 330, height-100);
        image(eraser_img, 210, height-95);     
    }

    
    image(close_img, width-75, 8, 55, 25)
    
}



function resposBar() {

    
    radio5.position(15, 50);
    text_input.position(15, 70);
    font_size_sel.position(15, 95);


    //font_text.position(15, height-450);

  
    //radio3 - rect
    radio3.position(10, height-280);  
    rect_size_slider.position(5, height-260);
  
    
    
    //radio4 - circle
    radio4.position(10, height-220);  
    circle_size_slider.position(5, height-200);
  
    //radio5 - triangle
//    radio5.position(5, height-160);  
//    tri_size_slider.position(5, height-140);
    
    colorPicker.position(20, height-100);
    
    fill_checkbox.position(17, height-45);
    
    
        //radio1 - eraser
    radio1.position(145, height-70);
    er_size_slider.position(140, height-50);
  
    
    //radio2 - pen
    radio2.position(270, height-70);
    pen_size_slider.position(265, height-50);
//      radio2.position(width-200, height-70);
//    pen_size_slider.position(265, height-50);
    
    
    clearSketchBtn.position(width-100, height-90);
    

  
}



function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
//    clear();
//    bkg_img.resize(width, height);
//    bottomBar();
  resposBar(); 
  
}


