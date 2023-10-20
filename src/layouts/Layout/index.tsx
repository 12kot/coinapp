import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Header from "layouts/Header";
import Footer from "layouts/Footer";
import Loader from "components/Loader";
import useLocalStorage from "utils/hooks/useLocaleStorage";
import { TMyCoin } from "types/coin";
import { MyCoinsContext } from "contexts/contexts";


const Layout = (): ReactElement => {
  const { value: coins, setValue: setCoins } = useLocalStorage<TMyCoin[]>(
    [],
    "coins"
  );

  return (
    <>
      <MyCoinsContext.Provider value={{coins, setCoins}}>
        <Header />
      </MyCoinsContext.Provider>

      <Suspense
        fallback={
          <div className={styles.loader}>
            <Loader />
          </div>
        }
      >
        <main className={styles.container}>
          <MyCoinsContext.Provider value={{coins, setCoins}}>
            <Outlet />
          </MyCoinsContext.Provider>
        </main>
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
