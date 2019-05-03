/* Font Awesome support is enabled in the survey header
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf" crossorigin="anonymous">
 */


/* 
 * Creating data as a GeoJSON object.  These data contain three sets of five randomly selected points from OpenStreetMap's CT Convenience Store set
 * Each is meant to represent results from applying one of the FRLM, Fuel-TravelBack, and p-Median models of optimizing station locations in the hartford area
 */

var points5frlm =  {
	"type": "FeatureCollection",
"name": "points5FRLM",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "835987321", "code": 2511, "fclass": "convenience", "name": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.3706716, 41.7383493 ] } },
{ "type": "Feature", "properties": { "osm_id": "2380572852", "code": 2511, "fclass": "convenience", "name": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -73.2536749, 41.1815656 ] } },
{ "type": "Feature", "properties": { "osm_id": "470733377", "code": 2511, "fclass": "convenience", "name": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.8976499, 41.3089825 ] } },
{ "type": "Feature", "properties": { "osm_id": "1286982469", "code": 2511, "fclass": "convenience", "name":"points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.6591251, 41.5542987 ] } },
	{ "type": "Feature", "properties": { "osm_id": "3537180193", "code": 2511, "fclass": "convenience", "name": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.9406598, 41.3044436 ] } }
]
};

var points5ftb = {
"type": "FeatureCollection",
"name": "points5fuelTravelBack",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "4088732693", "code": 2511, "fclass": "convenience", "name": "points5fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -73.1485339, 41.1926314 ] } },
{ "type": "Feature", "properties": { "osm_id": "1784252219", "code": 2511, "fclass": "convenience", "name": "points5fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -73.4787881, 41.3857032 ] } },
{ "type": "Feature", "properties": { "osm_id": "4117389908", "code": 2511, "fclass": "convenience", "name": "points5fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -73.0727362, 41.2234788 ] } },
{ "type": "Feature", "properties": { "osm_id": "3537207651", "code": 2511, "fclass": "convenience", "name": "points5fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -72.9392933, 41.3102973 ] } },
{ "type": "Feature", "properties": { "osm_id": "4066923453", "code": 2511, "fclass": "convenience", "name": "points5fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -72.951014, 41.3200575 ] } }
]
};

var points5pm = {
"type": "FeatureCollection",
"name": "points5pMedian",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "2476950578", "code": 2511, "fclass": "convenience", "name": "points5pMedian" }, "geometry": { "type": "Point", "coordinates": [ -72.9090638, 41.3162332 ] } },
{ "type": "Feature", "properties": { "osm_id": "4229098689", "code": 2511, "fclass": "convenience", "name": "points5pMedian" }, "geometry": { "type": "Point", "coordinates": [ -72.5801566, 41.2917449 ] } },
{ "type": "Feature", "properties": { "osm_id": "1784252218", "code": 2511, "fclass": "convenience", "name": "points5pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.4962667, 41.3888566 ] } },
{ "type": "Feature", "properties": { "osm_id": "3456546940", "code": 2511, "fclass": "convenience", "name": "points5pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.0222175, 41.2369097 ] } },
{ "type": "Feature", "properties": { "osm_id": "2917393844", "code": 2511, "fclass": "convenience", "name": "points5pMedian" }, "geometry": { "type": "Point", "coordinates": [ -72.9271649, 41.2982219 ] } }
]
};

var points10frlm = {
"type": "FeatureCollection",
"name": "points10FRLM",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "2182952886", "code": 2511, "fclass": "convenience", "name": "points10FRLM"}, "geometry": { "type": "Point", "coordinates": [ -73.2362148, 41.1975959 ] } },
{ "type": "Feature", "properties": { "osm_id": "2954479189", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.652181, 41.5650019 ] } },
{ "type": "Feature", "properties": { "osm_id": "3477073313", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.8977905, 41.3089722 ] } },
{ "type": "Feature", "properties": { "osm_id": "4931842938", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -73.0299806, 41.2248118 ] } },
{ "type": "Feature", "properties": { "osm_id": "3707407904", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -73.2291193, 41.1559887 ] } },
{ "type": "Feature", "properties": { "osm_id": "1646866612", "code": 2511, "fclass": "convenience", "name": "points10FRLM"}, "geometry": { "type": "Point", "coordinates": [ -72.6493739, 41.8561537 ] } },
{ "type": "Feature", "properties": { "osm_id": "2921249263", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.9264084, 41.3035299 ] } },
{ "type": "Feature", "properties": { "osm_id": "2128429536", "code": 2511, "fclass": "convenience", "name": "points10FRLM"}, "geometry": { "type": "Point", "coordinates": [ -73.2424994, 41.177702 ] } },
{ "type": "Feature", "properties": { "osm_id": "3477014932", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.9020229, 41.3086692 ] } },
{ "type": "Feature", "properties": { "osm_id": "3739868494", "code": 2511, "fclass": "convenience", "name": "points10FRLM" }, "geometry": { "type": "Point", "coordinates": [ -73.1694896, 41.1931953 ] } }
]
};

var points10ftb = {
"type": "FeatureCollection",
"name": "points10fuelTravelBack",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "3868990558", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -72.6769966, 41.6036819 ] } },
{ "type": "Feature", "properties": { "osm_id": "3564798593", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -72.8909097, 41.2577373 ] } },
{ "type": "Feature", "properties": { "osm_id": "470623972", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -72.9087425, 41.316118 ] } },
{ "type": "Feature", "properties": { "osm_id": "2640400318", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -72.9302818, 41.3110906 ] } },
{ "type": "Feature", "properties": { "osm_id": "4755362111", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -72.9078823, 41.3207924 ] } },
{ "type": "Feature", "properties": { "osm_id": "1472115682", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -72.8159555, 41.869674 ] } },
{ "type": "Feature", "properties": { "osm_id": "3456546940", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack" }, "geometry": { "type": "Point", "coordinates": [ -73.0222175, 41.2369097 ] } },
{ "type": "Feature", "properties": { "osm_id": "2897265315", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -73.0411509, 41.5846332 ] } },
{ "type": "Feature", "properties": { "osm_id": "2469492026", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -72.9218109, 41.3125495 ] } },
{ "type": "Feature", "properties": { "osm_id": "3739868493", "code": 2511, "fclass": "convenience", "name": "points10fuelTravelBack"}, "geometry": { "type": "Point", "coordinates": [ -73.1560115, 41.1928428 ] } }
]
};

var points10pm = {
"type": "FeatureCollection",
"name": "points10pMedian",
"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
"features": [
{ "type": "Feature", "properties": { "osm_id": "2182952886", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.2362148, 41.1975959 ] } },
{ "type": "Feature", "properties": { "osm_id": "1784252219", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.4787881, 41.3857032 ] } },
{ "type": "Feature", "properties": { "osm_id": "4088732794", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.1413852, 41.1947892 ] } },
{ "type": "Feature", "properties": { "osm_id": "1243927181", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -71.97981, 41.5288885 ] } },
{ "type": "Feature", "properties": { "osm_id": "4117403599", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.0713128, 41.2263781 ] } },
{ "type": "Feature", "properties": { "osm_id": "4119554906", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.0508839, 41.2322345 ] } },
{ "type": "Feature", "properties": { "osm_id": "3940925731", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -73.2107298, 41.172434 ] } },
{ "type": "Feature", "properties": { "osm_id": "2900165519", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -72.7802603, 41.5302255 ] } },
{ "type": "Feature", "properties": { "osm_id": "4149456009", "code": 2511, "fclass": "convenience", "name": "points10pMedian"}, "geometry": { "type": "Point", "coordinates": [ -72.7058532, 41.8562489 ] } },
{ "type": "Feature", "properties": { "osm_id": "1647278259", "code": 2511, "fclass": "convenience", "name": "points10pMedian" }, "geometry": { "type": "Point", "coordinates": [ -72.5760025, 41.9951575 ] } }
]
};

/*
 * Qualtrics Google Map Lat/Long Collector
 * Version 1.4
 *
 * Written by George Walker <george@georgewwalker.com>
 * Get the latest from GitHub: https://github.com/pkmnct/qualtrics-google-map-lat-long/releases
 *
 * This JavaScript allows a Qualtrics user to collect a lat/long from a
 * Google Map in a survey. To use it, create a new "Text Entry" question,
 * then add this JavaScript to the question. You can set variables below.
 * These include the lattitude and longitude to center the map at, the
 * zoom level of the map, and the text to display when hovering over the
 * map's pin. It also includes the width and height of the map.
 */

// Enter your Google Map API key in this variable:

googleMapAPIKey = "AIzaSyBAEus4_qur-fkzm2A0PQ2mYoIK7Qra26c";

Qualtrics.SurveyEngine.addOnload(function() {
	// --- Get Question ID ---
	var currentQuestionID = this.getQuestionInfo().QuestionID;
	console.log("QID is: " + currentQuestionID);
	
    // --- User Variables, set these: ---
    var mapCenterLat = 41.763710;
    var mapCenterLng = -72.685097;
    var mapZoom = 8; 

    var mapWidth = "100%";
    var mapHeight = "300px";

	// populate array allLayers with the variable names holding GeoJson objects to display
	// **IMPORTANT** add these in the same order you wish the layer control widget to display them from top to bottom
	
	var allLayers = [points5frlm, points5ftb, points5pm]
	
	// populate array allLayerNames with the strings to be displayed for each toggle-able layer
	// **IMPORTANT** add the names in the order correspodning to their layer's position in array allLayers
	
	var toggleLabels = ['Option A', 'Option B', 'Option C'];
	
    // --- End of User Variables ---
	
	var allLayerNames = [];
	
	for (var i = 0; i < allLayers.length; i++)
	{
		allLayerNames.push(allLayers[i].name);
	}

    // Get the data entry box and store it in a variable
    var dataBox = document.getElementById("QR~" + this.questionId);

    // Get the question container and store it in a variable.
    var questionContainer = this.getQuestionContainer();
	var questionChoices = this.getChoices();

    // Need to be able to access the marker to update it later.
    var marker;

    try {
        // Create a map object and append it to the question container.
        var mapObject = document.createElement('div');
        mapObject.setAttribute("id", this.questionId + "-map");
        mapObject.style.width = mapWidth;
        mapObject.style.height = mapHeight;
        questionContainer.appendChild(mapObject);
        var mapID = this.questionId + "-map";
    } catch (err) {
        console.log("Unable to create map object. Details: " + err);
        alert("An error occurred creating the map.");
    };

    // Hide the data box
    /*try {
        dataBox.style.display = 'none';
    } catch (err) {
        console.log("Unable to hide data box.");
    }*/


    // This function calls itself once per second until the Google Maps API is loaded, then it displays the map.
    function displayMap() {

        try {
            var map = new google.maps.Map(document.getElementById(mapID), {
                center: {
                    lat: mapCenterLat,
                    lng: mapCenterLng
                },
                zoom: mapZoom
            });
			

			
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
			// add Data
			map.data.addGeoJson(points5frlm);
			map.data.addGeoJson(points5ftb);
			map.data.addGeoJson(points5pm);
			
			var layerCheckBool = {points5FRLM : true, points5fuelTravelBack : true, points5pMedian : true};
			var color = {points5FRLM : 'red', points5fuelTravelBack : 'blue', points5pMedian : 'orange'};
			
			function updateMapStyle()
			{
				console.log("function updateMapStyle is running");
				map.data.setStyle(function(feature)
			{
				console.log(feature.name);
				var circle = getCircle(feature.getProperty("name"));
				console.log(circle);
				debugger
				return {
				icon: circle
				}
			});
			}
			
			
			function getCircle(layerName) 
			{
				return {
					path: google.maps.SymbolPath.CIRCLE,
					fillColor:  color[layerName],
					fillOpacity: layerCheckBool[layerName] ? 1 : 0,
					scale: 10,
					strokeOpacity: 0
				}
			}
				
			updateMapStyle();
				
			// make a function for input toggles
			
			function toggleFunction(event)
					{
						var toggleInput = event.target;
						
						console.log("toggle function worked" + toggleInput.value);
						
						var toggleValue = toggleInput.value;
						var checkedBool = toggleInput.checked;
						
						
						layerCheckBool[toggleValue] = checkedBool;
						
						updateMapStyle();
		
						};
			// toggle visibility with checkbox input
			// make a div to hold the layer control elements
				

				var controlDiv = document.createElement('div');

				
				// make a div to hold user interface elements
				
	
				var controlUI = document.createElement('div');
					controlUI.style.backgroundColor = '#fff';
					controlUI.style.border = '2px solid #fff';
					controlUI.style.borderRadius = '3px';
					controlUI.style.cursor = 'pointer';
					controlUI.style.marginBottom = '22px';
					controlUI.title = 'Click to turn layers on/off';
				//	controlUI.width = "100px";
				
				controlDiv.appendChild(controlUI);
				
				
				// make a list for all the layer control toggles
				
				
					var controlList = document.createElement('ul');
						controlList.style.listStyleType = "none";
						controlList.style.padding = 0;
						

					// populate controlList with layer toggles named per elements of allLayerNames
				console.log(toggleLabels.length);
				

				
					for(var i = 0; i < toggleLabels.length; i++)
					{
							
						var controlLi = document.createElement('li');
						
						var controlCheckBoxLabel = document.createElement('label');
						
						var controlCheckBox = document.createElement('input');
						
							//controlCheckBox.classList.add("ignoreCSS");
							controlCheckBox.type = 'checkbox';
							controlCheckBox.name = toggleLabels[i];
							controlCheckBox.id = 'toggleLayer' + i;
							controlCheckBox.value = allLayerNames[i];
							controlCheckBox.classList.add("toggleInput");
							controlCheckBox.checked = true;
						
						// Have to override any skins applied to css by default
							controlCheckBox.style.opacity = 1;
							controlCheckBox.style.zIndex = 1;
							controlCheckBox.style.height = 'unset';
							controlCheckBox.style.width = 'unset';
						 	controlCheckBox.style.left = 'unset';
						    controlCheckBox.style.position = 'unset';
							controlCheckBox.style.paddingLeft = '5px';
							controlCheckBox.style.paddingRight = '5px';
						
						// add an event listener for each checkbox

							controlCheckBox.addEventListener("change", toggleFunction);

						
						var controlCheckBoxText = document.createElement('span');
							controlCheckBoxText.innerHTML = toggleLabels[i];
							controlCheckBoxText.style.color = '#fff';
							controlCheckBoxText.style.fontFamily = 'Roboto,Arial,sans-serif';
							controlCheckBoxText.style.fontSize = '16px';
							controlCheckBoxText.style.position = 'relative';
							controlCheckBoxText.style.backgroundColor = color[allLayerNames[i]]
							
						
						controlCheckBoxLabel.appendChild(controlCheckBox);
						controlCheckBoxLabel.appendChild(controlCheckBoxText);
						controlLi.appendChild(controlCheckBoxLabel);
						controlList.appendChild(controlLi);
						
					}
					
					controlUI.appendChild(controlList);

					map.controls[google.maps.ControlPosition.LEFT_BOTTOM].push(controlDiv);

	} catch (err) {
			setTimeout(displayMap, 1000);
	}
}
	
    displayMap();
});

// Load the Google Maps API if it is not already loaded.
try {
    if (typeof googleMapJS == 'undefined') {
        var googleMapJS;
        if (googleMapJS == null) {
            googleMapJS = document.createElement('script');
            if (googleMapAPIKey == "Your Key" || googleMapAPIKey == null) {
                googleMapJS.src = 'https://maps.googleapis.com/maps/api/js' + "?libraries=places";
            } else {
                googleMapJS.src = 'https://maps.googleapis.com/maps/api/js?libraries=places&key=' + googleMapAPIKey;
            }
            document.head.appendChild(googleMapJS);
        }
    } else {
        console.log("Map already loaded.");
    }
} catch (err) {
    console.log("Unable to load Google Maps API. Details: " + err);
    alert("Unable to load Google Maps API.");
}
