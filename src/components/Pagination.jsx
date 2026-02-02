function Pagination() {
  return (
    <div className="flex justify-center items-center space-x-2 mt-12">
      {/* 이전 버튼 */}
      <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center transition">
        &lt;
      </button>
      
      {/* 페이지 번호 */}
      {[1, 2, 3].map((num) => (
        <button 
          key={num}
          className={`w-10 h-10 rounded-full font-bold flex items-center justify-center transition
            ${num === 1 
              ? 'bg-blue-600 text-white shadow-md' // 선택된 페이지
              : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
            }`}
        >
          {num}
        </button>
      ))}
      
      {/* 다음 버튼 */}
      <button className="w-10 h-10 rounded-full bg-white border border-gray-200 text-gray-500 hover:bg-gray-50 flex items-center justify-center transition">
        &gt;
      </button>
    </div>
  );
}

export default Pagination;