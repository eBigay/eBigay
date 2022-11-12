import { FC, useState } from "react";
import Profile from "../assets/images/Profile.svg";
import Lock from "../assets/images/Lock.svg";
import Hide from "../assets/images/Hide.svg";
import Message from "../assets/images/Message.svg";
import Calling from "../assets/images/Calling.svg";
import Location from "../assets/images/Location.svg";
import Discovery from "../assets/images/Discovery.svg";
import Search from "../assets/images/Search.svg";

type inputProps = {
  image: string;
  otherImage?: string; // optional argument - for the password and location inputs
  type: string;
  placeholder: string;
  isSearchInput?: boolean; // will render the search button if prop is true
  width?: number;
  height?: number;
};

export const Input: FC<inputProps> = ({
  image,
  otherImage,
  type,
  placeholder,
  isSearchInput,
  width,
  height,
}) => {
  const [passwordType, setPasswordType] = useState<string>("password");
  const [location, setLocation] = useState<number[]>([]);

  const changeInputType = () => {
    setPasswordType(passwordType === "password" ? "text" : "password");
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      alert("Receiving Your GeoLocation");
      navigator.geolocation.getCurrentPosition((position) => {
        setLocation([position.coords.latitude, position.coords.longitude]);
      });
    } else {
      alert("Sorry Not available!");
    }
  };

  return (
    <div
      className="inputContainer fs16"
      style={{ width: width ? width : 500, height: height ? height : 70 }}
    >
      <img src={image} className="inputLeftImage" />
      <input
        type={type === "password" ? passwordType : type}
        placeholder={location[0]? `lat: ${location[0]}, long: ${location[1]}` : placeholder}
      />
      {otherImage && (
        <img
          className="inputRightImage"
          src={otherImage}
          onClick={type === "password" ? changeInputType : getGeoLocation}
        />
      )}
      {isSearchInput && (
        <button className="primary-btn clean-btn">Search</button>
      )}
    </div>
  );
};

export const LoginInput: FC = () => (
  <>
    <Input image={Profile} type="text" placeholder="Username" />
    <Input
      image={Lock}
      otherImage={Hide}
      type="password"
      placeholder="Password"
    />
  </>
);

export const RegisterInput: FC = () => (
  <>
    <Input image={Profile} type="text" placeholder="Username" />
    <Input image={Message} type="email" placeholder="Email" />
    <Input
      image={Lock}
      otherImage={Hide}
      type="password"
      placeholder="Password"
    />
    <Input image={Calling} type="tel" placeholder="Phone Number" />
    <Input
      image={Location}
      otherImage={Discovery}
      type="text"
      placeholder="Location"
    />
  </>
);

export const SearchInput: FC = () => (
  <>
    <Input
      image={Search}
      type="text"
      placeholder="Search Here..."
      isSearchInput={true}
      width={527}
      height={50}
    />
  </>
);
