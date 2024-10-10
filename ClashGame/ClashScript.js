const myTimeout=setTimeout(myGame,5000);
function myGame(){
    score = 0;
    cross = true;
    document.getElementById('rules').style.display='block';
setTimeout(() => {
    document.getElementById('rules').style.display = 'none';
    document.body.classList.add('gameStarted'); 
    
}, 5000);
    
    
audio = new Audio('musicgame.mp3');
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.key)
    if (e.key==="ArrowUp") {
        child = document.querySelector('.child');
        child.classList.add('animateChild');
        setTimeout(() => {
            child.classList.remove('animateChild')
        }, 700);
    }
    if (e.key==="ArrowRight") {
        child = document.querySelector('.child');
        childX = parseInt(window.getComputedStyle(child, null).getPropertyValue('left'));
        child.style.left = childX + 245 + "px";
    }
    if (e.key==="ArrowLeft") {
        child = document.querySelector('.child');
        childX = parseInt(window.getComputedStyle(child, null).getPropertyValue('left'));
        child.style.left = (childX - 245) + "px";
    }
}

setInterval(() => {
    child = document.querySelector('.child');
    gameOver = document.querySelector('.gameOver');
    obstacle = document.querySelector('.obstacle');

    cx = parseInt(window.getComputedStyle(child, null).getPropertyValue('left'));
    cy = parseInt(window.getComputedStyle(child, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(obstacle, null).getPropertyValue('top'));

    offsetX = Math.abs(cx - ox);
    offsetY = Math.abs(cy - oy);
    // console.log(offsetX, offsetY)
    if (offsetX < 123 && offsetY < 245) {
        gameOver.innerHTML = "Game Over - Reload to Play Again"
        obstacle.classList.remove('obstacleAni')
        setTimeout(() => {
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 123 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(obstacle, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.1;
            obstacle.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);

    }

}, 10);



function updateScore(score) {
    scoreCont.innerHTML = "Your Score: " + score
}
}