import { useState } from "react";
import Profile from "../assets/svgs/Profile.svg";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";
import Calling from "../assets/svgs/Calling.svg";
import Location from "../assets/svgs/Location.svg";
import Discovery from "../assets/svgs/Discovery.svg";
import Search from "../assets/svgs/Search.svg";
import StyledInput from "../assets/styledComponents/components/Inputs.styled";

type InputProps = {
  image: string;
  otherImage?: string; // optional argument - for the password and location inputs
  type: string;
  placeholder: string;
  isSearchInput?: boolean; // will render the search button if prop is true
  width?: number;
  height?: number;
};

export const Input = ({
  image,
  otherImage,
  type,
  placeholder,
  isSearchInput,
  width,
  height,
}: InputProps) => {
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
    <StyledInput width={width || -1} height={height || -1}>
      <img src={image} className="inputLeftImage" />
      <input
        type={type === "password" ? passwordType : type}
        placeholder={
          location[0]
            ? `lat: ${location[0]}, long: ${location[1]}`
            : placeholder
        }
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
    </StyledInput>
  );
};

export const LoginInput = () => (
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

export const RegisterInput = () => (
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

export const SearchInput = () => (
  <Input
    image={Search}
    type="text"
    placeholder="Search Here..."
    isSearchInput
    width={527}
    height={50}
  />
);
