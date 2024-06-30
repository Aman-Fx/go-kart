import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs.page";
import CommonPage from "./pages/Common.page";
import ContactUsPage from "./pages/ContactUs.page";
import DownloadsPage from "./pages/Downloads.page";
import GalleryPage from "./pages/Gallery.page";
import HomePage from "./pages/Home.page";
import SeasonPage from "./pages/Season.page";
// import EBikePage from './pages/EBike.page';
import { ROUTES } from "./constants";
import ComingSoonPage from './pages/ComingSoon.page';
import GoKartPage from './pages/GoKart.page';
import NotFoundPage from "./pages/NotFound.page";
import RegistrationPage from "./pages/RegisterNow.page";

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path={ROUTES.home} element={
          <CommonPage />
        } >
          <Route index element={<HomePage />} />
          <Route path={ROUTES.aboutUs} element={<AboutUsPage />} />
          <Route path={ROUTES.contactUs} element={<ContactUsPage />} />
          <Route path={ROUTES.gallery} element={<GalleryPage />} />
          <Route path={ROUTES.goKart} element={<GoKartPage />} />
          <Route path={ROUTES.season} element={<SeasonPage />} />
          <Route path={ROUTES.downloads} element={<DownloadsPage />} />
          <Route path={ROUTES.eBike} element={<ComingSoonPage />} />
          <Route path={ROUTES.quadBikeATV} element={<ComingSoonPage />} />
          <Route path={ROUTES.registration} element={<RegistrationPage />} />
          <Route path={ROUTES.training} element={<ComingSoonPage />} />
          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
