$(".search-button").on("click", function () {
  $.ajax({
    url:
      `http://www.omdbapi.com/?apikey=8f698ea6&s=` + $(".input-keyword").val(),
    success: ({ Search }) => {
      let cards = "";
      Search.forEach((e) => {
        cards += showCards(e);
      });
      $(".movie-container").html(cards);

      // ketika tombol detail di-klik
      $(".modal-detail-button").on("click", function () {
        $.ajax({
          url:
            "http://www.omdbapi.com/?apikey=8f698ea6&i=" +
            $(this).data("imdb-id"),
          success: (m) => {
            const movieDetails = showDetail(m);
            $(".modal-body").html(movieDetails);
          },
          error: (e) => {
            console.log(e.responseText);
          },
        });
      });
    },
    error: (e) => {
      console.log(e.responseText);
    },
  });
});

function showCards(e) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${e.Poster}" class="card-img-top" alt="${e.Title}" />
      <div class="card-body">
        <h5 class="card-title">${e.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${e.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" 
        data-bs-toggle="modal"
        data-bs-target="#movie-details" data-imdb-id="${e.imdbID}">Show Details</a>
      </div>
    </div>
  </div>`;
}

function showDetail(m) {
  return `<div class="container-fluid">
    <div class="row">
      <div class="col-md-3">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md">
        <ul class="list-group">
          <li class="list-group-item"><h4>${m.Title}(${m.Year})</h4></li>
          <li class="list-group-item">
            <strong>Director : </strong>${m.Director}
          </li>
          <li class="list-group-item">
            <strong>Actors : </strong>${m.Actors}
          </li>
          <li class="list-group-item">
            <strong>Writer : </strong>${m.Writer}
          </li>
          <li class="list-group-item">
            <strong>Plot : </strong> <br />
            ${m.Plot}
          </li>
        </ul>
      </div>
    </div>
  </div>`;
}
