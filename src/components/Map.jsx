import React, { useState } from "react";
import map from "../assets/map.png";

const locations = [
  {
    id: 1,
    name: "Location 1",
    activities: "Fishing, Hiking",
    coordinates: { x: 300, y: 200 },
  },
  {
    id: 2,
    name: "Location 2",
    activities: "Camping, Kayaking",
    coordinates: { x: 400, y: 250 },
  },
];
const Map = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);
  const [zoomed, setZoomed] = useState(false);

  const handleClick = (location) => {
    setSelectedLocation(location);
    setZoomed(true);
  };

  const resetInteraction = () => {
    setSelectedLocation(null);
    setZoomed(false);
  };
  return (
    <div className="relative w-full h-full rounded-lg overflow-hidden pb-[60px]">
      <img
        src={map}
        alt="Map"
        className={`w-full h-full object-cover rounded-[20px] transition-transform ${
          zoomed ? "scale-125" : ""
        }`}
        onClick={resetInteraction}
      />
      {locations.map((loc) => (
        <div
          key={loc.id}
          onClick={() => handleClick(loc)}
          className={`absolute cursor-pointer transition-transform duration-300`}
          style={{
            left: loc.coordinates.x,
            top: loc.coordinates.y,
            transform:
              zoomed && selectedLocation?.id === loc.id
                ? "scale(1.5)"
                : "scale(1)",
            zIndex: zoomed && selectedLocation?.id === loc.id ? 10 : 5,
          }}
        >
          <img
            src="https://img.icons8.com/ios-filled/50/000000/map-marker.png"
            alt="Marker"
          />
        </div>
      ))}
      {selectedLocation && (
        <div className="absolute bottom-0 left-0 bg-white p-4 m-4 rounded shadow-lg">
          <h2 className="font-bold">{selectedLocation.name}</h2>
          <p>{selectedLocation.activities}</p>
        </div>
      )}
    </div>
  );
};

export default Map;
