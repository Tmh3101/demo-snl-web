import "./App.css";
import {
  Header,
  HeroSection,
  TimelineSection,
  VerificationSection,
  HeritageSection,
  Footer,
} from "./components";
import {
  productData,
  timelineEvents,
  verificationData,
  artisanData,
  distributorData,
} from "./data";

function App() {
  return (
    <>
      <Header />
      <main>
        <HeroSection
          productCode={productData.productCode}
          blockchainHash={productData.blockchainHash}
          age={productData.age}
          imageUrl={productData.heroImageUrl}
        />
        
        <VerificationSection
          species={verificationData.species}
          molecularMarker={verificationData.molecularMarker}
          purity={verificationData.purity}
          compounds={verificationData.compounds}
          imageUrl={verificationData.imageUrl}
          backgroundUrl={verificationData.backgroundUrl}
          certifications={verificationData.certifications}
        />
        <HeritageSection artisan={artisanData} distributor={distributorData} />
        <TimelineSection events={timelineEvents} />
        <Footer
          productCode={productData.productCode}
          blockchainHash={productData.blockchainHash}
          companyName={distributorData.name}
        />
      </main>
    </>
  );
}

export default App;
