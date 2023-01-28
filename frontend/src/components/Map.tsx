import { MapContainer } from "react-leaflet";
import { TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

interface IMapProps {
  lat: number;
  long: number;
}

const Map = ({ lat, long }: IMapProps) => {
  return (
    <MapContainer
      center={[lat, long]}
      zoom={13}
      scrollWheelZoom={false}
      style={{
        height: "10rem",
        width: "100%",
      }}
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={[lat, long]}>
        <Popup></Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
