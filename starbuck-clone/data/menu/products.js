const products = [{
  id: "1",
  title: "Drinks",
  "image-list": [
    {
      title: "Oleato™",
      oleato: [{
        name: "Oleato™",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/OleatoGingerbreadLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/Oleato_GoldenFoam_ColdBrew.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/Oleato_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/Oleato_ToffeeNut_ShakenEspresso.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230406_1723_IcedChaiTeaLatte-GoldenFoam-onGray_sRGB-1800.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20211029_7356_IcedMatchaTeaLatte-GoldenFoam-onGray_sRGB-1800.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221014_4603_ParadiseDrink-GoldenFoam-onGray_sRGB-1800.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20221014_4538_DragonDrink-GoldenColdFoam-onGray_sRGB-1800.jpg?impolicy=1by1_wide_topcrop_630"
        ]
      }]
    },
    {
      title: "Hot Coffees",
      hotcoffees: [{
        name: "Americanos",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeAmericano.jpg?impolicy=1by1_wide_topcrop_630"
        ]
      }, {
        name: "Brewed Coffees",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/Veranda_Blend_Hot.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_PikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_FeaturedDarkRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_DecafPikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_BlondeRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_BlondeRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_BlondeRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeMisto.jpg?impolicy=",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_PikePlaceRoast.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_BlondeRoast.jpg?impolicy=",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX23-721653_MalawiSableFarms_2023_WBReserve_Card.jpg?impolicy=",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX22-507317_VietnamDalat_2023_WBReserve_Card.jpg?impolicy="
        ]
      }, {
        name: "Cappuccinos",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_Cappuccino.jpg?impolicy=1by1_wide_topcrop_630"
        ]
      }, {
        name: "Espresso Shots",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_Espresso_Single.jpg?impolicy=",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_EspressoConPanna.jpg?impolicy="
        ]
      }, {
        name: "Flat Whites",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230406_FlatWhite.jpg?impolicy=",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20230406_HoneyAlmondmilkFlatWhite.jpg?impolicy="
        ]
      }, {
        name: "Lattes",
        image: [
          "https://globalassets.starbucks.com/digitalassets/products/bev/GingerbreadLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220607_1549_SugarCookieOatLatte-CAN-onGreen-MOP_1800.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220607_1401_CaramelBruleeLatte-onGreen-MOP_1800.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/ChestnutPralineLatte-onGreen.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20220411_PumpkinSpiceLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/Oleato_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CinnamonDolceLatte.jpg?impolicy=1by1_wide_topcrop_630",
          // miss
          "",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_ReserveHazelnutBiancoLatte.jpg?impolicy=1by1_wide_topcrop_630",
          "https://globalassets.starbucks.com/digitalassets/products/bev/SBX20190617_CaffeLatte.jpg?impolicy=1by1_wide_topcrop_630"
        ]
      }]
    },
    {
      hotteas: {
        name: "Hot Teas",
        image: [
          "images/drinks/hotteas.avif"
        ]
      }
    },
    {
      hotdrinks: {
        name: "Hot Drinks",
        image: [
          "images/drinks/hotdrinks.avif"
        ]
      }
    },
    {
      frappuccino: {
        name: "Frappuccino® Blended Beverages",
        image: [
          "images/drinks/frappuccino.avif"
        ]
      }
    },
    {
      coldcoffees: {
        name: "Cold Coffees",
        image: [
          "images/drinks/coldcoffees.avif"
        ]
      }
    },
    {
      icedtea: {
        name: "Iced Teas",
        image: [
          "images/drinks/icedtea.avif"
        ]
      }
    },
    {
      colddrinks: {
        name: "Cold Drinks",
        image: [
          "images/drinks/colddrinks.avif"
        ]
      }
    },
  ]
}, {
  id: "2",
  title: "Food",
  sections: [
    "Hot Breakfast",
    "Oatmeal & Yogurt",
    "Bakery",
    "Lunch",
    "Snacks & Sweets",
    "",
    "",
    ""
  ]
}, {
  id: "3",
  title: "At home coffee",
  sections: [
    "Whole Bean",
    "Ground",
    "VIA® Instant",
    "",
    "",
    "",
    "",
    ""
  ]
}, {
  id: "4",
  title: "Merchandise",
  sections: [
    "Cold Cups",
    "Tumblers",
    "Mugs",
    "Other",
    "",
    "",
    "",
    ""
  ]
}];

export default products;