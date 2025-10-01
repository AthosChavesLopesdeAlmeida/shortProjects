import './getinfo.js'
import './style.css'
import './imgs'

const img = document.querySelector('#img');
const main = document.getElementsByTagName('main')[0]
const cidade = document.getElementById('cidade');
const temperatura = document.getElementById('temperatura');
const descricao = document.getElementById('descricao')

function isNoite() {
  const agora = new Date();
  const hora = agora.getHours();  
  return hora >= 18 || hora < 6;  
}

 export function changePic() {
  if (condicao.includes('Rain')) {
    img.src = 'imgs/rain.jpg'
    main.style.backgroundColor = rgb(62, 62, 62);
  } else if (condicao.includes('Clear')) {
    img.src = 'imgs/sun.jpg'
    main.style.backgroundColor = rgb(195, 161, 25);
  } else if (condicao.includes('Cloudy')) {
    img.src = 'imgs/cloudy.webp'
    main.style.backgroundColor = rgb(170, 170, 170);
  } else {
    img.src = 'imgs/partialycloudy.jpg'
    main.style.backgroundColor = rgb(44, 62, 157);
  }

  if (isNoite()) {
    img.src = 'imgs/night.webp'
    main.style.backgroundColor = rgb(16, 16, 24);
  }
}

 export function changeTemp () {
  temperatura.innerHTML += temp
}

export function changeDesc () {
  descricao.innerHTML +=  desc
}