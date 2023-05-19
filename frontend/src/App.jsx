import { BrowserRouter } from "react-router-dom";
import { 
  Hero,
  Navbar,
  TourCard,
  TourLists,
  Footer,
} from './components';
import './index.css';

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <div>
          <Navbar />
          <Hero />
        </div>
        <TourCard />
        <TourLists />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
