//console.log('%c HI', 'color: firebrick')
console.log('%c HI', 'color: firebrick')
const imgUrl = "https://dog.ceo/api/breeds/image/random/4";
document.addEventListener("DOMContentLoaded", function () {
  fetchData();
  fetchBreed();
  fetchSelected()
});

const fetchData = () => {
  const imgDiv = document.querySelector("#dog-image-container");
  fetch(imgUrl)
    .then((res) => res.json())
    .then((data) => {
      data.message.forEach((dat) => {
        imgDiv.innerHTML += `
         <img src='${dat}' alt="">
        `;
      });

    });
};
const breedUrl = "https://dog.ceo/api/breeds/list/all";
const fetchBreed = () => {
  const ul = document.querySelector("#dog-breeds");
  fetch(breedUrl)
    .then((res) => res.json())
    .then((data) => {
      const breeds = Object.keys(data.message);
      console.log(breeds);
      breeds.forEach((dat) => {
        ul.innerHTML += `
        <li id='breed'>${dat}</li>
        `;
      });
      const item = ul.querySelectorAll("#breed");
      item.forEach((ite) => {
        ite.addEventListener("click", function (e) {
          e.target.style.color = "red";
        });
      });
    });

};

const fetchSelected = ()=>{
    const drop = document.querySelector("#breed-dropdown");
    drop.addEventListener("click", function (e) {
      console.log(e.target.value);
    });
}