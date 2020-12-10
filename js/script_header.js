/* Variables */
const homeIcon = document.querySelector('.home');
const menuIcon = document.querySelector('.menu');
const iMenuIcon = document.querySelector('.menu i');
const navSection = document.querySelector('.navi');
const navLiElements = document.querySelectorAll('nav ul li');
const banerWrapperSection = document.querySelector('.whileBanerWrapper');
const photo = document.querySelectorAll('.photo');
const navLiElementsArray = Array.prototype.slice.call(navLiElements);
const photoElementsArray = Array.prototype.slice.call(photo);

/* Functions used in content operations */
const scrollActions = () => {
    navSection.classList.remove('visible')
    iMenuIcon.classList.remove('fa-times')
    iMenuIcon.classList.add('fa-bars')
}

const windowSmoothMove = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}
const photoChangerForNavHovers = () => {
    for (let i = 0; i < navLiElementsArray.length; i++) {
        navLiElementsArray[i].addEventListener('mouseover', () => {
            photoElementsArray[1].classList.add('photoHidden')
            photoElementsArray[i + 2].classList.remove(`photoHidden`)
        })

        navLiElementsArray[i].addEventListener('mouseout', () => {
            photoElementsArray[1].classList.remove(`photoHidden`)
            photoElementsArray[i + 2].classList.add('photoHidden')
        })
    }
}

const settingBasicStartPhoto = () => {
    photoElementsArray[0].classList.remove('photoHidden')
    for (let i = 1; i < photoElementsArray.length; i++) {
        photoElementsArray[i].classList.add('photoHidden')
    }
}

//
/* Content operations - Actions listeners */
//

/* menu icon on click actions */
menuIcon.addEventListener('click', () => {
    if (window.scrollY >= window.innerHeight) {
        windowSmoothMove()
        setTimeout(() => {
            navSection.classList.toggle('visible')
            iMenuIcon.classList.toggle('fa-times')
            banerWrapperSection.classList.toggle('displayChanger')
        }, 500);

    } else {
        windowSmoothMove()
        navSection.classList.toggle('visible')
        banerWrapperSection.classList.toggle('displayChanger')
        iMenuIcon.classList.toggle('fa-times')
    }
    photoElementsArray[0].classList.toggle(`photoHidden`)
    photoElementsArray[1].classList.toggle('photoHidden')
    photoChangerForNavHovers();
})

/* home icon on click actions */
homeIcon.addEventListener('click', () => {
    windowSmoothMove();
    // photo.style.backgroundImage = `url('../img/color99.png')`
    banerWrapperSection.classList.remove('displayChanger')
    if (navSection.classList.contains('visible')) {
        scrollActions();
    }
    settingBasicStartPhoto();
})

window.addEventListener('scroll', () => {
    if (window.scrollY >= window.innerHeight) {
        // scrollActions();
    }
})