import React, { useState, useEffect } from "react";
import axios from "axios";

const apiBaseUrl = import.meta.env.VITE_API_URL || "/api";

function Admin() {
  // 1. 상태 관리: 등록용 데이터(formData)와 조회용 데이터(whiskyList)
  const [formData, setFormData] = useState({
    name: "",
    image_URL: "",
    brand_id: 0,
    distillery_id: 0,
    region_id: 0,
    whiskey_type_id: 0,
    price_band_id: 0,
    peat: 0,
    smoke: 0,
    sweet: 0,
    fruity: 0,
    sherry: 0,
    spicy: 0,
    woody: 0,
    body: 0,
    category: "Single Malt",
    min_price: 0,
    desc: ""
  });

  const [whiskyList, setWhiskyList] = useState([]); // 서버에서 받아온 위스키 목록

  // 2. 서버에서 위스키 목록을 받아오는 함수 (GET)
  const fetchWhiskyList = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/admin/whiskies`)
      // 백엔드 응답 구조에 맞춰 데이터 설정 (보통 response.data.items 또는 response.data)
      setWhiskyList(response.data.items || response.data);
    } catch (error) {
      console.error("목록 불러오기 실패:", error);
    }
  };

  // 3. 페이지가 처음 "켜질 때" 자동으로 목록 불러오기
  useEffect(() => {
    fetchWhiskyList();
  }, []);

  // 4. 입력값 변경 처리
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // 5. 위스키 등록 처리 (POST)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // 숫자로 보내야 하는 필드 변환
    const dataToSend = {
      ...formData,
      brand_id: Number(formData.brand_id),
      distillery_id: Number(formData.distillery_id),
      region_id: Number(formData.region_id),
      whiskey_type_id: Number(formData.whiskey_type_id),
      price_band_id: Number(formData.price_band_id),
      min_price: Number(formData.min_price),
      peat: Number(formData.peat),
      smoke: Number(formData.smoke),
      sweet: Number(formData.sweet),
      fruity: Number(formData.fruity),
      sherry: Number(formData.sherry),
      spicy: Number(formData.spicy),
      woody: Number(formData.woody),
      body: Number(formData.body),
    };

    try {
      const response = await axios.post(`${apiBaseUrl}/admin/whiskies/registration`, dataToSend);
      if (response.status === 200 || response.status === 201) {
        alert(`${formData.name} **위스키** 가 등록되었습니다! 🥃`);
        
        // 등록 성공 후 폼 초기화
        setFormData({
          name: "", image_URL: "", brand_id: 0, distillery_id: 0, region_id: 0, 
          whiskey_type_id: 0, price_band_id: 0, peat: 0, smoke: 0, sweet: 0, 
          fruity: 0, sherry: 0, spicy: 0, woody: 0, body: 0, 
          category: "Single Malt", min_price: 0, desc: ""
        });

        fetchWhiskyList();
      }
    } catch (error) {
      console.error("등록 에러:", error);
      alert("등록에 실패했습니다.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-10">
        
        {/* 상단: 위스키 등록 폼 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">🥃 새 위스키 등록</h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">위스키 이름</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="이름 입력" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">이미지 URL</label>
                <input type="text" name="image_URL" value={formData.image_URL} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="http://..." />
              </div>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
              {['peat', 'smoke', 'sweet', 'fruity', 'sherry', 'spicy', 'woody', 'body'].map((note) => (
                <div key={note}>
                  <label className="block text-xs font-bold text-gray-500 mb-1 capitalize">{note}</label>
                  <input type="number" name={note} min="0" max="10" value={formData[note]} onChange={handleChange} className="w-full px-3 py-2 rounded-lg border border-gray-200 outline-none focus:ring-2 focus:ring-blue-500" />
                </div>
              ))}
            </div>

            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg">
              위스키 등록하기
            </button>
          </form>
        </div>

        {/* 하단: 등록된 위스키 목록 테이블 */}
        <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
          <h2 className="text-xl font-bold text-gray-800 mb-6">📋 현재 등록된 위스키 목록</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50">
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">ID</th>
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">위스키 이름</th>
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">브랜드</th>
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">관리</th>
                </tr>
              </thead>
              <tbody>
                {whiskyList.length > 0 ? (
                  whiskyList.map((whisky) => (
                    <tr key={whisky.id} className="hover:bg-gray-50 border-b last:border-0 transition-colors">
                      <td className="p-4 text-sm text-gray-600">{whisky.id}</td>
                      <td className="p-4 text-sm font-medium text-gray-800">{whisky.name}</td>
                      <td className="p-4 text-sm text-gray-600">{whisky.brand_name || "정보 없음"}</td>
                      <td className="p-4 text-sm">
                        <button className="text-blue-600 font-bold hover:underline">수정</button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="4" className="p-10 text-center text-gray-400">등록된 위스키가 없습니다.</td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Admin;
