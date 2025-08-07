
import { BrowserRouter, Routes, Route } from "react-router";
import LandingPage from '../pages/LandingPage';
export default function AppRoutes() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element = {<LandingPage />} />
          </Routes>
          </BrowserRouter>
  )
}
