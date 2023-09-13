/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener('click', () =>{
    navMenu.classList.remove('show-menu');
  })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
  const navMenu = document.getElementById('nav-menu')
  // Cuando hacemos click en cada nav__link, removemos la clase show-menu
  navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/

const skillsContent = document.getElementsByClassName('skills__content'),
      skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills(){
  let itemClass = this.parentNode.className;
  // console.log(itemClass)

  for(let i = 0; i < skillsContent.length; i++){
    skillsContent[i].className = 'skills__content skills__close';
  }

  if(itemClass === 'skills__content skills__close'){
    this.parentNode.className = 'skills__content skills__open';

    //For Second Release
    //Optimizar para que solo se ejecute cuando el bloque padre este desplegado
    // y sus elementos hijos se ejecuten

    const cssitem = document.getElementById('css');
    let cantidad = 0;
    const execCss = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad += intervalo;
        element.style.width = `${cantidad}%`;
        if (cantidad === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execCss(cssitem, 80, 1);

    const js = document.getElementById('js');
    let cantidad1 = 0;
    const execJs = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad1 += intervalo;
        element.style.width = `${cantidad1}%`;
        if (cantidad1 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execJs(js, 90, 1);

    const html = document.getElementById('html');
    let cantidad2 = 0;
    const execHtml = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad2 += intervalo;
        element.style.width = `${cantidad2}%`;
        if (cantidad2 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execHtml(html, 90, 1);

    const react = document.getElementById('react');
    let cantidad3 = 0;
    const execReact = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad3 += intervalo;
        element.style.width = `${cantidad3}%`;
        if (cantidad3 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execReact(react, 85, 1);


    const nodejs = document.getElementById('nodejs');
    let cantidad4 = 0;
    const execNode = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad4 += intervalo;
        element.style.width = `${cantidad4}%`;
        if (cantidad4 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execNode(nodejs, 70, 1);

    const python = document.getElementById('python');
    let cantidad5 = 0;
    const execPython = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad5 += intervalo;
        element.style.width = `${cantidad5}%`;
        if (cantidad5 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execPython(python, 85, 1);

    const c = document.getElementById('c');
    let cantidad6 = 0;
    const execC = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad6 += intervalo;
        element.style.width = `${cantidad6}%`;
        if (cantidad6 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execC(c, 75, 1);

    const c1 = document.getElementById('c1');
    let cantidad7 = 0;
    const execC1 = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad7 += intervalo;
        element.style.width = `${cantidad7}%`;
        if (cantidad7 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execC1(c1, 70, 1);

    const mysql = document.getElementById('mysql');
    let cantidad8 = 0;
    const execMysql = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad8 += intervalo;
        element.style.width = `${cantidad8}%`;
        if (cantidad8 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execMysql(mysql, 85, 1);

    const sqlServer = document.getElementById('sqlserver');
    let cantidad9 = 0;
    const execSqlserver = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad9 += intervalo;
        element.style.width = `${cantidad9}%`;
        if (cantidad9 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    } 
    execSqlserver(sqlServer, 85, 1);

    const mongoDb = document.getElementById('mongodb');
    let cantidad10 = 0;
    const execMongo = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad10 += intervalo;
        element.style.width = `${cantidad10}%`;
        if (cantidad10 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execMongo(mongoDb, 70, 1);

    const figma = document.getElementById('figma');
    let cantidad11 = 0;
    const execFigma = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad11 += intervalo;
        element.style.width = `${cantidad11}%`;
        if (cantidad11 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execFigma(figma, 80, 1);

    const photo = document.getElementById('photoshop');
    let cantidad12 = 0;
    const execPhoto = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad12 += intervalo;
        element.style.width = `${cantidad12}%`;
        if (cantidad12 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execPhoto(photo, 80, 1);

    const illustrator = document.getElementById('illustrator');
    let cantidad13 = 0;
    const execIllustrator = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad13 += intervalo;
        element.style.width = `${cantidad13}%`;
        if (cantidad13 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execIllustrator(illustrator, 75, 1);

    const etabs = document.getElementById('etabs');
    let cantidad14 = 0;
    const execEtabs = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad14 += intervalo;
        element.style.width = `${cantidad14}%`;
        if (cantidad14 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execEtabs(etabs, 80, 1);

    const sap2000 = document.getElementById('sap2000');
    let cantidad15 = 0;
    const execSap2000 = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad15 += intervalo;
        element.style.width = `${cantidad15}%`;
        if (cantidad15 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execSap2000(sap2000, 75, 1);

    const safe= document.getElementById('safe');
    let cantidad16 = 0;
    const execSafe = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad16 += intervalo;
        element.style.width = `${cantidad16}%`;
        if (cantidad16 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execSafe(safe, 70, 1);

    const autocad= document.getElementById('autocad');
    let cantidad17 = 0;
    const execAutocad = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad17 += intervalo;
        element.style.width = `${cantidad17}%`;
        if (cantidad17 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execAutocad(autocad, 90, 1);

    const civil3d= document.getElementById('civil3d');
    let cantidad18 = 0;
    const execCivil3d = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad18 += intervalo;
        element.style.width = `${cantidad18}%`;
        if (cantidad18 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execCivil3d(civil3d, 75, 1);

    const revit= document.getElementById('revit');
    let cantidad19 = 0;
    const execRevit = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad19 += intervalo;
        element.style.width = `${cantidad19}%`;
        if (cantidad19 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execRevit(revit, 60, 1);

    const s10= document.getElementById('s10');
    let cantidad20 = 0;
    const execS10 = (element, progress, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad20 += intervalo;
        element.style.width = `${cantidad20}%`;
        if (cantidad20 === progress){
          clearInterval(tiempo);
        }
      }, 5)
    }
    execS10(s10, 85, 1);

  }
}

skillsHeader.forEach((el) => {
  el.addEventListener('click', toggleSkills);
})


// function scrollSkills(){
//   const nav = document.getElementById('skills');
//   let posicionObj = nav.getBoundingClientRect().top;
//   console.log(posicionObj);

//   // console.log(this.scrollY)
//   if(posicionObj >= 0 && posicionObj < 5 ) {

//     const cssitem = document.getElementById('css');
//     let cantidad = 0;
//     const execCss = (element, progress, intervalo) => {
//       let tiempo = setInterval(() => {
//         cantidad += intervalo;
//         element.style.width = `${cantidad}%`;
//         if (cantidad === progress){
//           clearInterval(tiempo);
//         }
//       }, 5)
//     }
//     execCss(cssitem, 80, 1);


//     const js = document.getElementById('js');
//     let cantidad1 = 0;
//     const execJs = (element, progress, intervalo) => {
//       let tiempo = setInterval(() => {
//         cantidad1 += intervalo;
//         element.style.width = `${cantidad1}%`;
//         if (cantidad1 === progress){
//           clearInterval(tiempo);
//         }
//       }, 5)
//     }
//     execJs(js, 90, 1);

//     const html = document.getElementById('html');
//     let cantidad2 = 0;
//     const execHtml = (element, progress, intervalo) => {
//       let tiempo = setInterval(() => {
//         cantidad2 += intervalo;
//         element.style.width = `${cantidad2}%`;
//         if (cantidad2 === progress){
//           clearInterval(tiempo);
//         }
//       }, 5)
//     }
//     execHtml(html, 90, 1);

//     const react = document.getElementById('react');
//     let cantidad3 = 0;
//     const execReact = (element, progress, intervalo) => {
//       let tiempo = setInterval(() => {
//         cantidad3 += intervalo;
//         element.style.width = `${cantidad3}%`;
//         if (cantidad3 === progress){
//           clearInterval(tiempo);
//         }
//       }, 5)
//     }
//     execReact(react, 85, 1);

//   }
// }


// window.addEventListener('scroll', scrollSkills);


/*==================== PORTFOLIO MODAL ====================*/

const modalViews = document.querySelectorAll('.portfolios__modal'),
      modalBtns = document.querySelectorAll('.portfolio__button'),
      modalCloses = document.querySelectorAll('.portfolios__modal-close');
      modalFinish = document.querySelectorAll('.button--flex--salir');

let modal = function(modalClick){
  modalViews[modalClick].classList.add('active-modal')
  document.body.classList.add('desactivate--scroll');
}

modalBtns.forEach((modalBtn, i) =>{
  modalBtn.addEventListener('click', () =>{
    modal(i);
  })
});

modalCloses.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
      document.body.classList.remove('desactivate--scroll');
    })
  })
})

modalFinish.forEach((modalFinish) => {
  modalFinish.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
      document.body.classList.remove('desactivate--scroll');
    })
  })
})



/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/

const sections = document.querySelectorAll('section[id]');

function scrollActive(){
  const scrolly = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else{
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);



/*==================== CHANGE BACKGROUND HEADER ====================*/ 

function scrollHeader(){
  const nav = document.getElementById('header');

  if(this.scrollY >= 80) nav.classList.add('scroll-header');
  else nav.classList.remove('scroll-header')
}

window.addEventListener('scroll', scrollHeader);


/*==================== SHOW SCROLL UP ====================*/

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');

  if(this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}

window.addEventListener('scroll', scrollUp);

// TYPEWRITER
const typed = new Typed('.typed', {
  strings: [
    '<i class="changer">Drixner</i>',
    '<i class="changer">creative</b>',
    '<i class="changer">persistent</i>',
    '<i class="changer">resilient</i>',
    '<i class="changer">cheerful</i>'
  ],

  typeSpeed: 75, //Velocidad en milisegundos para poner una letra,
  startDelay: 300, //Tiempo de retraso en inicia la animación. Aplica tambien y vuelve a iniciar,
  backspeed: 75, //Velocidad en milisegundos para borrar una letra,
  smartBackspace: true, //Eliminar solamente las palabras que sean nuevas en una cadena de texto,
  shuffle: false, //Alterar el orden en el que escribe las palabras.
  backDelay: 1200, //Tiempo de espera despues de que termina de escribir una palabra,
  loop: true, //repetir el array de strings
  loopCount: false, //Cantidad de veces a repetir el array. false = infinite
  showCursor: true, //Mostrar el cursor palpitando
  cursorChar: '|', //caracter para el cursor
  contentType: 'html', // 'html' o 'null' para texto sin formato
});


// let elem = document.getElementsByClassName('.about__info')


/*==================== COUNTER NUMBER ====================*/

function scrollAbout(){
  const nav = document.getElementById('about');
  if(this.scrollY === 600 || this.scrollY === 700) {

    //Counter number
    const hours = document.getElementById('number__hours');
    const experience = document.getElementById('number__experience');
    const companies = document.getElementById('number__companies');
    let cantidad = 0;

    const counter = (element, number, time, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad += intervalo;
        element.textContent = cantidad;

        if (cantidad === number){
          clearInterval(tiempo);
        }
      }, time)
    };

    counter(hours, 2500, 80, 100);

    let cantidad2 = 0;

    const counter2 = (element, number, time, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad2 += intervalo;
        element.textContent = cantidad2;

        if (cantidad2 === number){
          clearInterval(tiempo);
        }
      }, time)
    };

    counter2(experience, 5, 400, 1);

    let cantidad3 = 0;

    const counter3 = (element, number, time, intervalo) => {
      let tiempo = setInterval(() => {
        cantidad3 += intervalo;
        element.textContent = cantidad3;

        if (cantidad3 === number){
          clearInterval(tiempo);
        }
      }, time)
    };

    counter3(companies, 3, 600, 1);


  }

}

window.addEventListener('scroll', scrollAbout);


/*==================== SLIDER IMAGENES ====================*/



let swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  loop: true,
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});


/*==================== SLIDER IMAGENES 2 ====================*/

let swiper2 = new Swiper(".myNewSwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== SLIDER BLOGS ====================*/

let swiperBlogs = new Swiper('.blog__container', {
  cssMode: true,
  loop: true,

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

});

/*==================== Email JS ====================*/

const btn = document.getElementById('button');
let estatus = document.getElementById('contact__result--estatus');
let formulario = document.getElementById('form');


formulario.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Sending...';

   const serviceID = 'default_service';
   const templateID = 'template_tc45zc6';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Send Email';
      estatus.innerHTML = 'Enviado con Éxito! :)';
      formulario.reset();

    }, (err) => {
      btn.value = 'Send Email';
      estatus.innerHTML = `${JSON.stringify(err)}`;
    });
});