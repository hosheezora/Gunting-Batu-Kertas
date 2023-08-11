function cpu(){
  const comp = Math.random();

  if(comp < 0.34) return 'batu';
  if(comp >=0.34 && comp <0.67) return 'gunting';
  return 'kertas';
  
}

function result(comp, player){
  if (player==comp) return 'SERI';
  if (player=='batu') return (comp == 'kertas') ? 'KALAH' : 'MENANG';
  if (player=='gunting') return (comp == 'batu') ? 'KALAH' : 'MENANG';
  if (player=='kertas') return (comp == 'batu')? 'MENANG': 'KALAH';
}




function spin(){
  const objectComp = document.querySelector('.object-comp');
  const image = ['batu', 'gunting', 'kertas'];
  let i = 0;
  const start = new Date().getTime();

  setInterval(function (){

    if(new Date().getTime()-start>1000){
      clearInterval;
      return;
    }

    objectComp.setAttribute('src', 'img/' +image[i++]+'.png');
    if (i==image.length) {
      i=0;
    }


  },100)

}






const choose = document.querySelectorAll('li img');
choose.forEach(function(pil){
  pil.addEventListener('click', function(){
    const pilihanComputer = cpu();
    const pilihanPlayer = pil.className;
    const hasil = result(pilihanComputer,pilihanPlayer);

    spin();

    setTimeout(function(){

      const objectComp = document.querySelector('.object-comp');
      objectComp.setAttribute('src','img/'+pilihanComputer+'.png');
  
      const info = document.querySelector('.info');
      info.innerHTML = hasil;

      if(hasil == 'MENANG') {
        const info = document.querySelector('.info');
        info.style.backgroundColor = '#3FA3CE';
        info.style.color='white';
      }else if (hasil == 'KALAH'){
        info.style.backgroundColor = '#00FFA3';
        info.style.color='white';
      } else {
        info.style.backgroundColor = '#FF02B8';
        info.style.color='#1E1E1E';
      }
      
    },1000)

  })
})