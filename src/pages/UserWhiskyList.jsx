import { useState, useEffect } from "react";

function UserWhiskyList() {
  // 1. 서버에서 받아올 위스키 목록을 저장할 빈 배열
  const [whiskies, setWhiskies] = useState([]);

  // 2. 화면이 처음 켜질 때 한 번만 실행되는 마법의 훅!
  useEffect(() => {
    // GET 요청은 method나 body가 필요 없어! 주소만 부르면 끝.
    fetch('/api/whiskies')
      .then(response => response.json())
      .then(data => {
        console.log("불러온 위스키 목록:", data);
        setWhiskies(data); // 뜯은 데이터를 state에 쏙 저장
      })
      .catch(error => console.error("목록 불러오기 실패:", error));
  }, []); // 🚨 이 빈 배열([])을 꼭 넣어줘야 무한 반복 요청을 막을 수 있어!

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">🥃 WHIPLE 위스키 목록</h1>

        {/* 3. 그리드(격자) 형태로 위스키 카드 나열하기 */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {whiskies.map((whisky) => (
            <div 
              key={whisky.id} 
              className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow cursor-pointer"
            >
              {/* 위스키 이미지 */}
              <img
                src={whisky.image_URL || "https://via.placeholder.com/300?text=No+Image"} // 이미지가 없을 때 띄울 임시 기본 이미지
                alt={whisky.name}
                className="w-full h-56 object-cover"
              />
              
              {/* 위스키 상세 정보 */}
              <div className="p-5">
                <div className="text-xs font-bold text-blue-600 mb-1">
                  {whisky.whiskey_type_name || "Single Malt"}
                </div>
                <h2 className="text-lg font-bold text-gray-800 mb-2 truncate">
                  {whisky.name}
                </h2>
                <div className="text-gray-600 font-medium">
                  {/* 가격을 천 단위로 콤마(,) 찍어서 예쁘게 보여주기 */}
                  {whisky.min_price ? `${whisky.min_price.toLocaleString()}원 ~` : "가격 미정"}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 4. 데이터가 하나도 없을 때 보여줄 안내 문구 */}
        {whiskies.length === 0 && (
          <div className="text-center text-gray-500 mt-20 text-lg">
            진열된 위스키가 없습니다. 관리자 페이지에서 위스키를 추가해 보세요!
          </div>
        )}
      </div>
    </div>
  );
}

export default UserWhiskyList;