import Header from './components/Header';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Footer from './components/Footer';
import '../src/styles/styles.css';
import AboutMe from './components/AboutMe';
import Profile from './components/Profile';
import WorkExperience from './components/WorkExperience';

function App() {
    return (
        <div className="App">
            <Header />
            <div className="body">
                <div className="left-side">
                    <AboutMe />
                    {/* <div className="flex">
                        <div className="">
                            <Profile />
                        </div>
                        <div className="">
                            <AboutMe />
                        </div>
                    </div> */}
                    <Footer />
                </div>
                <div className='right-side'>
                    <WorkExperience />
                    <Projects />
                    <Skills />
                </div>
            </div>
        </div>
    );
}

export default App;
