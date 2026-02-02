import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen">
      
      {/* 고정된 헤더 */}
      <header className="bg-white shadow-md p-4 flex justify-between items-center px-10 fixed top-0 w-full z-10">
        <Link to="/" className="text-2xl font-bold text-gray-800">
          My Whisky
        </Link>
        <nav className="flex gap-4">
          <Link to="/introduce" className="hover:text-yellow-500 font-medium">소개</Link>
        </nav>
      </header>

      {/* 바뀌는 내용이 들어갈 자리 (Outlet) */}
      <main className="flex-grow pt-20 bg-gray-50">
        <div className="container mx-auto px-4 h-full">
           <Outlet />
        </div>
      </main>

      {/* 고정된 푸터 */}
      <footer className="bg-gray-800 text-white p-6 text-center">
        <p>&copy; 2026 My Whisky Storage. All rights reserved.</p>
      </footer>

    </div>
  );
}

export default Layout;