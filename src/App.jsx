import './App.css';
import Header from './components/header';
import Banner from './components/banner';
import Expert from './components/experts';
import Newsletter from './components/newsletter';
import Plans from './components/plan';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <Expert />
      <Newsletter/>
      <Plans/>
      <Footer/>
    </div>
  );
}

export default App;
