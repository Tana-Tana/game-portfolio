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
    id: "bubble-tea-go",
    title: "Bubble Tea Go",
    image: "assets/images/bubble-tea-go-thumbnail.png",
    shortDesc: "A platformer game created by the team in 36 hours at Global Game Jam Vietnam 2025. The game won first place in the digital game competition.",
    detail: {
      introVideo: "https://www.youtube.com/watch?v=DGzBlY79ixY&t=41s",
      content: [
        {
          type: "text",
          value:
            "Bubble Tea Go is a platformer game with the goal of solving puzzles to help 2 characters overcome obstacles on their way to the finish line. These 2 characters share the same controller, so players must calculate movements so both can overcome obstacles. The game has 3 levels with increasing difficulty, each level introduces a new mechanism to increase the challenge.",
        },
        {
          type: "image",
          src: "assets/images/bubble-tea-go-1.png",
          caption: "gameplay",
        },
        {
          type: "text",
          value:
            "The game was created in 36 hours, using Unity and a custom-drawn 2D asset set, with the entire game development process carried out within the framework of Global Game Jam Vietnam competition with the theme Bubble.",
        },
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/Tana-Tana/GameJam2025" },
        { label: "Chơi thử trên Itch.io", url: "https://osymi.itch.io/bubble-tea-go" },
      ],
    },
  },
  {
    id: "grind-shot",
    title: "Grind Shot",
    image: "assets/images/grind-shot-thumbnail_2.png",
    shortDesc: "A casual game created by the team in 36 hours at Voodoo Game Jam Vietnam 2026.",
    detail: {
      introVideo: "https://www.youtube.com/shorts/b6e1MWiD-yk",
      content: [
        {
          type: "text",
          value:
            "A hyper casual 2D game built with simple gameplay, the player's task is to solve puzzles to remove objects from the matrix to defeat monsters. " +
            "Each object will have a direction and color, players need to calculate and choose the right color to clear all objects.",
        },
        {
          type: "image",
          src: "assets/images/grind-shot-1.png",
          caption: "gameplay",
        },
        {
          type: "text",
          value: "The game took inspiration from 2 famous puzzle games: Bus Out and Marble Sort. The idea was developed under the guidance of mentors from the Voodoo team within the framework of the Voodoo Game Jam Vietnam 2026 competition.",
        },
      ],
      links: [
        { label: "GitHub Repo", url: "https://github.com/0sym1/Gamejam-Voodoo-2026" },
      ],
    },
  },

  {
    id: "aquapark",
    title: "Aquapark",
    image: "assets/images/aquapark-thumbnail.png",
    shortDesc: "A 3D hyper casual game with friendly gameplay, focused on the player's experience.",
    detail: {
      introVideo: "https://www.youtube.com/shorts/l77ZUdCZ5e4",
      content: [
        {
          type: "text",
          value:
            "A 3D hyper casual game built with friendly gameplay. The player's task is to select floats from the tray, so that the floats can take all people out of the queue from the waiting line. " +
            "Each float and person will have different colors, players need to calculate to choose floats suitable with the person's color to clear all players.",
        },
        {
          type: "image",
          src: "assets/images/aquapark-1.png",
          caption: "gameplay",
        },
        {
          type: "text",
          value: "",
        },
      ],
      links: [
        { label: "GitHub Repo (private)", url: "https://github.com/0sym1/" },
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
