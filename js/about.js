document.addEventListener("DOMContentLoaded", () => {
  const carousels = document.querySelectorAll(".achievement-image.carousel");

  carousels.forEach((carousel) => {
    const track = carousel.querySelector(".carousel-track");
    if (!track) return;

    const images = Array.from(track.children);
    const prevButton = carousel.querySelector(".carousel-button.prev");
    const nextButton = carousel.querySelector(".carousel-button.next");

    // Nếu chỉ có 1 ảnh thì ẩn nút chuyển và không chạy tự động
    if (images.length <= 1) {
      if (prevButton) prevButton.style.display = "none";
      if (nextButton) nextButton.style.display = "none";
      return;
    }

    let intervalId;
    let isTransitioning = false;

    const nextSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;
      
      track.style.transition = ""; // Kích hoạt lại hiệu ứng mượt từ CSS
      track.style.transform = "translateX(-100%)";
      
      track.addEventListener("transitionend", function handler(e) {
        if (e.target !== track) return;
        track.removeEventListener("transitionend", handler);
        track.style.transition = "none"; // Tắt hiệu ứng để dịch chuyển DOM ngầm
        track.appendChild(track.firstElementChild); // Chuyển ảnh đầu xuống cuối
        track.style.transform = "translateX(0)"; // Đặt lại vị trí
        void track.offsetWidth; // Ép trình duyệt cập nhật lại giao diện ngay lập tức
        isTransitioning = false;
      });
    };

    const prevSlide = () => {
      if (isTransitioning) return;
      isTransitioning = true;

      track.style.transition = "none"; // Tắt hiệu ứng
      track.prepend(track.lastElementChild); // Đưa ảnh cuối lên đầu
      track.style.transform = "translateX(-100%)"; // Đẩy track lùi lại 1 ảnh để giữ nguyên góc nhìn
      
      void track.offsetWidth; // Ép trình duyệt cập nhật

      track.style.transition = ""; // Bật lại hiệu ứng
      track.style.transform = "translateX(0)"; // Trượt mượt mà về 0

      track.addEventListener("transitionend", function handler(e) {
        if (e.target !== track) return;
        track.removeEventListener("transitionend", handler);
        isTransitioning = false;
      });
    };

    const startAutoSlide = () => {
      intervalId = setInterval(nextSlide, 5000); // 5000ms = 5s
    };

    const stopAutoSlide = () => {
      clearInterval(intervalId);
    };

    // Gắn sự kiện cho các nút click
    if (nextButton) {
      nextButton.addEventListener("click", () => {
        nextSlide();
        stopAutoSlide(); startAutoSlide(); // Reset thời gian chờ
      });
    }
    if (prevButton) {
      prevButton.addEventListener("click", () => {
        prevSlide();
        stopAutoSlide(); startAutoSlide();
      });
    }

    // Tạm dừng chạy tự động khi rê chuột vào để người dùng nhìn cho rõ
    carousel.addEventListener("mouseenter", stopAutoSlide);
    carousel.addEventListener("mouseleave", startAutoSlide);

    // Kích hoạt chạy tự động
    startAutoSlide();
  });
});