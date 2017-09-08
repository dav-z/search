//document.addEventListener("DOMContentLoaded",function(){})
// the above is the same as below (vanilla & jQuery versions)
$(document).ready(function(){
  //document.getElementById("search").addEventListner("submit",function(){})
  $("#search").submit(function(event){
    event.preventDefault();
    // document.getElementById("results").innerHTML = '';
    $("#results").html(''); // clear out prior results
    // document.querySelector("#search input[name=search]").value
    var term = $("#search input[name=search]").val();
    var imgDefault = 'k6Eu1TyYnOErJ1OqzLwq6i7b3zM.jpg';
    var api_key = "8ad8cedce767d0d34ef524fea3a01117";
    console.log( "Search Term:", term );

    // $.ajax({
    //   url: "https://api.themoviedb.org/3/search/movie",
    //   dataType: "json",
    //   type: "GET",
    //   data: {
    //     api_key: api_key,
    //     query: term
    //   }
    //   success: function({

    //   });
    // });
    $.getJSON("http://www.songsterr.com/a/ra/songs.json?pattern=" + term,
      function(response) {
       // console.log(response);
        response.results.forEach(function(song){
          // var bgImg = 'url(http://image.tmdb.org/t/p/w500/' + (movie.poster_path || imgDefault)  + ')';
          var template =
            `<article class="song" id="song_${index}">
              <div class="info">
                <div class="title">${song.title}</div>
              </div>
              <footer class="detail">${artist.name}</footer>
            </article>`;

          // template.style.backgroundImage = bgImg;
          // console.log( index+1, song.title );
          $("#results").append(template);
        });
      }
    );
  });
});
