import Header from "./components/Header";
import Footer from "./components/Footer";

import Skeleton from "./components/Skeleton";
import SINValidatorComp from "./components/SINValidatorComp";

function App() {
  return (
    <Skeleton>
      <Header />
      <SINValidatorComp />
      <Footer />
    </Skeleton>
  );
}

export default App;
