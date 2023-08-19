var generalNotiApi = 'http://localhost:3000/general-notification';

function start() {
  getGeneralNotis(renderGeneralNotis);
  handleSearchNotis();
}

start();

function getGeneralNotis(callback) {
  fetch(generalNotiApi)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}

var searchBtn = document.querySelector('#search');

function handleSearchNotis(callback) {
  fetch(generalNotiApi)
    .then(function(response) {
      return response.json();
    })
    .then(callback);
}

function renderGeneralNotis(generalNotis) {
  var listGeneralNotiBlock =
    document.querySelector('#general-notification');
  var htmls = generalNotis.map(function(generalNoti) {
    return `
      <div class="grid__column-10-3 place-item mt-16">
        <div class="place-img" style="background: url('${generalNoti.image}') center/cover no-repeat";></div>
        <div class="place-body">
            <h3 class="place-heading">${generalNoti.title}</h3>
            <p class="place-time">${generalNoti.date}</p>
            <p class="place-desc">${generalNoti.description}</p>
            <button class="btn js-buy-ticket s-full-width"><a href="./address.html">Xem thêm</a></button>
        </div>
      </div>
      `;
  });
  listGeneralNotiBlock.innerHTML = htmls.join('');
}

function handleSearchNotis(generalNotis) {
  searchBtn.onclick = function() {
    var searchKey = document.querySelector('input[name="search-content]').value;
    alert(searchKey);
    handleSearchNotis();
    // var searchKey = document.querySelector('input[name="search-content]').value;
    var searchKey = 'học sinh';
    alert(searchKey);
    var filteredNotis = generalNotis.filter(function(generalNoti) {
      return (
        generalNoti.title.includes(searchKey) ||
        generalNoti.description.includes(searchKey) ||
        generalNoti.date.includes(searchKey)
      );
    });
    renderGeneralNotis(filteredNotis);
  }
}