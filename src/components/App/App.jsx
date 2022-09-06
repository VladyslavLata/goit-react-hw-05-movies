import { Routes, Route } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { Home } from 'pages/Home/Home';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movies" element={<Home />} />
        <Route path="movies/:movieId" element={<Home />}>
          <Route path="cast" element />
          <Route path="reviews" element />
        </Route>
      </Route>
    </Routes>
  );
};
