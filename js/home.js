// Sinh các khối giới thiệu game ở trang Home từ mảng "games" (định nghĩa trong js/games.js)
(function renderGameList() {
  const container = document.getElementById("game-list");
  if (!container) return;

  // Quan sát các khối game: khi khối nào cuộn vào tầm nhìn thì thêm class "is-visible"
  // để CSS chạy hiệu ứng mờ dần + trượt lên (xem .game-showcase trong css/style.css)
  const revealOnScroll = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealOnScroll.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  games.forEach((game) => {
    const block = document.createElement("article");
    block.className = "game-showcase";
    block.setAttribute("tabindex", "0");
    block.setAttribute("role", "link");
    block.setAttribute("aria-label", `Xem chi tiết ${game.title}`);

    block.innerHTML = `
      <div class="game-showcase-info">
        <span class="game-tag">GAME</span>
        <h2>${game.title}</h2>
        <p>${game.shortDesc}</p>
        <span class="btn-detail">Xem chi tiết &rarr;</span>
      </div>
      <div class="game-showcase-image">
        <img src="${game.image}" alt="${game.title}" />
      </div>
    `;

    const goToDetail = () => {
      window.location.href = `game.html?id=${encodeURIComponent(game.id)}`;
    };

    block.addEventListener("click", goToDetail);
    block.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") goToDetail();
    });

    container.appendChild(block);
    revealOnScroll.observe(block);
  });
})();
