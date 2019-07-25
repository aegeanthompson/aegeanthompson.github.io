$( () => {

  const $openBtn = $('#openModal');
  const $modal = $('#modal');
  const $closeBtn = $('#close');

  const $openBtn2 = $('#buttonIn');
  const $modal2 = $('#modal2');
  const $backBtn = $('#back');
  const $closeBtn2 = $('#close2');

  const $openBtn3 = $('#buttonMovie');
  const $modal3 = $('#modal3');
  const $backBtn2 = $('#back2');
  const $closeBtn3 = $('#close3');


  const allComedy = ["https://www.omdbapi.com/?t=booksmart&apikey=863b543e", "https://www.omdbapi.com/?t=long_shot&apikey=863b543e", "https://www.omdbapi.com/?t=stan_&_ollie&apikey=863b543e", "https://www.omdbapi.com/?t=always_be_my_maybe&apikey=863b543e", "https://www.omdbapi.com/?t=wild_nights_with_emily&apikey=863b543e", " https://www.omdbapi.com/?t=plus_one&apikey=863b543e&y=2019"];

  const allDrama = ["https://www.omdbapi.com/?t=the_farewell&apikey=863b543e&y=2019", " https://www.omdbapi.com/?t=APOLLO_11&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=THE_AFTERMATH&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=THE_LION_KING&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=THE_SOUVENIR&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=GLASS&apikey=863b543e&y=2019"];

  const allAction = ["https://www.omdbapi.com/?t=avengers_endgame&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=spider_man_far_from_home&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=ALITA_BATTLE_ANGEL&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=CAPTAIN_MARVEL&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=JOHN_WICK_CHAPTER_3&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=COLD_PURSUIT&apikey=863b543e&y=2019"];

  const allScary = ["https://www.omdbapi.com/?t=US&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=crawl&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=child%27s_play&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=BRIGHTBURN&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=ANNABELLE_COMES_HOME&apikey=863b543e&y=2019", "https://www.omdbapi.com/?t=PET_SEMATARY&apikey=863b543e&y=2019"];

  const allFood = [".recipe1", ".recipe2", ".recipe3"];

const randomNumMovies = () => {
  return Math.floor(Math.random() * Math.floor(6));
}

const randomNumFood = () => {
  return Math.floor(Math.random() * Math.floor(3));
}

  const openModal = () => {
    $modal.css('display', 'block');
  }

  const openModal2 = () => {
    $modal.css('display', 'none');
    $modal2.css('display', 'block');
  }

  const openModal3 = () => {
    $modal2.css('display', 'none');
    $modal3.css('display', 'block');
  }

  const closeModal = () => {
    $modal.css('display', 'none');
  }

  const goBack = () => {
    $modal2.css('display', 'none');
    $modal.css('display', 'block');
  }

  const goBack2 = () => {
    $modal3.css('display', 'none');
    $modal2.css('display', 'block');
  }

  const closeModal2 = () => {
    $modal2.css('display', 'none');
  }

  const closeModal3 = () => {
    $modal3.css('display', 'none');
  }



  $openBtn.on('click', openModal);

  $closeBtn.on('click', closeModal);

  $openBtn2.on('click', openModal2);

  $backBtn.on('click', goBack);

  $closeBtn2.on('click', closeModal2);

  $openBtn3.on('click', openModal3);

  $backBtn2.on('click', goBack2);

  $closeBtn3.on('click', closeModal3);




  $('#comedy').on('click', (event) => {
    $('.container').hide();
    $(".comedy").show();
    $('#modal3').hide();
    $('.comedyH1').css("display", "block");
    $(allFood[randomNumFood()]).css("display", "block");

    $.ajax({
      url: allComedy[randomNumMovies()],
    }).then(
      (data) => {
        $("#poster").append("<img src='" + data.Poster + "'></img>");
        $("#title").html("Title: " + data.Title);
        $("year").html("Year: " + data.Year);
        $("#rated").html("Rated: " + data.Rated);
        $("#actors").html("Actors: " + data.Actors);
        $("#plot").html("Plot: " + data.Plot);
        $("#metascore").html("Metascore: " + data.Metascore);

      },
      (error) => {
        console.log(error);
      }
    );
  });

  $('#drama').on('click', (event) => {
    $('.container').hide();
    $(".comedy").show();
    $('#modal3').hide();
    $('.comedyH1').css("display", "block");
    $(allFood[randomNumFood()]).css("display", "block");

    $.ajax({
      url: allDrama[randomNumMovies()],
    }).then(
      (data) => {
        $("#poster").append("<img src='" + data.Poster + "'></img>");
        $("#title").html("Title: " + data.Title);
        $("year").html("Year: " + data.Year);
        $("#rated").html("Rated: " + data.Rated);
        $("#actors").html("Actors: " + data.Actors);
        $("#plot").html("Plot: " + data.Plot);
        $("#metascore").html("Metascore: " + data.Metascore);

      },
      (error) => {
        console.log(error);
      }
    );
  });

  $('#action').on('click', (event) => {
    $('.container').hide();
    $(".comedy").show();
    $('.comedyH1').css("display", "block");
    $('#modal3').hide();
    $(allFood[randomNumFood()]).css("display", "block");

    $.ajax({
      url: allAction[randomNumMovies()],
    }).then(
      (data) => {
        $("#poster").append("<img src='" + data.Poster + "'></img>");
        $("#title").html("Title: " + data.Title);
        $("year").html("Year: " + data.Year);
        $("#rated").html("Rated: " + data.Rated);
        $("#actors").html("Actors: " + data.Actors);
        $("#plot").html("Plot: " + data.Plot);
        $("#metascore").html("Metascore: " + data.Metascore);

      },
      (error) => {
        console.log(error);
      }
    );
  });

  $('#scary').on('click', (event) => {
    $('.container').hide();
    $(".comedy").show();
    $('.comedyH1').css("display", "block");
    $('#modal3').hide();
    $(allFood[randomNumFood()]).css("display", "block");

    $.ajax({
      url: allScary[randomNumMovies()],
    }).then(
      (data) => {
        $("#poster").append("<img src='" + data.Poster + "'></img>");
        $("#title").html("Title: " + data.Title);
        $("year").html("Year: " + data.Year);
        $("#rated").html("Rated: " + data.Rated);
        $("#actors").html("Actors: " + data.Actors);
        $("#plot").html("Plot: " + data.Plot);
        $("#metascore").html("Metascore: " + data.Metascore);

      },
      (error) => {
        console.log(error);
      }
    );
  });


    });
