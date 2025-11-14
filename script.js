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

function likeAnimation(){
    let page2i = document.querySelector(".card i")
let page2card = document.querySelector(".page2 .card")

page2card.addEventListener("dblclick", function(){
    page2i.style.transform = "translate(-50%,-50%) scale(1)"
    page2i.style.opacity = 1
    setTimeout(function(){
        page2i.style.transform = "translate(-50%,-50%) scale(0)"
        page2i.style.opacity = 0
    } ,1000)
    
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