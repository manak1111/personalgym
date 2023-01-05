'use strict' ;
{
    const toggle = document.getElementById('toggle');
    const overlay = document.querySelector('.overlay');

    toggle.addEventListener('click', ()=> {
        overlay.classList.toggle('show');
    });
}

{
    function spSlideshow(){
        setTimeout(() => {
            images[currentIndex].classList.remove('current');
            currentIndex ++;
            if (currentIndex > images.length - 1){
                currentIndex = 0;
            }
            images[currentIndex].classList.add('current');
            spSlideshow();
        }, 4000 );
    }
    const images = document.querySelectorAll('.hero-sp img');
    let currentIndex = 0;

    spSlideshow();

}
{
    function pcSlideshow(){
        setTimeout(() => {
            images[currentIndex].classList.remove('current');
            currentIndex ++;
            if (currentIndex > images.length - 1){
                currentIndex = 0;
            }
            images[currentIndex].classList.add('current');
            pcSlideshow();
        }, 4000 );
    }
    const images = document.querySelectorAll('.hero-pc img');
    let currentIndex = 0;

    pcSlideshow();

}
// point3--写真をふわっと表示
{
    function showElementAnimation() {

        var element = document.getElementsByClassName('js-animation');
        if(!element) return; // 要素がなかったら処理をキャンセル
        
        var showTiming = window.innerHeight > 768 ? 200 : 40; // 要素が出てくるタイミングはここで調整
        var scrollY = window.pageYOffset;
        var windowH = window.innerHeight;
      
        for(var i=0;i<element.length;i++) { var elemClientRect = element[i].getBoundingClientRect(); var elemY = scrollY + elemClientRect.top; if(scrollY + windowH - showTiming > elemY) {
            element[i].classList.add('is-show');
          } else if(scrollY + windowH < elemY) {
            // 上にスクロールして再度非表示にする場合はこちらを記述
            element[i].classList.remove('is-show');
          }
        }
      }
      showElementAnimation();
      window.addEventListener('scroll', showElementAnimation);

}
// FAQ--アコーディオン
{
    const dts = document.querySelectorAll('dt');

    dts.forEach(dt =>{
        dt.addEventListener('click', () =>{
            dt.parentNode.classList.toggle('appear');

            dts.forEach(el => {
                if (dt !== el) {
                  el.parentNode.classList.remove('appear');
                }
              });
        });

    });
}

    