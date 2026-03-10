import React, { useState, useEffect } from "react";
import axios from "axios";
import { apiBaseUrl, createInitialWhiskyFormData, flavorKeys, normalizeWhisky } from "../data/mockData";

function Admin() {
  const [formData, setFormData] = useState(createInitialWhiskyFormData);

  const [whiskyList, setWhiskyList] = useState([]); // 서버에서 받아온 위스키 목록

  // 2. 서버에서 위스키 목록을 받아오는 함수 (GET)
  const fetchWhiskyList = async () => {
    try {
      const response = await axios.get(`${apiBaseUrl}/admin/whiskies`);
      const items = Array.isArray(response.data?.items) ? response.data.items : response.data;
      setWhiskyList(Array.isArray(items) ? items.map(normalizeWhisky) : []);
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

    const dataToSend = {
      ...formData,
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

        setFormData(createInitialWhiskyFormData());

        fetchWhiskyList();
      }
    } catch (error) {
      console.error("등록 에러:", error);
      alert("등록에 실패했습니다.");
    }
  };

  const handleDelete = async (id, name) => {
    const shouldDelete = window.confirm(`${name} 위스키를 삭제하시겠습니까?`);

    if (!shouldDelete) {
      return;
    }

    try {
      const response = await axios.delete(`${apiBaseUrl}/admin/whiskies/${id}`);

      if (response.status === 200 || response.status === 204) {
        fetchWhiskyList();
      }
    } catch (error) {
      console.error("삭제 에러:", error);
      alert("삭제에 실패했습니다.");
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
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">브랜드</label>
                <input type="text" name="brand" value={formData.brand} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="브랜드명 입력" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">제조사</label>
                <input type="text" name="manufacturer" value={formData.manufacturer} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="제조사 입력" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">생산 지역</label>
                <input type="text" name="region" value={formData.region} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="지역 입력" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">알코올 도수</label>
                <input type="text" name="abv" value={formData.abv} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="예: 40%" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">가격</label>
                <input type="text" name="price" value={formData.price} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="예: 89000원" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">카테고리</label>
                <input type="text" name="category" value={formData.category} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none" placeholder="예: Single Malt" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">설명</label>
              <textarea
                name="desc"
                value={formData.desc}
                onChange={handleChange}
                rows="4"
                className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 outline-none resize-none"
                placeholder="위스키 설명 입력"
              />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-gray-100">
              {flavorKeys.map((note) => (
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
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">카테고리</th>
                  <th className="p-4 text-sm font-bold text-gray-600 border-b">관리</th>
                </tr>
              </thead>
              <tbody>
                {whiskyList.length > 0 ? (
                  whiskyList.map((whisky) => (
                    <tr key={whisky.id} className="hover:bg-gray-50 border-b last:border-0 transition-colors">
                      <td className="p-4 text-sm text-gray-600">{whisky.id}</td>
                      <td className="p-4 text-sm font-medium text-gray-800">{whisky.name}</td>
                      <td className="p-4 text-sm text-gray-600">{whisky.brand || "정보 없음"}</td>
                      <td className="p-4 text-sm text-gray-600">{whisky.category || "정보 없음"}</td>
                      <td className="p-4 text-sm">
                        <button
                          type="button"
                          onClick={() => handleDelete(whisky.id, whisky.name)}
                          className="text-red-600 font-bold hover:underline"
                        >
                          삭제
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" className="p-10 text-center text-gray-400">등록된 위스키가 없습니다.</td>
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
