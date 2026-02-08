export const whiskyData = [
  // 1. 발베니
  {
    id: 1,
    name: "발베니 12년 더블우드",
    thumbnailUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 120000,
    category: "Single Malt",
    rating: 4.5,
    desc: "전통적인 수제 방식을 고수하는 발베니의 대표작. 버번 오크통과 셰리 오크통에서 두 번 숙성하여 깊은 풍미를 자랑합니다.",
    details: {
      brand: "Balvenie",
      manufacturer: "William Grant & Sons",
      region: "Speyside (Scotland)",
      type: "Single Malt Scotch",
      abv: "40%"
    },
    flavors: { peat: 1, smoke: 1, sweet: 5, fruity: 4, sherry: 3, spicy: 2, woody: 3, body: 3 }
  },
  // 2. 맥캘란
  {
    id: 2,
    name: "맥캘란 18년 셰리 오크",
    thumbnailUrl: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 450000,
    category: "Single Malt",
    rating: 4.8,
    desc: "셰리 오크통의 명가 맥캘란의 자존심. 말린 과일의 진한 단맛과 스파이스가 완벽한 조화를 이룹니다.",
    details: {
      brand: "Macallan",
      manufacturer: "Edrington Group",
      region: "Highland (Scotland)",
      type: "Single Malt Scotch",
      abv: "43%"
    },
    flavors: { peat: 0, smoke: 1, sweet: 4, fruity: 5, sherry: 5, spicy: 3, woody: 4, body: 4 }
  },
  // 3. 조니워커 (내 컴퓨터 이미지)
  {
    id: 3,
    name: "조니워커 블루라벨",
    thumbnailUrl: "/images/blue-label.jpg", // 👈 저장해둔 로컬 이미지
    price: 300000,
    category: "Blended",
    rating: 4.2,
    desc: "조니워커 가문의 비법이 담긴 최고급 블렌디드 위스키. 벨벳처럼 부드러운 목넘김과 긴 여운이 특징입니다.",
    details: {
      brand: "Johnnie Walker",
      manufacturer: "Diageo",
      region: "Scotland (Blended)",
      type: "Blended Scotch",
      abv: "40%"
    },
    flavors: { peat: 2, smoke: 3, sweet: 3, fruity: 3, sherry: 2, spicy: 2, woody: 2, body: 3 }
  },
  // 4. 글렌피딕
  {
    id: 4,
    name: "글렌피딕 15년",
    thumbnailUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 110000,
    category: "Single Malt",
    rating: 4.3,
    desc: "세계에서 가장 많이 팔리는 싱글몰트. 솔레라 시스템으로 숙성되어 일정하고 부드러운 맛을 자랑합니다.",
    details: { brand: "Glenfiddich", manufacturer: "William Grant & Sons", region: "Speyside", type: "Single Malt", abv: "40%" },
    flavors: { peat: 0, smoke: 1, sweet: 4, fruity: 4, sherry: 3, spicy: 2, woody: 2, body: 3 }
  },
  // 5. 라가불린 (피트 괴물)
  {
    id: 5,
    name: "라가불린 16년",
    thumbnailUrl: "https://images.unsplash.com/photo-1605218457335-ee1f391a27e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 180000,
    category: "Single Malt",
    rating: 4.7,
    desc: "아일라 섬의 제왕. 강렬한 피트 향과 스모키함 뒤에 숨겨진 달콤함이 매력적입니다.",
    details: { brand: "Lagavulin", manufacturer: "Diageo", region: "Islay", type: "Single Malt", abv: "43%" },
    flavors: { peat: 5, smoke: 5, sweet: 2, fruity: 1, sherry: 2, spicy: 1, woody: 3, body: 5 }
  },
  // 6. 메이커스 마크 (버번)
  {
    id: 6,
    name: "메이커스 마크",
    thumbnailUrl: "https://images.unsplash.com/photo-1582298270544-79357d605470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 65000,
    category: "Bourbon",
    rating: 4.0,
    desc: "붉은 왁스 봉인이 특징인 입문용 버번. 호밀 대신 밀을 사용하여 부드럽고 달콤한 바닐라 향이 강합니다.",
    details: { brand: "Maker's Mark", manufacturer: "Beam Suntory", region: "Kentucky (USA)", type: "Bourbon", abv: "45%" },
    flavors: { peat: 0, smoke: 0, sweet: 5, fruity: 2, sherry: 0, spicy: 2, woody: 4, body: 3 }
  },
  // 7. 히비키 (일본 위스키)
  {
    id: 7,
    name: "히비키 하모니",
    thumbnailUrl: "https://images.unsplash.com/photo-1597075687490-8f673c6c17f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 180000,
    category: "Blended",
    rating: 4.4,
    desc: "일본의 사계절을 표현한 블렌디드 위스키. 화사한 꽃향기와 섬세한 밸런스가 일품입니다.",
    details: { brand: "Hibiki", manufacturer: "Suntory", region: "Japan", type: "Blended Whisky", abv: "43%" },
    flavors: { peat: 0, smoke: 0, sweet: 4, fruity: 4, sherry: 2, spicy: 1, woody: 3, body: 2 }
  },
  // 8. 탈리스커
  {
    id: 8,
    name: "탈리스커 10년",
    thumbnailUrl: "https://images.unsplash.com/photo-1613564998393-2708b5f36611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 90000,
    category: "Single Malt",
    rating: 4.3,
    desc: "스카이 섬의 거친 파도 같은 맛. 짭짤한 바다 소금 내음과 후추 같은 스파이시함이 특징입니다.",
    details: { brand: "Talisker", manufacturer: "Diageo", region: "Isle of Skye", type: "Single Malt", abv: "45.8%" },
    flavors: { peat: 3, smoke: 4, sweet: 2, fruity: 2, sherry: 1, spicy: 5, woody: 2, body: 4 }
  },
  // 9. 와일드 터키 (버번)
  {
    id: 9,
    name: "와일드 터키 101",
    thumbnailUrl: "https://images.unsplash.com/photo-1565538421884-28a1c93a0b5a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 60000,
    category: "Bourbon",
    rating: 4.1,
    desc: "강력한 50.5도의 타격감. 진한 카라멜과 오크 향, 스파이시한 피니시가 남자의 버번임을 증명합니다.",
    details: { brand: "Wild Turkey", manufacturer: "Campari Group", region: "Kentucky (USA)", type: "Bourbon", abv: "50.5%" },
    flavors: { peat: 0, smoke: 2, sweet: 3, fruity: 1, sherry: 0, spicy: 5, woody: 5, body: 5 }
  },
  // 10. 야마자키
  {
    id: 10,
    name: "야마자키 12년",
    thumbnailUrl: "https://images.unsplash.com/photo-1608655009893-2415d8623b3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 350000,
    category: "Single Malt",
    rating: 4.6,
    desc: "일본 싱글몰트의 자존심. 미즈나라 오크통 특유의 향 냄새와 열대 과일의 풍미가 조화롭습니다.",
    details: { brand: "Yamazaki", manufacturer: "Suntory", region: "Japan", type: "Single Malt", abv: "43%" },
    flavors: { peat: 0, smoke: 0, sweet: 4, fruity: 5, sherry: 2, spicy: 2, woody: 4, body: 3 }
  },
  // 11. 제임슨 (아이리쉬)
  {
    id: 11,
    name: "제임슨 스탠다드",
    thumbnailUrl: "https://images.unsplash.com/photo-1582298270544-79357d605470?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 35000,
    category: "Blended",
    rating: 3.8,
    desc: "세 번 증류하여 부드러움의 극치. 하이볼로 마시기에 가장 완벽한 아이리쉬 위스키입니다.",
    details: { brand: "Jameson", manufacturer: "Pernod Ricard", region: "Ireland", type: "Irish Whiskey", abv: "40%" },
    flavors: { peat: 0, smoke: 0, sweet: 3, fruity: 3, sherry: 0, spicy: 1, woody: 1, body: 2 }
  },
  // 12. 버팔로 트레이스 (버번)
  {
    id: 12,
    name: "버팔로 트레이스",
    thumbnailUrl: "https://images.unsplash.com/photo-1598155523122-38423bb4d6c1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 55000,
    category: "Bourbon",
    rating: 4.2,
    desc: "버번의 교과서. 바닐라, 흑설탕, 오크의 밸런스가 뛰어나며 가성비가 훌륭합니다.",
    details: { brand: "Buffalo Trace", manufacturer: "Sazerac", region: "Kentucky (USA)", type: "Bourbon", abv: "45%" },
    flavors: { peat: 0, smoke: 1, sweet: 4, fruity: 2, sherry: 0, spicy: 3, woody: 4, body: 3 }
  },
  // 13. 라프로익 (병원 냄새)
  {
    id: 13,
    name: "라프로익 10년",
    thumbnailUrl: "https://images.unsplash.com/photo-1605218457335-ee1f391a27e0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 130000,
    category: "Single Malt",
    rating: 4.4,
    desc: "호불호의 끝판왕. 소독약, 요오드, 젖은 흙 냄새가 강렬하지만 한번 빠지면 헤어나올 수 없습니다.",
    details: { brand: "Laphroaig", manufacturer: "Beam Suntory", region: "Islay", type: "Single Malt", abv: "40%" },
    flavors: { peat: 5, smoke: 4, sweet: 2, fruity: 1, sherry: 1, spicy: 2, woody: 3, body: 4 }
  },
  // 14. 로얄 살루트
  {
    id: 14,
    name: "로얄 살루트 21년",
    thumbnailUrl: "https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 250000,
    category: "Blended",
    rating: 4.5,
    desc: "엘리자베스 2세 대관식을 기념해 만든 술. 도자기 병만큼이나 우아하고 기품 있는 맛을 자랑합니다.",
    details: { brand: "Royal Salute", manufacturer: "Pernod Ricard", region: "Scotland", type: "Blended Scotch", abv: "40%" },
    flavors: { peat: 1, smoke: 1, sweet: 4, fruity: 5, sherry: 3, spicy: 1, woody: 2, body: 3 }
  },
  // 15. 아드벡
  {
    id: 15,
    name: "아드벡 10년",
    thumbnailUrl: "https://images.unsplash.com/photo-1613564998393-2708b5f36611?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 140000,
    category: "Single Malt",
    rating: 4.6,
    desc: "가장 완벽한 피트 위스키. 강렬한 스모키함 속에서도 레몬 라임의 상큼함이 터져 나옵니다.",
    details: { brand: "Ardbeg", manufacturer: "LVMH", region: "Islay", type: "Single Malt", abv: "46%" },
    flavors: { peat: 5, smoke: 5, sweet: 2, fruity: 3, sherry: 0, spicy: 2, woody: 2, body: 4 }
  },
];

// 가짜 서버 API 함수 (수정 없음 - 기존 로직 그대로 사용)
export const fetchWhiskies = async ({ page, category }) => {
  // 1. 네트워크 딜레이 (0.5초)
  await new Promise((resolve) => setTimeout(resolve, 500));

  // 2. 필터링 로직
  let filteredData = whiskyData;
  if (category && category !== "전체") {
    filteredData = whiskyData.filter((item) => item.category === category);
  }

  // 3. 페이지네이션 로직
  const limit = 12; // 한 페이지당 12개
  const startIndex = (page - 1) * limit;
  const slicedData = filteredData.slice(startIndex, startIndex + limit);

  // 4. 결과 반환
  return {
    content: slicedData,
    totalCount: filteredData.length,
    totalPages: Math.ceil(filteredData.length / limit)
  };
};