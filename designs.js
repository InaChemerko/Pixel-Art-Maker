// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth');
const color = document.getElementById('colorPicker');
const canvas = document.getElementById('pixelCanvas');
const submitSize = document.getElementById('sizePicker');


function makeGrid(height, width) {
  // Your code goes here!
  for (let i = 0; i<height.value; i++) {
    let newTr = document.createElement('tr');
    canvas.appendChild(newTr);
    for (let j = 0; j< width.value; j++) {
      let newTd= document.createElement('td');
      newTr.appendChild(newTd);
    }
  }
  
};
submitSize.addEventListener('submit', function (event){
event.preventDefault();
  canvas.innerHTML='';
  makeGrid(height, width);
}

);
function setColor(evt){
  if (evt.target.nodeName === 'TD') {
        evt.target.style.backgroundColor = color.value;
    }
};

canvas.addEventListener('click', setColor);
