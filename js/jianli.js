
FastClick.attach(document.body);
~function (desW) {
    var winW = document.documentElement.clientWidth;
    if (winW > desW) {
        var oMain = document.querySelector(".swiper-container");
        oMain.style.margin = "0 auto";
        oMain.style.width = desW + "px";
        return;
    }
    document.documentElement.style.fontSize = winW / desW * 100 + "px";
}(640);

new Swiper(".swiper-container", {
    direction: "vertical",
    loop: true,
    onSlideChangeEnd: function (swipe) {
        var n = swipe.activeIndex,//
            slideAry = swipe.slides;//
        [].forEach.call(slideAry, function (item, index) {
            if (index == n) {
                //->这个就是当前这一块,需要设定ID
                if(index==0){
                    item.id='page4';
                    return;
                }
                if(index==1){
                    item.id='page1';
                    return;
                }
                if(index==2){
                    item.id='page2';
                    return;
                }
                if(index==3){
                    item.id='page3';
                    return;
                }
                if(index==4){
                    item.id='page4';
                    return;
                }
                if(index==5){
                    item.id='page1';
                    return;
                }
                return;
            }
            item.id = null;
        });
    }
});
var music = document.getElementById("music"),
    musicAudio = document.getElementById("musicAudio");
window.setTimeout(function () {
    musicAudio.play();
    musicAudio.addEventListener("canplay", function () {
        music.style.display = "block";
    }, false);
}, 1000);
music.addEventListener("click", function () {
    if (musicAudio.paused) {
        musicAudio.play();
        music.className = "music musicMove";
        return;
    }
    musicAudio.pause();
    music.className = "music";
}, false);