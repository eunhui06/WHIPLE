import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; 

import WhiskyList from "./pages/WhiskyList";
import WhiskyDetail from "./pages/WhiskyDetail";
import PageIntroduce from "./pages/PageIntroduce";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          
          {/* 👇 이 안쪽에 있는 애들만 헤더/푸터가 생깁니다 */}
          <Route path="/" element={<WhiskyList />} />
          <Route path="/detail/:id" element={<WhiskyDetail />} />
          <Route path="/introduce" element={<PageIntroduce />} />
          
        </Route> {/* 👈 여기서 Layout 닫기 */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;