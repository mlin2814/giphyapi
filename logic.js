	var heroes = ['Captain America', 'Iron Man', 'Black Widow', 'Thor', 'The Hulk', 'Hawkeye'];

	// ========================================================

	// displayMovieInfo function now re-renders the HTML to display the appropriate content. 
	function displayHeroInfo(){

		var hero = $(this).attr('data-name');
		var queryURL = "http://api.giphy.com/v1/gifs/search?q" + hero + "&q=&rating=&limit=";
		
		// Creates AJAX call for the specific movie being 
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			// Creates a generic div to hold the movie
			var heroDiv = $('<div class="hero">');

			// Retrieves the Rating Data
			var rating = response.Rated;

			// Creates an element to have the rating displayed
			var pOne = $('<p>').text( "Rating: " + rating);

			// Displays the rrating
			movieDiv.append(pOne);

			// Retrieves the release year
			var released = response.Released;

			// Creates an element to hold the release year
			var pTwo = $('<p>').text( "Released: " + released);

			// Displays the release year
			movieDiv.append(pTwo);

			// Retrieves the plot
			var plot = response.Plot;

			// Creates an element to hold the plot
			var pThree = $('<p>').text( "Plot: " + plot);

			// Appends the plot
			movieDiv.append(pThree);

			// Creates an element to hold the image 
			var image = $('<img>').attr("src", response.Poster);

			// Appends the image
			movieDiv.append(image);

			// Puts the entire Movie above the previous movies.
			$('#moviesView').prepend(movieDiv);
		});

	}

	// ========================================================

	// Generic function for displaying movie data 
	function renderButtons(){ 

		// Deletes the movies prior to adding new movies (this is necessary otherwise you will have repeat buttons)
		$('#buttonsView').empty();

		// Loops through the array of movies
		for (var i = 0; i < heroes.length; i++){

			// Then dynamicaly generates buttons for each movie in the array

			// Note the jQUery syntax here... 
		    var a = $('<button>') // This code $('<button>') is all jQuery needs to create the beginning and end tag. (<button></button>)
		    a.addClass('hero'); // Added a class 
		    a.attr('data-name', heroes[i]); // Added a data-attribute
		    a.text(heroes[i]); // Provided the initial button text
		    $('#buttonsView').append(a); // Added the button to the HTML
		}
	}

	// ========================================================

	// This function handles events where one button is clicked
	$('#addHero').on('click', function(){

		// This line of code will grab the input from the textbox
		var hero = $('#hero-input').val().trim();

		// The movie from the textbox is then added to our array
		heroes.push(hero);
		
		// Our array then runs which handles the processing of our movie array
		renderButtons();

		// We have this line so that users can hit "enter" instead of clicking on ht button and it won't move to the next page
		return false;
	})

	// ========================================================

	// Generic function for displaying the movieInfo
	$(document).on('click', '.hero', displayHeroInfo);


	// ========================================================

	// This calls the renderButtons() function
	renderButtons();
