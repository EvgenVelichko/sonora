import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductSection from './components/ProductSection';
import TrustPilotReviews from './components/TrustPilotReviews';
import FAQ from './components/FAQ';
import ExperienceSection from './components/ExperienceSection';
import ImmersiveSound from './components/ImmersiveSound';
import StayFocused from './components/StayFocused';
import FittingDesign from './components/FittingDesign';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <HeroSection />
      <ProductSection />
      <TrustPilotReviews />
      <FAQ />
      <ExperienceSection />
      <ImmersiveSound />
      <StayFocused />
      <FittingDesign />
      <Footer />
    </div>
  );
}

export default App;