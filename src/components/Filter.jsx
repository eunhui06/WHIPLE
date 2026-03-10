import { useSearchParams } from "react-router-dom"; // 👈 이 줄이 꼭 있어야 합니다!

function Filter({ categories = [] }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentCategory = searchParams.get("category") || "전체";

  const categoryOptions = ["전체", ...categories];

  const handleFilterClick = (cat) => {
    // ⭐️ 버튼을 누르면 URL을 변경하는 핵심 코드
    if (cat === "전체") {
      setSearchParams({}); // 전체면 URL 깨끗하게
    } else {
      setSearchParams({ category: cat, page: 1 }); // 카테고리 설정 & 1페이지로 리셋
    }
  };

  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 h-full">
      <h2 className="text-lg font-bold mb-6 text-gray-800">카테고리</h2>
      <ul className="space-y-2">
        {categoryOptions.map((cat, index) => (
          <li key={index}>
            <button 
              onClick={() => handleFilterClick(cat)} // 👈 클릭 이벤트 연결
              className={`w-full text-left px-4 py-3 rounded-xl transition-colors font-medium
                ${currentCategory === cat 
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
