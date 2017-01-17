import '../css/style.css';
import $ from 'jquery';

const Please = require('pleasejs');

let changeColor = () => {
  $('#color').css('background-color', Please.make_color());
}

$('button').click(() => {
  changeColor();
})
