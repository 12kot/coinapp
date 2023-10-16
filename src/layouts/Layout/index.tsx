import React, { ReactElement, Suspense } from "react";
import { Outlet } from "react-router-dom";
import styles from "./layout.module.scss"
import Header from "layouts/Header";
import Footer from "layouts/Footer";

const Layout = (): ReactElement => {
  return (
    <>
      <Header />

      <Suspense
        fallback={
          <div className={styles.loader}>
            <>LOADING</>
          </div>
        }
      >
        <main className={styles.container}>
          <Outlet />
        </main>
      </Suspense>

      <Footer />
    </>
  );
};

export default Layout;
