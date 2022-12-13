import Header from "../Components/Home/header";
import First from "../Components/Home/section1";
import Second from "../Components/Home/section2";
import Third from "../Components/Home/section3";
import Fourth from "../Components/Home/section4";
import Fifth from "../Components/Home/section5";
import Footer from "../Components/Home/footer";

function Home() {
  return (
    <div className="App">
      <Header />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Footer />
    </div>
  );
}

export default Home;
