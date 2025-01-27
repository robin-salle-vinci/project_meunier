import Register from "../Register/Register";
import Login from "../Login/Login";
import NavBar from "../NavBar/NavBar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      {false ? (  // Première condition (par exemple, vérifie si l'utilisateur est connecté)
          <div className="page">
          <header>
            <NavBar />
          </header>
          <main>
            <Outlet />
          </main>
          <footer></footer>
        </div>
      ) : (
        // Si la première condition est fausse, on vérifie une seconde condition
        false ? (  // Deuxième condition (par exemple, si l'utilisateur n'est pas encore inscrit)
          <Login />  // Si la deuxième condition est vraie, on affiche la page d'inscription
        ) : (
          <Register />  // Si la deuxième condition est fausse, on affiche la page de connexion
        )
      )
      }
    </>
  );
};

export default App;
