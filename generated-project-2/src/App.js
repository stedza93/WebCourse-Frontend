import React from 'react';
import './App.css';
import SimpleImageSlider from "react-simple-image-slider";

function App() {
  const images = [
    { url: "https://images.wallpaperscraft.com/image/water_glare_sunset_125624_800x600.jpg" },
    { url: "https://images.wallpaperscraft.com/image/palms_road_marking_123929_800x600.jpg" },
    { url: "https://images.wallpaperscraft.com/image/lake_mountains_trees_122294_800x600.jpg" }
];
  return (
    <div className="App">
      <SimpleImageSlider
                    width={896}
                    height={504}
                    images={images}
                />
    </div>
  );
}

export default App;
