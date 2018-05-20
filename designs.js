// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
const height = document.querySelector('#inputHeight');
const width = document.querySelector('#inputWidth');
const color = document.querySelector('#colorPicker');
const canvas = document.querySelector('#pixelCanvas');
const submit = document.querySelector('#submit');

function makeGrid(height, width) {
  // Your code goes here!
  //event.preventDefault();
  //canvas.children().remove();
  let newTr = document.createElement('tr');
  let newTd = document.createElement('td');
  for (let i = 0; i<height.val(); i++) {
    canvas.appendChild(newTr);
    for (let j = 0; j< weight.val(); j++) {
      $('tr').last().append('<td></td>');
    }
  }
};
submit.addEventListenr
