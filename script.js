// ================= Cat Facts ================= //
let factBtn = document.querySelector('#fact');

factBtn.addEventListener("click", async () => {
    let fact = await getFacts();
    let p = document.querySelector("#result");
    p.innerText = fact;

    // Animate text with GSAP
    gsap.fromTo(p, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 });
});

let url = "https://catfact.ninja/fact";

async function getFacts() {
    try {
        let res = await axios.get(url);
        return res.data.fact;
    } catch (e) {
        console.log("error - ", e);
        return "😿 Couldn’t fetch a fact right now.";
    }
}


// ================= Dog Images ================= //
let url2 = "https://dog.ceo/api/breeds/image/random";
let imgBtn = document.querySelector('#show');

imgBtn.addEventListener("click", async () => {
    let link = await getImage();
    let img = document.querySelector("#image");
    img.setAttribute('src', link);
    img.style.display = "block";

    // Animate image
    gsap.fromTo(img, { scale: 0.5, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" });
});

async function getImage() {
    try {
        let res = await axios.get(url2);
        return res.data.message;
    } catch (e) {
        console.log("error - ", e);
        return "https://via.placeholder.com/400x300?text=No+Image";
    }
}


// ================= Page Load Animation ================= //
window.addEventListener("load", () => {
    gsap.from(".container", { duration: 1, y: -50, opacity: 0, ease: "bounce.out" });
    gsap.from(".card", { duration: 1, opacity: 0, y: 30, stagger: 0.3 });
});


// ================= Button Animations ================= //
document.querySelectorAll("button").forEach(btn => {
    btn.addEventListener("mouseenter", () => {
        gsap.to(btn, { scale: 1.1, duration: 0.2 });
    });
    btn.addEventListener("mouseleave", () => {
        gsap.to(btn, { scale: 1, duration: 0.2 });
    });
    btn.addEventListener("click", () => {
        gsap.fromTo(btn, { scale: 0.9 }, { scale: 1, duration: 0.2 });
    });
});
