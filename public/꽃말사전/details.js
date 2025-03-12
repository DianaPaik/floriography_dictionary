window.addEventListener('load', () => {
    const flowerNameSpan = document.querySelector('.left_box span'); // "개나리" 스팬
    const triggerElement = document.querySelector('.details_flower_img'); // 기준이 될 요소
    
    const checkScroll = () => {
        const triggerPosition = triggerElement.getBoundingClientRect().top;

        // 스크롤 시 이미지가 화면 상단을 넘어가면 "개나리" 텍스트 표시
        if (triggerPosition <= 0) {
            flowerNameSpan.classList.add('visible');
        } else {
            flowerNameSpan.classList.remove('visible');
        }
    };

    // 초기 로드 시 한 번 강제로 호출 (초기 상태 반영)
    checkScroll();

    // 스크롤 이벤트 추가
    window.addEventListener('scroll', checkScroll);
});
