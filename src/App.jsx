import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUsPage from "./pages/AboutUs.page";
import CommonPage from "./pages/Common.page";
import ContactUsPage from "./pages/ContactUs.page";
import GalleryPage from "./pages/Gallery.page";
import HomePage from "./pages/Home.page";
import SeasonPage from "./pages/Season.page";
import { ROUTES } from "./constants";
import DownloadsPage from "./pages/Downloads.page";
import EBikePage from './pages/EBike.page';
import GoKartPage from './pages/GoKart.page';
import QuadBikePage from './pages/QuadBike.page';
import NotFoundPage from "./pages/NotFound.page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.home} element={
          <CommonPage />
        } >
          <Route index element={<HomePage />} />
          <Route path={ROUTES.aboutUs} element={<AboutUsPage />} />
          <Route path={ROUTES.contactUs} element={<ContactUsPage />} />
          <Route path={ROUTES.gallery} element={<GalleryPage />} />
          <Route path={ROUTES.season} element={<SeasonPage />} />
          <Route path={ROUTES.downloads} element={<DownloadsPage />} />
          <Route path={ROUTES.eBike} element={<EBikePage />} />
          <Route path={ROUTES.goKart} element={<GoKartPage />} />
          <Route path={ROUTES.quadBikeATV} element={<QuadBikePage />} />
          {/* <Route path="contact-us" element={<ContactUsPage />} /> */}
          {/* add more routes here */}
          {/* <Route path="route-name" element={<YourComponent />} /> */}

          {/* This route will catch all unknown routes and display a 404 page */}
          {/* <Route path="*" element={<h1>Route Not Found</h1>} /> */}

          <Route path={ROUTES.notFound} element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
