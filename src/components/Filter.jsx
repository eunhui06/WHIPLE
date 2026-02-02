function Filter() {
  // 임시 카테고리 목록
  const categories = ["전체 보기", "싱글 몰트", "블렌디드", "버번", "라이"];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-lg font-bold mb-6 text-gray-800">카테고리</h2>
      <ul className="space-y-2">
        {categories.map((cat, index) => (
          <li key={index}>
            {/* 첫 번째 항목(전체 보기)만 선택된 것처럼 스타일링 (테스트용) */}
            <button 
              className={`w-full text-left px-4 py-3 rounded-xl transition-colors font-medium
                ${index === 0 
                  ? 'bg-blue-50 text-blue-600 font-bold' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-800'
                }`}
            >
              {cat}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Filter;