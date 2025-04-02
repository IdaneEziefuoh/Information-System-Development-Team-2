
// Function to search for buildings by grade and update markers on the map
function filter() {
    // Get the values of the checked checkboxes
    const selectedGrades = [];

    if (document.getElementById('grade-II').checked) selectedGrades.push("II");
    if (document.getElementById('grade-II*').checked) selectedGrades.push("II*");
    if (document.getElementById('grade-I').checked) selectedGrades.push("I");

    if (selectedGrades.length === 0) return;

    // Convert the array of selected grades to a format suitable for the query
    const whereClause = selectedGrades.map(grade => `LISTED_BUILDING_GRADE = '${grade}'`).join(" OR ");
    const encodedWhere = encodeURIComponent(whereClause);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ODP_Datasets/MapServer/3/query?where=${encodedWhere}&outFields=*&outSR=4326&f=geojson`;
      
    fetch(url, { method: 'GET', headers: { 	'Accept': 'application/json' } })
    .then (response => response.json())
    .then(json => configureMap(json));
}



function search(string) {
    let urlEncoded = encodeURIComponent(string);
    let url = `https://maps2.bristol.gov.uk/server2/rest/services/ext/ODP_Datasets/MapServer/3/query?where=&text=${urlEncoded}&objectIds=&time=&timeRelation=esriTimeRelationOverlaps&geometry=&geometryType=esriGeometryEnvelope&inSR=&spatialRel=esriSpatialRelIntersects&distance=&units=esriSRUnit_Foot&relationParam=&outFields=*&returnGeometry=true&returnTrueCurves=false&maxAllowableOffset=&geometryPrecision=&outSR=&havingClause=&returnIdsOnly=false&returnCountOnly=false&orderByFields=&groupByFieldsForStatistics=&outStatistics=&returnZ=false&returnM=false&gdbVersion=&historicMoment=&returnDistinctValues=false&resultOffset=&resultRecordCount=&returnExtentOnly=false&sqlFormat=none&datumTransformation=&parameterValues=&rangeValues=&quantizationParameters=&featureEncoding=esriDefault&f=geojson`;
    fetch(url, { method: 'GET', headers: { 	'Accept': 'application/json' } })
	.then (response => response.json())
	.then(json => configureMap(json));
}



function getLocation() {
    const button = document.getElementById("locate-btn");
    const btnText = document.getElementById("btn-text");
    const loadingIcon = document.getElementById("loading");

    if (!button || !btnText || !loadingIcon) {
        console.error("Button or loading elements not found");
        return;
    }

    // Update UI
    btnText.textContent = "Finding location...";
    loadingIcon.classList.remove("hidden");
    button.disabled = true;

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
            function (loc) { // Success
                var userLon = loc.coords.longitude;
                var userLat = loc.coords.latitude;
                console.log("User Location:", userLon, userLat);
                map.setCenter([userLon, userLat]);

                // Create GeoJSON object
                var userGeoJSON = createGeoJSON(userLon, userLat);

                // Add marker to map
                new mapboxgl.Marker()
                    .setLngLat(userGeoJSON.features[0].geometry.coordinates)
                    .setPopup(new mapboxgl.Popup().setText("You are here"))
                    .addTo(map);

                // Restore UI after location is found
                resetButton();
            },
            function (error) { // Error handling
                alert("Error getting location: " + error.message);
                console.warn("Geolocation error:", error);
                
                // Restore UI even if there's an error
                resetButton();
            },
            { enableHighAccuracy: true, timeout: 10000 }
        );
    } else {
        alert("Geolocation is not supported by this browser.");
        resetButton();
    }

    function resetButton() {
        btnText.textContent = "Find on Map";
        loadingIcon.classList.add("hidden");
        button.disabled = false;
    }
}



function createGeoJSON(lon, lat) {
  return {
      "type": "FeatureCollection",
      "features": [
          {
              "type": "Feature",
              "geometry": {
                  "type": "Point",
                  "coordinates": [lon, lat]
              },
              "properties": {
                  "title": "Your Location"
              }
          }
      ]
  };
}

function clearSearch() {
    document.getElementById("search-input").value = "";
}