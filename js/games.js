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
    shortDesc: "Game platformer được team thực hiện trong 36h tại Global Game Jam Vietnam 2025. Game đạt giải nhất cuộc thi phần digital game.",
    detail: {
      introVideo: "https://www.youtube.com/watch?v=qCD1nLE6oL0",
      content: [
        {
          type: "text",
          value:
            "Bubble Tea Go là game platformer với mục tiêu giải đố để đưa 2 nhân vật cùng vượt qua các chướng ngại vật trên đường về đích. 2 nhân vật này sử dụng chung một bộ điều khiển, nên người chơi phải tính toán di chuyển sao cho cả 2 cùng vượt qua được chướng ngại vật. Game có 3 level với độ khó tăng dần, mỗi level có một cơ chế mới được giới thiệu để tăng tính thử thách.",
        },
        {
          type: "image",
          src: "assets/images/bubble-tea-go-1.png",
          caption: "gameplay",
        },
        {
          type: "text",
          value:
            "Game được làm trong 36h, sử dụng Unity và bộ asset 2D tự vẽ, quá trình làm game được thực hiện hoàn toàn trong khuân khổ cuộc thi Global Game Jam Vietnam với chủ đề Bubble",
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
    image: "assets/images/grind-shot-thumbnail.png",
    shortDesc: "Game casual được team thực hiện trong 36h tại Voodoo Game Jam Vietnam 2026.",
    detail: {
      introVideo: "https://www.youtube.com/shorts/b6e1MWiD-yk",
      content: [
        {
          type: "text",
          value:
            "Một game hyper casual 2D được xây dựng với lối chơi đơn giản, " +
            "nhiệm vụ của người chơi là giải đố để đưa các object ra khỏi ma trận để tiêu diệt các monster. " +
            "Mỗi object sẽ có hướng và màu sắc, người chơi cần tính toán để chọn màu sắc hợp lý và clear được tất cả objects.",
        },
        {
          type: "image",
          src: "assets/images/grind-shot-1.png",
          caption: "gameplay",
        },
        {
          type: "text",
          value: "Game được lấy ý tưởng từ 2 tựa game puzzle nổi tiếng là Bus Out và Marble Sort. Ý tưởng được phát triển dưới sự hướng dẫn của các mentor thuộc team Voodoo trong khuôn khổ cuộc thi Voodoo Game Jam Vietnam 2026.",
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
    shortDesc: "Game hyper casual 3D với lối chơi thân thiện, được tập trung vào feeling của người chơi.",
    detail: {
      introVideo: "https://www.youtube.com/shorts/b6e1MWiD-yk",
      content: [
        {
          type: "text",
          value:
            "Một game hyper casual 3D được xây dựng với lối chơi thân thiện, " +
            "Nhiệm vụ của người chơi là lựa chọn các phao trên khay, làm sao để các phao có thể đưa được tất cả người ở hàng chờ ra khỏi hàng đợi." +
            "Mỗi phao và người sẽ có màu sắc khác nhau, người chơi cần tính toán để chọn phao phù hợp với màu sắc của người để clear được tất cả người chơi.",
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
