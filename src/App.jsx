import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CharactersListPage from "./pages/CharactersListPage";
import CharacterDetailPage from './pages/CharacterDetailPage';
import LocationListPage from './pages/LocationListPage';
import CharacterByLocationPage from './pages/CharacterByLocationPage';
import Layout from './components/Layout';
import PageNotFound from './pages/NotFound';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout><CharactersListPage /></Layout>} />
          <Route path="/character/:characterId" element={<Layout><CharacterDetailPage /></Layout>} />
          <Route path="/locations" element={<Layout><LocationListPage /></Layout>} />
          <Route path="/location/:locationName" element={<Layout><CharacterByLocationPage /></Layout>} />
          <Route path="*" element={<Layout><PageNotFound/></Layout>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
