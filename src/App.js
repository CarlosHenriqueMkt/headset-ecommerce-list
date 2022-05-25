import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import MainContent from './components/MainContent';

function App() {
  return (
    <div className="container">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
