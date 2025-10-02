import './getinfo.js'
import './style.css'

const img = document.getElementById('#image');
const main = document.getElementsByTagName('main')[0]
const cidade = document.getElementById('cidade');
const temperatura = document.getElementById('temperatura');
const descricao = document.getElementById('descricao')

function isNoite() {
  const agora = new Date();
  const hora = agora.getHours();  
  return hora >= 18 || hora < 6;  
}

 export function changePic(condicao) {  
  let imagem = 'imgs/partialycloudy.jpg';
  let cor = 'rgb(44, 62, 157)';  
  if (condicao.includes('Rain')) {
    imagem = 'imgs/rain.jpg';
    cor = 'rgb(62, 62, 62)';
  } else if (condicao.includes('Clear')) {
    imagem = 'imgs/sun.jpg';
    cor = 'rgb(195, 161, 25)';
  } else if (condicao.includes('Cloudy')) {
    imagem = 'imgs/cloudy.webp';
    cor = 'rgb(170, 170, 170)';
  }

  if (isNoite()) {
    imagem = 'imgs/night.webp';  
    cor = 'rgb(16, 16, 24)';
  }

  img.src = imagem;
  main.style.backgroundColor = cor;
}

 export function changeTemp (temp) {
  temperatura.innerHTML = temp.toFixed(1)
}

export function changeDesc (desc) {
  descricao.innerHTML = `Today: ${desc}`
}