import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Products from './components/Products';
import './App.css';

function App() {
    return (
        <>
        <Header />
        <main id="main">
            <Hero />
            <Products />
        </main>
        <Footer />
    </>
    );
}

export default App;
