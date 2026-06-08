/*
  THANH ĐIỀU HƯỚNG (NAVBAR) DÙNG CHUNG
  ------------------------------------
  Mỗi trang (trừ trang chi tiết game) chỉ cần có sẵn:
    <div id="navbar-placeholder"></div>
    <body data-page="home|blog|about">
  Script này sẽ tự sinh navbar và bôi nổi link tương ứng với trang hiện tại.

  👉 Muốn thêm/sửa/xoá mục trên thanh điều hướng, chỉ cần sửa mảng NAV_LINKS bên dưới.
*/

const NAV_LINKS = [
  { href: "index.html", label: "Home", key: "home" },
  { href: "blog.html", label: "Blog", key: "blog" },
  { href: "about.html", label: "About", key: "about" },
];

(function renderNavbar() {
  const placeholder = document.getElementById("navbar-placeholder");
  if (!placeholder) return;

  const currentPage = document.body.dataset.page;

  const linksHTML = NAV_LINKS.map(
    (link) =>
      `<li><a href="${link.href}" class="${link.key === currentPage ? "active" : ""}">${link.label}</a></li>`
  ).join("");

  placeholder.innerHTML = `
    <nav class="navbar">
      <a href="index.html" class="navbar-brand">
        <span class="navbar-brand-icon">🎮</span>
        <span class="gradient-text">My Game Portfolio</span>
      </a>
      <ul class="navbar-links">${linksHTML}</ul>
    </nav>
  `;
})();
