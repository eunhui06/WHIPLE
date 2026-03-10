import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query"; // 👈 React Query 가져오기
import { fetchWhiskies } from "../data/mockData";
import WhiskyCard from "../components/WhiskyCard";
import Filter from "../components/Filter";
import Pagination from "../components/Pagination";

function WhiskyList() {
  const [searchParams] = useSearchParams();
  
  // URL에서 상태 가져오기 (URL이 곧 상태!)
  const category = searchParams.get("category") || "전체";
  const page = parseInt(searchParams.get("page") || "1");

  // useQuery로 데이터 요청하기
  const { data, isLoading, isError } = useQuery({
    queryKey: ["whiskies", category, page], // 이 키가 바뀌면 자동으로 재요청됨
    queryFn: () => fetchWhiskies({ category, page }),
  });

  // 로딩 UI (스켈레톤: 회색 박스 깜빡임)
  if (isLoading) {
    return (
      <LayoutWrapper categories={[]}>
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 animate-pulse">
          {/* 회색 박스 12개 보여주기 */}
          {Array(8).fill(0).map((_, i) => (
            <div key={i} className="bg-gray-200 rounded-xl h-80 w-full"></div>
          ))}
        </div>
      </LayoutWrapper>
    );
  }

  // 에러 UI
  if (isError) {
    return (
      <LayoutWrapper categories={[]}>
        <div className="text-center py-20 text-red-500">
          데이터를 불러오는 중 문제가 발생했습니다. 😥
        </div>
      </LayoutWrapper>
    );
  }

  // 성공 UI
  return (
    <LayoutWrapper categories={data?.categories || []}>
      <div className="mb-6 pb-2 border-b border-gray-200 flex justify-between items-end">
        <h1 className="text-2xl font-bold text-gray-800">
          {category === "전체" ? "🥃 전체 위스키" : `🥃 ${category}`}
        </h1>
        <span className="text-sm text-gray-500">
          총 {data?.totalCount}개
        </span>
      </div>

      {data?.content.length > 0 ? (
        <div className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.content.map((whisky) => (
            <WhiskyCard key={whisky.id} whisky={whisky} />
          ))}
        </div>
      ) : (
        // 텅 비었을 때 UX
        <div className="flex flex-col items-center justify-center py-20 text-gray-400">
          <div className="text-6xl mb-4">🌪️</div>
          <p className="text-lg">해당하는 위스키가 없습니다.</p>
        </div>
      )}

      {/* 페이지네이션 */}
      <Pagination 
      currentPage={page}
      totalPages={data?.totalPages || 1}
      />
    </LayoutWrapper>
  );
}

// 레이아웃 중복을 줄이기 위한 내부 컴포넌트
function LayoutWrapper({ children, categories }) {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="md:w-60 flex-shrink-0 hidden md:block">
            <div className="sticky top-24">
              <Filter categories={categories} />
            </div>
          </aside>
          <main className="flex-1">{children}</main>
        </div>
      </div>
    </div>
  );
}

export default WhiskyList;
