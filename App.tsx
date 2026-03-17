import { useState, useCallback } from 'react';
import AnnouncementBar from './components/AnnouncementBar';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import RecognitionSection from './components/RecognitionSection';
import GameSection from './components/GameSection';
import WorldSection from './components/WorldSection';
import CreaturesSection from './components/CreaturesSection';
import FeaturesSection from './components/FeaturesSection';
import ThesisSection from './components/ThesisSection';
import SurveySection from './components/SurveySection';
import MediaSection from './components/MediaSection';
import AboutSection from './components/AboutSection';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';

const App = () => {
  const [loaded, setLoaded] = useState(false);
  const handleLoadComplete = useCallback(() => setLoaded(true), []);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={handleLoadComplete} />}
      <div className={`min-h-screen bg-background ${loaded ? '' : 'opacity-0'}`}>
        <AnnouncementBar />
        <Navbar />
        <HeroSection />
        <RecognitionSection />
        <GameSection />
        <WorldSection />
        <CreaturesSection />
        <FeaturesSection />
        <ThesisSection />
        <SurveySection />
        <MediaSection />
        <AboutSection />
        <Footer />
      </div>
    </>
  );
};

export default App;
