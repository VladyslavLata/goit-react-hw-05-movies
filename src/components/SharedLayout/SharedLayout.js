import { NavLink, Outlet } from 'react-router-dom';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="movies">Movies</NavLink>
      </header>
      <main>
        <div>
          <Outlet />
        </div>
      </main>
    </>
  );
};
