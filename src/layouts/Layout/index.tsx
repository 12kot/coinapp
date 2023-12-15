import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss";
import Footer from "components/Footer";
import Loader from "components/Loader";
import useLocalStorage from "utils/hooks/useLocaleStorage";
import { TMyCoin } from "types/coin";
import MyCoinsContextProvider from "contexts/MyCoinsContextProvider";
import HeaderContainer from "containers/Header/HeaderContainer";

const Layout = (): ReactElement => {
  const { value: coins, setValue: setCoins } = useLocalStorage<TMyCoin[]>(
    [],
    "coins"
  );

  return (
    <>
      <MyCoinsContextProvider coins={coins} setCoins={setCoins}>
        <HeaderContainer />
      </MyCoinsContextProvider>

      <Suspense
        fallback={
          <div className={styles.loader}>
            <Loader />
          </div>
        }
      >
        <main className={styles.container}>
          <MyCoinsContextProvider coins={coins} setCoins={setCoins}>
            <Outlet />
          </MyCoinsContextProvider>
        </main>
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
