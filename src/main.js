"use strict";

document.addEventListener("DOMContentLoaded", () => {
  const line = document.querySelector(".drives-us__line");
  const textItems = document.querySelectorAll(".drives-us__discription-item");
  const section = document.querySelector(".drives-us");

  const animateLineAndText = () => {
    let delay = 500;
    textItems.forEach((item, index) => {
      setTimeout(() => {
        const percent = (index + 1) * 33.3;
        line.style.background = `linear-gradient(to bottom, #146ef5 ${percent}%, #c0c0c0 0%)`;
        item.classList.add("show");
      }, delay);
      delay += 500;
    });
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateLineAndText();
          observer.unobserve(section);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(section);
});

document.addEventListener("DOMContentLoaded", () => {
  const missionItems = document.querySelectorAll(".our-mission__item");
  const sectionMission = document.querySelector(".our-mission");

  const animateMissionItems = () => {
    missionItems.forEach((item, index) => {
      setTimeout(() => {
        item.classList.add("show");
      }, index * 500);
    });
  };

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateMissionItems();
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  observer.observe(sectionMission);
});

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menuLanguage = dropdown.querySelector(".menu-language");
  const options = dropdown.querySelectorAll(".menu-language li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menuLanguage.classList.toggle("menu-open");
  });

  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menuLanguage.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });

  document.addEventListener("click", (event) => {
    if (!dropdown.contains(event.target)) {
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menuLanguage.classList.remove("menu-open");
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const dropdown = document.querySelector(".dropdown");
  const select = dropdown.querySelector(".select");
  const menuContainer = dropdown.querySelector(".menu-container");
  const searchInput = dropdown.querySelector(".search-input");
  const menuItems = dropdown.querySelectorAll(".menu-language li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    menuContainer.classList.toggle("open");
  });

  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target)) {
      menuContainer.classList.remove("open");
    }
  });

  searchInput.addEventListener("input", () => {
    const filter = searchInput.value.toLowerCase();
    menuItems.forEach((item) => {
      if (item.textContent.toLowerCase().includes(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      selected.textContent = item.textContent;
      menuContainer.classList.remove("open");
    });
  });
});

new Swiper(".swiper-container", {
  centeredSlides: true,

  loop: false,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  slidesPerView: 3,
  spaceBetween: 20,
  slideToClickedSlide: true,
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".person-card");
  const opinionsSection = document.querySelector(".opinions");
  let activeIndex = 0;
  let interval;

  const changeBackgroundColor = () => {
    cards.forEach((card) => {
      card.classList.remove("active-card");
    });

    if (activeIndex < cards.length) {
      cards[activeIndex].classList.add("active-card");
      activeIndex++;
    } else {
      clearInterval(interval);
    }
  };

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
          if (!interval) {
            activeIndex = 0;
            interval = setInterval(changeBackgroundColor, 1500);
            changeBackgroundColor();
          }
        } else {
          clearInterval(interval);
          interval = null;
        }
      });
    },
    {
      threshold: [0.5],
    }
  );

  if (opinionsSection) {
    observer.observe(opinionsSection);
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const swiperSlides = document.querySelectorAll(".swiper-slide");

  swiperSlides.forEach((slide) => {
    slide.addEventListener("transitionend", () => {
      if (slide.classList.contains("swiper-slide-active")) {
        const icon = slide.querySelector(".swiper-slide__icon");
        if (icon) icon.classList.add("icon-animated");
      }
    });
  });
});
