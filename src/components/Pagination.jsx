import { useSearchParams } from "react-router-dom";

function Pagination({ currentPage, totalPages }) {
  const [searchParams, setSearchParams] = useSearchParams();

  // 2. 페이지가 1개뿐이거나 없으면 버튼을 숨김
  if (!totalPages || totalPages <= 1) {
    return null;
  }

  const handlePageChange = (newPage) => {
    // 3. 존재하지 않는 페이지로 못 가게 막음
    if (newPage < 1 || newPage > totalPages) return;
    
    searchParams.set("page", newPage);
    setSearchParams(searchParams);
    window.scrollTo(0, 0);
  };

  // 4. 전체 페이지 수만큼 숫자 배열 만들기 (예: 5페이지면 [1,2,3,4,5])
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* 이전 버튼 (<) */}
      <button 
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition"
      >
        &lt;
      </button>
      
      {/* 5. [1, 2, 3] 대신, 위에서 만든 pages 배열을 사용해야 함! */}
      {pages.map((num) => (
        <button 
          key={num}
          onClick={() => handlePageChange(num)}
          className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition
            ${currentPage === num 
              ? 'bg-blue-600 text-white shadow-md' 
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
        >
          {num}
        </button>
      ))}
      
      {/* 다음 버튼 (>) */}
      <button 
        onClick={() => handlePageChange(currentPage + 1)}
        // 6. 마지막 페이지에서는 다음 버튼 못 누르게 막기
        disabled={currentPage === totalPages} 
        className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center transition"
      >
        &gt;
      </button>
    </div>
  );
}

export default Pagination;