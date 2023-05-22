
var interval;
document.addEventListener('DOMContentLoaded', ()=>{
    // 롤링 초기화
    interval = window.setInterval(rollingCallback, 2000);

    //마우스 호버시 롤링이 멈추었다 벗어나면 다시 롤링이 되도록 처리
    document.querySelector('.rollingBanner').addEventListener('mouseover',function(){
        window.clearInterval(interval);
    })
    document.querySelector('.rollingBanner').addEventListener('mouseout',function(){
        interval = window.setInterval(rollingCallback, 2000);
    })
})

function rollingCallback(){
    //.prev 클래스 삭제
    document.querySelector('.rollingBanner .prev').classList.remove('prev');

    //.current -> .prev
    let current = document.querySelector('.rollingBanner .current');
    current.classList.remove('current');
    current.classList.add('prev');

    //.next -> .current
    let next = document.querySelector('.rollingBanner .next');

    //다음 목록 요소가 널인지 체크
    if(next.nextElementSibling == null){
        document.querySelector('.rollingBanner ul li:first-child').classList.add('next');
    }else{
        //목록 처음 요소를 다음 요소로 선택
        next.nextElementSibling.classList.add('next');
    }
    next.classList.remove('next');
    next.classList.add('current');
}





