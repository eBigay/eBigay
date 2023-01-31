import IInputProps from "../interfaces/IInputProps";
import Profile from "../assets/svgs/Profile.svg";
import Lock from "../assets/svgs/Lock.svg";
import Hide from "../assets/svgs/Hide.svg";
import Message from "../assets/svgs/Message.svg";
import Calling from "../assets/svgs/Calling.svg";
import Location from "../assets/svgs/Location.svg";
import Discovery from "../assets/svgs/Discovery.svg";

const FormInputsData: IInputProps[] = [
  {
    image: Profile,
    type: "text",
    placeholder: "Username",
    name: "username",
  },
  {
    image: Message,
    type: "email",
    placeholder: "Email",
    name: "email",
  },
  {
    image: Lock,
    otherImage: Hide,
    type: "password",
    placeholder: "Password",
    name: "password",
  },
  {
    image: Calling,
    type: "tel",
    placeholder: "Phone Number",
    name: "phoneNumber",
  },
  {
    image: Location,
    otherImage: Discovery,
    type: "text",
    placeholder: "Location",
    name: "location",
  },
];

export default FormInputsData;
