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