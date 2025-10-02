import { changePic, changeTemp, changeDesc } from "./changedom"

let temp 
let condicao  
let desc

 export async function coletarDadosDaAPI () {
  const dados = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/-30.0306%2C-51.2067?unitGroup=us&key=YOUR_API_KEY&contentType=json');
  const result = await dados.json()
  
  const diaAtual = result.days[0]
  condicao = result.days[4].conditions;
  temp = (result.days[0].temp - 32) * 5/9
  desc = result.days[0].description
  
  changePic(condicao)
  changeTemp(temp)
  changeDesc(desc)
}


