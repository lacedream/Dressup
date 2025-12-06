
//  hover throb
const clothingbutton = document.querySelectorAll('.clothingButton');

const icons = document.querySelectorAll('#textButton');

clothingbutton.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.backgroundSize = "110%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.backgroundSize = "contain";  
    });
});

icons.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.backgroundSize = "110%";  
    });
    image.addEventListener('mouseout', () => {
        image.style.backgroundSize = "100%";  
    });
});



//

var clothing = document.querySelectorAll('.clothing');
clothing.forEach(function(item) {
  item.style.display = 'none';
});



function refresh(up) {
  location.reload();
}


function toggleImage(itemId, button) {
    var image = document.getElementById(itemId);
    button.classList.toggle('selected');
    if (image.style.display === 'none' || image.style.display === '') {
      image.style.display = 'block';
    } else {
      image.style.display = 'none';
    }
}








const fronthair = document.getElementById('fronthair')
var currentFrontHair = 0;
const frontHairImages = ['Assets/front hair1.png', 'Assets/front hair2.png'];


function switchFrontHair(){

  
  if (currentFrontHair == 1){
    currentFrontHair = 0;}

    else { currentFrontHair++;}

fronthair.src = frontHairImages[currentFrontHair];
}



const backhair = document.getElementById('backhair')
var currentBackHair = 0;
const backHairImages = ['Assets/back hair1.png', 'Assets/back hair2.png', 'Assets/back hair3.png', 'Assets/back hair4.png'];


function switchBackHair(){

  
  if (currentBackHair == 3){
    currentBackHair = 0;}

    else { currentBackHair++;}

backhair.src = backHairImages[currentBackHair];
}





var PISS = document.getElementById('epicbox');


var currentBackground = 0;
var backgrounds = [
  'url(Assets/bg/1.png)',
  'url(Assets/bg/2.png)',
  'url(Assets/bg/3.png)',
  'url(Assets/bg/4.png)',
  'url(Assets/bg/5.png)',
  'url(Assets/bg/6.png)',
  'url(Assets/bg/7.png)',
  'url(Assets/bg/8.png)', 
  'url(Assets/bg/9.png)',
  'url(Assets/bg/10.png)',
  'url(Assets/bg/11.png)',
  'url(Assets/bg/12.png)', 
  'url(Assets/bg/13.png)',
];



function switchbg(){

  
  if (currentBackground == 12){
    currentBackground = 0;}

    else { currentBackground++;}
    
PISS.style.backgroundImage = backgrounds[currentBackground];

}
