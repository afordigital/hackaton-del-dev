import { Awards } from "./Awards";
import { Faq } from "./FAQ";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Nav } from "./Nav";
import { Rules } from "./Rules";
import { Sponsors } from "./Sponsors";

export const Home = () => {
  return (
    <>
      <Nav />
      <Header />
      <Rules />
      <Sponsors />
      <Awards />
      <Faq />
      <Footer />
    </>
  );
};
