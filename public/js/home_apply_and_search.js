document.addEventListener('DOMContentLoaded', () => {
    const filterbox = document.querySelector('.filterbox');

    let isDown = false;
    let startX;
    let scrollLeft;

    filterbox.addEventListener('mousedown', (e) => {
        isDown = true;
        filterbox.classList.add('active');
        startX = e.pageX - filterbox.offsetLeft;
        scrollLeft = filterbox.scrollLeft;
    });

    filterbox.addEventListener('mouseleave', () => {
        isDown = false;
        filterbox.classList.remove('active');
    });

    filterbox.addEventListener('mouseup', () => {
        isDown = false;
        filterbox.classList.remove('active');
    });

    filterbox.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - filterbox.offsetLeft;
        const walk = (x - startX) * 2; // 드래그 속도 조정
        filterbox.scrollLeft = scrollLeft - walk;
    });
});
