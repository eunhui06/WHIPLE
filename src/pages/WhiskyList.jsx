import { whiskyData } from "../data/mockData";
import WhiskyCard from "../components/WhiskyCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

function WhiskyList() {
  // 실제 데이터가 많아지면 이 부분은 지우고 whiskyData를 그대로 쓰면 됩니다.
  const displayData = Array(4).fill(whiskyData).flat().slice(0, 12);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 py-10">
        
        <div className="flex flex-col md:flex-row gap-8">
          
          {/* 사이드바 (필터) */}
          <aside className="md:w-60 flex-shrink-0 hidden md:block">
            <div className="sticky top-24">
              <Filter />
            </div>
          </aside>

          {/* 메인 콘텐츠 */}
          <main className="flex-1">
            <div className="mb-6 pb-2 border-b border-gray-200 flex justify-between items-end">
               <h1 className="text-2xl font-bold text-gray-800">🥃 오늘의 위스키</h1>
            </div>

            {/* ⭐️ 그리드 설정 변경 ⭐️ */}
            {/* sm: 2열, lg: 3열, xl: 4열 (화면이 넓으면 4개씩 보임) */}
            <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {displayData.map((whisky, index) => (
                <WhiskyCard key={index} whisky={whisky} />
              ))}
            </div>

            <Pagination />
          </main>

        </div>
      </div>
    </div>
  );
}

export default WhiskyList;