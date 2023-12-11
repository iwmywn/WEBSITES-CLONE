const listFriend = [
  {
    id: "1",
    name: "Trân Yonie",
    avatar: "https://scontent.fsgn5-8.fna.fbcdn.net/v/t1.6435-1/161409698_1751326681713142_2305059836146358285_n.jpg?stp=dst-jpg_p320x320&_nc_cat=109&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=Vqt3p9A8dp8AX8vDdwN&_nc_ht=scontent.fsgn5-8.fna&oh=00_AfBMUq7XgaeJ0tPfJqzJVB75n1YEUYYjSR9Lk_ZwBPGhJg&oe=65926520",
    info: {
      placeLived: "Ho Chi Minh City, Vietnam",
      education: "HUTECH - Đại học Công nghệ Tp.HCM"
    },
    story: "no"
  },
  {
    id: "2",
    name: "Thảo Vy",
    avatar: "https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-1/402074926_1020085069240385_1419553085521798956_n.jpg?stp=dst-jpg_p320x320&_nc_cat=107&ccb=1-7&_nc_sid=5740b7&_nc_ohc=gi2wRVYip1IAX_w2HMT&_nc_ht=scontent.fsgn5-10.fna&oh=00_AfCZGYHjk7AJjKSjJeWGbdwvpQqRcGXfnqK8UI2llvm3kw&oe=656F7840",
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
    avatar: "https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-1/333242809_184893250904203_2914328186276106558_n.jpg?stp=cp6_dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=5740b7&_nc_ohc=ZCjGdxuf8rkAX8ttuZc&_nc_ht=scontent.fsgn5-3.fna&oh=00_AfC3iDZ8S6sMljppB_DrJQhQHIKEOsMGOMfk_ldKoHQlQg&oe=65700B42",
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
    avatar: "https://scontent.fsgn5-6.fna.fbcdn.net/v/t39.30808-1/404321189_1025304065373342_6056270243470656768_n.jpg?stp=dst-jpg_p320x320&_nc_cat=108&ccb=1-7&_nc_sid=5740b7&_nc_ohc=eYeroMkukl4AX8GHd-H&_nc_ht=scontent.fsgn5-6.fna&oh=00_AfBP0z_Ud6IouoeUENoJu3OaZBWEY1gHl-RFinaXi6S8-g&oe=656F577F",
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
    avatar: "https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-1/397974313_295343173382103_5142742934790322543_n.jpg?stp=dst-jpg_p320x320&_nc_cat=103&ccb=1-7&_nc_sid=5740b7&_nc_ohc=cdV3cmdMxVUAX9U6Wa_&_nc_ht=scontent.fsgn5-12.fna&oh=00_AfDedWvQB8_GVMmx2ss9HaEc-MC1WhC-EvCG1_pCakZ1tQ&oe=65709422",
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
    avatar: "https://scontent.fsgn5-2.fna.fbcdn.net/v/t39.30808-1/363299113_1517820375690520_1971170622233869440_n.jpg?stp=dst-jpg_p320x320&_nc_cat=105&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Nw22Uug4TFQAX8jXUeh&_nc_ht=scontent.fsgn5-2.fna&oh=00_AfAcZVuQrUnmyaQGgS7ml1pVkWeFhV-hphdlmCOFBCQi0A&oe=657010C5",
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
    avatar: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/405311542_1132590251046906_3307042500411982226_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=QG4SmQDPuawAX_Qtb0h&_nc_oc=AQni9IyXU1TS_xSbTOOok58fHFBoH-XwRF7_wLivbMUIb6VG0ykXPLl-1eqoni6pOtoTyAQfpYZSDdb09J5fLPjb&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfA9Gkq96vqWjuYidiIOhRA7YaA6Jlndc-E4dSGiiaoTzA&oe=65700870",
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
    avatar: "https://scontent.fsgn5-13.fna.fbcdn.net/v/t39.30808-1/406119689_3258240034485645_2074488554390685731_n.jpg?stp=dst-jpg_p320x320&_nc_cat=106&ccb=1-7&_nc_sid=5740b7&_nc_ohc=VB6SBSMyz-oAX-lwff_&_nc_ht=scontent.fsgn5-13.fna&oh=00_AfDeurY1VDr7JUfqsEITJoxu41on9Y16tAGJdGbi17oMTw&oe=656F63F8",
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
    avatar: "https://scontent.fsgn5-14.fna.fbcdn.net/v/t39.30808-1/397867163_1381956569345187_1656572642780076008_n.jpg?stp=dst-jpg_p320x320&_nc_cat=101&ccb=1-7&_nc_sid=5740b7&_nc_ohc=Hsjok5JuJTEAX-CSvDK&_nc_ht=scontent.fsgn5-14.fna&oh=00_AfBK4VVXmIcrKKmlr6trFnJxgSx6H0UKMr52bz_BOxfojQ&oe=656F1079",
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