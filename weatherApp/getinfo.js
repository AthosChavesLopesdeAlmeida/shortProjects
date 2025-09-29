fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/-30.0319%2C-51.1967?unitGroup=us&key=JRGSGMHGHP64Z94RBCXA9C263&contentType=json')
.then(function(response){
  console.log('OK')
}) 
.catch(function(err){
  console.log('NOT OK')
})