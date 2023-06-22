// //element

const movieEl = document.getElementById('movie');

const seatEl = document.querySelectorAll('.row .seat:not(.occupied');

const seatsCountEl = document.querySelector('.seats-count');

const totalPriceEl = document.querySelector('.total-price');

//function
const init = function () {
  seatsCountEl.innerText = seatCount;
  totalPriceEl.innerText = seatCount * moviePrice;
};

//global variable
let seatCount = 0;
let moviePrice = movieEl.value;
// console.log(moviePrice);
//initial settings
seatsCountEl.innerText = seatCount;
totalPriceEl.innerText = seatCount * moviePrice;
//event listener
movieEl.addEventListener('change', () => {
  moviePrice = movieEl.value;
  init();
});

for (let i = 0; i < seatEl.length; i++) {
  seatEl[i].addEventListener('click', () => {
    if (seatEl[i].classList.contains('selected')) {
      seatEl[i].classList.remove('selected');
    } else {
      seatEl[i].classList.add('selected');
    }

    let selectedSeats = document.querySelectorAll('.row .seat.selected');
    // console.log(selectedSeats);
    seatCount = selectedSeats.length;
    init();
  });
}

// for (let i = 0; i < seatEl.length; i++) {
//   seatEl[i].addEventListeners('click', () => {
//     if (seatEl[i].classList.contains('selected')) {
//       seatEl[i].classList.remove('selected');
//     } else {
//       seatEl[i].classList.remove('selected');
//     }

//     let selectedSeats = document.querySelectorAll('.row .seat.selected');
//     seatCount = selectedSeats.length;
//     init();
//   });
// }

//user wil select movie and seat so we will update total price
//if select a non selected seats we will update seat status
