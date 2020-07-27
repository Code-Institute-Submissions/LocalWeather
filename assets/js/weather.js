function getWeather(event) {
	

	var city = $("#city").val();
	if (!city) {
		$('#displayWeather').html(`<p> Enter a valid city </p>`);
		return;
	}
	
	$('#displayWeather').html(`<p> getting data </p>`);
}