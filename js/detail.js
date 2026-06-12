// Chuyển link YouTube thường (watch / shorts / youtu.be) thành link embed để nhúng được vào iframe
function toYouTubeEmbedUrl(url) {
  if (!url) return url;

  let videoId = null;

  const watchMatch = url.match(/[?&]v=([^&]+)/);
  const shortsMatch = url.match(/youtube\.com\/shorts\/([^?&/]+)/);
  const shortLinkMatch = url.match(/youtu\.be\/([^?&/]+)/);

  if (watchMatch) videoId = watchMatch[1];
  else if (shortsMatch) videoId = shortsMatch[1];
  else if (shortLinkMatch) videoId = shortLinkMatch[1];

  if (videoId) return `https://www.youtube.com/embed/${videoId}`;

  return url;
}

// Đọc tham số ?id=... trên URL, tìm game tương ứng trong "games" rồi render trang chi tiết
(function renderGameDetail() {
  const root = document.getElementById("game-detail");
  if (!root) return;

  const gameId = new URLSearchParams(window.location.search).get("id");
  const game = games.find((g) => g.id === gameId);

  if (!game) {
    root.innerHTML = `
      <div class="detail-header">
        <a href="index.html" class="back-link">&larr; Quay lại trang chủ</a>
      </div>
      <p>Không tìm thấy game này. Hãy kiểm tra lại đường dẫn hoặc quay về trang chủ.</p>
    `;
    return;
  }

  document.title = `${game.title} — Game Portfolio`;

  const blocksHTML = game.detail.content
    .map((block) => {
      if (block.type === "text") {
        return `<p>${block.value}</p>`;
      }
      if (block.type === "image") {
        const caption = block.caption ? `<figcaption>${block.caption}</figcaption>` : "";
        return `
          <figure class="detail-image">
            <img src="${block.src}" alt="${block.caption || game.title}" />
            ${caption}
          </figure>
        `;
      }
      return "";
    })
    .join("");

  const linksHTML = (game.detail.links || [])
    .map(
      (link) =>
        `<li><a href="${link.url}" target="_blank" rel="noopener noreferrer">${link.label} <span class="link-arrow">&#8599;</span></a></li>`
    )
    .join("");

  root.innerHTML = `
    <div class="detail-header">
      <a href="index.html" class="back-link">&larr; Quay lại trang chủ</a>
      <span class="game-tag">GAME</span>
      <h1>${game.title}</h1>
    </div>

    <div class="detail-layout">
      <div class="detail-main">
        ${
          game.detail.introVideo
            ? `<div class="detail-video-wrapper">
                 <iframe src="${toYouTubeEmbedUrl(game.detail.introVideo)}" allowfullscreen title="${game.title} - video giới thiệu"></iframe>
               </div>`
            : ""
        }
        <h2 class="detail-section-title">Mô tả</h2>
        <div class="detail-content">${blocksHTML}</div>
      </div>

      ${
        linksHTML
          ? `<aside class="detail-sidebar">
               <div class="sidebar-card">
                 <h3>Link tham khảo</h3>
                 <ul class="detail-links">${linksHTML}</ul>
               </div>
             </aside>`
          : ""
      }
    </div>
  `;
})();
