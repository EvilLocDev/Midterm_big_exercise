// var listGeneralNoti = document.querySelector('#general-notification');

// var generalNotiApi = 'http://localhost:3000/general-notification';

// function start() {
//   getGeneralNotis(function(generalNotis) {
//     renderGeneralNotis(generalNotis);
//   });
//   //có thể viết ngắn lại thành
//   //getGeneralNotis(renderGeneralNotis());
// }

// start()

// //Functions
// function getGeneralNotis(callback) {//callback nhận được kết quả từ hàm fetch phía dưới
//   fetch(generalNotiApi)
//     .then(function(response) {
//       return response.json();
//     })
//     .then(callback);
// }