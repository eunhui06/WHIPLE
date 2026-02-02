import { Link } from "react-router-dom";

function PageIntroduce() {
  return (
    <div className="min-h-screen bg-white">
      
      {/* 1. 히어로 섹션 */}
      <section className="relative bg-gray-900 text-white py-32 px-6 text-center overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900 to-gray-900 opacity-90 z-0"></div>
        
        <div className="relative z-10 w-full px-4 md:px-10 mx-auto">
          <h3 className="text-blue-400 font-bold tracking-widest uppercase mb-4 text-sm">
            My Whisky Storage
          </h3>
          <h1 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
            당신의 위스키 취향을 <br />
            <span className="text-blue-400">기록</span>하고 <span className="text-blue-400">발견</span>하세요.
          </h1>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed mb-10">
            수많은 위스키 중에서 내 입맛에 딱 맞는 한 잔을 찾는 여정. <br className="hidden md:block"/>
            '나만의 위스키 저장소'가 당신의 가이드가 되어드립니다.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-bold py-4 px-10 rounded-full transition-all hover:scale-105 shadow-lg hover:shadow-blue-500/30"
          >
            위스키 리스트 보러가기 →
          </Link>
        </div>
      </section>

      {/* 2. 특징 소개 */}
      <section className="py-24 bg-gray-50">
        <div className="w-full px-6 md:px-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">서비스 특징</h2>
            <p className="text-gray-500">우리는 위스키를 즐기는 더 나은 방법을 고민합니다.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {/* 카드 1 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                🥃
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">다양한 위스키 정보</h3>
              <p className="text-gray-500 leading-relaxed">
                싱글 몰트부터 블렌디드까지.<br/>
                브랜드, 생산지, 도수 등 필수 정보를<br/>
                한눈에 확인하세요.
              </p>
            </div>

            {/* 카드 2 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                📊
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">직관적인 맛 그래프</h3>
              <p className="text-gray-500 leading-relaxed">
                어려운 테이스팅 노트는 그만.<br/>
                Sweet, Peat, Spicy 등 8가지 지표로<br/>
                맛을 시각화해서 보여드립니다.
              </p>
            </div>

            {/* 카드 3 */}
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center group">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                💾
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">나만의 아카이브</h3>
              <p className="text-gray-500 leading-relaxed">
                내가 마신 위스키를 기록하고,<br/>
                비슷한 취향의 위스키를<br/>
                추천받을 수 있는 공간입니다.
              </p>
            </div>
            
             {/* 카드 4 (화면 채우기용 추가 카드 - 선택사항) */}
             <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow text-center group hidden xl:block">
              <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-6 group-hover:scale-110 transition-transform">
                ✨
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">프리미엄 멤버십</h3>
              <p className="text-gray-500 leading-relaxed">
                더 깊이 있는 정보를 원하시나요?<br/>
                전문가들의 칼럼과<br/>
                특별한 시음회에 초대합니다.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 3. 하단 문구 */}
      <section className="py-20 bg-white border-t border-gray-100 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          오늘 밤, 어떤 위스키와 함께하시겠어요?
        </h2>
        <Link to="/" className="text-blue-600 font-bold hover:underline text-lg">
          전체 리스트 구경하기
        </Link>
      </section>

    </div>
  );
}

export default PageIntroduce;