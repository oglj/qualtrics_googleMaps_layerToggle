//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
///// Qualtrics--Google Maps Widget //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Oscar Lopez Jaramillo// oglj@asu.edu //
// This widget displays sets of points stored in geoJSON format in Google Maps for Qualtrics
// It includes layer control that allows for toggling layer displays

/*
 * Qualtrics Google Map Lat/Long Collector
 * Version 1.4
 *
 * Written by George Walker <george@georgewwalker.com>
 * Get the latest from GitHub: https://github.com/pkmnct/qualtrics-google-map-lat-long/releases
*/

// GeoJSON point geometry object upload////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 // Creating data as a GeoJSON object.  These data contain three sets of five randomly selected points from OpenStreetMap's CT Convenience Store set
 // Each is meant to represent results from applying one of the FRLM, Fuel-TravelBack, and p-Median models of optimizing station locations in the hartford area
 // TODO - organize so that user only needs to insert one collection of points

var points5frlm_json =  {
	"type": "FeatureCollection",
	"name": "points5frlm",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
		{ "type": "Feature", "properties": { "model": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.3706716, 41.7383493 ] } },
		{ "type": "Feature", "properties": { "model": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -73.2536749, 41.1815656 ] } },
		{ "type": "Feature", "properties": { "model": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.8976499, 41.3089825 ] } },
		{ "type": "Feature", "properties": { "model": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.6591251, 41.5542987 ] } },
		{ "type": "Feature", "properties": { "model": "points5FRLM" }, "geometry": { "type": "Point", "coordinates": [ -72.9406598, 41.3044436 ] } }
	]
};

var points5ftb_json = {
	"type": "FeatureCollection",
	"name": "points5ftb",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
		{ "type": "Feature", "properties": { "model": "points5ftb" }, "geometry": { "type": "Point", "coordinates": [ -72.9338486, 41.3052394 ] } },
		{ "type": "Feature", "properties": { "model": "points5ftb" }, "geometry": { "type": "Point", "coordinates": [ -72.6664967, 41.9221939 ] } },
		{ "type": "Feature", "properties": { "model": "points5ftb" }, "geometry": { "type": "Point", "coordinates": [ -72.8159555, 41.869674 ] } },
		{ "type": "Feature", "properties": { "model": "points5ftb" }, "geometry": { "type": "Point", "coordinates": [ -73.2362148, 41.1975959 ] } },
		{ "type": "Feature", "properties": { "model": "points5ftb" }, "geometry": { "type": "Point", "coordinates": [ -72.9740961, 41.3323662 ] } }
	]
};

var points5pm_json = {
	"type": "FeatureCollection",
	"name": "points5pm",
	"crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
	"features": [
		{ "type": "Feature", "properties": { "model": "points5pm" }, "geometry": { "type": "Point", "coordinates": [ -72.9169839, 41.8541654 ] } },
		{ "type": "Feature", "properties": { "model": "points5pm" }, "geometry": { "type": "Point", "coordinates": [ -72.8159555, 41.869674 ] } },
		{ "type": "Feature", "properties": { "model": "points5pm" }, "geometry": { "type": "Point", "coordinates": [ -72.9553421, 41.6726173 ] } },
		{ "type": "Feature", "properties": { "model": "points5pm" }, "geometry": { "type": "Point", "coordinates": [ -72.9489531, 41.6757246 ] } },
		{ "type": "Feature", "properties": { "model": "points5pm" }, "geometry": { "type": "Point", "coordinates": [ -72.7058532, 41.8562489 ] } }
	]
};
//

//Google Maps API Access ///////////////////////////////////////////////////////////////////
// Enter your Google Map API key in this variable////////////////////////////////
googleMapAPIKey = "AIzaSyBAEus4_qur-fkzm2A0PQ2mYoIK7Qra26c";
///////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Load the Google Maps API if it is not already loaded
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
	
	var allLayers = [points5frlm_json, points5ftb_json, points5pm_json]
	
	// populate array allLayerNames with the strings to be displayed for each toggle-able layer
	// **IMPORTANT** add the names in the order correspodning to their layer's position in array allLayers
	// TODO--automate this
	
	var toggleLabels = ['Option A', 'Option B', 'Option C'];
	
    // --- End of User Variables ---
	
	// create an array of allLayers  'name' property
	
	var allLayerNames = [];
	
	for (var i = 0; i < allLayers.length; i++)
	{
		allLayerNames.push(allLayers[i].name);
	}

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
// GeoJSON Object Processing ///////////////////////////////////////////////////////////////////

// Iterate through allLayers
for (var i = 0; i < allLayers.length; i++) {
				map.data.addGeoJson(allLayers[i]);
				
				layerCheckBool_softCoded[allLayerNames[i]] = true;
			};	
			// add Data
			map.data.addGeoJson(points5frlm_json);
			map.data.addGeoJson(points5ftb_json);
			map.data.addGeoJson(points5pm_json);
			
			var layerCheckBool = {points5FRLM : true, points5fuelTravelBack : true, points5pMedian : true};
			var layerCheckBool_softcoded = {}
			
			
			
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
