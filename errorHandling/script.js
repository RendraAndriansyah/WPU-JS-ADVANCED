// ========================
// = ERROR HANDLING FETCH =
// ========================

const searchButton = document.querySelector(".search-button");
searchButton.addEventListener("click", async function () {
  try {
    const inputKeyword = document.querySelector(".input-keyword");
    const movies = await getMovies(inputKeyword.value);
    updateUi(movies);
  } catch (err) {
    alert(err);
    // console.log(err);
  }
});

function getMovies(keyword) {
  return fetch(`http://www.omdbapi.com/?apikey=8f698ea6&s=${keyword}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }
      return response.json();
    })
    .then((response) => {
      if (response.response === "false") {
        throw new Error(response.Error);
      }
      return response.Search;
    });
}

function updateUi(movies) {
  let cards = "";
  movies.forEach((m) => (cards += showCards(m)));
  const movieContainer = document.querySelector(".movie-container");
  movieContainer.innerHTML = cards;
}

function updateUiDetail(mbodoamat) {
  const detailMovie = showDetail(mbodoamat);
  const modalDetail = document.querySelector(".modal-body");
  modalDetail.innerHTML = detailMovie;
}

// event binding
// event binding yaitu memberi event(addEventListener) pada element yang belum ada
document.addEventListener("click", async function (e) {
  if (e.target.classList.contains("modal-detail-button")) {
    const imdbid = e.target.dataset.imdbid;
    const movieDetail = await getMoviesDetail(imdbid);
    updateUiDetail(movieDetail);
  }
});

function getMoviesDetail(purapuraimdbid) {
  return fetch(`http://www.omdbapi.com/?apikey=8f698ea6&i=${purapuraimdbid}`)
    .then((res) => res.json())
    .then((m) => {
      return m;
    });
}

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
      <div class="col-md-4">
        <img src="${m.Poster}" class="img-fluid" />
      </div>
      <div class="col-md-8">
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
