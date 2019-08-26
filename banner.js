

var listArray = [
    { name: 'Jynx', image: 'images/Jynx.png' }, 
    { name: 'Magmar', image: 'images/Magmar.png' }, 
    { name: 'Pikachu', image: 'images/Pikachu.jpg' },
    { name: 'Togepi', image: 'images/Togepi.jpeg' }
  ];

  var index = 0;

  setInterval(function(){
    // index == listArray.length ? index = 0 : ""; 
    if (index == listArray.length){
      index = 0;
    }else{
      "";
    }
    var images = document.getElementById("banner");
    images.src = listArray[index].image;
    index++;
  }, 2000);



