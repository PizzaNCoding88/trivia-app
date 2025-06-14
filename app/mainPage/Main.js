import React from "react";
import styles from "./Main.module.css";
import { useRouter } from "next/navigation";
import Buttons from "@/components/Buttons";
import Image from "next/image";
import Logo from "../../public/assets/images/logo.png";
import PageTransition from "@/components/PageTransition";

const Main = () => {
  const router = useRouter();

  const nextPage = () => {
    router.push("/questions");
  };

  return (
    <PageTransition>
      <div className={styles.page}>
        <div className={styles.container}>
          <Image
            alt="logo"
            src={Logo}
            priority={true}
            className={styles.logo}
          />
          <Buttons name={"Continue"} click={nextPage} color="secondary" />
        </div>
      </div>
    </PageTransition>
  );
};

export default Main;
