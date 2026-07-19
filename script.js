// ==========================
// ELEMENTS
// ==========================

const openBtn = document.getElementById("openInvitation");
const envelope = document.querySelector(".envelope");
const music = document.getElementById("bgMusic");
const invitation = document.getElementById("invitation");
const envelopeSection = document.getElementById("envelopeSection");


// ==========================
// OPEN COVER
// ==========================

openBtn.addEventListener("click", function () {

    // Scroll to envelope
    envelopeSection.scrollIntoView({
        behavior: "smooth"
    });

});


// ==========================
// OPEN ENVELOPE
// ==========================

const seal = document.getElementById("seal");

seal.addEventListener("click", function () {

    envelope.classList.add("open");

    setTimeout(function () {

        invitation.scrollIntoView({
            behavior: "smooth"
        });

    }, 1500);

});
