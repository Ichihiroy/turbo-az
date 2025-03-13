const databaseCars = [
  {
    id: "1",
    brand: "Abarth",
    model: "Seltos",
    banType: "Offroader",
    odometer: 30000,
    odometerUnit: "km",
    price: 44000,
    currency: "AZN",
    year: "2005",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F11%2F11%2F19%2F41%2F5f34c8eb-5138-4d0c-b78e-8c817d98aa5f%2F52522_Mu2ZZs1LqQkRDJpgK-R_xw.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "2",
    brand: "Audi",
    model: "A5",
    banType: "Sedan",
    odometer: 165000,
    odometerUnit: "km",
    price: 16000,
    currency: "USD",
    year: "2013",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F08%2F31%2F23%2F10%2F15%2F729c8b30-ea56-45d3-bdf7-f8a7b0e9e950%2F3015_eyJujDX3UzCcNboINLPl_g.jpg",
    ],
    city: "Masallı",
    dates: "Bu gün  14:30",
  },
  {
    id: "3",
    brand: "Toyota",
    model: "Camry",
    banType: "Sedan",
    odometer: 191000,
    odometerUnit: "km",
    price: 17300,
    currency: "AZN",
    year: "2007",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F22%2F10%2F26%2F59%2F9f754715-d306-49f2-b2e2-60ab36f771e6%2F80870_wrsWRRQ-A4ySXmcF4jOpXg.jpg",
    ],
    city: "Ağdam",
    dates: "Bu gün  14:30",
  },
  {
    id: "4",
    brand: "Ford",
    model: "Transit",
    banType: "Karvan",
    odometer: 11000,
    odometerUnit: "km",
    price: 44500,
    currency: "USD",
    year: "2008",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F09%2F02%2F17%2F28%2F48%2Fa0bc3142-1854-48f9-9c81-ff7d7010c1ae%2F59959_CCv7BAr0Tlz1x7lQiFAsQA.jpg",
    ],
    city: "Naftalan",
    dates: "Bu gün  14:30",
  },
  {
    id: "5",
    brand: "Bestune",
    model: "T77",
    banType: "Offroader",
    odometer: 0,
    odometerUnit: "km",
    price: 45900,
    currency: "AZN",
    year: "2022",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F19%2F17%2F33%2F45%2F027df0e9-c5df-46a1-8428-2a356ee17d45%2F44832_yspkMx-Q-VQPULaAOI_MSw.jpg",
    ],
    city: "Oğuz",
    dates: "Bu gün  14:30",
  },
  {
    id: "6",
    brand: "Honggi",
    model: "H9",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 94000,
    currency: "AZN",
    year: "2005",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F04%2F19%2F15%2F59%2F38%2F716b705f-e564-4d55-995a-7762e6881f4c%2F5883_vLXDlraa-zAkIkuXUdl05w.jpg",
    ],
    city: "Qax",
    dates: "Bu gün  14:30",
  },
  {
    id: "7",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 141622,
    odometerUnit: "km",
    price: 19500,
    currency: "AZN",
    year: "2015",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F15%2F18%2F37%2F46fbb03a-0cd9-4409-bbc6-03023e588329%2F67200_jmTFoB8S36kCqexBERvuhA.jpg",
    ],
    city: "Gədəbəy",
    dates: "Bu gün  14:30",
  },
  {
    id: "8",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 25900,
    currency: "AZN",
    year: "2017",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F18%2F08%2F03%2F20fc5e31-1f10-4b83-ade8-2d513db1c746%2F67209_O84rpgQMDkok2-nwStiHpg.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: "9",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 46000,
    odometerUnit: "km",
    price: 21200,
    currency: "USD",
    year: "2020",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F11%2F11%2F19%2F52%2F19%2F56291fd3-453f-426f-a911-3ca4f2e26362%2F17663_stveq78AA4WtPo3oyvVbHA.jpg",
    ],
    city: "Baki",
    dates: "Bu gün  14:30",
  },
  {
    id: "10",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 24945,
    odometerUnit: "km",
    price: 18500,
    currency: "AZN",
    year: "2015",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F19%2F14%2F59%2F27%2F530eae46-d07d-4abc-bacb-de36d3088f0f%2F64922_Iu72BGd2C_OFe3WxVk-qGQ.jpg",
    ],
    city: "Ağcabədi",
    dates: "Bu gün  14:30",
  },
  {
    id: "11",
    brand: "Kia",
    model: "Seltos",
    banType: "Offroader",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F10%2F20%2F20%2F19%2F37%2Ff0d40936-67d4-47b2-8f88-39e95c546ae3%2F57379_yzPNLn7TAwj6RDByWKgvOA.jpg",
    ],
    city: "Baki",
    dates: "Bu gün  14:30",
  },
  {
    id: "12",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 192000,
    odometerUnit: "km",
    price: 23500,
    currency: "AZN",
    year: "2014",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F15%2F48%2F00%2F097e698b-cbe7-4539-ab25-9a13a2a753fd%2F75247_xWTTEaAst4sLzUzIUkthPg.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: "13",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 20500,
    odometerUnit: "km",
    price: 42000,
    currency: "AZN",
    year: "2015",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F20%2F08%2F29%2F52caefc7-1570-4c7c-a077-fd1f816203cb%2F64916_MHdPUxu1eQ3kLAtY4hEzYg.jpg",
    ],
    city: "Ağsu",
    dates: "Bu gün  14:30",
  },
  {
    id: "14",
    brand: "Fusion",
    model: "Ford",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F18%2F51%2F58%2Fc79abd63-a69c-48eb-b071-37506b868231%2F57686_CzbKH3fGBbBdGyq3D-qstQ.jpg",
    ],
    city: "Ağdaş",
    dates: "Bu gün  14:30",
  },
  {
    id: "15",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 122000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2015",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "16",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 122000,
    odometerUnit: "km",
    price: 40000,
    currency: "AZN",
    year: "2015",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F28%2F22%2F00%2F43%2F37fc61b4-f0e5-46c2-af9d-80f0b15b12c1%2F67189_ktr5R2gTZl44Bt3WKDgx2w.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "17",
    brand: "Ford",
    model: "Sedan",
    banType: "Sedan",
    odometer: 12000,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2015",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F15%2F32%2F14%2F772966ba-5666-475a-a372-f12bf29a6393%2F78864_UB3_bVH_R5hoI0WN_uPsDQ.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "18",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 10000,
    odometerUnit: "km",
    price: 33000,
    currency: "AZN",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F22%2F21%2F06%2F21%2F7fc2989d-5606-4bba-84d5-91a7c1e3c11b%2F86601_iBRqpWaL3FFHzWvi-4ZGNQ.jpg",
    ],
    city: "Yevlax",
    dates: "Bu gün  14:30",
  },
  {
    id: "19",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 30000,
    odometerUnit: "km",
    price: 40000,
    currency: "EUR",
    year: "2005",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F12%2F19%2F55%2F07%2F9e2ccf81-d944-4b2f-8e63-a63bb368dfeb%2F8520_gtkNyAHKA6hUsNhuKMZOxw.jpg",
    ],
    city: "Göyçay",
    dates: "Bu gün  14:30",
  },
  {
    id: "20",
    brand: "Ford",
    model: "Fusion",
    banType: "Sedan",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F06%2F13%2F55%2F32%2Facf4c052-5a2e-4bd0-a0df-e28ecc595151%2F11719_z5jP8sffJjJ_qsKGBXbQsw.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: "21",
    brand: "Mercedes",
    model: "A 140",
    banType: "Hetçbek",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F29%2F19%2F39%2F48%2Fbae4dd1b-0f4e-4894-9e9b-7d4ed873ab27%2F67204_3_Uie01KEoSx4Ki0QWYwnA.jpg",
    ],
    city: "Bərdə",
    dates: "Bu gün  14:30",
  },
  {
    id: "22",
    brand: "Chevrolet",
    model: "Gatsby",
    banType: "Kabriolet",
    odometer: 16900,
    odometerUnit: "km",
    price: 126000,
    currency: "USD",
    year: "1986",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F09%2F16%2F12%2F50%2F42%2Febf8e8a9-4b9e-42d1-bb0c-725555a056e1%2F54915_qtOrHDVrjjW3-GNgDyN8vg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "23",
    brand: "Jaguar",
    model: "F-Type R",
    banType: "Kupe",
    odometer: 23000,
    odometerUnit: "km",
    price: 53000,
    currency: "USD",
    year: "2014",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F07%2F08%2F11%2F07%2F31%2Fd5fce961-38e1-47dd-8cf2-0eafc47ddb85%2F48187_u9isVaR_H7KHZwjuTS97bA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "24",
    brand: "Mercedes",
    model: "E 430",
    banType: "Kupe",
    odometer: 20200,
    odometerUnit: "km",
    price: 22000,
    currency: "AZN",
    year: "2000",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F30%2F18%2F47%2F06%2F92202a2f-1f27-453f-a37e-c03b988d1187%2F49755_qZklKVXHkSfjWtrA_iHn_A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "25",
    brand: "C.Moto",
    model: "CM250R- HY",
    banType: "Motosiklet",
    odometer: 0,
    odometerUnit: "km",
    price: 5400,
    currency: "AZN",
    year: "2023",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F16%2F42%2F46%2Fb60abf3c-aff7-450d-b793-bf93ceff3a06%2F15660_QvgVQpBtt9j4-9bpnj5N8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "26",
    brand: "Tayota",
    model: "Sienna",
    banType: "Minivan",
    odometer: 22000,
    odometerUnit: "km",
    price: 51400,
    currency: "USD",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2022%2F12%2F29%2F00%2F03%2F08%2F2ac930d3-3d5a-4b19-94fb-b63850ff5693%2F15334_aQbJ3Ea3Oz_WMOo_hHKCAg.jpg",
    ],
    city: "Horadiz",
    dates: "Bu gün  14:30",
  },
  {
    id: "27",
    brand: "Tayota",
    model: "Prius",
    banType: "Liftbek",
    odometer: 188293,
    odometerUnit: "km",
    price: 13900,
    currency: "EUR",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F24%2F14%2F33%2F40%2F0f9b3be6-4ae5-417a-bcf1-db0f39927d4e%2F33485_P0YBt9TmP9pEv29rCuhWLg.jpg",
    ],
    city: "İsmayıllı",
    dates: "Bu gün  14:30",
  },
  {
    id: "28",
    brand: "Porsche",
    model: "Panamera GTS",
    banType: "Liftbek",
    odometer: 188293,
    odometerUnit: "km",
    price: 55000,
    currency: "EUR",
    year: "2020",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F02%2F01%2F01%2F26%2F17%2Ffb77794e-9d37-424e-944d-3b233bc03467%2F12003_RjupQqZAh9kZFu-IaHqJ7g.jpg",
    ],
    city: "Şahbuz",
    dates: "Bu gün  14:30",
  },
  {
    id: "29",
    brand: "Paz",
    model: "672",
    banType: "Avtobus",
    odometer: 50000,
    odometerUnit: "km",
    price: 12000,
    currency: "USD",
    year: "2005",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F23%2F21%2F49%2F47%2F18227380-ca87-4ecc-8497-3c972bce2db1%2F42127_wKRyc3J6-wogJe-WZMY-ug.jpg",
    ],
    city: "İmişli",
    dates: "Bu gün  14:30",
  },
  {
    id: "30",
    brand: "Ferrari",
    model: "California",
    banType: "Rodster",
    odometer: 20000,
    odometerUnit: "km",
    price: 135000,
    currency: "USD",
    year: "2017",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F28%2F15%2F40%2F48%2Fb18d5c9e-58d7-4e2e-9bba-1c29cbce9940%2F61425_r8Og48iy5Jr9GvOTtAnnyQ.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "31",
    brand: "Mercedes",
    model: "E 280",
    banType: "Sedan",
    odometer: 129000,
    odometerUnit: "km",
    price: 19700,
    currency: "AZN",
    year: "2009",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F21%2F26%2F41%2Fa8168d7c-d02e-495f-8f01-69fcdc5e3e03%2F11997_tG1Qr36Aqkf171mt0oZG7Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "32",
    brand: "Mercedes",
    model: "E 200",
    banType: "Sedan",
    odometer: 315000,
    odometerUnit: "km",
    price: 14000,
    currency: "AZN",
    year: "2001",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F51%2F52%2F5638fb6b-7249-4f46-abd0-aa1efc451203%2F15643_AMLCTJrCWlvBJ6SXlF8fpg.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: "33",
    brand: "Mercedes",
    model: "C 240",
    banType: "Sedan",
    odometer: 451000,
    odometerUnit: "km",
    price: 9500,
    currency: "AZN",
    year: "1997",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F02%2F01%2F00%2F50%2F33%2Fd092e0d3-04c1-4af7-a730-c240c35f5f7d%2F15649_bymZBq9rqL0M4TLjYtXR4A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "34",
    brand: "Mercedes",
    model: "A 170",
    banType: "Hetçbek",
    odometer: 199000,
    odometerUnit: "km",
    price: 10200,
    currency: "AZN",
    year: "2006",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F06%2F23%2F76cef983-6b3b-47b8-a58d-dfb3cf469b5d%2F75221_xUr0C4Z--56j6RIijVBWVA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "35",
    brand: "Mercedes",
    model: "Actros 1841",
    banType: "Dartqı",
    odometer: 1300000,
    odometerUnit: "km",
    price: 67500,
    currency: "AZN",
    year: "2008",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F09%2F08%2F03%2F05%2Fcabbc910-8026-456f-a642-62ab99fc313e%2F10369_bNrqvfrJMy63hz0DwhXPcg.jpg",
    ],
    city: "Lənkəran",
    dates: "Bu gün  14:30",
  },
  {
    id: "36",
    brand: "Mercedes",
    model: "G 63 AMG",
    banType: "Offroader",
    odometer: 28000,
    odometerUnit: "km",
    price: 90200,
    currency: "AZN",
    year: "2016",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F31%2F20%2F36%2F16%2Ffb49abb0-fdf6-4595-87b0-27bdd3c3d226%2F12009_q1FoKTnpPA3uE3dtRcZZUA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "37",
    brand: "Mercedes",
    model: "200 D",
    banType: "Sedan",
    odometer: 552000,
    odometerUnit: "km",
    price: 5200,
    currency: "AZN",
    year: "1990",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F19%2F25%2F15%2F3aa9741d-4cc3-4ea0-9c3f-66ae5de0516b%2F6316_s0p7GRbRLVyaXdPugbuHeA.jpg",
    ],
    city: "Saatlı",
    dates: "Bu gün  14:30",
  },
  {
    id: "38",
    brand: "Mercedes",
    model: "0403",
    banType: "Avtobus",
    odometer: 700000,
    odometerUnit: "km",
    price: 110000,
    currency: "AZN",
    year: "2000",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F21%2F15%2F25%2F13%2F02798cb4-1129-4629-93af-b6dccb089966%2F78886_JqpeH6a5xab8QHW6E7dXKg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "39",
    brand: "Mercedes",
    model: "GLC 300 Coupe",
    banType: "Kupe",
    odometer: 7000,
    odometerUnit: "km",
    price: 72000,
    currency: "USD",
    year: "2021",
    credit: true,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F12%2F12%2F32%2F34%2Fef66aacc-979f-4824-9c38-4151faad457e%2F45824__18habOQ883XXQctAU0TAg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "40",
    brand: "Mercedes",
    model: "AMG GT 53",
    banType: "Sedan",
    odometer: 0,
    odometerUnit: "km",
    price: 210000,
    currency: "EUR",
    year: "2023",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F11%2F24%2F15%2F43%2F27%2Ff071d240-bc97-412c-a94a-bd3d676a51b2%2F23828_xAXUnAgmfcF8tuCOsfkz8Q.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "41",
    brand: "Mercedes",
    model: "170 V",
    banType: "Kupe",
    odometer: 82000,
    odometerUnit: "km",
    price: 500000,
    currency: "AZN",
    year: "1938",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F10%2F27%2F14%2F39%2F36%2F923ef17d-e1f9-4149-9e94-f925cf7661b7%2F42871_umKrn-lPv1BfkzuD5arziA.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "42",
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 95000,
    odometerUnit: "km",
    price: 35000,
    currency: "AZN",
    year: "2014",
    credit: false,
    barter: true,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F28%2F12%2F48%2F02%2Fe5c1b65a-c97f-4f94-ab4d-fcac497b20b6%2F67186_iILaSiss0FC-yQLMTjYR9A.jpg",
    ],
    city: "Sumqayıt",
    dates: "Bu gün  14:30",
  },
  {
    id: "43",
    brand: "Jaguar",
    model: "S-Type",
    banType: "Sedan",
    odometer: 190000,
    odometerUnit: "km",
    price: 17000,
    currency: "AZN",
    year: "2007",
    credit: false,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2023%2F01%2F30%2F20%2F01%2F36%2Fb8325e8f-b0b1-4423-8163-59ab513c0445%2F49759_qjtKYlmSfvuA_6JFNFa8AQ.jpg",
    ],
    city: "Gəncə",
    dates: "Bu gün  14:30",
  },
  {
    id: "44",
    brand: "Jaguar",
    model: "XF",
    banType: "Sedan",
    odometer: 9500,
    odometerUnit: "km",
    price: 58000,
    currency: "USD",
    year: "2019",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2021%2F02%2F04%2F11%2F55%2F52%2Ff3ddd4c9-1600-4d6d-b34f-5853f3c1ff71%2F19864_8RtK5APm1te6PSMZ3o2MLg.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "45",
    brand: "Jaguar",
    model: "F-Type R,",
    banType: "Sedan",
    odometer: 500,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",
    credit: true,
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/f710x568/2022%2F12%2F31%2F11%2F03%2F22%2Fb774f69d-3dc8-45d8-bf74-7fe3b1e68012%2F16508_ZEyGXYpx-MxvNSzE3M3s7A.jpg",
    ],
    city: "Bakı",
    dates: "Bu gün  14:30",
  },
  {
    id: "46",
    brand: "Acura",
    model: "MDX",
    banType: "Offroader",
    odometer: 500,
    odometerUnit: "km",
    price: 60000,
    currency: "EUR",
    year: "2020",
    engine: 1.5,
    images: [
      "https://turbo.azstatic.com/uploads/full/2023%2F01%2F31%2F13%2F41%2F14%2F30be4e7e-c9ac-455d-8616-616f096d6da7%2F71593_f9yNl7lW4FO-spgOift6dw.jpg",
    ],
    city: "Mingecevir",
    dates: " Bu gün  14:30",
  },
];

const carContainer = document.querySelector(".car-container");
let kod = "";
let likedCars = [];
function renderCars(arr) {
  carContainer.innerHTML = "";
  arr.forEach((car) => {
    const kreditIsaresi =
      car.credit == true
        ? `<i class="fa-solid fa-percent" style='position:absolute; left:10px; top:10px; color:white; background-color: orange; padding: 5px 6px ; border-radius:50%; font-size: 10px'></i>`
        : "";
    const pad = car.credit == true && car.barter == true ? "40px" : "10px";
    const barterIsaresi =
      car.barter == true
        ? `<i class="fa-solid fa-right-left btn-lime" style='position:absolute; left:${pad}; top:10px; color:white; padding: 5px 5px ; border-radius:50% ; font-size: 10px' ></i>`
        : "";

    kod = `<div onclick='showDetails(${
      car.id
    })' class="card px-0 col-lg-3 col-6 border-0 shadow-sm" id="car${
      car.id
    }" style="overflow:hidden; min-width: 230px ; height: 270px; position:relative" >
        <img src="${
          car.images[0]
        }" class="card-img-top" style="height: 150px!important ; object-fit:cover">
        <div class="card-body px-2 ">
          <h5 class="card-title fw-bold mb-0 "> ${
            car.price.toLocaleString("en").replace(/,/g, " ") +
            " " +
            car.currency
          }</h5>
          <p class="card-text fw-semibold mb-0">${car.brand} ${car.model}</p>
          <p class="card-text fw-semibold mb-0">${car.year}, ${
      car.engine ? car.engine + " L," : ""
    }  ${car.odometer} ${car.odometerUnit}</p>
          <p class="card-text mb-0 opacity-50">${car.city}, ${car.dates}</p>
        </div>
        <i class="fa-regular fa-heart" onclick="event.stopPropagation(); addToLikedCars(${
          car.id
        } , this)" style='position:absolute; right:10px ; top: 10px; font-size: 1.5em;  color:white;'></i>
        ${kreditIsaresi}
        ${barterIsaresi}
      `;
    carContainer.innerHTML += kod;
  });
}

let likedCarSave = JSON.parse(localStorage.getItem("likedCars")) || [];

function addToLikedCars(id, e) {
  e.classList.toggle("fa-solid");

  if (likedCars.includes(id)) likedCars.splice(likedCars.indexOf(id), 1);
  else likedCars.push(id);

  likedCars = [...likedCarSave, ...likedCars];

  localStorage.setItem("likedCars", JSON.stringify(likedCars));
}

renderCars(databaseCars);

let inputBox2 = document.querySelector(".input2");
let input = document.querySelector(".marka");
let input2 = document.querySelector(".model");
let input3 = document.querySelector(".city");
let input4 = document.querySelector(".currency");
let input5 = document.querySelector(".ban");
let input6 = document.querySelector(".minIl");
let input7 = document.querySelector(".maxIl");
let downIcon = document.querySelector(".fa-chevron-down");
let downIcon2 = document.querySelector(".fa-chevron-2");
let downIcon3 = document.querySelector(".fa-chevron-3");
let downIcon4 = document.querySelector(".fa-chevron-4");
let downIcon5 = document.querySelector(".fa-chevron-5");
let downIcon6 = document.querySelector(".fa-chevron-min");
let downIcon7 = document.querySelector(".fa-chevron-max");
let sifir = document.querySelector(".sifir");
let input_title = document.querySelector(".inputTitle");
let input_title2 = document.querySelector(".inputTitle2");
let input_title3 = document.querySelector(".inputTitle3");
let input_title4 = document.querySelector(".inputTitle4");
let input_title5 = document.querySelector(".inputTitle5");
let input_title6 = document.querySelector(".inputTitle6");
let input_title7 = document.querySelector(".inputTitle7");
let dropdownInput = document.querySelector(".dropdownInput");
let dropdownInput2 = document.querySelector(".dropdownInput2");
let dropdownInput3 = document.querySelector(".dropdownInput3");
let dropdownInput5 = document.querySelector(".dropdownInput5");
let dropdownInput6 = document.querySelector(".dropdownInput6");
let dropdownInput7 = document.querySelector(".dropdownInput7");
let dropdownInput4 = document.querySelector(".dropdownInputCurrency");
let disabled = document.querySelector(".disabled");
let yeniSurulmus = document.querySelector(".yeni-surulmus");
let surulmus = document.querySelector(".surulmus");
const kreditBtn = document.querySelector(".kredit-btn");
const barterBtn = document.querySelector(".barter-btn");
const hr = document.querySelector("#hr");
const minPrice = document.querySelector("#min-price");
const maxPrice = document.querySelector("#max-price");

let brands = [];
let models = [];
const cities = [];
const banTypes = [];

function fillYear() {
  for (let i = 2025; i >= 1905; i--) {
    dropdownInput6.innerHTML += `<p class='cars_option' value = '${i}' onclick=selectYearMin(this)>${i}</p>`;
    dropdownInput7.innerHTML += `<p class='cars_option' value = ${i}' onclick=selectYearMax(this)>${i}</p>`;
  }
}

function createBrandList() {
  for (let i of databaseCars) {
    if (!brands.includes(i.brand)) {
      brands.push(i.brand);
      dropdownInput.innerHTML += `<p class = 'cars_option' onclick = selectBrand('${i.brand}') id = '${i.brand}'>${i.brand} </p>`;
    }
    dropdownInput.style.height = "360px";
  }
}

if (input.value == "") {
  inputBox2.classList.add("d-none");
  hr.classList.add("d-none");
}

function createModelList(brand) {
  inputBox2.classList.remove("d-none");
  hr.classList.remove("d-none");
  models = [];
  dropdownInput2.innerHTML = `<p class="sifir" onclick="sifirlaModel()" id="sifir">
                    <i class="fa-solid fa-xmark"></i>Sifirla
                  </p>`;
  databaseCars.forEach((car) =>
    car.brand == brand ? models.push(car.model) : null
  );
  models = [...new Set(models)];
  for (let i of models) {
    dropdownInput2.innerHTML += `
      <label class='w-100'  >
      <p class='cars_option d-flex justify-content-between' id='${i
        .split(" ")
        .join("")}'> ${i} <input type='checkbox' onclick=selectModel('${i.split(
      " "
    )}') /> </p>
      </label>
      `;
    // `<p class='cars_option' onclick=selectModel(this)> ${i} </p>`;
  }
}

function createCityList() {
  dropdownInput3.innerHTML = ` <p class="sifir" onclick="sifirlaCity()" id="sifir">
                    <i class="fa-solid fa-xmark"></i>Sifirla
                  </p>`;
  databaseCars.map((car) => cities.push(car.city));
  const uniqueCities = [...new Set(cities)];
  uniqueCities.forEach((city) => {
    dropdownInput3.innerHTML += `
      <label class='w-100'  >
      <p class='cars_option d-flex justify-content-between'> ${city} <input type='checkbox' onclick=selectCity('${city}') /> </p>
      </label>
      `;
  });
}

function createBanList() {
  dropdownInput5.innerHTML = ` <p class="sifir" onclick="sifirlaBan()" id="sifir">
      <i class="fa-solid fa-xmark"></i>Sifirla
    </p>`;
  databaseCars.map((car) => banTypes.push(car.banType));
  const uniqueBanTypes = [...new Set(banTypes)];
  uniqueBanTypes.forEach((banType) => {
    dropdownInput5.innerHTML += `
    <label class='w-100'  >
    <p class='cars_option d-flex justify-content-between'> ${banType} <input type='checkbox' onclick=selectBanType('${banType}') /> </p>
    </label>
  `;
  });
}

input4.value = "";
createCityList();
createBrandList();
createBanList();
fillYear();
let lastBrand = "Markani secin";
let lastModel = "Modeli secin";

function inputFocus() {
  input.value = "";
  input.style.border = "1px solid #8d94ad";
  input.placeholder = lastBrand;
  input.style.paddingBlock = "14px";
  downIcon.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput.classList.add("dropVisible");
  input_title.classList.remove("titleVisible");
  dropdownInput.classList.remove("d-none");
}

function inputFocus2() {
  input2.value = "";
  input2.style.border = "1px solid #8d94ad";
  input2.placeholder = lastModel;
  input2.style.paddingBlock = "14px";
  downIcon2.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput2.classList.add("dropVisible");
  input_title2.classList.remove("titleVisible");
}

function inputFocus3() {
  input3.value = "";
  input3.style.border = "1px solid #8d94ad";
  input3.style.paddingBlock = "14px";
  downIcon3.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput3.classList.add("dropVisible");
  input_title3.classList.remove("titleVisible");
}

function inputFocus4() {
  input4.value = "";
  input4.style.border = "1px solid #8d94ad";
  input4.style.paddingBlock = "14px";
  downIcon4.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput4.classList.add("dropVisible");
  input_title4.classList.remove("titleVisible");
}
function inputFocus5() {
  input5.value = "";
  input5.style.border = "1px solid #8d94ad";
  input5.style.paddingBlock = "14px";
  downIcon5.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput5.classList.add("dropVisible");
  input_title5.classList.remove("titleVisible");
}
function inputFocus6() {
  input6.value = "";
  input6.style.border = "1px solid #8d94ad";
  input6.style.paddingBlock = "14px";
  downIcon6.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput6.classList.add("dropVisible");
  input_title6.classList.remove("titleVisible");
}

function inputFocus7() {
  input7.value = "";
  input7.style.border = "1px solid #8d94ad";
  input7.style.paddingBlock = "14px";
  downIcon7.style.transform = "translateY(-50%) rotate(180deg)";
  dropdownInput7.classList.add("dropVisible");
  input_title7.classList.remove("titleVisible");
}

function inputBlur() {
  downIcon.style.transform = "translateY(-50%) rotate(0deg)";
  dropdownInput.classList.remove("dropVisible");
  dropdownInput.classList.add("d-none");
  if (lastBrand != "Markani secin") {
    input.value = lastBrand;
    input_title.classList.add("titleVisible");
    input.style.paddingBlock = "21px 7px";
  } else {
    input.style.border = "1px solid #dfe3e9";
  }
  if (input.placeholder == "Markani secin") {
    input.placeholder = "Marka";
  }
}

function inputBlur2() {
  downIcon2.style.transform = "translateY(-50%) rotate(0deg)";
  dropdownInput2.classList.remove("dropVisible");
  // dropdownInput2.classList.toggle("d-none");
  if (lastModel != "Modeli secin") {
    input2.value = lastModel;
    input_title2.classList.add("titleVisible");
    input2.style.paddingBlock = "21px 7px";
  } else {
    input2.style.border = "1px solid #dfe3e9";
  }
  if (input2.placeholder == "Modeli secin") {
    input2.placeholder = "Model";
  }
}

function inputBlur3() {
  dropdownInput3.classList.remove("dropVisible");
  downIcon3.style.transform = "translateY(-50%) rotate(0deg)";
  input3.value = cityArr.join(", ");
  // input_title3.classList.add("titleVisible");
}

function inputBlur4() {
  dropdownInput4.classList.remove("dropVisible");
  downIcon4.style.transform = "translateY(-50%) rotate(0deg)";
}

function inputBlur5() {
  dropdownInput5.classList.remove("dropVisible");
  downIcon5.style.transform = "translateY(-50%) rotate(0deg)";
  input5.value = banArr.join(", ");
  // input_title3.classList.add("titleVisible");
}

function inputBlur6() {
  dropdownInput6.classList.remove("dropVisible");
  downIcon6.style.transform = "translateY(-50%) rotate(0deg)";
  input_title6.classList.add("titleVisible");
}

function inputBlur7() {
  dropdownInput7.classList.remove("dropVisible");
  downIcon7.style.transform = "translateY(-50%) rotate(0deg)";
  input_title7.classList.add("titleVisible");
}

function sifirla() {
  input.placeholder = "Marka";
  lastBrand = "Markani secin";
  input.value = "";
  input_title.classList.remove("titleVisible");
  input.style.border = "1px solid #dfe3e9";
  input2.value = "";
  dropdownInput2.innerHTML = `<p class="sifir" onclick="sifirlaModel()" id="sifir">
    <i class="fa-solid fa-xmark"></i>Sifirla
  </p>`;

  filterAll();
}

function sifirlaModel() {
  input2.placeholder = "Model";
  lastModel = "Modeli secin";
  input2.style.border = "1px solid #dfe3e9";
  input2.value = "";
  modelArr.length = 0;
  dropdownInput2.innerHTML = "";
  createModelList();

  filterAll();
}

function sifirlaCity() {
  input3.value = "";
  cityArr.length = 0;
  dropdownInput3.innerHTML = "";
  createCityList();
}

function sifirlaBan() {
  input5.value = "";
  banArr.length = 0;
  dropdownInput5.innerHTML = "";
  createBanList();
}

function selectBrand(a) {
  input.value = document.getElementById(a).innerHTML;
  lastBrand = a;
  sifirlaModel();
  createModelList(a);
  input.classList.remove("pad-15");
  // dropdownInput.classList.add("d-none");

  filterAll();
}

function selectYearMin(a) {
  input6.value = a.innerHTML;
}

function selectYearMax(a) {
  input7.value = a.innerHTML;
}

function sifirlaIl(e) {
  if (e == 1) {
    input7.value = "";
  } else {
    input6.value = "";
  }
}

const banArr = [];
function selectBanType(ban) {
  if (banArr.includes(ban)) {
    banArr.splice(banArr.indexOf(ban), 1);
    input5.value = banArr.join(", ");
  } else {
    banArr.push(ban);
    input5.value = banArr.join(", ");
  }
}

const modelArr = [];
function selectModel(model) {
  model = model.split(",").join(" ");
  if (modelArr.includes(model)) {
    modelArr.splice(modelArr.indexOf(model), 1);
    input2.value = modelArr.join(", ");
  } else {
    modelArr.push(model);
    input2.value = modelArr.join(", ");
  }

  filterAll();
}

const cityArr = [];
function selectCity(city) {
  if (cityArr.includes(city)) {
    cityArr.splice(cityArr.indexOf(city), 1);
    input3.value = cityArr.join(", ");
  } else {
    cityArr.push(city);
    input3.value = cityArr.join(", ");
  }
}

function go(params) {
  setTimeout(inputBlur, 300);
}

function go2(params) {
  setTimeout(inputBlur2, 100);
}

function go3(params) {
  setTimeout(inputBlur3, 100);
}

function go4(params) {
  setTimeout(inputBlur4, 100);
}

function go5(params) {
  setTimeout(inputBlur5, 100);
}

function go6(params) {
  setTimeout(inputBlur6, 100);
}

function go7(params) {
  setTimeout(inputBlur7, 100);
}

input.onfocus = inputFocus;
input.onblur = go;
input2.onfocus = inputFocus2;
input2.onblur = go2;
input3.onfocus = inputFocus3;
input3.onblur = go3;
input4.onfocus = inputFocus4;
input4.onblur = go4;
input5.onfocus = inputFocus5;
input5.onblur = go5;
input6.onfocus = inputFocus6;
input6.onblur = go6;
input7.onfocus = inputFocus7;
input7.onblur = go7;

function veziyet(btn) {
  const buttons3 = document.querySelectorAll(".btn-3");

  buttons3.forEach((button) => {
    button.classList.remove("active-btn");
  });
  btn.classList.add("active-btn");
}

function setCurr(el) {
  input4.value = el.innerHTML;
}

// Filtering

const nativeBtn = document.querySelector("#native-active-btn");

function clearAll() {
  sifirlaIl(1);
  sifirlaIl(0);
  sifirlaModel();
  sifirla();
  sifirlaCity();
  sifirlaBan();
  input.classList.add("pad-15");
  barterBtn.classList.remove("active-btn");
  kreditBtn.classList.remove("active-btn");
  yeniSurulmus.classList.remove("active-btn");
  surulmus.classList.remove("active-btn");
  nativeBtn.classList.add("active-btn");
  input4.value = "";
  inputBox2.classList.add("d-none");
  hr.classList.add("d-none");
  minPrice.value = "";
  maxPrice.value = "";

  renderCars(databaseCars);
}

function setTerms(el) {
  el.classList.toggle("active-btn");
}

function searchMarka(el) {
  const filter = el.value.toUpperCase().trim();
  for (let brand of brands) {
    if (brand.toUpperCase().startsWith(filter)) {
      document.getElementById(brand).style.display = "block";
    } else {
      document.getElementById(brand).style.display = "none";
    }
  }
}

// function searchModel(el) {
//   const filter = el.value.toUpperCase().trim();
//   for (let i of models) {
//     if (i.split(" ").join("").toUpperCase().startsWith(filter)) {
//       document.getElementById(i.split(" ").join("")).style.display = "block";
//     } else {
//       document.getElementById(i.split(" ").join("")).style.display = "none";
//     }
//   }
//   console.log(filter);
// }

function filterAndGoBack() {
  filterAll();
  showFilters();
}

function filterAll() {
  let filteredCars = databaseCars;
  if (input.value !== "")
    filteredCars = filteredCars.filter(
      (car) => car.brand == input.value.trim()
    );
  if (input2.value !== "")
    filteredCars = filteredCars.filter((car) =>
      input2.value.includes(car.model)
    );
  if (minPrice.value !== "")
    filteredCars = filteredCars.filter((car) => car.price >= minPrice.value);
  if (maxPrice.value !== "")
    filteredCars = filteredCars.filter((car) => car.price <= maxPrice.value);
  if (input3.value !== "")
    filteredCars = filteredCars.filter((car) =>
      input3.value.includes(car.city)
    );
  if (input4.value !== "")
    filteredCars = filteredCars.filter((car) => car.currency == input4.value);
  if (input5.value !== "")
    filteredCars = filteredCars.filter((car) =>
      input5.value.includes(car.banType)
    );
  if (input6.value !== "")
    filteredCars = filteredCars.filter((car) => car.year >= input6.value);
  if (input7.value !== "")
    filteredCars = filteredCars.filter((car) => car.year <= input7.value);
  if (yeniSurulmus.classList.contains("active-btn"))
    filteredCars = filteredCars.filter((car) => car.odometer == 0);
  if (surulmus.classList.contains("active-btn"))
    filteredCars = filteredCars.filter((car) => car.odometer > 0);
  if (barterBtn.classList.contains("active-btn"))
    filteredCars = filteredCars.filter((car) => car.barter == true);
  if (kreditBtn.classList.contains("active-btn"))
    filteredCars = filteredCars.filter((car) => car.credit == true);
  carContainer.innerHTML = "";

  renderCars(filteredCars);
  checkIfEmpty(filteredCars);
}

function checkIfEmpty(arr) {
  if (arr.length == 0) {
    carContainer.innerHTML = `<div class="d-flex justify-content-center flex-column align-items-center fw-bold fs-4" style='margin-bottom: 150px'>
      <img src='img/tapilmadi.png' alt='Tapilmadi' />
      Təəssüf ki, axtarışınız əsasında heç nə tapılmadı. <br/>
    Zəhmət olmasa, daha uyğun axtarış filtrləri seçin.</div>`;
  }
}

function showDetails(id) {
  const car = databaseCars.find((c) => (c.id = id));
  if (car) {
    window.location.href = `car-detail.html?name=${encodeURIComponent(car.id)}`;
  }
}

const otherFilters = document.querySelector(".other-filters");
const filterChevron = document.querySelector(".chevron-down-filter");

function showAll(el) {
  el.innerHTML = el.innerHTML == "Daha çox filtr" ? "Gizlət" : "Daha çox filtr";
  otherFilters.classList.toggle("filters-visible");
  otherFilters.classList.toggle("overflow-filters");
  filterChevron.classList.toggle("rotate-chevron");
}

function brandsPage() {
  window.location.href = "markalar.htm";
}

/* <div class="d-flex align-items-center justify-content-end gap-4 w-100"></div> */

function yeniElanaKecid() {
  window.location.href = "yeni-elan.htm";
}

function updateFileLocation() {
  if (window.innerWidth < 991) {
    return;
  } else {
    window.location.href = "index.htm";
  }
}

window.addEventListener("resize", updateFileLocation);
//   window.addEventListener("load", updateFileLocation);

const filterMenu = document.querySelector("#filter-menu");

const main = document.querySelector("main");
const menu = document.querySelector("#menu");

function showFilters() {
  filterMenu.classList.toggle("d-none");
  main.classList.toggle("d-none");
  menu.classList.toggle("d-none");
  console.log("show filters");
}
