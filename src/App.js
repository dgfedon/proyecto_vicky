import AboutMeContainer from './components/about/AboutMeContainer';
import CoverPageContainer from './components/cover/CoverPageContainer';
import FooterContainer from './components/footer/FooterContainer';
import NavBar from './components/navBar/NavBar';
import PackContainer from './components/pack/PackContainer';
import PorfolioContainer from './components/portfolio/PorfolioContainer';

import './App.css';


function App() {
    return (
        <div className="App">
            <NavBar />
            <CoverPageContainer />
            <AboutMeContainer />
            <PorfolioContainer />
            <PackContainer />
            <FooterContainer />
        </div>
    );
}

export default App;

// import logo from './logo.svg'; <img src={logo} className="App-logo" alt="logo" />
