import { useParams, Link } from "react-router-dom";
import { whiskyData } from "../data/mockData";

function WhiskyDetail() {
  const { id } = useParams();
  
  // 데이터 찾기 (mockData 구조가 바뀌었으므로 안전하게 처리)
  const whisky = whiskyData.find((w) => w.id === Number(id));

  // 데이터가 없을 때 예외 처리
  if (!whisky) {
    return <div className="p-10 text-center">존재하지 않는 위스키입니다.</div>;
  }

  // 데이터가 있어도 details나 flavors가 없을 수 있으므로 기본값 설정 (안전장치)
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
            src={whisky.thumbnailUrl} 
            alt={whisky.name} 
            className="w-full max-h-[600px] object-contain drop-shadow-2xl"
          />
        </div>

        {/* 🟡 오른쪽: 상세 정보 영역 */}
        <div>
          {/* 1. 헤더 정보 */}
          <div className="mb-8 border-b border-gray-200 pb-8">
            <span className="text-blue-600 font-bold text-sm tracking-wide uppercase">{details.type}</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-4">{whisky.name}</h1>
            <p className="text-3xl font-bold text-gray-800">
              {whisky.price.toLocaleString()}원
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
                <span className="font-bold text-gray-800">{details.abv || '40%'}</span>
              </div>
            </div>
          </div>

          {/* 3. 테이스팅 노트 (막대 그래프) */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              테이스팅 노트 
              <span className="text-sm font-normal text-gray-500 ml-2">(1~5점)</span>
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
              {/* flavors 객체를 반복문으로 돌려서 그래프 생성 */}
              {Object.entries(flavors).map(([key, value]) => (
                <div key={key} className="flex items-center text-sm">
                  {/* 맛 이름 (영어를 한글로 대문자 변환해서 보여줌) */}
                  <span className="w-20 font-bold text-gray-600 uppercase">{key}</span>
                  
                  {/* 막대 그래프 배경 */}
                  <div className="flex-1 h-3 bg-gray-100 rounded-full overflow-hidden ml-2">
                    {/* 실제 점수 막대 (점수에 따라 길이 width 조절) */}
                    <div 
                      className="h-full bg-blue-500 rounded-full"
                      style={{ width: `${(value / 5) * 100}%` }} // 5점 만점 기준 % 변환
                    ></div>
                  </div>
                  <span className="ml-3 text-gray-400 w-4 text-right">{value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export default WhiskyDetail;