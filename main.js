window.onload = function() {

    window.addEventListener('scroll', (event) => {
        if (window.innerWidth < 1650) return;

        if (pageYOffset > 200) {

            document.querySelector('.nav-bar').classList.add('nav-bar-animation');
            document.querySelector('.logo').classList.add('logo-animation');
            document.querySelector('.navigation').classList.add('navigation-animation');
            document.querySelectorAll('.navigation a').forEach(element => {
                element.classList.add('navigation-animation-buttons');
            })
        } else {
            document.querySelector('.nav-bar').classList.remove('nav-bar-animation');
            document.querySelector('.logo').classList.remove('logo-animation');
            document.querySelector('.navigation').classList.remove('navigation-animation');
            document.querySelectorAll('.navigation a').forEach(element => {
                element.classList.remove('navigation-animation-buttons');
            })

        }



    });
    //часть анимации для части со скиллами, которая высчитывает и добавляет ширину.
    window.addEventListener('scroll', (event) => {
            if (pageYOffset > 200) {

                let skillstring = document.querySelectorAll('.skill-string');

                skillstring.forEach(element => {
                    element.style.width = element.closest('.skill-name').querySelector('.skill-digits').innerHTML;
                })


            }
        })
        //добавить и убрать подсказки на примерах


    document.querySelector('.work-examples').addEventListener('mouseover', function(event) {

        if (!event.target.closest('.one-more-work')) return;
        event.target.closest('.one-more-work').querySelector('.example-description').classList.add('show-display')


    })


    document.querySelector('.work-examples').addEventListener('mouseout', function(event) {
        if (!event.target.closest('.one-more-work').querySelector('.example-description').classList.contains('show-display') || !event.target.closest('.one-more-work')) return;
        event.target.closest('.one-more-work').querySelector('.example-description').classList.remove('show-display')
    })



    document.querySelector('.menu-icon-wrapper').onclick = function() {
        document.querySelector('.menu-icon').classList.toggle('menu-icon-active');

        document.querySelector('.navigation-mobile').classList.toggle('navigation-mobile-active')


    }


}