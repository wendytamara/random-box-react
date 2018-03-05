


const $containerPrice = $('#container-price');
function initGoogleAPI() {
debugger


  let inputStart = document.getElementById('city-search');
  let inputEnd = document.getElementById('city');

  let autocomplete = new google.maps.places.SearchBox(inputStart);
  let autocomplete2 =  new google.maps.places.SearchBox(inputEnd);
  // let option1 = new google.maps.places.Autocomplete(inputStart);
  // let option2 = new google.maps.places.Autocomplete(inputEnd);

  let directionsService = new google.maps.DirectionsService;
  let directionsDisplay = new google.maps.DirectionsRenderer;

  var map;
         map = new google.maps.Map(document.getElementById('map'), {
           center: {lat: -12.173045, lng: -77.005913},
           zoom: 3
         });

  document.getElementById('search').addEventListener('click', function() {

  debugger

    let startPoint = autocomplete.getPlaces()[0];
    let pointOfArrival = autocomplete2.getPlaces()[0];
    let latitudStart = startPoint.geometry.location.lat();
    let longitudStart = startPoint.geometry.location.lng();

    let latitudEnd = pointOfArrival.geometry.location.lat();
    let longitudEnd = pointOfArrival.geometry.location.lng();

    console.log(latitudStart);
    console.log(longitudStart);

    console.log(latitudEnd);
    console.log(longitudEnd);
debugger
  calculateAndDisplayRoute(directionsService,directionsDisplay);

    $.ajax({
      url:`https://api.uber.com/v1.2/estimates/price?start_latitude=${latitudStart}&start_longitude=${longitudStart}&end_latitude=${latitudEnd}&end_longitude=${longitudEnd}`,
      headers: {
    		        'Authorization': 'Token ' + 'AFoFvmU6KV2cQy42a_sw_jI_-XMirLA3DTz3wnW0',
    		        'Accept-Language': 'en_US',
    		        'Content-Type': 'application/json'
    		       },
    	success: function(response){
        debugger
        const data = response.prices;
        $containerPrice.append('<h4>Tus Opciones:</h4>');
        for (var i = 0; i < data.length; i++) {

          let output = `  <p><strong>${data[i].display_name}</strong> ${" "}<span>${data[i].low_estimate} - ${data[i].high_estimate}</span> <span> S/.</span></p>

           `;
        $containerPrice.append(output);

       }
	    }
   })

  });



    // let calculateAndDisplayRoute = (directionsService, directionsDisplay) =>{
    //   directionsService.route({
    //     origin: inputStart.value,
    //     destination: inputEnd.value,
    //     travelMode: 'DRIVING'
    //   }, (response, status)=>{
    //     if (status === 'OK') {
    //
    //       directionsDisplay.setDirections(response);
    //       console.log(response);
    //
    //
    //     } else {
    //       window.alert('no encontramos la ruta');
    //     }
    //   });
    //   directionsDisplay.setMap(map);
    // };







}
