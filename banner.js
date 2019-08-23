var listArray = [
    { name: 'Jynx', image: 'images/Lynx.png' }, 
    { name: 'Magmar', image: 'images/Magmar.png' }, 
    { name: 'Pikachu', image: 'images/Pikachu.jpg' },
    { name: 'Togepi', image: 'images/Togepi.jpeg' }
  ];




for (var i = 0; i < listArray.length; i++){
    console.log(listArray[i]);
    setInterval(function(){ 
        var images = document.getElementById("banner");
        images.src= listArray.image;
    }, 3000);
}

