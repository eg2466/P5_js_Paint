let radio1;
let radio2;
let radio3;
let radio4;
let radio5;

let er_size_slider;
let pen_size_slider;
let rect_size_slider;
let circle_size_slider;

let font_size_sel;

function create_select(){
//    font_size_sel = createSelect();
//    font_size_sel.option('Font Size', 12);
//    font_size_sel.option('8', 8);
//    font_size_sel.option('9', 9);
//    
//    font_size_sel.option('10', 10);
//    font_size_sel.option('11', 11);
//    font_size_sel.option('12', 12);
//    font_size_sel.option(15);
//    font_size_sel.option('20', 20);
//    font_size_sel.option('22', 22);
//    font_size_sel.option('24', 24);
//    font_size_sel.option('26', 26);
//    font_size_sel.option('28', 28);
//    font_size_sel.option('30', 30);
//    font_size_sel.option('40', 40);
//    font_size_sel.option('50', 50);
//    font_size_sel.option('60', 60);
//    
//    font_size_sel.selected('Font Size', 12);
    
    
    font_size_sel = createSlider(10, 120, 10, 10);
    font_size_sel.style('width', '90px');
}


function radio_func(){
    
    //reference https://p5js.org/reference/#/p5/createRadio
    radio1 = createRadio();
    radio2 = createRadio();
    radio3 = createRadio();
    radio4 = createRadio();
    radio5 = createRadio();
  
    radio1.option('eraser');
    radio2.option('pen');
    radio3.option('rect');
    radio4.option('circle');
    radio5.option('text');
    
    
    //radio1.style('margin', '0px 40px 0px 70px')
}


function eraser_sketch(){
    //pen_size_slider = createSlider();
    er_size_slider = createSlider(5, 80, 5, 5);
    er_size_slider.style('width', '90px');
}

function pen_sketch(){
    //pen_size_slider = createSlider();
    pen_size_slider = createSlider(5, 80, 5, 5);
    pen_size_slider.style('width', '90px');
}

function rect_sketch(){
    //pen_size_slider = createSlider();
    rect_size_slider = createSlider(20, 100, 20, 10);
    rect_size_slider.style('width', '90px'); 
}

function circ_sketch(){
    //pen_size_slider = createSlider();
    circle_size_slider = createSlider(20, 100, 20, 10);
    circle_size_slider.style('width', '90px'); 
}




function bottomBar(){
    push();
        noFill();
        noStroke();
        
        //blue 
        fill(0, 85,229);
        rect(3,0, width-3, 40, 10, 10, 0, 0);
        
        //dark blue border
        noFill();
        strokeWeight(5);
        stroke(0, 25, 207);
        rect(2, 0, width-4, height, 15, 15, 0, 0);
    
        //side bar
        strokeWeight(1);
        fill(236, 233, 216);
        stroke(172, 168, 153);
        rect(5, 40, 130, height-149);
    
        rect(5, 41+height-150, width-10, 85);
    
        rect(5, 41+85+height-150, width-10, 21);
    
        //resize rects
        noStroke();
        fill(184, 180, 163);
        rect(width-15, 41+85+height-150+3, 4, 4);
        rect(width-15, 41+85+height-150+9, 4, 4);
        rect(width-15, 41+85+height-150+15, 4, 4);
    
        rect(width-22, 41+85+height-150+9, 4, 4);
        rect(width-22, 41+85+height-150+15, 4, 4);
    
        rect(width-29, 41+85+height-150+15, 4, 4);
    
    
        //drawing area
        noFill();
        stroke(128, 128, 128)
        strokeWeight(4);
        rect(137, 42, width-143, height-153);
    
    
        //clear red button
//        noStroke();
//        fill(233, 124, 98);
//        rect(width-50, 10, 20, 20);
    
    
    pop();
    
}