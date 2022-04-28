import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Adminbar from "../components/Adminbar";

const Home: NextPage = () => {
  return (
    <div>
      <Adminbar />
    </div>
  );
};

export default Home;
