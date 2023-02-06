const btn = document.querySelector("#btn-dark");
var linkBtn = document.querySelector(".link-btn");
const hThree = document.getElementById("h3");
const secondLink = document.getElementById("second-link");
const divContainer = document.querySelector(".divContainer");
const inputSearch = document.getElementById("inputSearch");
const par = document.querySelector(".par");
const navMobile = document.querySelector(".nav-mobile");
const bars = document.getElementById("bars");

const sectionOne = document.getElementById("sectionOne");
const sectionTwo = document.getElementById("sectionTwo");
const faders = document.querySelector(".animate__animated animate__flip");

const sections = document.querySelectorAll("section");

const options = {
  root: null,
  threshold: 0,
  rootMargin: "-150px",
};

const observer = new IntersectionObserver(function (entries, observer) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return;
    }
    entry.target.classList.toggle("inverse");
  });
}, options);

observer.observe(sectionTwo);
// sections.forEach((section) => {
//   observer.observe(section);
// });

//adding intersection observer API

// const options = {};

// const appearOnScroll = new IntersectionObserver(function (
//   entries,
//   appearOnScroll
// ) {
//   entries.forEach((entry) => {
//     if (!entry.isIntersecting) {
//       return;
//     } else {
//       entry.target.classList.add("inverse");
//       appearOnScroll.unobserve(entry);
//     }
//   });
// },
// options);

// observer.observe(sectionTwo);



const storage = JSON.parse(localStorage.getItem("name"));
btn.addEventListener("click", () => {
  if (!localStorage) {
    const linkDiv = document.createElement("div");
    const linkOne = document.createElement("h3");
    const linkTwo = document.createElement("a");
    linkOne.innerHTML = `${storage.result.original_link}`;
    linkTwo.innerHTML = `${storage.result.full_short_link}`;
    linkTwo.setAttribute("target", "_blank");
    linkTwo.href = `${storage.result.full_short_link}`;
    linkDiv.append(linkOne, linkTwo);
    divContainer.appendChild(linkDiv);
    const button = document.createElement("button");
    button.innerText = "Copy";
    // }else if (window.reload() == ) {
  }
});

bars.addEventListener("click", () => {
  navMobile.style.display = "block";
});

btn.addEventListener("click", () => {
  async function fetchUrl() {
    const res = await fetch(
      `https://api.shrtco.de/v2/shorten?url=${inputSearch.value}/`
    );
    const data = await res.json();
    console.log(data);

    localStorage.setItem("link", JSON.stringify(data));

    const linkDiv = document.createElement("div");
    const linkOne = document.createElement("h3");
    const linkTwo = document.createElement("a");
    const button = document.createElement("button");
    button.innerText = "Copy";
    linkOne.innerHTML = `${data.result.original_link}`;

    linkTwo.innerHTML = `${data.result.full_short_link}`;
    linkTwo.href = `${data.result.full_short_link}`;
    linkTwo.setAttribute("target", "_blank");
    linkDiv.append(linkOne, linkTwo);
    divContainer.appendChild(linkDiv);
    divContainer.appendChild(button);

    button.addEventListener("click", () => {
      navigator.clipboard.writeText(linkTwo.innerText);
      button.innerText = "Copied";
      button.style.backgroundColor = "hsl(260, 8%, 14%)";
    });
  }
  fetchUrl();
});

// hThree.innerHTML = `${storage.result.full_short_link}`;
// hThree.href = `${storage.result.full_short_link}`;
// hThree.style.fontWeight = "800";
// secondLink.innerHTML = `${storage.result.full_short_link}`;
// secondLink.href = `${storage.result.full_short_link}`;
// secondLink.style.fontWeight = "800"
