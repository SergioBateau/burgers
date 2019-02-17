


let teamAccoJS = () => {
    let oTeamlink = document.querySelectorAll('.team__desc-name');
    
    oTeamlink.forEach(function(personName) {
        personName.addEventListener("click", function(e) {
            e.preventDefault();
            let activePerson = document.querySelector(".team__desc-item.js-team__desc-item");

            if (activePerson){
                let teamAccordeonDetails = activePerson.querySelector(".team__desc-profile");
                teamAccordeonDetails.style.height = "0px";
                activePerson.classList.remove("js-team__desc-item");
            }

            if(!activePerson || activePerson.querySelector(".team__desc-name") != e.target) {
                let currentPerson = e.target.closest(".team__desc-item");
                currentPerson.classList.add("js-team__desc-item");

                let currentPersonInfo = currentPerson.querySelector(".team__desc-profile");
                currentPersonInfo.style.height = currentPersonInfo.scrollHeight + "px";
            }
        })
    }) 
}
teamAccoJS();