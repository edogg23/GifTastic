var dogBreeds = ["Cane Corso", "Dogo Argentino", "Belgian Malinois", "Presa Canario"];

console.log("breeds: ", dogBreeds);

// function displayBreedInfo() {
// 	var breed = 
// }

function renderButtons () {
	$("#dog-buttons").empty();

	for (var i = 0; i < dogBreeds.length; i++) {
		var a = $("<button>");
		a.addClass("breeds");
		a.attr("breed-name", dogBreeds[i]);
		a.text(dogBreeds[i]);
		$("#dog-buttons").append(a);
		console.log(a.text());
	}
}

renderButtons();

