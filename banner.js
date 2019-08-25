

var listArray = [
    { name: 'Jynx', image: 'images/Jynx.png' }, 
    { name: 'Magmar', image: 'images/Magmar.png' }, 
    { name: 'Pikachu', image: 'images/Pikachu.jpg' },
    { name: 'Togepi', image: 'images/Togepi.jpeg' }
  ];

  var index = 1;

  setInterval(function(){ 
    index == listArray.length ? index = 0 : ""; 
    /* if index is equal to the length of listArray; 
    index should be equal to 0. 
    If else; do nothing */
    var images = document.getElementById("banner");
    images.src = listArray[index].image;
    index++;
}, 2000);




