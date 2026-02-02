import { Link } from "react-router-dom";

function WhiskyCard({ whisky }) {
  return (
    <Link to={`/detail/${whisky.id}`} className="group block h-full">
      {/* 카드 전체 박스 */}
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-gray-100 p-4 h-full flex flex-col items-center">
        
        {/* 1. 술 이름 */}
        <h3 className="text-lg font-bold text-gray-800 text-center mb-3 group-hover:text-blue-600 transition break-keep">
          {whisky.name}
        </h3>

        {/* 2. 술 사진 */}
        {/* aspect-square: 정사각형 비율 유지, object-contain: 사진 안 잘리게 다 보여줌 */}
        <div className="w-full aspect-[3/4] bg-gray-50 rounded-lg overflow-hidden mb-3 flex items-center justify-center">
          <img 
            src={whisky.thumbnailUrl} 
            alt={whisky.name} 
            className="h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* 3. 대표 평점 */}
        <div className="mt-auto flex items-center justify-center bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
          <span className="text-yellow-500 text-sm mr-1">★</span>
          <span className="text-gray-700 font-bold text-sm">{whisky.rating}</span>
        </div>

      </div>
    </Link>
  );
}

export default WhiskyCard;