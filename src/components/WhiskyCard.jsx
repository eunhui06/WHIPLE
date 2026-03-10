import { Link } from "react-router-dom";

function WhiskyCard({ whisky }) {
  const linkId = whisky.originalId || whisky.id;
  const imageUrl = whisky.image_URL || whisky.thumbnailUrl;
  const subtitle = whisky.brand_name || whisky.category || whisky.whiskey_type_name;

  return (
    <Link to={`/detail/${linkId}`} className="group block h-full">
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
            src={imageUrl || "https://via.placeholder.com/300?text=No+Image"}
            alt={whisky.name} 
            className="h-full object-contain p-2 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mt-auto text-sm font-medium text-gray-500 text-center">
          {subtitle || "정보 없음"}
        </div>

      </div>
    </Link>
  );
}

export default WhiskyCard;
