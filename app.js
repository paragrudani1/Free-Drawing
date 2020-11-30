/** @format */
let imgArr = [
  {
    id: 0,
    src:
      "https://images.unsplash.com/photo-1599687349320-469385c7e429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    width: 624,
    height: 937,
  },
  {
    id: 1,
    src: "download.png",
    width: 1052,
    height: 1160,
  },
  {
    id: 2,
    src: "download.png",
    width: 1052,
    height: 1160,
  },
];

// this is the position for the clipping rectangle
let clipRect = {
  left: 30,
  top: 30,
  width: 420,
  height: 340,
  right: 450,
  bottom: 390,
};

let base64URL = [];

const createSelectElement = () => {
  let myParent = document.body;

  //Create array of options to
  let array = ["brush", "eraser"];

  //Create and append select list
  let selectList = document.createElement("select");
  selectList.id = "tool";
  myParent.appendChild(selectList);

  //Create and append the options
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement("option");
    option.value = array[i];
    option.text = array[i];
    selectList.appendChild(option);
  }
};

const createContainer = (id) => {
  let container = document.createElement("div");
  container.setAttribute("id", "container" + id);
  document.querySelector("#parent-container").appendChild(container);
};

const createToolContainer = (id) => {
  let toolContainer = document.createElement("div");
  toolContainer.setAttribute("class", "toolContainer" + id);
  document.querySelector("#container" + id).appendChild(toolContainer);
};

const createRotateButton = (id) => {
  let rotateButton1 = document.createElement("i");
  rotateButton1.setAttribute("class", "fas fa-sync-alt");
  rotateButton1.setAttribute("id", "icon1" + id);
  document.querySelector(".toolContainer" + id).appendChild(rotateButton1);

  let rotateButton2 = document.createElement("i");
  rotateButton2.setAttribute("class", "fas fa-sync-alt");
  rotateButton2.setAttribute("id", "icon2" + id);
  document.querySelector(".toolContainer" + id).appendChild(rotateButton2);

  let rotateButton3 = document.createElement("i");
  rotateButton3.setAttribute("class", "fas fa-sync-alt");
  rotateButton3.setAttribute("id", "icon3" + id);
  document.querySelector(".toolContainer" + id).appendChild(rotateButton3);
};

const createImgContainer = (id) => {
  let imgContainer = document.createElement("div");
  imgContainer.setAttribute("id", "imgContainer" + id);
  document.querySelector("#container" + id).appendChild(imgContainer);
};

const createFilter1Button = (id) => {
  const filterBtn = document.createElement("img");
  filterBtn.setAttribute("id", "filter1" + id);
  filterBtn.src =
    "https://www.netclipart.com/pp/m/245-2458226_brightness-svg-png-cloud-and-sun-icon-png.png";
  filterBtn.width = 50;
  document.querySelector(".toolContainer" + id).appendChild(filterBtn);
};

const createFilter2Button = (id) => {
  const filterBtn = document.createElement("img");
  filterBtn.setAttribute("id", "filter2" + id);
  filterBtn.src =
    "https://www.netclipart.com/pp/m/245-2458226_brightness-svg-png-cloud-and-sun-icon-png.png";
  filterBtn.width = 50;
  document.querySelector(".toolContainer" + id).appendChild(filterBtn);
};

const createFilter3Button = (id) => {
  const filterBtn = document.createElement("img");
  filterBtn.setAttribute("id", "filter3" + id);
  filterBtn.src =
    "https://www.netclipart.com/pp/m/245-2458226_brightness-svg-png-cloud-and-sun-icon-png.png";
  filterBtn.width = 50;
  document.querySelector(".toolContainer" + id).appendChild(filterBtn);
};

const createResetButton = (id) => {
  let resetEl = document.createElement("button");
  resetEl.setAttribute("id", "reset" + id);
  resetEl.textContent = "Reset";
  document.querySelector(".toolContainer" + id).appendChild(resetEl);
};

const createCropButton = (id) => {
  let crop = document.createElement("button");
  crop.setAttribute("id", "crop" + id);
  crop.textContent = "Crop";
  document.querySelector(".toolContainer" + id).appendChild(crop);
};

const createCropConfirmation = (id) => {
  let cancel = document.createElement("button");
  cancel.setAttribute("id", "cancel" + id);
  cancel.textContent = "Cancel";
  cancel.style.display = "none";
  document.querySelector(".toolContainer" + id).appendChild(cancel);

  let apply = document.createElement("button");
  apply.setAttribute("id", "apply" + id);
  apply.textContent = "Apply";
  apply.style.display = "none";

  document.querySelector(".toolContainer" + id).appendChild(apply);
};

const handleFilter1 = (id, callback) => {
  const filterBtn = document.querySelector(`#filter1${id}`);

  filterBtn.addEventListener("click", () => {
    callback();
  });
};

const handleFilter2 = (id, callback) => {
  const filterBtn = document.querySelector(`#filter2${id}`);

  filterBtn.addEventListener("click", () => {
    callback();
  });
};

const handleFilter3 = (id, callback) => {
  const filterBtn = document.querySelector(`#filter3${id}`);

  filterBtn.addEventListener("click", () => {
    callback();
  });
};

const handleReset = (id, callback) => {
  const resetBtn = document.querySelector(`#reset${id}`);

  resetBtn.addEventListener("click", () => {
    callback();
  });
};

const handleCrop = (id, callback) => {
  const cropBtn = document.querySelector(`#crop${id}`);

  cropBtn.addEventListener("click", (e) => {
    callback();
  });
};

const handleCancelCropBtn = (id, callback) => {
  let cancelBtn = document.querySelector("#cancel" + id);
  cancelBtn.addEventListener("click", () => {
    callback();
  });
};

const handleApplyCropBtn = (id, callback) => {
  const applyBtn = document.querySelector("#apply" + id);
  applyBtn.addEventListener("click", () => {
    callback();
  });
};

let mode = null;

const mouse = document.querySelector("#mouse");
const pen = document.querySelector("#pen");
const eraser = document.querySelector("#eraser");

mouse.addEventListener("click", () => {
  return (mode = null);
});

pen.addEventListener("click", () => {
  return (mode = "brush");
});

eraser.addEventListener("click", () => {
  return (mode = "eraser");
});

let colors = ["yellow", "red", "green"];
var currentColor = "green";

for (let i = 0; i < colors.length; i++) {
  const colorSelector = document.querySelector(`#${colors[i]}`);

  colorSelector.addEventListener("click", (e) => {
    const color = e.target.value.toLowerCase();

    return (currentColor = color);
  });
}

imgArr.map((el) => {
  createContainer(el.id);
  createToolContainer(el.id);
  createRotateButton(el.id);
  createImgContainer(el.id);
  createCropButton(el.id);
  createCropConfirmation(el.id);

  let crop = false;

  const maxCanvasWidth = 1000;

  const imgWidth = (el.width / el.width) * maxCanvasWidth;

  let stage = new Konva.Stage({
    container: "imgContainer" + el.id,
    width: maxCanvasWidth,
    height: (el.height / el.width) * maxCanvasWidth, // Edited
    x: 0,
    y: 1,
  });

  var layer = new Konva.Layer({ id: el.id });

  var bgr = new Konva.Rect({
    visible: crop,
    x: 0,
    y: 0,
    width: imgWidth,
    height: (el.height / el.width) * maxCanvasWidth, // Edited
    fill: "black",
    opacity: 1,
    listening: false,
  });

  var boundsRect = new Konva.Image({
    visible: crop,
    x: 0,
    y: 0,
    opacity: 0.1,
    stroke: "black",
    strokeWidth: 1,
    draggable: false,
    dash: [3, 3],
    listening: false,
  });

  layer.add(bgr);

  layer.add(boundsRect);
  stage.add(layer);

  var vp = new Konva.Group({
    clip: {
      x: 0,
      y: 0,
      width: imgWidth,
      height: (el.height / el.width) * maxCanvasWidth, // Edited
    },
  });

  //  add a border to the clip region via a rect just surrounding it.
  var r1 = new Konva.Rect({
    visible: crop,
    x: clipRect.left - 1,
    y: clipRect.top - 1,
    width: (maxCanvasWidth / 100) * 80,
    height: (((el.height / el.width) * maxCanvasWidth) / 100) * 80 + 2,
    stroke: "black",
    strokeWidth: 0,
    draggable: true,
    dragBoundFunc: function (pos) {
      var posRect = getPosRect(pos, this);
      var iPos = this.getClientRect();
      var newX = pos.x;
      var newY = pos.y;
      newX =
        posRect.right >= imgWidth ? imgWidth - posRect.width : posRect.left;
      newX = posRect.left <= 0 ? 0 : newX;
      newY = posRect.top <= 0 ? 0 : posRect.top;
      newY =
        posRect.bottom >= (el.height / el.width) * maxCanvasWidth
          ? (el.height / el.width) * maxCanvasWidth - posRect.height - 1
          : newY;
      return {
        x: newX,
        y: newY,
      };
    },
  });

  let node = new Konva.Image({
    name: "item-" + el.id,
    rotation: 0,
    x: 0,
    y: 0,
    width: imgWidth, // Edited
    height: (el.height / el.width) * maxCanvasWidth, // Edited
    draggable: false,
  });

  r1.on("transform", function () {
    setBoundRect(node);
    vp.setAttrs({
      clipWidth: this.width() * this.scaleX(),
      clipHeight: this.height() * this.scaleY(),
      clipX: this.x(),
      clipY: this.y(),
    });
  });

  r1.on("dragmove", function () {
    setBoundRect(node);
    vp.setAttrs({
      clipX: this.x(),
      clipY: this.y(),
    });
  });

  vp.add(node);

  node.filters([
    Konva.Filters.HSV,
    Konva.Filters.Contrast,
    Konva.Filters.Emboss,
    Konva.Filters.Brighten,
  ]);

  createFilter1Button(el.id);
  createFilter2Button(el.id);
  createFilter3Button(el.id);
  createResetButton(el.id);

  node.embossStrength(0);
  node.embossWhiteLevel(0);
  node.embossDirection("top");
  node.embossBlend(true);

  let img = new Image();

  img.onload = function () {
    boundsRect.image(img);
    node.image(img);
    node.cache();
    setBoundRect(node);
    layer.batchDraw();
  };
  img.src = el.src;
  img.crossOrigin = "Anonymous";

  layer.add(vp);
  layer.add(r1);

  const handelElements = () => {
    if (crop) {
      document.querySelector("#cancel" + el.id).style.display = "inline-block";
      document.querySelector("#apply" + el.id).style.display = "inline-block";
    } else {
      document.querySelector("#cancel" + el.id).style.display = "none";
      document.querySelector("#apply" + el.id).style.display = "none";
    }

    bgr.visible(crop);
    boundsRect.visible(crop);
    r1.visible(crop);
    tr.visible(crop);
    image.visible(!crop);

    vp.setAttrs({
      clipX: crop ? clipRect.left : 0,
      clipY: crop ? clipRect.top : 0,
      clipWidth: crop
        ? (maxCanvasWidth / 100) * 80
        : (el.width / el.width) * maxCanvasWidth,
      clipHeight: crop
        ? (((el.height / el.width) * maxCanvasWidth) / 100) * 80 + 2
        : (el.height / el.width) * maxCanvasWidth,
    });

    r1.setAttrs({
      x: clipRect.left,
      y: clipRect.top,
      scaleX: 1,
      scaleY: 1,
    });
    layer.batchDraw();
  };

  document.querySelector("#icon1" + el.id).addEventListener("click", () => {
    handleRotateReq(90);
  });
  document.querySelector("#icon2" + el.id).addEventListener("click", () => {
    handleRotateReq(180);
  });
  document.querySelector("#icon3" + el.id).addEventListener("click", () => {
    handleRotateReq(270);
  });

  handleFilter1(el.id, () => {
    img.onload = () => {
      node.image(img);
      node.cache();
      layer.batchDraw();
    };
    img.src = el.src;
    img.crossOrigin = "Anonymous";
    node.saturation(-100);
    node.contrast(15);
    node.brightness(0.1);
  });

  handleFilter2(el.id, () => {
    img.onload = () => {
      node.image(img);
      node.cache();
      layer.batchDraw();
    };
    img.src = el.src;
    img.crossOrigin = "Anonymous";
    node.saturation(-100);
    node.contrast(25);
    node.embossStrength(0.2);
    node.embossWhiteLevel(0.1);
    node.embossDirection("top");
    node.embossBlend(true);
    node.brightness(0.1);
  });

  handleFilter3(el.id, () => {
    img.onload = () => {
      node.image(img);
      node.cache();
      layer.batchDraw();
    };
    img.src = el.src;
    img.crossOrigin = "Anonymous";
    node.saturation(-100);
    node.contrast(35);
    node.embossStrength(0.4);
    node.embossWhiteLevel(0.1);
    node.embossDirection("top");
    node.embossBlend(true);
    node.brightness(0.3);
  });

  handleReset(el.id, () => {
    node.filters([
      Konva.Filters.HSV,
      Konva.Filters.Contrast,
      Konva.Filters.Emboss,
      Konva.Filters.Brighten,
    ]);

    img.onload = () => {
      node.image(img);
      node.cache();
      layer.batchDraw();
    };

    img.src = img.src;
    img.crossOrigin = "Anonymous";
    node.saturation(0);
    node.contrast(0);
    node.embossStrength(0);
    node.embossWhiteLevel(0);
    node.embossDirection("top");
    node.embossBlend(true);
    node.brightness(0);
  });

  // then we are going to draw into special canvas element
  let canvas = document.createElement("canvas");
  canvas.width = node.width();
  canvas.height = node.height();

  // created canvas we can add to layer as "Konva.Image" element
  let image = new Konva.Image({
    visible: !crop,
    name: "canvas" + el.id,
    image: canvas,
    x: node.x(),
    y: node.y(),
  });

  let tr = new Konva.Transformer({
    visible: crop,
    boundBoxFunc: function (oldBoundBox, newBoundBox) {
      // "boundBox" is an object with
      // x, y, width, height and rotation properties
      // transformer tool will try to fit nodes into that box

      // the logic is simple, if new width is too big
      // we will return previous state

      // This below code is Edited
      if (
        Math.abs(newBoundBox.width) >
          (el.width / el.width) * maxCanvasWidth - newBoundBox.x ||
        Math.abs(newBoundBox.height) >
          (el.height / el.width) * maxCanvasWidth - newBoundBox.y
      ) {
        return oldBoundBox;
      } else if (newBoundBox.y <= 0) {
        return oldBoundBox;
      }
      return newBoundBox;
    },
    rotateEnabled: false,
  });

  layer.add(image);
  layer.add(tr);
  tr.nodes([r1]);
  stage.draw();

  const resetSize = () => {
    stage.setAttrs({
      width: maxCanvasWidth,
      height: (el.height / el.width) * maxCanvasWidth,
    });

    vp.setAttrs({
      clipWidth: (el.width / el.width) * maxCanvasWidth,
      clipHeight: (el.height / el.width) * maxCanvasWidth,
    });

    node.setAttrs({
      width: (el.width / el.width) * maxCanvasWidth,
      height: (el.height / el.width) * maxCanvasWidth,
    });

    bgr.setAttrs({
      height: (el.height / el.width) * maxCanvasWidth,
    });

    canvas.width = (el.width / el.width) * maxCanvasWidth;
    canvas.height = (el.height / el.width) * maxCanvasWidth;
  };

  const handleRotateReq = (rotate) => {
    crop = false;
    document.querySelector(".lds-roller").classList.toggle("hide");

    handelElements();

    const Http1 = new XMLHttpRequest();
    const URL = "https://form-data-c5373.firebaseio.com/data.json";
    Http1.open("POST", URL, true);
    Http1.send(
      JSON.stringify({
        data: { src: el.src, rotate: rotate },
      })
    );

    Http1.onreadystatechange = (e) => {
      if (Http1.status == 200) {
        if (Http1.response) {
          const Http2 = new XMLHttpRequest();
          const URL2 = `https://form-data-c5373.firebaseio.com/data/${
            JSON.parse(Http1.response).name
          }.json`;

          Http2.open("GET", URL2, true);
          Http2.send();

          Http2.onreadystatechange = () => {
            if (Http2.status === 200) {
              if (Http2.response) {
                el.src =
                  "https://images.unsplash.com/photo-1599687349320-469385c7e429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
                el.width = 624;
                el.height = 937;
                img.src = el.src;

                img.crossOrigin = "Anonymous";

                // Changing Width and height of elements
                resetSize();
                layer.batchDraw();
                document.querySelector(".lds-roller").classList.add("hide");
              }
            }
          };
        }
      }
    };
  };

  handleCrop(el.id, () => {
    crop = !crop;
    handelElements();
  });

  handleCancelCropBtn(el.id, () => {
    crop = false;

    handelElements();
  });

  handleApplyCropBtn(el.id, () => {
    document.querySelector(".lds-roller").classList.toggle("hide");

    const Http1 = new XMLHttpRequest();
    const URL = "https://form-data-c5373.firebaseio.com/data.json";
    Http1.open("POST", URL, true);
    Http1.send(
      JSON.stringify({
        data: {
          width: r1.width() * r1.scaleX(),
          height: r1.height() * r1.scaleY(),
          x: r1.x(),
          y: r1.y(),
          src: el.src,
        },
      })
    );

    Http1.onreadystatechange = (e) => {
      if (Http1.status == 200) {
        if (Http1.response) {
          const Http2 = new XMLHttpRequest();
          const URL2 = `https://form-data-c5373.firebaseio.com/data/${
            JSON.parse(Http1.response).name
          }.json`;

          Http2.open("GET", URL2, true);
          Http2.send();

          Http2.onreadystatechange = () => {
            if (Http2.status === 200) {
              if (Http2.response) {
                el.src =
                  "https://images.unsplash.com/photo-1599687349320-469385c7e429?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80";
                el.width = 624;
                el.height = 937;
                img.src = el.src;
                img.crossOrigin = "Anonymous";
                crop = false;

                // Changing Width and height of and elements

                resetSize();

                handelElements();
                document.querySelector(".lds-roller").classList.add("hide");
              }
            }
          };
        }
      }
    };
  });

  // used to get the client rect of a shape.
  function getPosRect(pos, ele) {
    var cliPos = ele.getClientRect();
    var posRect = {
      left: pos.x,
      top: pos.y,
      right: pos.x + cliPos.width,
      bottom: pos.y + cliPos.height,
      width: cliPos.width,
      height: cliPos.height,
    };
    return posRect;
  }
  // set the bounds rect to the size of the given element
  function setBoundRect(ele) {
    var x = ele.position();
    var posRect = getPosRect(ele.position(), ele);
    console.log(posRect);
    boundsRect.position({ x: posRect.left, y: posRect.top });
    boundsRect.size({ width: posRect.width, height: posRect.height });
  }

  // Good. Now we need to get access to context element
  var context = canvas.getContext("2d");
  context.strokeStyle = currentColor;
  context.lineJoin = "round";
  context.lineWidth = 5;

  var isPaint = false;
  var lastPointerPosition;

  // now we need to bind some events
  // we need to start drawing on mousedown
  // and stop drawing on mouseup

  image.on("mousedown touchstart", function () {
    context.strokeStyle = currentColor;
    if (mode !== null) {
      isPaint = true;
    }
    lastPointerPosition = stage.getPointerPosition();
  });

  // // will it be better to listen move/end events on the window?
  stage.on("mouseup touchend", function () {
    isPaint = false;
  });

  // and core function - drawing
  stage.on("mousemove touchmove", function () {
    if (!isPaint) {
      return;
    }

    if (mode === "brush") {
      context.lineWidth = 5;
      context.globalCompositeOperation = "source-over";
    }
    if (mode === "eraser") {
      context.globalCompositeOperation = "destination-out";
      context.lineWidth = 50;
    }

    context.beginPath();

    var localPos = {
      x: lastPointerPosition.x - image.x(),
      y: lastPointerPosition.y - image.y(),
    };
    context.moveTo(localPos.x, localPos.y);
    var pos = stage.getPointerPosition();
    localPos = {
      x: pos.x - image.x(),
      y: pos.y - image.y(),
    };
    context.lineTo(localPos.x, localPos.y);
    context.closePath();
    context.stroke();

    lastPointerPosition = pos;
    layer.batchDraw();
  });

  function downloadURI(uri, name) {
    var link = document.createElement("a");
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    delete link;
  }

  document.getElementById("save").addEventListener(
    "click",
    function () {
      let dataURL = stage.toDataURL({ pixelRatio: 0.5 });
      // downloadURI(dataURL, "stage.jpeg");
      base64URL.push(dataURL);

      if (base64URL.length === imgArr.length) {
        console.log({ data: base64URL });
        // saveToDatabase(dataURL);
      }
    },
    false
  );
});

// Function to save base64data in server

function saveToDatabase(data) {
  const Http = new XMLHttpRequest();
  const URL = "https://form-data-c5373.firebaseio.com/data.json";
  Http.open("POST", URL, true);
  Http.send(
    JSON.stringify({
      data: data,
    })
  );

  Http.onreadystatechange = (e) => {
    console.log(Http);

    if (this.status == 200) {
      var data = JSON.parse(this.responseText);

      // we get the returned data
    }
  };
}
