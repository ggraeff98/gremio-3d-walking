const SPONSORS = [
  {
    company: "Ambev",
    logo: "../assets/logos/AMBEV2.png",
    link: "https://www.ambev.com.br/"
  },
  {
    company: "Banrisul",
    logo: "../assets/logos/BANRISUL-100PX.png",
    link: "https://www.banrisul.com.br/"
  },
  {
    company: "Betsul",
    logo: "../assets/logos/BETSUL.png",
    link: "https://www.betsul.com/"
  },
  {
    company: "Brahma",
    logo: "../assets/logos/BRAHMA.png",
    link: "https://cervejaria.brahma.com.br/"
  },
  {
    company: "Chevrolet",
    logo: "../assets/logos/CHEVROLET-300PX.png",
    link: "https://www.chevrolet.com.br/"
  },
  {
    company: "Panvel",
    logo: "../assets/logos/PANVEL.png",
    link: "https://www.panvel.com/panvel/main.do"
  },
  {
    company: "Safeweb",
    logo: "../assets/logos/SAFEWEB-300px.png",
    link: "https://safeweb.com.br/"
  },
  {
    company: "Umbro",
    logo: "../assets/logos/UMBRO.png",
    link: "https://www.umbro.com.br/"
  },
  {
    company: "SuaMarca",
    logo: "../assets/logos/SUA-MARCA.png",
    link: ""
  }
];

const FIRST_SPONSOR_TO_SHOW_INDEX = 0;

const LAST_SPONSOR_TO_SHOW_INDEX = SPONSORS.length - 1;

let currentSponsor = LAST_SPONSOR_TO_SHOW_INDEX;

const SPONSOR_INDEX = {
  "/ambev": 0,
  "/banrisul": 1,
  "/betsul": 2,
  "/brahma": 3,
  "/chevrolet": 4,
  "/panvel": 5,
  "/safeweb": 6,
  "/umbro": 7,
  "/suamarca": 8
};

function showSponsor(link, logo) {
  jQuery(".sponsors").find(".link").attr("href", link);
  jQuery(".sponsors").find(".logo").attr("src", logo);
  jQuery(".sponsors").fadeIn();

  setTimeout(() => {
    jQuery(".sponsors").fadeOut();
    changeShowingSponsor();
  }, 4600);
}

function changeShowingSponsor() {
  if (document.location.pathname !== "/") {
    setSponsorIndexToShow(document.location.pathname);
  } else {
    if (currentSponsor === LAST_SPONSOR_TO_SHOW_INDEX) {
      currentSponsor = FIRST_SPONSOR_TO_SHOW_INDEX;
    } else {
      currentSponsor++;
    }
  }

  setTimeout(() => {
    const banrisulLogo = SPONSOR_INDEX["/banrisul"];
    const umbroLogo = SPONSOR_INDEX["/umbro"];

    if (currentSponsor === banrisulLogo) {
      jQuery(".sponsors").find(".logo").addClass("banrisul-logo");
    } else if (currentSponsor === umbroLogo) {
      jQuery(".sponsors").find(".logo").addClass("umbro-logo");
    } else {
      jQuery(".sponsors").find(".logo").removeClass("banrisul-logo");
      jQuery(".sponsors").find(".logo").removeClass("umbro-logo");
    }
    showSponsor(SPONSORS[currentSponsor].link, SPONSORS[currentSponsor].logo);
  }, 400);
}

function initSponsorShowing() {
  changeShowingSponsor();
}

function setSponsorIndexToShow(path) {
  currentSponsor = SPONSOR_INDEX[path];
}
