// ===========
// =  FETCH  =
// ===========

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", function () {
  const inputKeyword = document.querySelector(".input-keyword");
  fetch(`http://www.omdbapi.com/?apikey=8f698ea6&s=${inputKeyword.value}`)
    .then((res) => res.json())
    .then(({ Search }) => {
      const movies = Search;
      let cards = "";
      movies.forEach((mov) => {
        cards += showCards(mov);
      });
      const movieContainer = document.querySelector(".movie-container");
      movieContainer.innerHTML = cards;

      // ketika tombol di click
      const modalDetail = document.querySelectorAll(".modal-detail-button");
      modalDetail.forEach((btn) => {
        btn.addEventListener("click", function () {
          const imdbid = this.dataset.imdbid;
          // console.log(this.dataset.imdbid);
          fetch(`http://www.omdbapi.com/?apikey=8f698ea6&i=${imdbid}`)
            .then((res) => res.json())
            .then((m) => {
              const detailMovie = showDetail(m);
              const modalDetail = document.querySelector(".modal-body");
              modalDetail.innerHTML = detailMovie;
            });
        });
      });
    });
});

function showCards(mov) {
  return `<div class="col-md-4 my-3">
    <div class="card">
      <img src="${mov.Poster}" class="card-img-top" alt="${mov.Title}" />
      <div class="card-body">
        <h5 class="card-title">${mov.Title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${mov.Year}</h6>
        <a href="#" class="btn btn-primary modal-detail-button" 
        data-bs-toggle="modal"
        data-bs-target="#movie-details" data-imdbid="${mov.imdbID}">Show Details</a>
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
