import { Route, Routes, useNavigate } from 'react-router-dom';
import Landing from "../views/landing.jsx";


const Main = () => {
    return (
        <main className="y-wrap">
          <Routes>
        <Route path="/*" element={<Landing />} />
      </Routes>
        </main>
    )
};

export default Main;