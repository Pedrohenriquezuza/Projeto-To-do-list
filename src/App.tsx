import { BrowserRouter, Route, Routes } from "react-router";
import PageComponents from "./pages/Page-components";
import LayoutMain from "./pages/Layout-main";
import PageHome from "./pages/Page-home";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<LayoutMain />}>
          <Route index element={<PageHome />} />
          <Route path="/componentes" element={<PageComponents />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
