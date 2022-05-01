import { Flex, Stack } from "@chakra-ui/react";
import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/About";
import Blogs from "../components/Blogs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Intro from "../components/Intro";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

const Home: NextPage = () => {
  return (
    <Stack bgColor="#212121" spacing="2">
      <Head>
        <title>Aman Bisht | Full Stack Developer & Product Engineer</title>
      </Head>
      <Flex direction="column" h="100vh">
        <Header />
        <Intro />
      </Flex>
      <About />
      <Skills />
      <Projects />
      <Blogs />
      <Contact />
      <Footer />
    </Stack>
  );
};

export default Home;
