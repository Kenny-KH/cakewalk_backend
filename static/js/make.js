/*--------------------------------- Canvas --------------------------------- */
const canvas = new fabric.Canvas('c');
const canvas2 = new fabric.Canvas('c2');

const workBoard = document.querySelector('.work_board');
let canvas_width = workBoard.clientWidth - 48; 
let canvas_height = workBoard.clientHeight - 64;

const workBoard2 = document.querySelector('.second_work_board');
let canvas2_width = workBoard2.clientWidth - 24;
let canvas2_height = workBoard2.clientHeight - 40;

const shape_btns = document.querySelectorAll('.shape_item');

let cur_shape = null;
let selected_shape = null;
let selected_size = 2
let selected_height = 3;
let mag = 1.0;

canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});

window.addEventListener('resize',()=>{
    resizeCanvasSize();
});

shape_btns.forEach( (ele) => {
    ele.addEventListener('click', (e)=>{
        if(selected_shape){
            selected_shape.classList.toggle('shape_item_active', false);
        }
        selected_shape = ele;
        selected_shape.classList.toggle('shape_item_active', true);
        cur_shape = selected_shape.dataset.shape;
        drawShape();
    });
});

function drawShape(){
    canvas.clear();
    canvas2.clear();
    if(cur_shape == null){
        return;
    }
    else{
        let sideRect = new fabric.Rect({
            width: canvas2_width * 2 * mag/3 ,
            height : canvas2_height * mag/3,
            fill: side_cake_color,
            stroke : 'black',
            strokeWidth: 3,
        });
        sideRect.set('selectable', false);
        canvas2.add(sideRect);
        canvas2.centerObject(sideRect);
        sidesheet = sideRect;   
    }
    switch(cur_shape){
        case 'circle':
            let circle = new fabric.Circle({
                radius : canvas_width * mag /4,
                stroke: 'black',
                strokeWidth : 3,
                fill: cake_color,
            });
            circle.set('selectable', false);
            canvas.add(circle);
            canvas.centerObject(circle);
            cakesheet = circle;
            break;
        case 'rectangle':
            let rect = new fabric.Rect({
                width: canvas_width * mag/2,
                height: canvas_width * mag/2,
                stroke: 'black',
                strokeWidth : 3,
                fill: cake_color,
            });
            rect.set('selectable', false);
            canvas.add(rect);
            canvas.centerObject(rect);
            cakesheet = rect;
            break;
        case 'triangle':
            let tri = new fabric.Triangle({
                width : canvas_width * mag/ 2,
                height: (canvas_width / 2) * Math.sqrt(3)* mag / 2,
                stroke: 'black',
                strokeWidth : 3,
                fill: cake_color,
            });
            tri.set('selectable', false);
            canvas.add(tri);
            canvas.centerObject(tri);
            cakesheet = tri;
            break;
        case 'star':
    
            let star =  new fabric.Path('M 170.000 210.000  L 217.023 234.721 L 208.042 182.361 L 246.085 145.279 L 193.511 137.639 L 170.000 90.000 L 146.489 137.639 L 93.915 145.279 L 131.958 182.361 L 122.977 234.721 L 170.000 210.000');
            star.set({
                scaleX: canvas_width * mag *3 /800,
                scaleY: canvas_width * mag *3 /800,
                fill: cake_color,
                stroke: 'black',
                strokeWidth : 6/7,
            })
            star.set('selectable', false);
            canvas.add(star);
            canvas.centerObject(star);
            cakesheet = star;
            break;
        case 'heart':
            let heart = new fabric.Path('M 272.70141,238.71731 \
            C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
            C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
            C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
            C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
            C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
            C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
            z ');    
            heart.set({ 
                scaleX: canvas_width * mag /800,
                scaleY: canvas_width * mag /800,
                fill: cake_color,
                stroke: 'black',
                strokeWidth : 3,
            });
            heart.set('selectable', false);
            canvas.add(heart);
            canvas.centerObject(heart);
            cakesheet = heart;
            break;
        case 'dubble':
            let first_circle = new fabric.Circle({
                radius : canvas_width * mag/ 4,
                stroke: 'black',
                strokeWidth : 3,
                fill: cake_color,
            });
            let second_circle = new fabric.Circle({
                radius : canvas_width * mag / 10,
                stroke: 'black',
                strokeWidth : 3,
                fill: 'white'
            }); 

            first_circle.set('selectable', false);
            second_circle.set('selectable', false);
            canvas.centerObject(first_circle);
            canvas.centerObject(second_circle);
            
            let group = new fabric.Group([first_circle, second_circle]);
            group.set('selectable', false);
            canvas.add(group);
            
            cakesheet = first_circle;
    }
}
/*--------------------------------- Object Delete --------------------------------- */
const deleteIcon = "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
const delete_img = document.createElement('img');
delete_img.src = deleteIcon;

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = 'blue';
fabric.Object.prototype.cornerStyle = 'circle';


fabric.Object.prototype.controls.deleteControl = new fabric.Control({
    x: 0.5,
    y: -0.5,
    offsetY: 16,
    cursorStyle: 'pointer',
    mouseUpHandler: deleteObject,
    render: renderIcon,
    cornerSize: 24
});

function deleteObject(eventData, transform) {
    const target = transform.target;
    const canvas = target.canvas;
    canvas.remove(target);
    canvas.requestRenderAll();
}

function renderIcon(ctx, left, top, styleOverride, fabricObject) {
    const size = this.cornerSize;
    ctx.save();
    ctx.translate(left, top);
    ctx.rotate(fabric.util.degreesToRadians(fabricObject.angle));
    ctx.drawImage(delete_img, -size/2, -size/2, size, size);
    ctx.restore();
}

/*--------------------------------- Board Switch --------------------------------- */
const switch_btn = document.querySelector('.board_switch_btn');
const work_board = document.querySelector('.work_board');
const second_work_board = document.querySelector('.second_work_board');
let activeCanvas = canvas;

switch_btn.addEventListener('click', (e)=>{
    work_board.classList.toggle('active_board');
    work_board.classList.toggle('unactive_board');
    second_work_board.classList.toggle('active_board');
    second_work_board.classList.toggle('unactive_board');

    // 활성화 캔버스 스위치
    if(work_board.classList.contains('active_board')){
        activeCanvas = canvas;
    }
    else{
        activeCanvas = canvas2;
    }

    resizeCanvasSize();
});

function resizeCanvasSize(){
    canvas_width = workBoard.clientWidth - 48; 
    canvas_height = workBoard.clientHeight - 64;
    
    canvas2_width = workBoard2.clientWidth - 24;
    canvas2_height = workBoard2.clientHeight - 40;

    canvas.setDimensions({width : `${canvas_width}`, height: `${canvas_height}`});
    canvas2.setDimensions({width : `${canvas2_width}`, height: `${canvas2_height}`});
    
    if(switch_choice == 'shape'){
        drawShape();
    }
    else{
        drawImage();
    }
    
}

/*--------------------------------- Memo --------------------------------- */
const memo_list = document.querySelector('.memo_list');
const memo_input = document.querySelector('.memo_input');
const memo_items = document.querySelectorAll('.memo_item');

newMemo();
memo_items.forEach(element => {
    modifyMemo(element);
});

//메모 새로 추가
function newMemo(){
    memo_input.addEventListener('focusout',()=>{
        if(memo_input.value){
            const new_memo_item = document.createElement('li');
            new_memo_item.innerText = memo_input.value;

            const new_memo = document.createElement('div');
            new_memo.classList.add('memo_item');
            new_memo.appendChild(new_memo_item);
            modifyMemo(new_memo);

            memo_list.appendChild(new_memo);

            memo_input.value = '';
        }
    });
}

// 메모 수정 or 삭제
function modifyMemo(memo_item){
    memo_item.addEventListener('click', (e)=>{
        const new_textarea = document.createElement('textarea');
        new_textarea.classList.add('memo_input');
        new_textarea.value = memo_item.firstChild.innerText;

        memo_list.insertBefore(new_textarea, memo_item);
        new_textarea.focus();
        memo_item.remove();
        
        new_textarea.addEventListener('focusout',(e)=>{
            if(new_textarea.value){
                const new_memo_item = document.createElement('li');
                new_memo_item.innerText = new_textarea.value;

                const new_memo_div = document.createElement('div');
                new_memo_div.classList.add('memo_item');
                new_memo_div.appendChild(new_memo_item);
                modifyMemo(new_memo_div);

                memo_list.insertBefore(new_memo_div, new_textarea);
                new_textarea.remove();
            }else{
                new_textarea.remove();
            }
        });
    });
}

/*--------------------------------- Size select --------------------------------- */
const memo_size = document.querySelector('.memo_size');
const size_radios = document.querySelectorAll('.size_item');
let select_size = null;

size_radios.forEach(element => {
    element.firstChild.addEventListener('change',(e)=>{
        if(element.firstChild.checked){
            select_size = element.firstChild.dataset.size;
            memo_size.firstChild.innerText = `사이즈 : ${select_size}호`;
            
            switch (select_size) {
                case '1':
                    mag = 0.8;
                    break;
                case '2':
                    mag = 1.0;
                    break;
                case '3':
                    mag = 1.2;
                    break; 
                default:
                    break;
            }
            if(switch_choice == 'shape'){
                drawShape();
            }
            else{
                drawImage();
            }
        }
    });
});

/*--------------------------------- 기본도형 or 사진 스위치 --------------------------------- */
const shape_switch = document.querySelector('.shape_switch');
const shape_switch_items = document.querySelectorAll('.shape_switch_item');
const select_box = document.querySelector('.select_box');

const shape = document.querySelector('.shape');
const picture = document.querySelector('.picture');

let switch_choice = 'shape';

moveSwitch();

function moveSwitch(){
    shape_switch.addEventListener('click',()=>{
        shape.classList.toggle('unactive');
        picture.classList.toggle('unactive');
        
        shape_switch_items.forEach(element => {
            element.classList.toggle('shape_switch_item_active');

            //사진 첨부 active
            if (element.classList.contains('shape_switch_item_active')){
                select_box.style.left='auto';
                select_box.style.right = 0;
                switch_choice = 'pic';
            }
            //기본 모양 active
            else{
                select_box.style.right = 'auto';    
                select_box.style.left=0;
                switch_choice = 'shape';
            }
        });    
    });
}

/*--------------------------------- Image file --------------------------------- */
const realUpload = document.querySelector('.real_upload');
const upload = document.querySelector('.upload');
let pic_url = null;
let img_scale;
let img_top;
let img_left;

upload.addEventListener('click', ()=> realUpload.click());
realUpload.addEventListener('change', ()=>{
    let selected_pic = realUpload.files[0];
    
    pic_url = URL.createObjectURL(selected_pic);
    drawImage();
});

function drawImage(){
    canvas.clear();
    canvas2.clear();
    if(shape == null){
        return;
    }
    else{
        let side_posX = canvas2_width /2 - (canvas2_width * mag/3);
        let side_posY = canvas2_height /2 -(canvas2_height * mag/6);
        let sideRect = new fabric.Rect({
            top: side_posY,
            left : side_posX,
            width: canvas2_width * 2 * mag/3 ,
            height : canvas2_height * mag/3,
            fill: side_cake_color,
            stroke : 'black',
            strokeWidth: 3,
        });
        sideRect.set('selectable', false);
        canvas2.add(sideRect);
        sidesheet = sideRect;
    }

    fabric.Image.fromURL(`${pic_url}`, function(img){
        img.on('scaling',(option)=>{  
            img_scale = img.scaleX;
            img_top = img.top;
            img_left = img.left;

        });
        canvas.add(img);
        canvas.centerObject(img);
        cakesheet = img;
    });
}

/*--------------------------------- order Num --------------------------------- */
const step_boxes = document.querySelectorAll('.step_box');
let active_step_box = document.querySelector('.active_step_box');

const order_num_items = document.querySelectorAll('.order_num_item');
const order_title = document.querySelector('.order_title');
const order_list = [
    {order : 1, title:"시트 모양 정하기", color:"#F8BBD0"},
    {order : 2, title:"케이크 색 정하기", color:"#F06292"},
    {order : 3, title:"레터링", color:"#EC407A"},
    {order : 4, title:"데코레이션", color:"#D81B60"},
    {order : 5, title:"케이크 판 꾸미기", color:"#C2185B"},
];
let active_order_item = document.querySelector('.order_num_item_active');
let cur_order = order_list[0];

order_num_items.forEach(element => {
    element.addEventListener('click',()=>{
        active_order_item.classList.toggle('order_num_item_active', false);
        element.classList.toggle('order_num_item_active', true);
        active_order_item = element;

        cur_order = order_list[Number(active_order_item.dataset.order)-1];
        order_title.innerText = cur_order.title;
        order_title.style.backgroundColor = cur_order.color;

        // Step 별 sidebar 활성화
        step_boxes.forEach(ele => {
            if(ele.dataset.step == cur_order.order){
                active_step_box.classList.toggle('unactive', true);
                active_step_box.classList.toggle('active_step_box', false);
                
                ele.classList.toggle('unactive', false);
                ele.classList.toggle('active_step_box', true);
                active_step_box = ele;
            }
        });       
    });
});

/*--------------------------------- STEP2 --------------------------------- */
/*--------------------------------- 색채우기 Type 선택 --------------------------------- */

const fill_items = document.querySelectorAll('.fill_item');
const fill_select = document.querySelector('.fill_select');
let fill_select_type = fill_select.options[fill_select.selectedIndex].dataset.type;
let fill_item_active;

fill_items.forEach(element => {
    if(!element.classList.contains('unactive')){
        fill_item_active = element;
    }
});

fill_select.addEventListener('change',()=>{
    fill_select_type = fill_select.options[fill_select.selectedIndex].dataset.type;
    fill_items.forEach(ele => {
        if(ele.dataset.type == fill_select_type){
            fill_item_active.classList.toggle('unactive', true);
            ele.classList.toggle('unactive', false);
            fill_item_active = ele;
        }
    });

    switch (fill_select_type) {
        case 'single_color':
            setFillSingleColor();
            break;
        case 'gradient':
            setFillGradient();
            break;
        case 'image':
            setFillImage();
            break;
    }
});

/*--------------------------------- 단색 색채우기 --------------------------------- */
let cakesheet;
let sidesheet;
let cake_color = '#f8bbd0';
let side_cake_color = '#f8bbd0';

const upColorSelector = document.querySelector('.up_color_selector');
const sideColorSelector = document.querySelector('.side_color_selector');

upColorSelector.addEventListener('change',()=>{
    cake_color = upColorSelector.value;
    if(cakesheet){
        cakesheet.set('fill', cake_color);
        canvas.requestRenderAll();
    }
});

sideColorSelector.addEventListener('change',()=>{
    side_cake_color = sideColorSelector.value;
    if(sidesheet){
        sidesheet.set('fill', side_cake_color);
        canvas2.requestRenderAll();
    }
});

function setFillSingleColor(){
    if(cakesheet && sidesheet){
        cake_color = upColorSelector.value;
        side_cake_color = sideColorSelector.value;

        cakesheet.set('fill', cake_color);
        sidesheet.set('fill', side_cake_color);

        canvas.requestRenderAll();
        canvas2.requestRenderAll();
    }
}

/*--------------------------------- 그라데이션 색채우기 --------------------------------- */
const gradient_radios = document.querySelectorAll('.gradient_select_canvas_item');
let gradient_work_board;

const startposX = document.querySelector('.gradient_start_posX');
const startposY = document.querySelector('.gradient_start_posY');
const startColor = document.querySelector('.gradient_start_color');

const endposX = document.querySelector('.gradient_end_posX');
const endposY = document.querySelector('.gradient_end_posY');
const endColor = document.querySelector('.gradient_end_color');

startposX.addEventListener('change',()=>{
    cake_color.coords.x1 = startposX.value /100;
    setFillGradient();
});
startposY.addEventListener('change',()=>{
    cake_color.coords.y1 = startposY.value /100;
    setFillGradient();
});
endposX.addEventListener('change',()=>{
    cake_color.coords.x2 = endposX.value /100;
    setFillGradient();
});
endposY.addEventListener('change', ()=>{
    cake_color.coords.y2 = endposY.value /100;
    setFillGradient();
});
startColor.addEventListener('change', ()=>{
    cake_color.colorStops[0].color = startColor.value;
    setFillGradient();
});
endColor.addEventListener('change', ()=>{
    cake_color.colorStops[1].color = endColor.value;
    setFillGradient();
});

gradient_radios.forEach(element => {
    element.firstChild.addEventListener('change',()=>{
        if(element.firstChild.checked){
            gradient_work_board = element.firstChild.dataset.canvas;
            setFillGradient();
        }
    });

    if(element.firstChild.checked){
        gradient_work_board = element.firstChild.dataset.canvas;
    }
});

function setFillGradient(){
    if(cakesheet && sidesheet){
        if(gradient_work_board == 'up'){
            cake_color = new fabric.Gradient({
                type:'linear',
                gradientUnits: 'percentage',
                coords : {
                    x1 :  startposX.value / 100,
                    y1 : startposY.value / 100,
                    x2 : endposX.value / 100,
                    y2 : endposY.value / 100,
                },
                colorStops :[
                    {offset : 0, color: startColor.value},
                    {offset : 1, color: endColor.value}
                ]
            });
            cakesheet.set('fill', cake_color);
            canvas.requestRenderAll();
        }
        else{
            side_cake_color = new fabric.Gradient({
                type:'linear',
                gradientUnits: 'percentage',
                coords : {
                    x1 :  startposX.value / 100,
                    y1 : startposY.value / 100,
                    x2 : endposX.value / 100,
                    y2 : endposY.value / 100,
                },
                colorStops :[
                    {offset : 0, color: startColor.value},
                    {offset : 1, color: endColor.value}
                ]
            });
            sidesheet.set('fill', side_cake_color);
            canvas2.requestRenderAll();
        }
    }
}
/*--------------------------------- 이미지 채우기 --------------------------------- */
const fillRealUpload = document.querySelector('.fill_real_upload');
const fillUpload = document.querySelector('.fill_upload');
let fill_pic_url;
let patternSourceCanvas 

let fill_img_info ={
    'size' : 300,
    'posX' : canvas_width * mag /4 -150,
    'posY' : canvas_width * mag /4 -150,
    'angle' : 0
}

//사진 가져오기 클릭 이벤트
fillUpload.addEventListener('click', ()=> fillRealUpload.click());
fillRealUpload.addEventListener('change', ()=>{
    let selected_pic = fillRealUpload.files[0];
    if(selected_pic){
        fill_pic_url = URL.createObjectURL(selected_pic);
        setFillImage();
    }
});

//이미지 채우기 함수
function setFillImage(){
    if(cakesheet && sidesheet && fill_pic_url){
        fabric.Image.fromURL(fill_pic_url, function(img){
            img.scaleToWidth(fill_img_info['size']);
            patternSourceCanvas = new fabric.StaticCanvas();
            
            patternSourceCanvas.setDimensions({
                width: img.getScaledWidth(),
                height: img.getScaledHeight(),
            });

            patternSourceCanvas.add(img);

            img.set('angle', fill_img_info['angle']);
            patternSourceCanvas.renderAll();
            
            cake_color = new fabric.Pattern({
                source: patternSourceCanvas.getElement(),
                repeat: 'no-repeat'
            }) 

            cake_color.offsetX = fill_img_info['posX'];
            cake_color.offsetY = fill_img_info['posY'];


            cakesheet.set('fill', cake_color);

            canvas.requestRenderAll();
        });
    }
}

const fillImgScale = document.getElementById('fill_img_scale');

fillImgScale.oninput = function(){
    fill_img_info['size'] = parseInt(fillImgScale.value* 6, 10);
    setFillImage();
};

document.getElementById('fill_img_offsetX').oninput = function () {
    //canvas_width * mag /4 -150 = 50
    let posX = (canvas_width * mag /4 -150) + (this.value -50)*6; 
    fill_img_info['posX'] = posX;
    setFillImage();
};

document.getElementById('fill_img_offsetY').oninput = function () {
    let posY = (canvas_height * mag /4 -150) + (this.value -50)*6;
    fill_img_info['posY'] = posY;
    setFillImage();
};

document.getElementById('fill_img_angle').oninput = function(){
    fill_img_info['angle'] = this.value * (360 / 100)
    setFillImage();
};

/*--------------------------------- STEP3 레터링 --------------------------------- */
//텍스트 입력 방식 버튼 이벤트
let text_info = {
    cur_text_type : 'mouse',
    cur_font_size : 18,
    cur_font_color : 'black',
    cur_font_familly : 'times New Roman',
    cur_text :'생일 축하 합니다!',
}
const texttypes = document.querySelectorAll('.text_type_item');
let cur_active_text_type  = document.querySelector('.text_type_item_active');
texttypes.forEach(element => {
    //초기 active text type 값 설정
    //버튼 클릭 때 마다 cur_active_text_type바꿔주기
    element.addEventListener('click', ()=>{
        cur_active_text_type.classList.toggle('text_type_item_active', false);
        element.classList.toggle('text_type_item_active', true);
        cur_active_text_type = element;
        text_info.cur_text_type = cur_active_text_type.dataset.type;

        writeText();
    });
});

// 폰트 사이즈 입력 받기
const font_size_control = document.querySelector('.font_size_control');
font_size_control.addEventListener('change', ()=>{
    text_info.cur_font_size = font_size_control.value;
});

//글자 색 입력 받기
const font_color_control = document.querySelector('.font_color_control');
font_color_control.addEventListener('change', (e)=>{
    text_info.cur_font_color = font_color_control.value;
    console.log(font_color_control.value);
});

//글꼴 설정 및 입력 받기
const fonts = ["Jua", "Nanum Gothic Regular", "Nanum Gothic Bold", "NanumPen", "Sunflower"]
const font_selector = document.getElementById('font_familly_selector');
//font <option>태그로 HTML에 추가
fonts.forEach(function(font){
    let option = document.createElement('option');
    option.innerHTML = font;
    option.value = font;
    font_selector.appendChild(option);
});
fonts.unshift("times New Roman");
font_selector.onchange = function(){
    if (this.value !== 'Times New Roman'){
        text_info.cur_font_familly  = new FontFaceObserver(this.value);
        /*
        myfont.load().then(function(){
            activeCanvas.getActiveObject().set("fontFamily", this.value);
            activeCanvas.requestRenderAll();
        });*/
    }
    /*
    else{
        activeCanvas.getActiveObject().set("fontFamily", this.value);
        activeCanvas.requestRenderAll();
    }
    */
};

// 텍스트 값 입력 받기
const text_content_item = document.querySelector('.text_content_item');
text_content_item.addEventListener('input', ()=>{
    if(text_content_item.value){
        text_info.cur_text = text_content_item.value;
    }
    else{
        text_info.cur_text = '';
    }
});


function writeText(){    
    fabric.Object.prototype.objectCaching = false;
    activeCanvas.isDrawingMode = false;
    let active_text_object = activeCanvas.getActiveObject(); 
    
    // 수정
    if(active_text_object){

    }
    // 새로만들기
    else{

    }
    switch (text_info.cur_text_type) {
        case 'mouse':
            textCreatebtn.classList.toggle('unactive', true);
            textMouse();
            break;

        case 'box':
            textCreatebtn.classList.toggle('unactive', false);
            textBox();
            break;
        
        case 'curve':
            textCreatebtn.classList.toggle('unactive', true);
            textCurve();
            break;
    }
}
// 네모 박스 레터링
const textCreatebtn = document.querySelector('.create_text_btn');
function textBox(){
    textCreatebtn.addEventListener('click',()=>{
        let textbox = new fabric.Textbox(text_info.cur_text, {
            width : 150,
            fontSize: text_info.cur_font_size,
            fontFamily : text_info.cur_font_familly,
            fill : text_info.cur_font_color
        });

        activeCanvas.add(textbox);
        activeCanvas.requestRenderAll();
    });
}

function textCurve(){
    fabric.Object.prototype.objectCaching = true;
    activeCanvas.isDrawingMode = true;

    activeCanvas.on('before:path:created', function(opt) {
        let path = opt.path;
        let pathInfo = fabric.util.getPathSegmentsInfo(path.path);
        path.segmentsInfo = pathInfo;
        let pathLength = pathInfo[pathInfo.length - 1].length;
        let fontSize = (text_info.cur_font_size /18) * pathLength / text_info.cur_text.length;
        
        text = new fabric.Text(text_info.cur_text, { fontSize: fontSize, path: path, top: path.top, left: path.left });
        activeCanvas.add(text);
        activeCanvas.setActiveObject(text);
    });

    activeCanvas.on('path:created', function(opt){
        activeCanvas.remove(opt.path);
    });
}


function textMouse(){
    fabric.Object.prototype.objectCaching = false;
    activeCanvas.isDrawingMode = false;
}

// 삭제 하기 기능
window.addEventListener('keydown', (e)=>{
    if(e.keyCode == 46){
        let cur_active_object = activeCanvas.getActiveObject();
        activeCanvas.remove(cur_active_object);
        activeCanvas.requestRenderAll();
    }
});

/*--------------------------------- STEP4 데코레이션 --------------------------------- */

/*--------------------------------- STEP5 판꾸미기 --------------------------------- */
const create_support_btn = document.querySelector('.create_support');

create_support_btn.addEventListener('click', ()=>{
    let support = new fabric.Rect({
        width: canvas_width * mag/2 + 80,
        height : canvas_width * mag/2 + 80,
        fill: '#ccc',
        stroke : 'black',
        strokeWidth: 3,
    });
    
    support.set('selectable', false);
    activeCanvas.centerObject(support);
    activeCanvas.add(support);
    support.moveTo(-999);
    activeCanvas.requestRenderAll();
});