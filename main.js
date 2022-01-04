function preload() {}

function setup() {
    canvas = createCanvas(800, 600);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 79, 63, 640, 480);
    let b = color(255, 165, 0);
    fill(b);
    noStroke()
    circle(60, 50, 20);
    circle(740, 50, 20);
    circle(740, 557, 20);
    circle(60, 557, 20);
    let c = color(0, 183, 235);
    fill(c);
    noStroke();
    rect(70, 41, 660, 15);
    rect(54, 61, 15, 486);
    rect(731, 61, 15, 486);
    rect(71, 551, 660, 15);
}

function take_snapshot() {
    save('student_name.png');
}