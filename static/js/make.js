/*--------------------------------- Canvas --------------------------------- */
const zindex_info ={
  cakesheet : 0,
  support : -100,
  lttering : 100,
};

const canvas = new fabric.Canvas('c');
const canvas2 = new fabric.Canvas('c2');
const save_canvas = document.getElementById("save_canvas");

const workBoard = document.querySelector(".work_board");
let canvas_width = workBoard.clientWidth - 48;
let canvas_height = workBoard.clientHeight - 64;

const workBoard2 = document.querySelector(".second_work_board");
let canvas2_width = workBoard2.clientWidth - 24;
let canvas2_height = workBoard2.clientHeight - 40;

const shape_btns = document.querySelectorAll(".shape_item");

let canvas_object_info ={
  cakesheet : null,
  group : null,

  cake_color : "#f8bbd0",
  fill_pic_url : null, // 시트 채우기 그림  url

  active_shape : null, //케이크의 모양
  mag : 0.8, //케이크의 크기
  select_size : "2",
  sheet_type : "shape", //그림인지 모양인지

  object : [],
  support : null,
}

let side_canvas_object_info = {
  sidesheet : null,
  side_cake_color : "#f8bbd0", 
  object : [],
  first_draw : true,
}

let activeCanvas = canvas;

initset();
function initset(){
  save_canvas.src = canvas2.toDataURL();
}

canvas.setDimensions({ width: `${canvas_width}`, height: `${canvas_height}` });
canvas2.setDimensions({
    width: `${canvas2_width}`,
    height: `${canvas2_height}`,
});

window.addEventListener("resize", () => {
    resizeCanvasSize();
});

/*--------------------------------- STEP0 객체 파일 받아서 뿌리기 --------------------------------- */


/*--------------------------------- STEP1 시트 모양 선택 --------------------------------- */
//모양 버튼 누르면 발생되는 이벤트
shape_btns.forEach((ele) => {
    ele.addEventListener("click", () => {
        if (canvas_object_info.active_shape) {
          canvas_object_info.active_shape.classList.toggle("shape_item_active", false);
        }
        canvas_object_info.active_shape = ele;
        canvas_object_info.active_shape.classList.toggle("shape_item_active", true);
        
        drawShape();
    });
});

function drawShape() {
  if (canvas_object_info.active_shape == null) {
    return;
  }

  if(side_canvas_object_info.sidesheet){
    canvas2.remove(side_canvas_object_info.sidesheet);
  }

  if(canvas_object_info.group){
    canvas.remove(canvas_object_info.group);
    canvas_object_info.group = null;
  }
  
  if(canvas_object_info.cakesheet){
    canvas.remove(canvas_object_info.cakesheet);
  }

  let sideRect = new fabric.Rect({
    width: (canvas2_width * 2 * canvas_object_info.mag) / 3,
    height: (canvas2_height * canvas_object_info.mag) / 3,
    fill: side_canvas_object_info.side_cake_color,
    stroke: "black",
    strokeWidth: 3,
  });
  sideRect.set("selectable", false);
  canvas2.add(sideRect);
  canvas2.moveTo(sideRect, zindex_info['cakesheet']);

  canvas2.centerObject(sideRect);
  side_canvas_object_info.sidesheet = sideRect;
  canvas2.requestRenderAll();

  if(side_canvas_object_info.first_draw){
    side_canvas_object_info.first_draw = false;
    save_canvas.src = canvas2.toDataURL();
    console.log(canvas2.toDataURL());
    console.log("왜??");
  }

  /*여기에 문제가 있다*/
  switch (canvas_object_info.active_shape.dataset.shape) {
    case "circle":
      let circle_radius = (canvas_width * canvas_object_info.mag) / 4 > 0 ? (canvas_width * canvas_object_info.mag) / 4 : 30; 
      let circle = new fabric.Circle({
        radius: circle_radius,
        stroke: "black",
        strokeWidth: 3,
        fill: canvas_object_info.cake_color,
      });
      circle.set("selectable", false);
      canvas.add(circle);
      canvas.moveTo(circle, zindex_info['cakesheet']);

      canvas.centerObject(circle);
      canvas_object_info.cakesheet = circle;
      canvas.requestRenderAll();
      break;
    case "rectangle":
      let rect = new fabric.Rect({
        width: (canvas_width * canvas_object_info.mag) / 2,
        height: (canvas_width * canvas_object_info.mag) / 2,
        stroke: "black",
        strokeWidth: 3,
        fill: canvas_object_info.cake_color,
      });
      rect.set("selectable", false);
      canvas.add(rect);
      canvas.moveTo(rect, zindex_info['cakesheet']);

      canvas.centerObject(rect);
      canvas_object_info.cakesheet = rect;
      canvas.requestRenderAll();
      break;
    case "triangle":
      let tri = new fabric.Triangle({
        width: (canvas_width * canvas_object_info.mag) / 2,
        height: ((canvas_width / 2) * Math.sqrt(3) * canvas_object_info.mag) / 2,
        stroke: "black",
        strokeWidth: 3,
        fill: canvas_object_info.cake_color,
      });
      tri.set("selectable", false);
      canvas.add(tri);
      canvas.moveTo(tri, zindex_info['cakesheet']);

      canvas.centerObject(tri);
      canvas_object_info.cakesheet = tri;
      canvas.requestRenderAll();
      break;
    case "star":
      let star = new fabric.Path(
        "M 170.000 210.000  L 217.023 234.721 L 208.042 182.361 L 246.085 145.279 L 193.511 137.639 L 170.000 90.000 L 146.489 137.639 L 93.915 145.279 L 131.958 182.361 L 122.977 234.721 L 170.000 210.000"
      );
      star.set({
        scaleX: (canvas_width * canvas_object_info.mag * 3) / 800,
        scaleY: (canvas_width * canvas_object_info.mag * 3) / 800,
        fill: canvas_object_info.cake_color,
        stroke: "black",
        strokeWidth: 6 / 7,
      });
      star.set("selectable", false);
      canvas.add(star);
      canvas.moveTo(star, zindex_info['cakesheet']);

      canvas.centerObject(star);
      canvas_object_info.cakesheet = star;
      canvas.requestRenderAll();
      break;
    case "heart":
      let heart = new fabric.Path(
        "M 272.70141,238.71731 \
            C 206.46141,238.71731 152.70146,292.4773 152.70146,358.71731  \
            C 152.70146,493.47282 288.63461,528.80461 381.26391,662.02535 \
            C 468.83815,529.62199 609.82641,489.17075 609.82641,358.71731 \
            C 609.82641,292.47731 556.06651,238.7173 489.82641,238.71731  \
            C 441.77851,238.71731 400.42481,267.08774 381.26391,307.90481 \
            C 362.10311,267.08773 320.74941,238.7173 272.70141,238.71731  \
            z "
      );
      heart.set({
        scaleX: (canvas_width * canvas_object_info.mag) / 800,
        scaleY: (canvas_width * canvas_object_info.mag) / 800,
        fill: canvas_object_info.cake_color,
        stroke: "black",
        strokeWidth: 3,
      });
      heart.set("selectable", false);
      canvas.add(heart);
      canvas.moveTo(heart, zindex_info['cakesheet']);

      canvas.centerObject(heart);
      canvas_object_info.cakesheet = heart;
      
      canvas.requestRenderAll();
      break;
    case "dubble":
      let first_circle_radius = ((canvas_width * canvas_object_info.mag) / 4 > 0) ? (canvas_width * canvas_object_info.mag) / 4 : 30;
      let first_circle = new fabric.Circle({
        radius: first_circle_radius,
        stroke: "black",
        strokeWidth: 3,
        fill: canvas_object_info.cake_color,
      });
      let second_circle_radius = (canvas_width * canvas_object_info.mag) / 10 > 0 ? (canvas_width * canvas_object_info.mag) / 10 : 5;
      let second_circle = new fabric.Circle({
        radius: second_circle_radius,
        stroke: "black",
        strokeWidth: 3,
        fill: "white",
      });

      first_circle.set("selectable", false);
      second_circle.set("selectable", false);
      canvas.centerObject(first_circle);
      canvas.centerObject(second_circle);

      let group = new fabric.Group([first_circle, second_circle]);
      group.set("selectable", false);
      canvas.add(group);
      canvas.moveTo(group, zindex_info['cakesheet']);

      canvas_object_info.cakesheet = first_circle;
      canvas_object_info.group = group;
      canvas.requestRenderAll();
  }
  
}
/*--------------------------------- Tool bar --------------------------------- */
//download
const download_btn = document.querySelector('.download');
download_btn.addEventListener('click', ()=>{
    const data = canvas.toDataURL();
    const link = document.createElement('a');
    link.href = data;
    link.download = "cakewalk_design";
    link.click();
    link.remove();
});

//reset
const prohibit_btn = document.querySelector('.prohibit');
prohibit_btn.addEventListener('click', ()=>{
  if(window.confirm("캔버스를 초기화 하겠습니까?")){
    canvas.clear();
    canvas2.clear();
  }
})

/*--------------------------------- Object Delete --------------------------------- */
const deleteIcon =
  "data:image/svg+xml,%3C%3Fxml version='1.0' encoding='utf-8'%3F%3E%3C!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'%3E%3Csvg version='1.1' id='Ebene_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' width='595.275px' height='595.275px' viewBox='200 215 230 470' xml:space='preserve'%3E%3Ccircle style='fill:%23F44336;' cx='299.76' cy='439.067' r='218.516'/%3E%3Cg%3E%3Crect x='267.162' y='307.978' transform='matrix(0.7071 -0.7071 0.7071 0.7071 -222.6202 340.6915)' style='fill:white;' width='65.545' height='262.18'/%3E%3Crect x='266.988' y='308.153' transform='matrix(0.7071 0.7071 -0.7071 0.7071 398.3889 -83.3116)' style='fill:white;' width='65.544' height='262.179'/%3E%3C/g%3E%3C/svg%3E";
const delete_img = document.createElement("img");
delete_img.src = deleteIcon;

fabric.Object.prototype.transparentCorners = false;
fabric.Object.prototype.cornerColor = "blue";
fabric.Object.prototype.cornerStyle = "circle";

fabric.Object.prototype.controls.deleteControl = new fabric.Control({
  x: 0.5,
  y: -0.5,
  offsetY: 16,
  cursorStyle: "pointer",
  mouseUpHandler: deleteObject,
  render: renderIcon,
  cornerSize: 24,
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
  ctx.drawImage(delete_img, -size / 2, -size / 2, size, size);
  ctx.restore();
}

// delete key 누르면 삭제 하기 기능
window.addEventListener("keydown", (e) => {
  if (e.keyCode == 46) {
    let cur_active_object = activeCanvas.getActiveObject();
    activeCanvas.remove(cur_active_object);

    if(activeCanvas == canvas){
      for(let i = 0 ; i < canvas_object_info.object.length; i++){
        if(canvas_object_info.object[i] == cur_active_object){
          canvas_object_info.object.splice(i, 0);
          break;
        }
      }
    }
    else{
      for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
        if(side_canvas_object_info.object[i] == cur_active_object){
          side_canvas_object_info.object.splice(i, 0);
          break;
        }
      }
    }

    activeCanvas.requestRenderAll();
  }
});

/*--------------------------------- Board Switch --------------------------------- */
const switch_btn = document.querySelector(".board_switch_btn");
const work_board = document.querySelector(".work_board");
const second_work_board = document.querySelector(".second_work_board");

let pre_active_canvas_img = canvas.toDataURL();

switch_btn.addEventListener("click", () => {
  work_board.classList.toggle("active_board");
  work_board.classList.toggle("unactive_board");
  second_work_board.classList.toggle("active_board");
  second_work_board.classList.toggle("unactive_board");

  // 활성화 캔버스 스위치
  if (work_board.classList.contains("active_board")) {
    activeCanvas = canvas;
    pre_active_canvas_img = canvas2.toDataURL();
  } else {
    activeCanvas = canvas2;
    pre_active_canvas_img = canvas.toDataURL();
  }
  save_canvas.src = pre_active_canvas_img;

  resizeCanvasSize();
});

function resizeCanvasSize() {
  canvas_width = workBoard.clientWidth - 48;
  canvas_height = workBoard.clientHeight - 64;

  canvas2_width = workBoard2.clientWidth - 24;
  canvas2_height = workBoard2.clientHeight - 40;

  canvas.setDimensions({
    width: `${canvas_width}`,
    height: `${canvas_height}`,
  });
  canvas2.setDimensions({
    width: `${canvas2_width}`,
    height: `${canvas2_height}`,
  });

  canvas.clear();
  canvas2.clear();

  if (canvas_object_info.sheet_type == "shape") {
    drawShape();
  } else {
    drawImage();
  }
  
  //캔버스에 text, decoration 그리기
  if(canvas_object_info.object.length>0){
    canvas_object_info.object.forEach(element => {
      canvas.add(element);
      canvas.moveTo(element, zindex_info["lttering"]);
    });
  }

  if(canvas_object_info.support){
    canvas.add(canvas_object_info.support);
    canvas.moveTo(canvas_object_info.support, zindex_info['support']);
  }

  canvas.requestRenderAll();
  
  if(side_canvas_object_info.object.length > 0){

    side_canvas_object_info.object.forEach(element =>{
      canvas2.add(element);
      canvas2.moveTo(element, zindex_info['lttering']);
    });
  }
  canvas2.requestRenderAll();
  
}

/*--------------------------------- Memo --------------------------------- */
const memo_list = document.querySelector(".memo_list");
const memo_input = document.querySelector(".memo_input");
const memo_items = document.querySelectorAll(".memo_item");

newMemo();
memo_items.forEach((element) => {
  modifyMemo(element);
});

//메모 새로 추가
function newMemo() {
  memo_input.addEventListener("focusout", () => {
    if (memo_input.value) {
      const new_memo_item = document.createElement("li");
      new_memo_item.innerText = memo_input.value;

      const new_memo = document.createElement("div");
      new_memo.classList.add("memo_item");
      new_memo.appendChild(new_memo_item);
      modifyMemo(new_memo);

      memo_list.appendChild(new_memo);

      memo_input.value = "";
    }
  });
}

// 메모 수정 or 삭제
function modifyMemo(memo_item) {
  memo_item.addEventListener("click", (e) => {
    const new_textarea = document.createElement("textarea");
    new_textarea.classList.add("memo_input");
    new_textarea.value = memo_item.firstChild.innerText;

    memo_list.insertBefore(new_textarea, memo_item);
    new_textarea.focus();
    memo_item.remove();

    new_textarea.addEventListener("focusout", (e) => {
      if (new_textarea.value) {
        const new_memo_item = document.createElement("li");
        new_memo_item.innerText = new_textarea.value;

        const new_memo_div = document.createElement("div");
        new_memo_div.classList.add("memo_item");
        new_memo_div.appendChild(new_memo_item);
        modifyMemo(new_memo_div);

        memo_list.insertBefore(new_memo_div, new_textarea);
        new_textarea.remove();
      } else {
        new_textarea.remove();
      }
    });
  });
}

/*--------------------------------- Size select --------------------------------- */
const memo_size = document.querySelector(".memo_size");
const size_radios = document.querySelectorAll(".size_item");

size_radios.forEach((element) => {
  element.firstChild.addEventListener("change", (e) => {
    if (element.firstChild.checked) {
      canvas_object_info.select_size = element.firstChild.dataset.size;
      memo_size.firstChild.innerText = `사이즈 : ${canvas_object_info.select_size}호`;

      switch (canvas_object_info.select_size) {
        case "1":
          canvas_object_info.mag = 0.6;
          break;
        case "2":
          canvas_object_info.mag = 0.8;
          break;
        case "3":
          canvas_object_info.mag = 1.0;
          break;
        default:
          break;
      }
      if (canvas_object_info.sheet_type == "shape") {
        drawShape();
      } else {
        drawImage();
      }
    }
  });
});

/*--------------------------------- 기본도형 or 사진 스위치 --------------------------------- */
const shape_switch = document.querySelector(".shape_switch");
const shape_switch_items = document.querySelectorAll(".shape_switch_item");
const select_box = document.querySelector(".select_box");

const shape = document.querySelector(".shape");
const picture = document.querySelector(".picture");

moveSwitch();

function moveSwitch() {
  shape_switch.addEventListener("click", () => {
    shape.classList.toggle("unactive");
    picture.classList.toggle("unactive");

    shape_switch_items.forEach((element) => {
      element.classList.toggle("shape_switch_item_active");

      //사진 첨부 active
      if (element.classList.contains("shape_switch_item_active")) {
        select_box.style.left = "auto";
        select_box.style.right = 0;
        canvas_object_info.sheet_type = "pic";
      }
      //기본 모양 active
      else {
        select_box.style.right = "auto";
        select_box.style.left = 0;
        canvas_object_info.sheet_type = "shape";
      }
    });
  });
}

/*--------------------------------- Image file --------------------------------- */
const realUpload = document.querySelector(".real_upload");
const upload = document.querySelector(".upload");
let pic_url = null;
let img_scale;
let img_top;
let img_left;

upload.addEventListener("click", () => realUpload.click());
realUpload.addEventListener("change", () => {
  let selected_pic = realUpload.files[0];

  pic_url = URL.createObjectURL(selected_pic);
  drawImage();
});

function drawImage() {
  canvas.clear();
  canvas2.clear();

  let side_posX = canvas2_width / 2 - (canvas2_width * canvas_object_info.mag) / 3;
  let side_posY = canvas2_height / 2 - (canvas2_height * canvas_object_info.mag) / 6;
  let sideRect = new fabric.Rect({
    top: side_posY,
    left: side_posX,
    width: (canvas2_width * 2 * canvas_object_info.mag) / 3,
    height: (canvas2_height * canvas_object_info.mag) / 3,
    fill: side_canvas_object_info.side_cake_color,
    stroke: "black",
    strokeWidth: 3,
  });
  sideRect.set("selectable", false);
  canvas2.add(sideRect);
  canvas2.moveTo(sideRect, zindex_info['cakesheet']);

  side_canvas_object_info.sidesheet = sideRect;

  fabric.Image.fromURL(`${pic_url}`, function (img) {
    img.on("scaling", (option) => {
      img_scale = img.scaleX;
      img_top = img.top;
      img_left = img.left;
    });
    canvas.add(img);
    canvas.moveTo(img, zindex_info['cakesheet']);

    canvas.centerObject(img);
    canvas_object_info.cakesheet = img;
  });
}

/*--------------------------------- order Num --------------------------------- */
const step_boxes = document.querySelectorAll(".step_box");
let active_step_box = document.querySelector(".active_step_box");

const order_num_items = document.querySelectorAll(".order_num_item");
const order_title = document.querySelector(".order_title");
const order_list = [
  { order: 1, title: "시트 모양 정하기", color: "#F8BBD0" },
  { order: 2, title: "케이크 색 정하기", color: "#F06292" },
  { order: 3, title: "레터링", color: "#EC407A" },
  { order: 4, title: "데코레이션", color: "#D81B60" },
  { order: 5, title: "케이크 판 꾸미기", color: "#C2185B" },
];
let active_order_item = document.querySelector(".order_num_item_active");
let cur_order = order_list[0];

order_num_items.forEach((element) => {
  element.addEventListener("click", () => {
    fabric.Object.prototype.objectCaching = false;
    activeCanvas.isDrawingMode = false;

    active_order_item.classList.toggle("order_num_item_active", false);
    element.classList.toggle("order_num_item_active", true);
    active_order_item = element;

    cur_order = order_list[Number(active_order_item.dataset.order) - 1];
    order_title.innerText = cur_order.title;
    order_title.style.backgroundColor = cur_order.color;

    // Step 별 sidebar 활성화
    step_boxes.forEach((ele) => {
      if (ele.dataset.step == cur_order.order) {
        active_step_box.classList.toggle("unactive", true);
        active_step_box.classList.toggle("active_step_box", false);

        ele.classList.toggle("unactive", false);
        ele.classList.toggle("active_step_box", true);
        active_step_box = ele;
      }
    });
  });
});

/*--------------------------------- STEP2 --------------------------------- */
/*--------------------------------- 색채우기 Type 선택 --------------------------------- */

const fill_items = document.querySelectorAll(".fill_item");
const fill_select = document.querySelector(".fill_select");
let fill_select_type =
  fill_select.options[fill_select.selectedIndex].dataset.type;
let fill_item_active;

fill_items.forEach((element) => {
  if (!element.classList.contains("unactive")) {
    fill_item_active = element;
  }
});

fill_select.addEventListener("change", () => {
  fill_select_type =
    fill_select.options[fill_select.selectedIndex].dataset.type;
  fill_items.forEach((ele) => {
    if (ele.dataset.type == fill_select_type) {
      fill_item_active.classList.toggle("unactive", true);
      ele.classList.toggle("unactive", false);
      fill_item_active = ele;
    }
  });

  switch (fill_select_type) {
    case "single_color":
      setFillSingleColor();
      break;
    case "gradient":
      setFillGradient();
      break;
    case "image":
      setFillImage();
      break;
  }
});

/*--------------------------------- 단색 색채우기 --------------------------------- */
const upColorSelector = document.querySelector(".up_color_selector");
const sideColorSelector = document.querySelector(".side_color_selector");

upColorSelector.addEventListener("change", () => {
  canvas_object_info.cake_color = upColorSelector.value;
  if (canvas_object_info.cakesheet) {
    canvas_object_info.cakesheet.set("fill", canvas_object_info.cake_color);
    canvas.requestRenderAll();
  }
});

sideColorSelector.addEventListener("change", () => {
  side_canvas_object_info.side_cake_color = sideColorSelector.value;
  if (side_canvas_object_info.sidesheet) {
    side_canvas_object_info.sidesheet.set("fill", side_canvas_object_info.side_cake_color);
    canvas2.requestRenderAll();
  }
});

function setFillSingleColor() {
  if (canvas_object_info.cakesheet && side_canvas_object_info.sidesheet) {
    canvas_object_info.cake_color = upColorSelector.value;
    side_canvas_object_info.side_cake_color = sideColorSelector.value;

    canvas_object_info.cakesheet.set("fill", canvas_object_info.cake_color);
    side_canvas_object_info.sidesheet.set("fill", side_canvas_object_info.side_cake_color);

    canvas.requestRenderAll();
    canvas2.requestRenderAll();
  }
}

/*--------------------------------- 그라데이션 색채우기 --------------------------------- */
const gradient_radios = document.querySelectorAll(
  ".gradient_select_canvas_item"
);
let gradient_work_board;

const startposX = document.querySelector(".gradient_start_posX");
const startposY = document.querySelector(".gradient_start_posY");
const startColor = document.querySelector(".gradient_start_color");

const endposX = document.querySelector(".gradient_end_posX");
const endposY = document.querySelector(".gradient_end_posY");
const endColor = document.querySelector(".gradient_end_color");

startposX.addEventListener("change", () => {
  canvas_object_info.cake_color.coords.x1 = startposX.value / 100;
  setFillGradient();
});
startposY.addEventListener("change", () => {
  canvas_object_info.cake_color.coords.y1 = startposY.value / 100;
  setFillGradient();
});
endposX.addEventListener("change", () => {
  canvas_object_info.cake_color.coords.x2 = endposX.value / 100;
  setFillGradient();
});
endposY.addEventListener("change", () => {
  canvas_object_info.cake_color.coords.y2 = endposY.value / 100;
  setFillGradient();
});
startColor.addEventListener("change", () => {
  canvas_object_info.cake_color.colorStops[0].color = startColor.value;
  setFillGradient();
});
endColor.addEventListener("change", () => {
  canvas_object_info.cake_color.colorStops[1].color = endColor.value;
  setFillGradient();
});

gradient_radios.forEach((element) => {
  element.firstChild.addEventListener("change", () => {
    if (element.firstChild.checked) {
      gradient_work_board = element.firstChild.dataset.canvas;
      setFillGradient();
    }
  });

  if (element.firstChild.checked) {
    gradient_work_board = element.firstChild.dataset.canvas;
  }
});

function setFillGradient() {
  if (canvas_object_info.cakesheet && side_canvas_object_info.sidesheet) {
    if (gradient_work_board == "up") {
      canvas_object_info.cake_color = new fabric.Gradient({
        type: "linear",
        gradientUnits: "percentage",
        coords: {
          x1: startposX.value / 100,
          y1: startposY.value / 100,
          x2: endposX.value / 100,
          y2: endposY.value / 100,
        },
        colorStops: [
          { offset: 0, color: startColor.value },
          { offset: 1, color: endColor.value },
        ],
      });
      canvas_object_info.cakesheet.set("fill", canvas_object_info.cake_color);
      canvas.requestRenderAll();
    } else {
      side_canvas_object_info.side_cake_color = new fabric.Gradient({
        type: "linear",
        gradientUnits: "percentage",
        coords: {
          x1: startposX.value / 100,
          y1: startposY.value / 100,
          x2: endposX.value / 100,
          y2: endposY.value / 100,
        },
        colorStops: [
          { offset: 0, color: startColor.value },
          { offset: 1, color: endColor.value },
        ],
      });
      side_canvas_object_info.sidesheet.set("fill", side_canvas_object_info.side_cake_color);
      canvas2.requestRenderAll();
    }
  }
}
/*--------------------------------- 이미지 채우기 --------------------------------- */
const fillRealUpload = document.querySelector(".fill_real_upload");
const fillUpload = document.querySelector(".fill_upload");

let fill_img_info = {
  size: 300,
  posX: (canvas_width * canvas_object_info.mag) / 4 - 150,
  posY: (canvas_width * canvas_object_info.mag) / 4 - 150,
  angle: 0,
};

//사진 가져오기 클릭 이벤트
fillUpload.addEventListener("click", () => fillRealUpload.click());
fillRealUpload.addEventListener("change", () => {
  let selected_pic = fillRealUpload.files[0];
  if (selected_pic) {
    canvas_object_info.fill_pic_url = URL.createObjectURL(selected_pic);
    setFillImage();
  }
});

//이미지 채우기 함수
function setFillImage() {
  if (canvas_object_info.cakesheet && side_canvas_object_info.sidesheet && canvas_object_info.fill_pic_url) {
    fabric.Image.fromURL(canvas_object_info.fill_pic_url, function (img) {
      img.scaleToWidth(fill_img_info["size"]);
      let patternSourceCanvas = new fabric.StaticCanvas();

      patternSourceCanvas.setDimensions({
        width: img.getScaledWidth(),
        height: img.getScaledHeight(),
      });

      patternSourceCanvas.add(img);

      img.set("angle", fill_img_info["angle"]);
      patternSourceCanvas.renderAll();

      canvas_object_info.cake_color = new fabric.Pattern({
        source: patternSourceCanvas.getElement(),
        repeat: "no-repeat",
      });

      canvas_object_info.cake_color.offsetX = fill_img_info["posX"];
      canvas_object_info.cake_color.offsetY = fill_img_info["posY"];

      canvas_object_info.cakesheet.set("fill", canvas_object_info.cake_color);

      canvas.requestRenderAll();
    });
  }
}

const fillImgScale = document.getElementById("fill_img_scale");

fillImgScale.oninput = function () {
  fill_img_info["size"] = parseInt(fillImgScale.value * 6, 10);
  setFillImage();
};

document.getElementById("fill_img_offsetX").oninput = function () {
  //canvas_width * mag /4 -150 = 50
  let posX = (canvas_width * canvas_object_info.mag) / 4 - 150 + (this.value - 50) * 6;
  fill_img_info["posX"] = posX;
  setFillImage();
};

document.getElementById("fill_img_offsetY").oninput = function () {
  let posY = (canvas_height * canvas_object_info.mag) / 4 - 150 + (this.value - 50) * 6;
  fill_img_info["posY"] = posY;
  setFillImage();
};

document.getElementById("fill_img_angle").oninput = function () {
  fill_img_info["angle"] = this.value * (360 / 100);
  setFillImage();
};

/*--------------------------------- STEP3 레터링 & STEP5 레터링 --------------------------------- */
//텍스트 입력 방식 버튼 이벤트
let text_info = {
  text_type: "mouse",
  posX : 100,
  posY : 100,
  font_size: 18,
  font_color: "black",
  font_familly: "times New Roman",
  text_contet: "생일 축하 합니다!",
};

const texttypes = document.querySelectorAll(".text_type_item");

let cur_active_text_type = document.querySelector(".text_type_item_active");

texttypes.forEach((element) => {
  element.addEventListener("click", () => {
    cur_active_text_type.classList.toggle("text_type_item_active", false);
    element.classList.toggle("text_type_item_active", true);
    cur_active_text_type = element;
    text_info.text_type = cur_active_text_type.dataset.type;

    writeText();
  });
});

// 폰트 사이즈 입력 받기
const font_size_control = document.querySelector(".font_size_control");
font_size_control.oninput = function(){
  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fontSize = font_size_control.value
    activeCanvas.requestRenderAll();
  }
  text_info.font_size = font_size_control.value;
  writeText();
};

//글자 색 입력 받기
const font_color_control = document.querySelector(".font_color_control");
font_color_control.oninput = function(){
  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fill = font_color_control.value;
    activeCanvas.requestRenderAll();
  }
  text_info.font_color = font_color_control.value;
  writeText();
};

//글꼴 설정 및 입력 받기
const fonts = [
  "쥬아",
  "나눔고딕(보통)",
  "나눔고딕(굵게)",
  "나눔 펜",
  "썬플라워",
];

const font_selector = document.getElementById("font_familly_selector");
//font <option>태그로 HTML에 추가
fonts.forEach(function (font) {
  new FontFaceObserver(font);
  let option = document.createElement("option");
  option.innerHTML = font;
  option.value = font;
  option.style.fontFamily = font;

  font_selector.style.fontFamily = "쥬아";
  font_selector.appendChild(option);

});

font_selector.onchange = function () {
  font_selector.style.fontFamily = this.value;

  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fontFamily = this.value
    activeCanvas.requestRenderAll();
  }
  text_info.font_familly = font_selector.value;
  writeText();
};

// 텍스트 값 입력 받기
const text_content_item = document.querySelector(".text_content_item");
text_content_item.addEventListener("input", () => {
  if (text_content_item.value) {
    text_info.text_contet = text_content_item.value;
  } else {
    text_info.text_contet = "";
  }

  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().text = font_selector.value;
    activeCanvas.requestRenderAll();
  }

  writeText();
});

function writeText() {
  fabric.Object.prototype.objectCaching = false;
  activeCanvas.isDrawingMode = false;

  switch (text_info.text_type) {
    case "mouse":
      textCreatebtn.classList.toggle("unactive", true);
      textMouse();
      break;

    case "box":
      textCreatebtn.classList.toggle("unactive", false);
      textCreatebtn.removeEventListener('clikc', textBox);
      textCreatebtn.addEventListener("click",textBox);
      break;

    case "curve":
      textCreatebtn.classList.toggle("unactive", true);
      textCurve();
      break;
  }
}

// 네모 박스 레터링
const textCreatebtn = document.querySelector(".create_text_btn");
function textBox() {
    let textbox = new fabric.Textbox(text_info.text_contet, {
      top : text_info.posY,
      left : text_info.posX,
      fontSize: text_info.font_size,
      fontFamily: text_info.font_familly,
      fill: text_info.font_color,
      
      canvas : activeCanvas,
    });

    textbox.on('modified', ()=>{
      if(textbox.canvas == canvas){
        for(let i = 0 ; i < canvas_object_info.object.length; i++){
          if(canvas_object_info.object == textbox){
            canvas_object_info.object.splice(i, 0, textbox);
            break;
          }
        }
      }
      else{
        for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
          if(side_canvas_object_info.object == textbox){
            side_canvas_object_info.object.splice(i, 0, textbox);
            break;
          }
        }
      }
    });

    if (activeCanvas == canvas){
      canvas_object_info.object.push(textbox);
    }
    else{
      side_canvas_object_info.object.push(textBox);
    }
    
    activeCanvas.add(textbox);
    activeCanvas.moveTo(textbox, zindex_info['lttering']);

    activeCanvas.requestRenderAll();
}

function textCurve() {
  fabric.Object.prototype.objectCaching = true;
  activeCanvas.isDrawingMode = true;

  activeCanvas.off("before:path:created").on("before:path:created", function (opt) {
    let path = opt.path;
    let pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    path.segmentsInfo = pathInfo;
    let pathLength = pathInfo[pathInfo.length - 1].length;
    let fontSize =
    ((text_info.font_size / 18) * pathLength) / text_info.text_contet.length;

    text = new fabric.Text(text_info.text_contet, {
      fontSize: fontSize,
      path: path,
      top: path.top,
      left: path.left,
      fill : text_info.font_color,
      fontFamily : text_info.font_familly,
    });

    if(activeCanvas == canvas){
      canvas_object_info.object.push(text);
    }
    else{
      side_canvas_object_info.object.push(text);
    }
    text.on('modified', ()=>{
      if(text.canvas == canvas){
        for(let i = 0 ; i < canvas_object_info.object.length; i++){
          if(canvas_object_info.object[i] == text){
            canvas_object_info.object.splice(i, 0, text);
            break;
          }
        }
      }
      else{
        for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
          if(side_canvas_object_info.object[i] == text){
            side_canvas_object_info.object.splice(i, 0, text);
            break;
          }
        }
      }
    });

    activeCanvas.add(text);
    activeCanvas.moveTo(text, zindex_info['lttering']);

    activeCanvas.setActiveObject(text);
  });

  activeCanvas.on("path:created", function (opt) {
      activeCanvas.remove(opt.path);
  });
}

function textMouse() {
  fabric.Object.prototype.objectCaching = false;
  activeCanvas.isDrawingMode = false;
}

/*--------------------------------- STEP4 데코레이션 --------------------------------- */
const decoRealUpload = document.querySelector(".deco_real_upload");
const decoUpload = document.querySelector(".deco_upload");
const deco_imgs_box = document.querySelector('.deco_imgs_box');

//사진 가져오기 클릭 이벤트
decoUpload.addEventListener("click", () => decoRealUpload.click());
decoRealUpload.addEventListener("change", () => {
  let deco_img_file = decoRealUpload.files[0];
  
  if (deco_img_file) {
    let newimgitem =  new Image();
    newimgitem.classList.add('deco_img_item');
    newimgitem.src = URL.createObjectURL(deco_img_file);

    newimgitem.addEventListener('click',()=>{
      addimage(newimgitem.src);
    })

    addimage(newimgitem.src);
    
    deco_imgs_box.appendChild(newimgitem);
  }
});

function addimage(url){
  fabric.Image.fromURL(`${url}`, function (img) {
    img.on("scaling", (option) => {
      img_scale = img.scaleX;
      img_top = img.top;
      img_left = img.left;
    }).on('modified', ()=>{
      if(activeCanvas == canvas){
        for(let i = 0 ; i < canvas_object_info.object.length; i++){
          if(canvas_object_info.object == img){
            canvas_object_info.object.splice(i, 0, img);
            break;
          }
        }
      }
      else{
        for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
          if(side_canvas_object_info.object == img){
            side_canvas_object_info.object.splice(i, 0, img);
            break;
          }
        }
      }
    });

    activeCanvas.centerObject(img);
    activeCanvas.add(img);
    activeCanvas.moveTo(img, zindex_info['lttering']);

    if(activeCanvas == canvas){
      canvas_object_info.object.push(img);
    }
    else{
      side_canvas_object_info.object.push(img);
    }

  });
}

/*--------------------------------- STEP5 판꾸미기 --------------------------------- */
const create_support_btn = document.querySelector(".create_support");

create_support_btn.addEventListener("click", () => {
    let support = new fabric.Rect({
        width: (canvas_width ) / 2 + 100,
        height: (canvas_width) / 2 + 100,
        fill: "#ccc",
        stroke: "black",
        strokeWidth: 3,
    });

    support.set("selectable", false);
    canvas.centerObject(support);

    canvas.add(support);
    canvas.moveTo(support ,zindex_info['support']);

    canvas_object_info.support = support;

    canvas_object_info.object.push(support);

    support.moveTo(-999);
    canvas.requestRenderAll();
});

let step5_text_info = {
  text_type: "mouse",
  posX : 100,
  posY : 100,
  font_size: 18,
  font_color: "black",
  font_familly: "times New Roman",
  text_contet: "생일 축하 합니다!",
}

const step5_texttypes = document.querySelectorAll(".board_text_type_item");
let step5_cur_active_text_type = document.querySelector(".board_text_type_item_active");

step5_texttypes.forEach((element) => {
  element.addEventListener("click", () => {
    step5_cur_active_text_type.classList.toggle("board_text_type_item_active", false);
    element.classList.toggle("board_text_type_item_active", true);
    step5_cur_active_text_type = element;
    step5_text_info.text_type = step5_cur_active_text_type.dataset.type;

    step5WriteText();
  });
});

const step5_font_size_control = document.querySelector(".board_font_size_control");
step5_font_size_control.oninput = function(){
  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fontSize = step5_font_size_control.value
    activeCanvas.requestRenderAll();
  }
  step5_text_info.font_size = step5_font_size_control.value;
  step5WriteText();
};

const step5_font_color_control = document.querySelector(".board_font_color_control");
step5_font_color_control.oninput = function(){
  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fill = step5_font_color_control.value;
    activeCanvas.requestRenderAll();
  }
  step5_text_info.font_color = step5_font_color_control.value;
  step5WriteText();
};

const step5_font_selector = document.getElementById("board_font_familly_selector");

fonts.forEach(function (font) {
  new FontFaceObserver(font);
  let option = document.createElement("option");
  option.innerHTML = font;
  option.value = font;
  option.style.fontFamily = font;

  step5_font_selector.style.fontFamily ="쥬아";
  step5_font_selector.appendChild(option);
});

step5_font_selector.onchange = function () {
  step5_font_selector.style.fontFamily = this.value;

  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().fontFamily = this.value
    activeCanvas.requestRenderAll();
  }
  step5_text_info.font_familly = step5_font_selector.value;
  step5WriteText();
};

const step5_text_content_item = document.querySelector(".board_text_content_item");
step5_text_content_item.addEventListener("input", () => {
  if (step5_text_content_item.value) {
    step5_text_info.text_contet = step5_text_content_item.value;
  } else {
    step5_text_info.text_contet = "";
  }

  if(activeCanvas.getActiveObject()){
    activeCanvas.getActiveObject().text = step5_font_selector.value;
    activeCanvas.requestRenderAll();
  }

  step5WriteText();
});

function step5WriteText() {
  fabric.Object.prototype.objectCaching = false;
  activeCanvas.isDrawingMode = false;

  switch (step5_text_info.text_type) {
    case "mouse":
      step5_textCreatebtn.classList.toggle("unactive", true);
      textMouse();
      break;

    case "box":
      step5_textCreatebtn.classList.toggle("unactive", false);
      step5_textCreatebtn.removeEventListener('clikc', step5TextBox);
      step5_textCreatebtn.addEventListener("click",step5TextBox);
      break;

    case "curve":
      step5_textCreatebtn.classList.toggle("unactive", true);
      step5TextCurve();
      break;
  }
}

const step5_textCreatebtn = document.querySelector(".step5_create_text_btn"); 
function step5TextBox() {
    let textbox = new fabric.Textbox(step5_text_info.text_contet, {
      top : step5_text_info.posY,
      left : step5_text_info.posX,
      fontSize: step5_text_info.font_size,
      fontFamily: step5_text_info.font_familly,
      fill: step5_text_info.font_color,
      
      canvas : activeCanvas,
    });

    textbox.on('modified', ()=>{
      if(textbox.canvas == canvas){
        for(let i = 0 ; i < canvas_object_info.object.length; i++){
          if(canvas_object_info.object == textbox){
            canvas_object_info.object.splice(i, 0, textbox);
            break;
          }
        }
      }
      else{
        for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
          if(side_canvas_object_info.object == textbox){
            side_canvas_object_info.object.splice(i, 0, textbox);
            break;
          }
        }
      }
    });

    if (activeCanvas == canvas){
      canvas_object_info.object.push(textbox);
    }
    else{
      side_canvas_object_info.object.push(textBox);
    }
    
    activeCanvas.add(textbox);
    activeCanvas.moveTo(textbox, zindex_info['lttering']);
    activeCanvas.requestRenderAll();
}

function step5TextCurve() {
  fabric.Object.prototype.objectCaching = true;
  activeCanvas.isDrawingMode = true;

  activeCanvas.off("before:path:created").on("before:path:created", function (opt) {
    let path = opt.path;
    let pathInfo = fabric.util.getPathSegmentsInfo(path.path);
    path.segmentsInfo = pathInfo;
    let pathLength = pathInfo[pathInfo.length - 1].length;
    let fontSize =
    ((step5_text_info.font_size / 18) * pathLength) / step5_text_info.text_contet.length;

    text = new fabric.Text(step5_text_info.text_contet, {
      fontSize: fontSize,
      path: path,
      top: path.top,
      left: path.left,
      fill : step5_text_info.font_color,
      fontFamily : step5_text_info.font_familly,
    });

    if(activeCanvas == canvas){
      canvas_object_info.object.push(text);
    }
    else{
      side_canvas_object_info.object.push(text);
    }
    text.on('modified', ()=>{
      if(text.canvas == canvas){
        for(let i = 0 ; i < canvas_object_info.object.length; i++){
          if(canvas_object_info.object[i] == text){
            canvas_object_info.object.splice(i, 0, text);
            break;
          }
        }
      }
      else{
        for(let i = 0 ; i < side_canvas_object_info.object.length; i++){
          if(side_canvas_object_info.object[i] == text){
            side_canvas_object_info.object.splice(i, 0, text);
            break;
          }
        }
      }
    });
    activeCanvas.add(text);
    activeCanvas.moveTo(text, zindex_info['lttering']);

    activeCanvas.setActiveObject(text);
  });
  activeCanvas.on("path:created", function (opt) {
      activeCanvas.remove(opt.path);
  });
}