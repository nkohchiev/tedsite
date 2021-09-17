import Scrollbar from 'smooth-scrollbar';

var options = {
  'damping': 0.03,
  'thumbMinSize': 50
}

Scrollbar.init(document.querySelector('#my-scrollbar', options));