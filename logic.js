	var heroes = ['Captain America', 'Iron Man', 'Black Widow', 'Thor', 'The Hulk', 'Hawkeye'];

	// ========================================================

	// function displayHeroInfo(){

	// 	var heroes = $(this).data("name");
	// 	var queryURL = "http://api.giphy.com/v1/gifs/search?q=" + heroes + "&api_key=dc6zaTOxFJmzC&limit=10";
		

	function displayHeroInfo(){
$("#heroesView").empty();
var type = ($(this).data("name"))
var queryURL = "https://api.giphy.com/v1/gifs/search?q="+type+"&limit=10&api_key=dc6zaTOxFJmzC";
		$.ajax({url: queryURL, method: 'GET'}).done(function(response) {

			console.log(response);

			var heroDiv = $('<div class="hero">');
			var heroImage = $('<div class="heroImage">');

			var results = response.data;
			for (var i = 0; i < results.length; i++){
         		var heroDiv = $('<div class="hero">');

         	var rating = results[i].rating;

         	var pOne = $('<p>').text( "Rating: " + rating);
         	heroDiv.append(pOne);
         	};

			var results = response.data;
			for (var i = 0; i < results.length; i++){
				var heroImage = $('<div class="heroImage">');
         		var image = results[i].images.fixed_height.url;

         		var pTwo = $('<img>').attr("src", response.data[i].images.fixed_height.url);
         		heroDiv.append(pTwo);
         };
			
			$('#heroesView').prepend(heroDiv);
		});

	}

	function renderButtons(){ 
		$('#buttonsView').empty();

		for (var i = 0; i < heroes.length; i++){
		    var a = $('<button>')
		    a.addClass('hero');
		    a.attr('data-name', heroes[i]);
		    a.text(heroes[i]);
		    $('#buttonsView').append(a);
		}
	}

	// ========================================================

	$('#addHero').on('click', function(){

		var hero = $('#hero-input').val().trim();
		heroes.push(hero);
		renderButtons();
		return false;
	})

	// ========================================================
	$(document).on('click', '.hero', displayHeroInfo);


	// ========================================================

	renderButtons();
