import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { apiBaseUrl, normalizeWhisky } from "../data/mockData";

const normalizeDetail = (item) => {
  const normalized = normalizeWhisky(item);

  return {
    id: normalized.id,
    name: normalized.name || "이름 없음",
    imageUrl: normalized.image_URL || "https://via.placeholder.com/600?text=No+Image",
    type: normalized.category || "정보 없음",
    price: normalized.price,
    desc: normalized.desc || "설명이 아직 등록되지 않았습니다.",
    details: {
      brand: normalized.brand || "정보 없음",
      manufacturer: normalized.manufacturer || "정보 없음",
      region: normalized.region || "정보 없음",
      abv: normalized.abv || "정보 없음",
    },
    flavors: normalized.flavors,
  };
};

function WhiskyDetail() {
  const { id } = useParams();
  const { data: whisky, isLoading, isError } = useQuery({
    queryKey: ["whisky-detail", id],
    queryFn: async () => {
      const response = await fetch(`${apiBaseUrl}/whiskies/${id}`);

      if (!response.ok) {
        throw new Error("Failed to fetch whisky detail");
      }

      const result = await response.json();
      return normalizeDetail(result);
    },
    enabled: Boolean(id),
  });

  if (isLoading) {
    return <div className="p-10 text-center">상세 정보를 불러오는 중입니다.</div>;
  }

  if (isError || !whisky) {
    return <div className="p-10 text-center">존재하지 않는 위스키입니다.</div>;
  }

  const details = whisky.details || {};
  const flavors = whisky.flavors || {};

  return (
    <div className="bg-white min-h-screen pb-20">
      
      {/* 상단 네비게이션 (뒤로가기) */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <Link to="/" className="text-gray-500 hover:text-gray-800 font-medium flex items-center">
          ← 목록으로 돌아가기
        </Link>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        
        {/* 🟢 왼쪽: 메인 사진 영역 */}
        <div className="bg-gray-50 rounded-3xl p-8 flex items-center justify-center border border-gray-100 sticky top-24">
          <img 
            src={whisky.imageUrl}
            alt={whisky.name} 
            className="w-full max-h-[600px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* 🟡 오른쪽: 상세 정보 영역 */}
        <div>
          {/* 1. 헤더 정보 */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <span className="text-blue-600 font-bold text-sm tracking-wide uppercase">{whisky.type}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{whisky.name}</h1>
            <p className="text-3xl font-bold text-gray-800">
              {whisky.price || "가격 미정"}
            </p>
            <p className="text-gray-600 mt-6 text-lg leading-relaxed">
              {whisky.desc}
            </p>
          </div>

          {/* 2. 상세 스펙 (Grid로 정리) */}
          <div className="mb-10">
            <h3 className="text-xl font-bold text-gray-900 mb-4">상세 정보</h3>
            <div className="bg-gray-50 rounded-xl p-6 grid grid-cols-2 gap-y-4 gap-x-8 text-sm md:text-base border border-gray-100">
              <div>
                <span className="block text-gray-500 mb-1">브랜드</span>
                <span className="font-bold text-gray-800">{details.brand}</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">제조사</span>
                <span className="font-bold text-gray-800">{details.manufacturer}</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">생산 지역</span>
                <span className="font-bold text-gray-800">{details.region}</span>
              </div>
              <div>
                <span className="block text-gray-500 mb-1">알코올 도수 (ABV)</span>
                <span className="font-bold text-gray-800">{details.abv}</span>
              </div>
            </div>
          </div>

          {/* 3. 테이스팅 노트 (막대 그래프) */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              테이스팅 노트 
              <span className="text-sm font-normal text-gray-500 ml-2">(1~5점)</span>
            </h3>

            {Object.keys(flavors).length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {Object.entries(flavors).map(([key, value]) => (
                  <div key={key} className="flex items-center text-sm">
                    <span className="w-20 font-bold text-gray-600 uppercase">{key}</span>
                    <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden ml-2">
                      <div
                        className="h-full bg-blue-500 rounded-full"
                        style={{ width: `${(value / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="ml-3 text-gray-400 w-4 text-right">{value}</span>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-500">테이스팅 노트 정보가 아직 없습니다.</p>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhiskyDetail;
