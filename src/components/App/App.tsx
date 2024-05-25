import { Home } from "../Home/Home";
import { NotFound } from "../NotFound/NotFound";
import { URL_PAGES } from '../../config/config';
import styles from "./App.module.scss";
import {
  Route,
  Routes
} from "react-router-dom";


export const App: React.FC = () => {
  console.log(URL_PAGES.HOME)

  return (
    <div className={styles.app}>
      <Routes>
        <Route
          path={URL_PAGES.HOME}
          element={<Home />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </div>
  )
}