// local reviews data
let reviews;

let count = 0;
const Buttons = document.getElementsByTagName('button');

fetch("https://randomuser.me/api/?results=500")
  .then(res => res.json())
  .then(data => reviews = data.results);

console.log(reviews);

function changeReview() {
  document.getElementById('author').textContent = reviews[count].name.first + ' ' + reviews[count].name.last;
  document.getElementById('job').textContent = reviews[count].location.country;
  document.getElementById('person-img').src = reviews[count].picture.large;
}



for (let i = 0; i < Buttons.length; i++) {
  Buttons[i].addEventListener('click', function (event) {
    const currentBtn = event.currentTarget.classList;
    if (currentBtn.contains('prev-btn')) {
      if (count == 0) count = reviews.length - 1;
      else count--;
    }
    else if (currentBtn.contains('next-btn')) {
      if (count == reviews.length - 1) count = 0;
      else count++;
    }
    else {
      let now = count;
      while (now == count) {
        now = Math.floor(Math.random() * reviews.length);
      }
      count = now;
    }

    changeReview();

  })
}

