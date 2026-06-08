/*
  DANH SÁCH GAME
  --------------
  File này là nơi DUY NHẤT bạn cần sửa để:
   1) Thêm/sửa thẻ game hiển thị ở trang Home
   2) Thêm/sửa nội dung trang chi tiết của từng game

  Mỗi game là 1 object gồm:
  - id          : mã định danh duy nhất, KHÔNG dấu, không khoảng trắng
                  (dùng để tạo link sang trang chi tiết: game.html?id=...)
  - title       : tên game
  - image       : ảnh đại diện hiển thị ở thẻ trên trang Home
  - shortDesc   : mô tả ngắn hiển thị ở thẻ trên trang Home
  - detail      : nội dung trang chi tiết, gồm:
      - introVideo : link video EMBED mở đầu (xem hướng dẫn lấy link embed trong README/chat)
      - content    : mảng các khối nội dung, hiển thị LẦN LƯỢT từ trên xuống.
                     Có 2 loại khối:
                       { type: "text",  value: "đoạn mô tả..." }
                       { type: "image", src: "đường dẫn ảnh", caption: "chú thích (không bắt buộc)" }
                     Muốn xen kẽ chữ và ảnh bao nhiêu khối tuỳ thích, cứ thêm vào mảng theo thứ tự.
      - links      : danh sách link tham khảo, mỗi link gồm { label: "Tên hiển thị", url: "đường dẫn" }
*/

const games = [
  {
    id: "space-shooter",
    title: "Space Shooter 2D",
    image: "assets/images/placeholder-1.svg",
    shortDesc: "Game bắn phi thuyền 2D làm bằng JavaScript & Canvas.",
    detail: {
      introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: [
        {
          type: "text",
          value:
            "Space Shooter 2D là game bắn phi thuyền theo phong cách arcade cổ điển. " +
            "Người chơi điều khiển phi thuyền né đạn, tiêu diệt quái và thu thập power-up.",
        },
        {
          type: "image",
          src: "assets/images/placeholder-1.svg",
          caption: "Màn chơi đầu tiên của game",
        },
        {
          type: "text",
          value:
            "Mình tự code toàn bộ engine va chạm và hệ thống spawn quái bằng JavaScript thuần, " +
            "không dùng thư viện ngoài để hiểu rõ cách hoạt động ở tầng thấp nhất.",
        },
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/your-username/space-shooter-2d" },
        { label: "Chơi thử trên Itch.io", url: "https://your-username.itch.io/space-shooter-2d" },
      ],
    },
  },
  {
    id: "platformer-adventure",
    title: "Platformer Adventure",
    image: "assets/images/placeholder-2.svg",
    shortDesc: "Game phiêu lưu đi cảnh (platformer) làm bằng Unity.",
    detail: {
      introVideo: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      content: [
        {
          type: "text",
          value:
            "Một game platformer 2D với hệ thống map nhiều màn, nhân vật có thể chạy, " +
            "nhảy, leo tường. Tập trung xây dựng hệ thống điều khiển nhân vật mượt mà.",
        },
        {
          type: "image",
          src: "assets/images/placeholder-2.svg",
          caption: "Thiết kế level theo độ khó tăng dần",
        },
        {
          type: "text",
          value: "Game được làm trong khoảng 2 tháng, sử dụng Unity và bộ asset 2D tự vẽ.",
        },
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/your-username/platformer-adventure" },
      ],
    },
  },

  // 👉 Thêm game mới ở đây — copy 1 object ở trên rồi sửa nội dung, ví dụ:
  // {
  //   id: "ten-game-khong-dau",
  //   title: "Tên game của bạn",
  //   image: "assets/images/ten-anh.jpg",
  //   shortDesc: "Mô tả ngắn hiện trên thẻ ở trang Home.",
  //   detail: {
  //     introVideo: "https://www.youtube.com/embed/VIDEO_ID",
  //     content: [
  //       { type: "text", value: "Đoạn mô tả đầu tiên..." },
  //       { type: "image", src: "assets/images/anh-minh-hoa.jpg", caption: "Chú thích ảnh" },
  //       { type: "text", value: "Đoạn mô tả tiếp theo..." },
  //     ],
  //     links: [
  //       { label: "GitHub Repo", url: "https://github.com/username/ten-repo" },
  //     ],
  //   },
  // },
];
