// colors yellow, red , blue, whiteX6 as white is more common
const clrs = [
  "#fff001",   // Yellow
  //"#ff0101",   // Red
  "#0101fd",   // Blue
  "#f9f9f9",   // Light Gray
  "#f9f9f9",   // Light Gray
  "#f9f9f9",   // Light Gray
  "#f9f9f9",   // Light Gray
  "#f9f9f9",   // Light Gray
  "#f9f9f9",   // Light Gray
];

let blocks = [];
let cnv, cx, xy;
let mycheck;
let mylink;

function setup() {
  cnv = createCanvas(600, 600);
  cx = (windowWidth - width) / 2;
  cy = (windowHeight - height) / 2;
  cnv.position(cx, cy);
  background("#f9f9f9");//background("#30303a");
  mycheck = createCheckbox("dynamic if checked", true);
  mycheck.position(cx,cy+height+20);
  mylink = createA('https://github.com/greggelong/dynamicMondrian', 'link to this  repo');
  mylink.position(cx,cy+height+60);
  for(let i =0;i<100;i++){
     let newblock = new Block(color( "#f9f9f9"));
      blocks.push(newblock);
      print("bing",1);

  }
}

function draw() {
  if (blocks.length > 0) {
    background("#30303a");
    for (let i = 0; i < blocks.length; i++) {
      blocks[i].edges();
      if (mycheck.checked()) {
        blocks[i].move();
      }
      blocks[i].show();
    }
  }
}

function mouseClicked() {
  print("cliked");
  let clr = random(clrs);
  let newblock = new Block(color(clr));
  blocks.push(newblock);
}
