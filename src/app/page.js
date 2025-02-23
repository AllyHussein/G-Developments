import Approach from "./components/Approach";
import Discover from "./components/Discover";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Inquiries from "./components/Inquiries";
import Leadership from "./components/Leadership";
import Story from "./components/Story";

export default function Home() {
  return (
    <>
      <Header />;
      <Story />
      <Leadership />
      <Approach />
      <Discover />
      <Inquiries />
      <Footer />
    </>
  );
}
