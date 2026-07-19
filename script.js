/* ==========================
ELEMENTS
========================== */

const openButton = document.getElementById("openInvitation");
const envelope = document.querySelector(".envelope");
const envelopeSection = document.getElementById("envelopeSection");
const invitation = document.getElementById("invitation");
const seal = document.getElementById("seal");
const music = document.getElementById("bgMusic");


/* ==========================
OPEN INVITATION
========================== */

openButton.addEventListener("click", () => {

    envelopeSection.scrollIntoView({
        behavior: "smooth"
    });

});


/* ==========================
OPEN ENVELOPE
========================== */

seal.addEventListener("click", () => {

    envelope.classList.add("open");

    if (music) {

        music.currentTime = 0;

        music.play().catch(() => {
            console.log("Autoplay blocked until user interaction.");
        });

    }

    setTimeout(() => {

        invitation.scrollIntoView({
            behavior: "smooth"
        });

    }, 1800);

});
