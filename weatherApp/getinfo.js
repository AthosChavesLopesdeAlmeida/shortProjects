import { changePic, changeTemp, changeDesc } from "./changedom"

let temp 
let condicao  
let desc

 export async function coletarDadosDaAPI () {
  const dados = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/-30.0319%2C-51.1967?unitGroup=us&key=JRGSGMHGHP64Z94RBCXA9C263&contentType=json')
  const result = await dados.json()
  
  condicao = result.days[4].conditions;
  temp = (result.days[0].temp - 32) * 5/9
  desc = result.days[0].description
  
  changePic()
  changeTemp()
  changeDesc()
}


