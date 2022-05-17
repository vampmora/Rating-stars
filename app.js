const stars = document.querySelectorAll('.star');
let currentRate = document.querySelector('.current-rate');

stars.forEach((star, i)=>{
  star.onclick = function(){
    
    let currentStar = i + 1;
    
    currentRate.innerText = `${currentStar} of 5`;
    
    stars.forEach((star, j)=>{
      
      if(currentStar >= j + 1){
        star.innerHTML = '&#9733';
      }else {
        star.innerHTML = '&#9734'
      }
    })
  }
});



let date = new Date().getFullYear();
document.getElementById('year').innerHTML = date;
