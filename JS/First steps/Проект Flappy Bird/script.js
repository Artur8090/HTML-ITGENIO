let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d')

let bird = new Image();
bird.src = 'imgs/bird.png';

let gap = 75;
let birdX = 10;
let birdY = 150;
let gravity = 1;
let score = 0;