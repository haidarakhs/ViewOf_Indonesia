const slider = document.querySelector('.slider');
const list = document.querySelector('.list');
const thumbnail = document.querySelector('.thumbnail');
const next = document.querySelector('#next');
const prev = document.querySelector('#prev');

// Event listener untuk tombol 'next'
next.addEventListener('click', () => {
    initSlider('next');
});

// Event listener untuk tombol 'prev'
prev.addEventListener('click', () => {
    initSlider('prev');
});

const initSlider = (type) => {
    const sliderItems = list.querySelectorAll('.item');
    const thumbnailItems = thumbnail.querySelectorAll('.item');

    if (type === 'next') {
        // Pindahkan item pertama ke belakang (untuk slider dan thumbnail)
        list.appendChild(sliderItems[0]);
        thumbnail.appendChild(thumbnailItems[0]);
        slider.classList.add('next');
    } else {
        // Pindahkan item terakhir ke depan (untuk slider dan thumbnail)
        const lastItemPosition = sliderItems.length - 1;
        list.prepend(sliderItems[lastItemPosition]);
        thumbnail.prepend(thumbnailItems[lastItemPosition]);
        slider.classList.add('prev');
    }

    // Menghapus class 'next' dan 'prev' setelah animasi selesai
    setTimeout(() => {
        slider.classList.remove('next');
        slider.classList.remove('prev');
    }, 1000); // Durasi animasi (sama dengan durasi animasi di CSS)
};
