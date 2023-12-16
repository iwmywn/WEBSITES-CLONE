const listFriend = [
  {
    id: "1",
    name: "Trân Yonie",
    avatar: "images/tran_yonie.jpg",
    info: {
      placeLived: "Ho Chi Minh City, Vietnam",
      education: "HUTECH - Đại học Công nghệ Tp.HCM"
    },
    story: "no"
  },
  {
    id: "2",
    name: "Thảo Vy",
    avatar: "images/thao_vy.jpg",
    info: {
      mutualFriends: 
      {
        amount: "2",
        list: ["Linh Ho", "Đặng Quế Trân"]
      },
      placeLived: "Ho Chi Minh City, Vietnam"
    },
    story: "yes"
  },
  {
    id: "3",
    name: "Nguyên Thảo",
    avatar: "images/nguyen_thao.jpg",
    info: {
      mutualFriends: 
      {
        amount: "17",
        list: ["Gia Mỹ", "Đỗ Hoàng Kim Anh"]
      },
      placeLived: "Ho Chi Minh City, Vietnam"
    },
    story: "no"
  },
  {
    id: "4",
    name: "Đoan Trang",
    avatar: "images/doan_trang.jpg",
    info: {
      mutualFriends:
      {
        amount: "27",
        list: ["Pham Hoang Hanh An", "Hazu Ngx", "Đỗ Hoàng Kim Anh", "Linh Ho", "Nhat An Nguyen"]
      },
      placeLived: "Ho Chi Minh City, Vietnam"
    },
    story: "yes"
  },
  {
    id: "5",
    name: "Lệ Quyên",
    avatar: "images/le_quyen.jpg",
    info: {
      placeLived: "Ho Chi Minh City, Vietnam",
      work: [
        {
          position: "Mentor",
          company: "ERAW CLUB"
        },
        {
          position: "Quý Quân Nữ sinh khởi nghiệp 2022",
          company: "SheFuture"
        },
        {
          position: "Top 4 Young Innovation 2022",
          company: "Cuộc Thi Khởi Nghiệp Đổi Mới Sáng Tạo"
        }
      ]
    },
    story: "no"
  },
  {
    id: "6",
    name: "Charm Aliyah",
    avatar: "images/charm_aliyah.jpg",
    info: {
      mutualFriends: 
      {
        amount: "1",
        list: ["Pham Hoang Hanh An"]
      },
      work: [
        {
          position: "Works",
          company: "Freelance model"
        }
      ]
    },
    story: "no"
  },
  {
    id: "7",
    name: "Bích Ngọc",
    avatar: "images/bich_ngoc.jpg",
    info: {
      placeLived: "Ho Chi Minh City, Vietnam",
      work: [
        {
          position: "Works",
          company: "Freelance model"
        }
      ]
    },
    story: "no"
  },
  {
    id: "8",
    name: "Gia Mỹ",
    avatar: "images/gia_my.jpg",
    info: {
      becameFriends: ["박종화", "Thao Uyen"],
      mutualFriends: 
      {
        amount: "19",
        list: ["Nguyễn Bảo Ngọc", "Trần Hồng Tiên"]
      }
    },
    story: "yes"
  },
  {
    id: "9",
    name: "Bao Yen",
    avatar: "images/bao_yen.jpg",
    info: {
      mutualFriends: 
      {
        amount: "14",
        list: ["Hoàng Quyên"]
      },
      placeLived: "Ho Chi Minh City, Vietnam"
    },
    story: "no"
  }
];

export default listFriend;