export const whiskyData = [
  {
    id: 1,
    name: "발베니 12년 더블우드",
    thumbnailUrl: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    price: 120000,
    category: "Single Malt",
    rating: 4.5,
    desc: "전통적인 수제 방식을 고수하는 발베니의 대표작. 버번 오크통과 셰리 오크통에서 두 번 숙성하여 깊은 풍미를 자랑합니다.",
    
    // 👇 [NEW] 상세 정보 추가
    details: {
      brand: "Balvenie",
      manufacturer: "William Grant & Sons",
      region: "Speyside (Scotland)",
      type: "Single Malt Scotch",
      abv: "40%"
    },
    // 👇 [NEW] 맛 노트 (0 ~ 5점)
    flavors: {
      peat: 1,    // 피트감
      smoke: 1,   // 스모키
      sweet: 5,   // 단맛
      fruity: 4,  // 과일향
      sherry: 3,  // 셰리향
      spicy: 2,   // 매운맛
      woody: 3,   // 나무향
      body: 3     // 바디감
    }
  },
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
    flavors: {
      peat: 0, smoke: 1, sweet: 4, fruity: 5, sherry: 5, spicy: 3, woody: 4, body: 4
    }
  },
  {
    id: 3,
    name: "조니워커 블루라벨",
    thumbnailUrl: "https://https://unsplash.com/ko/%EC%82%AC%EC%A7%84/%EB%82%98%EB%AC%B4-%ED%85%8C%EC%9D%B4%EB%B8%94-%EC%9C%84%EC%97%90-%EB%86%93%EC%9D%B8-%EC%88%A0%EB%B3%91-7j9JpNLxtuAimageshttps://share.google/m1VGWFEqU8VXO4r4Q.unsplash.com/photo-1569529465841-dfecd4962754?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
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
    flavors: {
      peat: 2, smoke: 3, sweet: 3, fruity: 3, sherry: 2, spicy: 2, woody: 2, body: 3
    }
  },
];

// ... (getWhiskyList, getWhiskyDetail 함수는 그대로 유지)