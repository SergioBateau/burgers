;let verticalAcco = () => {
    let calculateWidth = () => {
        let windowWidth = window.innerWidth;
        let links = document.querySelectorAll(".menu-accordeon__trigger");
        let link = document.querySelector(".menu-accordeon__trigger");
        let linksWidth = parseFloat(getComputedStyle(link).width);
        let reqWidth = windowWidth - linksWidth * links.length;
        return reqWidth > 550 ? 550 : reqWidth;
    };


    let oMenulink = document.querySelectorAll('.menu-accordeon__trigger');

    oMenulink.forEach(function (personName) {
        personName.addEventListener("click", function (e) {
            e.preventDefault();
            let activePerson = document.querySelector(".js-title__menu");

            if (activePerson) {
                let teamAccordeonDetails = activePerson.querySelector(".menu__desc");
                teamAccordeonDetails.style.width = "0px";
                activePerson.classList.remove("js-title__menu");
                
            }

             if (!activePerson || ((activePerson.querySelector(".title__accordeon-text") != e.target) && (activePerson.querySelector(".menu-accordeon__trigger") != e.target))) { 
                let currentPerson = e.target.closest(".menu__accordeon-item");
                currentPerson.classList.add("js-title__menu");

                let currentPersonInfo = currentPerson.querySelector(".menu__desc");
                currentPersonInfo.style.width = calculateWidth() + "px";
            } 
            
        })
    })
};
verticalAcco();
