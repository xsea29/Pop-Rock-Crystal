document.addEventListener("DOMContentLoaded", function () {
  const tl = gsap.timeline();

  tl.from(
    ".navbar-logo h4",
    {
      duration: 0.5,
      x: "-200px",
      opacity: 0,
      ease: "power2.out",
    },
    "first"
  );

  tl.from(
    ".navbar-logo img",
    {
      duration: 0.5,
      x: "-200px",
      opacity: 0,
      ease: "power2.out",
    },
    "second"
  );

  tl.from(".navbar-links a", {
    y: -50,
    opacity: 0,
    stagger: 0.2,
    duration: 0.4,
    ease: "power2.out",
  });

  tl.from(
    ".navbar-cart button",
    {
      duration: 0.5,
      x: "200px",
      opacity: 0,
      ease: "power2.out",
    },
    "first"
  );

  tl.from(
    ".navbar-cart img",
    {
      duration: 0.5,
      x: "200px",
      opacity: 0,
      ease: "power2.out",
    },
    "second"
  );

  tl.from(
    ".text-wrapper h2",
    {
      y: "200px",
      duration: 0.9,
      opacity: 0,
      ease: "power2.out",
    },
    "third"
  );

  tl.from(
    ".text-wrapper h1",
    {
      y: "200px",
      duration: 1.5,
      opacity: 0,
      ease: "power2.out",
    },
    "third"
  );

  tl.from(
    ".photo-carausel",
    {
      duration: 0.9,
      x: 200,
      opacity: 0,
      ease: "power2.out",
    },
    "third"
  );

  function wrapWordsInSpan(element) {
    const words = element.innerHTML.split(/\s+/);
    const wrappedWords = words.map((word) => `<span>${word}</span>`);
    element.innerHTML = wrappedWords.join(" ");
  }

  const textParagraph = document.querySelector(".text");
  wrapWordsInSpan(textParagraph);

  const paragraphTimeline = gsap.timeline();

  gsap.utils.toArray(".text-wrapper span").forEach((word, i) => {
    paragraphTimeline.from(word, {
      opacity: 0,
      duration: 0.05,
      ease: "power2.out",
    });
  });
  tl.add(paragraphTimeline, "fourth");

  tl.from(
    ".button-text-wrapper button",
    {
      x: -250,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out",
    },
    "fifth"
  );

  tl.from(
    ".button-text-wrapper p",
    {
      x: 250,
      duration: 0.8,
      opacity: 0,
      ease: "power2.out",
    },
    "fifth"
  );

  //Page 2 Animation

  gsap.registerPlugin(ScrollTrigger);

  const items = document.querySelectorAll(".item");

  gsap.from(items, {
    scrollTrigger: {
      trigger: ".item-grid",
      start: "top 50%",
      end: "bottom 20%",
      toggleActions: "play reverse play reverse",
    },
    opacity: 0,
    y: 50,
    duration: 0.6,
    stagger: 0.2,
    ease: "power2.out",
  });

  items.forEach((item) => {
    item.addEventListener("mouseenter", () => {
      item.classList.add("hovered");
    });

    item.addEventListener("mouseleave", () => {
      item.classList.remove("hovered");
    });
  });

  //Page 3 Animation

  const tl1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".page-3",
      start: "top center",
      end: "bottom center",
      toggleActions: "play reverse play reverse",
    },
  });

  tl1
    .from(".text-container", {
      x: "-100%",
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    })
    .from(
      ".round-shapes",
      {
        x: "100%",
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      },
      "-=0.8"
    );
});

const images = [
  {
    src: "./images/image-1.png",
    text: "Crystal Agate Phone Grip ",
    price: "- 18.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Blue Agate Phone Grip ",
    price: "- 15.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Green Agate Phone Grip ",
    price: "- 12.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Crystal Agate Phone Grip ",
    price: "- 18.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Blue Agate Phone Grip ",
    price: "- 15.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Green Agate Phone Grip ",
    price: "- 12.99$",
  },
  {
    src: "./images/image-1.png",
    text: "Crystal Agate Phone Grip ",
    price: "- 18.99$",
  },
];

let currentIndex = 0;

const imageElement = document.querySelector(".carausel-image");
const textElement = document.querySelector(".carausel-text");
const priceElement = document.querySelector(".price-tag");
const pointers = document.querySelectorAll(".pointer");
const leftArrow = document.querySelector(".left-arrow");
const rightArrow = document.querySelector(".right-arrow");

console.log(
  imageElement,
  textElement,
  pointers,
  leftArrow,
  rightArrow,
  priceElement
);

function updateCarousel(index) {
  imageElement.src = images[index].src;
  textElement.textContent = images[index].text;
  priceElement.textContent = images[index].price;

  pointers.forEach((pointer, idx) => {
    if (idx === index) {
      pointer.classList.add("active");
    } else {
      pointer.classList.remove("active");
    }
  });
}

leftArrow.addEventListener("click", () => {
  currentIndex = currentIndex === 0 ? images.length - 1 : currentIndex - 1;
  updateCarousel(currentIndex);
});

rightArrow.addEventListener("click", () => {
  currentIndex = currentIndex === images.length - 1 ? 0 : currentIndex + 1;
  updateCarousel(currentIndex);
});

pointers.forEach((pointer, idx) => {
  pointer.addEventListener("click", () => {
    currentIndex = idx;
    updateCarousel(currentIndex);
  });
});

updateCarousel(currentIndex);
