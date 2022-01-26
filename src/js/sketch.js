let value;
let jumlah;

function setup() {
  createCanvas(400, 400);


}

const setFeatures = ()=>{
  var featuresObj = Object();
  /* This is a function to set a fxhashFeatures.
  It returns an object that could be used to set fxhashFeatures values
  */
  value = fxrand() * 100
  console.log(value)
  if (value >= 50) {
    featuresObj.jumlah = "banyak";
  }
  if (value < 50) {
    featuresObj.jumlah = "sedikit";
  }
  return featuresObj
}


function draw() {
  background(220);
}

window.$fxhashFeatures = {
  Super: setFeatures().jumlah
};