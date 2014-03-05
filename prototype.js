var image = 'map-marker.png';
var i;
var click;

//From Maps file
	var markers = new Array();
	var map;
	var image = 'map-marker.png';
	var lat_lng_str = "42.0524928,-87.6746415";
	var llstr = "41.319615,-72.974247"
	var loc_full_str = "http://maps.googleapis.com/maps/api/staticmap?center=" + llstr +
	"&zoom=12&size=150x150&maptype=roadmap&markers=color:blue%7C%7C" + llstr + "&sensor=false";

	function initialize() {
		var mapOptions = {
			center: new google.maps.LatLng(42.0524928, -87.6746415),
			zoom: 15
		};

		map = new google.maps.Map(document.getElementById("map"),mapOptions);

		var lat, ltd;
		for(var i=0;i<2;i++){
			lat = 42.0524928- (i/918);
			lng = -87.6746415 - (i/843);

			markers[i] = new google.maps.Marker({
				position: new google.maps.LatLng(lat, lng), 
				map: map,
				animation: google.maps.Animation.DROP,
				icon:image,
				title: "Test"});
		}

		var img = document.getElementById("first_map");
		img.src = loc_full_str;
	}


	 click = google.maps.event.addDomListener(window, 'load', initialize);
