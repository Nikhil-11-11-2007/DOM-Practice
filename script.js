function FollowAnimation(){
    const btn = document.querySelector("button");
    const h4 = document.querySelector(".card h4");


    btn.addEventListener("click", () => {
        const isFollowed = btn.innerHTML === "Follow";

        btn.innerHTML = isFollowed ? "Unfollow" : "Follow";
        h4.innerHTML = isFollowed ? "Friend" : "Stranger";

        h4.style.color = isFollowed ? "royalblue" : "red";
        btn.style.color = isFollowed ? "blue" : "white";
        btn.style.backgroundColor = isFollowed ? "#ffffffc0" : "royalblue";
    });
}

FollowAnimation()

function counterAnimation(){
    let h1 = document.querySelector(".counter h1")
let btn = document.querySelector("#add")
let removebtn = document.querySelector("#remove")
let count = 0

btn.addEventListener("click", function() {
    count++
    h1.innerHTML = count
})

removebtn.addEventListener("click", function() {
    count--
    h1.innerHTML = count
})
}

counterAnimation()

function likeAnimation(){
    let page2i = document.querySelector(".card #hert1")
let page2card = document.querySelector(".page2 .card")

page2card.addEventListener("dblclick", function(){
    page2i.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
    page2i.style.opacity = 1
    setTimeout(function(){
        page2i.style.transform = "translate(30%,-320%) scale(1) rotate(60deg)"
    } ,800)
    setTimeout(function() {
        page2i.style.opacity = 0
    },900)
    setTimeout(function() {
        page2i.style.transform = "translate(-50%,-50%) scale(0) rotate(-60deg)"
    }, 1200)
    
})
}

likeAnimation()

function cursorAnimation() {
    let cursor = document.querySelector(".cursor")
let page2 = document.querySelector(".page2")

page2.addEventListener("mousemove", function(dets){
    let rect = page2.getBoundingClientRect()
    cursor.style.left = (dets.clientX - rect.left) + "px"
    cursor.style.top = (dets.clientY - rect.top) + "px"
})
}

cursorAnimation()

function RandomColors(){
    let box = document.querySelector(".box")
let btn = document.querySelector(".page3 button")

btn.addEventListener("click", function(){
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)

    box.style.backgroundColor = `rgb(${c1},${c2},${c3})`
})
}

RandomColors()

function iplTeamsAnimation(){
    let iplTeams = [
    {
        team: 'CSK',
        primary: 'yellow',
        secondary: 'blue',
        trophies: 5,
        captain: 'Ruturaj Gaikwad',
        image: 'https://wallpaperaccess.com/full/11900177.jpg'
    },
    {
        team: 'MI',
        primary: 'blue',
        secondary: 'gold',
        trophies: 5,
        captain: 'Hardik Pandya',
        image: 'https://y20india.in/wp-content/uploads/2024/04/mi-squad-ipl-2024-sportstiger-1702967642348-original-1024x538.jpg'
    },
    {
        team: 'RCB',
        primary: 'red',
        secondary: 'black',
        trophies: 0,
        captain: 'Faf du Plessis',
        image: 'https://www.oneindia.com/img/2024/01/rcb2-1704814556.jpg'
    },
    {
        team: 'KKR',
        primary: 'purple',
        secondary: 'gold',
        trophies: 3,
        captain: 'Shreyas Iyer',
        image: 'https://media.sportstiger.com/media/kkr-squad-ipl-2024-sportstiger-1702967454248-original.jpg'
    },
    {
        team: 'RR',
        primary: 'pink',
        secondary: 'blue',
        trophies: 1,
        captain: 'Sanju Samson',
        image: 'https://img.jagranjosh.com/images/2022/March/2932022/Rajasthan_royals.jpg'
    },
    {
        team: 'SRH',
        primary: 'orange',
        secondary: 'black',
        trophies: 1,
        captain: 'Pat Cummins',
        image: 'https://wallpapercave.com/wp/wp8945250.jpg'
    },
    {
        team: 'DC',
        primary: 'blue',
        secondary: 'red',
        trophies: 0,
        captain: 'Rishabh Pant',
        image: 'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2022/12/23/2562417-untitled-design-2022-12-23t225333.153.jpg'
    },
    {
        team: 'PBKS',
        primary: 'red',
        secondary: 'silver',
        trophies: 0,
        captain: 'Shikhar Dhawan',
        image: 'https://fantasykhiladi.com/wp-content/uploads/2024/03/Punjab-Kings-2024-.webp'
    },
    {
        team: 'GT',
        primary: 'darkblue',
        secondary: 'gold',
        trophies: 1,
        captain: 'Shubman Gill',
        image: 'https://tse1.mm.bing.net/th/id/OIP.sqMGX_Ef_DDHOydpsSyM9AHaD4?cb=ucfimg2ucfimg=1&rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
        team: 'LSG',
        primary: 'lightblue',
        secondary: 'orange',
        trophies: 0,
        captain: 'KL Rahul',
        image: 'https://media.sportstiger.com/media/lucknow-super-giants-ipl-2025-sportstiger-1732539053179-original.webp'
    }
];

let page4 = document.querySelector(".page4")
let btn = document.querySelector(".page4 button")
let h1 = document.querySelector(".page4 h1")

btn.addEventListener("click", function(){
    let teams = Math.floor(Math.random()*iplTeams.length)
    let hi = iplTeams[teams]
    h1.innerHTML = `Team: ${hi.team} <br> Captain: ${hi.captain} <br> Trophies: ${hi.trophies}`
    h1.style.backgroundColor = hi.secondary
    h1.style.color = hi.primary
    btn.style.backgroundColor = hi.primary
    page4.style.backgroundImage = `url(${hi.image})`
})

}

iplTeamsAnimation()

// hover on many divs and see image change on both divs
function hoverAnimation(){
    let elem = document.querySelectorAll(".elem")
let image = document.querySelector(".elem img")

elem.forEach((val) => {

    val.addEventListener("mousemove", function(dets){
        let rect = val.getBoundingClientRect()
        val.childNodes[3].style.left = (dets.x - rect.left) + "px"
    })

    val.addEventListener("mouseenter", function(){
        val.childNodes[3].style.opacity = 1
    })
    val.addEventListener("mouseleave", function(){
        val.childNodes[3].style.opacity = 0
    })
    
})
}

hoverAnimation()


function storyAnimation() {
    let stories = [
    {
        dp: "https://i.pinimg.com/736x/d5/ec/db/d5ecdbdd9baa9670481311ced1bfcc9f.jpg",
        statuus: "https://i.pinimg.com/originals/fc/d4/97/fcd4977ee2e01c91ae0a60cd3cde280d.gif"
    },
    {
        dp: "https://i.pinimg.com/736x/fe/f1/14/fef114123c2c3b69b523cf324c541887.jpg",
        statuus: "https://i.pinimg.com/originals/22/ba/6a/22ba6a14459db3b5b12433452551d438.gif"
    },
    {
        dp: "https://i.pinimg.com/736x/34/68/df/3468df3d585411cff414d5841b5822f2.jpg",
        statuus: "https://i.pinimg.com/originals/8c/88/07/8c880706fbd0f28b645ccfb0fb6bf69b.gif"
    },
    {
        dp: "https://i.pinimg.com/1200x/eb/21/5c/eb215cf240cdab050421c3a420a40bb5.jpg",
        statuus: "https://i.pinimg.com/originals/36/be/d8/36bed86e6eb8b323a82280c66a3b0059.gif"
    },
    {
        dp: "https://i.pinimg.com/1200x/ba/57/5c/ba575c165fc04e0600d6304e13b1c179.jpg",
        statuus: "https://i.pinimg.com/originals/10/65/bc/1065bc662c55648c454c462f208d920e.gif"
    },
    {
        dp: "https://i.pinimg.com/736x/3a/26/a9/3a26a99ea24f7a261a178ad20b26c86b.jpg",
        statuus: "https://i.pinimg.com/originals/eb/8a/4d/eb8a4d77c9e87a7823b8c60cd27dcf36.gif"
    },
]

let story = document.querySelector(".storiyan")
let statuss = document.querySelector(".statuss")
let clutter = ""

stories.forEach((det, idx) => {
    clutter += `<div class="story">
                    <img id="${idx}" src="${det.dp}" alt="">
                </div>`
})

story.innerHTML = clutter

story.addEventListener("click", function(dets) {
    statuss.style.display = "block"
    statuss.style.backgroundImage = `url(${stories[dets.target.id].statuus})`

    setTimeout(function(){
        statuss.style.display = "none"
    },3100)
    
})
}

storyAnimation()

function createElementAnimation() {
    let btn = document.querySelector(".page8 button")
let page8  = document.querySelector(".page8")

btn.addEventListener("click", function() {
    let arr = ["hello sheriyansh", "I am nikhil", "I create something", "please click the button", "hello Sarthak Bhaiya"]
    let lenth = Math.floor(Math.random()*arr.length)
    let c1 = Math.floor(Math.random()*256)
    let c2 = Math.floor(Math.random()*256)
    let c3 = Math.floor(Math.random()*256)
    let x = Math.random()*100
    let y = Math.random()*100
    let scal = Math.random()*2
    let rot = Math.floor(Math.random()*360)
    btn.style.opacity = .6
    btn.style.backgroundColor = `rgb(${c3},${c1},${c2})`
    let h2 = document.createElement("h2")
    h2.style.scale = scal
    h2.style.color = `rgb(${c1},${c2},${c3})`
    page8.style.backgroundColor = `rgb(${c2},${c3},${c1})`
    h2.style.position = "absolute"
    h2.style.rotate = rot+"deg"
    h2.style.left = x+"%"
    h2.style.top = y+"%"
    h2.innerHTML = arr[lenth]
    page8.appendChild(h2)
})
}

createElementAnimation()

function downloadAnimation(){
    let btn = document.querySelector(".download button")
let inner = document.querySelector(".inner")
let h4 = document.querySelector(".page9 h4")
let count = 0
let h2 = document.querySelector(".download h2")
btn.addEventListener("click", function() {
    btn.style.pointerEvents = "none"
    let num = 50 + Math.floor(Math.random()*60)
    btn.innerHTML = "Downloading..."
    
    let int = setInterval(function() {
        count++
        inner.style.width = count + "%"
        h2.innerHTML = count + "%"
    }, num)

    setTimeout(function() {
        clearInterval(int)
        h4.innerHTML = `Your File Donload in ${num/10} Second`
        btn.style.opacity = .6
        btn.innerHTML = "Downloaded"
        btn.style.pointerEvents = "none"
    }, num*100)
})
}

downloadAnimation()

function arrOfobjects() {
    const users = [
  {
    fullname: "Nikhil Gupta",
    image: "https://i.pinimg.com/1200x/b5/2c/0f/b52c0f7d6973061cf4553db19f50fe6b.jpg",
    profession: "Frontend Developer",
    description: "Passionate about creating beautiful UI and smooth user experiences."
  },
  {
    fullname: "Aarav Sharma",
    image: "https://i.pinimg.com/736x/3b/5e/ea/3b5eeac54e082547e6efa9aad1960887.jpg",
    profession: "UI/UX Designer",
    description: "Designs clean, modern and user-friendly interfaces."
  },
  {
    fullname: "Priya Verma",
    image: "https://i.pinimg.com/736x/88/4a/f9/884af9074ba60d58b9e5eecfdecef5ae.jpg",
    profession: "Full-Stack Developer",
    description: "Builds scalable full-stack applications with modern tools."
  },
  {
    fullname: "Rohan Singh",
    image: "https://i.pinimg.com/736x/cb/d5/bf/cbd5bf36469a72b49f0583ed73424d64.jpg",
    profession: "Data Analyst",
    description: "Turns raw data into meaningful insights and dashboards."
  },
  {
    fullname: "Sana Khan",
    image: "https://i.pinimg.com/736x/15/99/39/159939607f62aaba03970dbcf30aafb9.jpg",
    profession: "Digital Marketer",
    description: "Helps brands grow with smart marketing strategies."
  },
  {
    fullname: "Aditya Patel",
    image: "https://i.pinimg.com/736x/a4/85/27/a4852738fba268802712ab33fc083648.jpg",
    profession: "Mobile App Developer",
    description: "Creates fast and beautiful Android & iOS apps."
  }
];

let page10 = document.querySelector(".page10")
let clutter = ''

users.forEach(function(obj, idx) {
    clutter += `<div class="card">
                <img src="${obj.image}" alt="">
                <h3>${obj.fullname}</h3>
                <h4>${obj.profession}</h4>
                <p>${obj.description}</p>
            </div>`
})
page10.innerHTML = clutter
}

arrOfobjects()


function pianoAnimation() {
    let sounds = {
    a: new Audio("sounds/A.wav"),
    b: new Audio("sounds/B.wav"),
    c: new Audio("sounds/C.wav"),
    d: new Audio("sounds/D.wav"),
    e: new Audio("sounds/E.wav"),
    f: new Audio("sounds/F.wav"),
    g: new Audio("sounds/G.wav"),
    h: new Audio("sounds/H.wav"),
    i: new Audio("sounds/I.wav"),
    j: new Audio("sounds/J.wav"),
    k: new Audio("sounds/K.wav"),
    l: new Audio("sounds/L.wav"),
    m: new Audio("sounds/M.wav"),
    n: new Audio("sounds/N.wav"),
    o: new Audio("sounds/O.wav"),
    p: new Audio("sounds/P.wav"),
    q: new Audio("sounds/Q.wav"),
    r: new Audio("sounds/R.wav"),
    s: new Audio("sounds/S.wav"),
    t: new Audio("sounds/T.wav"),
    u: new Audio("sounds/U.wav"),
    v: new Audio("sounds/V.wav"),
    w: new Audio("sounds/W.wav"),
    x: new Audio("sounds/X.wav"),
    y: new Audio("sounds/Y.wav"),
    z: new Audio("sounds/Z.wav")
};

let h2 = document.querySelector(".page7 h2")

window.addEventListener("keydown", function(dets){
    let key = dets.key
    if(sounds[key]){
        h2.innerHTML = `You clicked ${dets.code}`
        sounds[key].play()
    }
    let btn = this.document.querySelector(`.btn[data-key="${key}"]`)
    if(btn){
        btn.style.transform = "scale(.97)"
        setTimeout(function(){
            btn.style.transform = "scale(1)"
        },100)
    }
    
})

let contbtn = document.querySelectorAll(".page7 .btn")

contbtn.forEach(function(e) {
    e.addEventListener("click", function(dett) {
        let key = e.getAttribute("data-key")
        if(sounds[key]){
            sounds[key].play()
        }
    })
})
}

pianoAnimation()

function lightEffect(){
    addEventListener("mousemove", (dets) => {
    document.querySelector(".page11").style.setProperty("--x", dets.clientX + "px")
    document.querySelector(".page11").style.setProperty("--y", dets.clientY + "px")
    
})
}

lightEffect()

function matrixEffect() {
    let ps = document.querySelectorAll(".page12 p")

    ps.forEach(function(p) {
        let charactor = "aAbBcCdDeEfFgGhHiIjJkKlLmMnNoOpPqQrRsStTuUvVwWxXyYzZ"
        let increse = 0
        let text = p.textContent
        let int

        p.addEventListener("mouseenter", function () {
            increse = 0
            clearInterval(int)

            int = setInterval(function () {
                let str = text.split("").map(function (val, idx) {
                    if (increse > idx) return val
                    return charactor[Math.floor(Math.random() * charactor.length)]
                }).join("")

                increse += 0.4
                p.textContent = str

                if (increse >= text.length) {
                    clearInterval(int)
                }
            }, 40)
        })

        p.addEventListener("mouseleave", function () {
            increse = 0
            clearInterval(int)
            p.textContent = text
        })
    })

    let cursor = document.querySelector(".page12 .cursor")

    let page12 = document.querySelector(".page12")
    page12.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + "px"
        cursor.style.top = e.clientY + "px"
    })
}

matrixEffect()

function getrandom() {
    let chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()-_=+[]{};:,.<>/?0123456789";
    let emojis = ["😀","🔥","💀","⚡","🌟","🌀","😈","✨","💫","👾"];

    if (Math.random() > 0.5) {
        return chars[Math.floor(Math.random() * chars.length)];
    } else {
        return emojis[Math.floor(Math.random() * emojis.length)];
    }
}

let btn = document.querySelector(".page15 button");
let matrix = document.querySelector(".page15 .matrix");

let intervalID = null;
let isRaining = false;

function matri() {
    let span = document.createElement("span");
    span.textContent = getrandom();

    let lft = Math.random() * window.innerWidth;
    span.style.left = lft + "px";
    span.style.top = "-20px";

    let speed = 3 + Math.random() * 3;
    span.style.animationDuration = speed + "s";

    span.addEventListener("mouseenter", function () {
        let c1 = Math.floor(Math.random() * 256);
        let c2 = Math.floor(Math.random() * 256);
        let c3 = Math.floor(Math.random() * 256);

        span.style.color = `rgb(${c1},${c2},${c3})`;
        span.style.fontSize = "4vw";
        span.style.transition = "all 0.4s ease";

        setTimeout(() => {
            span.style.fontSize = "22px";
        }, 400);
    });

    matrix.appendChild(span);

    setTimeout(() => {
        span.remove();
    }, speed * 1000);
}

btn.addEventListener("click", () => {
    if (!isRaining) {
        // Start rain
        intervalID = setInterval(matri, 80);
        isRaining = true;
        btn.style.opacity = .4
        btn.textContent = "Stop Rain";
    } else {
        // Stop rain
        clearInterval(intervalID);
        intervalID = null;
        btn.style.opacity = 1
        isRaining = false;
        btn.textContent = "Click Here to start rainfall";
    }
});

