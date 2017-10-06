var dogBreeds = ["Cane Corso", "Dogo Argentino", "Belgian Malinois", "Presa Canario"];

console.log("breeds: ", dogBreeds);

// This function renders the buttons from the dogBreeds array
function renderButtons () {
	$("#dog-buttons").empty();

	for (var i = 0; i < dogBreeds.length; i++) {
		var a = $("<button>");
		a.addClass("breeds btn btn-danger");
		a.attr("breed-name", dogBreeds[i]);
		a.text(dogBreeds[i]);
		$("#dog-buttons").append(a);
		console.log(a.text());
	}
}

// This function adds a button to the array with the name typed in from the user
$("#add-breed").on("click", function(event) {
	event.preventDefault();

	// Get text from textbox
	var newBreed = $("#dog-input").val().trim();

	// Push the text from the textbox to the array
	dogBreeds.push(newBreed);
	renderButtons();
})

function displayBreedInfo() {
	var breed = $(this).attr("breed-name");
	var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=" + breed + "&limit=5";

	$.ajax({
		url: queryURL,
		method: "GET"
	}).done(function(response) {
		console.log(response);
		var dogDiv = $("<div class='dogs'>");

		var results = response.data;
		console.log("results: ", results);

		// loop through the results
		for (var i = 0; i < results.length; i++) {
			var dogDiv = $("<div class='dogs'>");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: " + rating);
			var dogImage = $("<img>");
			dogImage.attr("src", results[i].images.fixed_height.url);
			dogDiv.prepend(p);
			dogDiv.prepend(dogImage);
			$("#dog-breeds").prepend(dogDiv);
		}

		
		// console.log(dogDiv);
		console.log("rating: " + response.data.rating);
	});
}

$(document).on("click", ".breeds", displayBreedInfo);

renderButtons();

