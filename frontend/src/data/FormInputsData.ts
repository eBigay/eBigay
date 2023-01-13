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
    valueName: "username",
  },
  {
    image: Message,
    type: "email",
    placeholder: "Email",
    valueName: "email",
  },
  {
    image: Lock,
    otherImage: Hide,
    type: "password",
    placeholder: "Password",
    valueName: "password",
  },
  {
    image: Calling,
    type: "tel",
    placeholder: "Phone Number",
    valueName: "phoneNumber",
  },
  {
    image: Location,
    otherImage: Discovery,
    type: "text",
    placeholder: "Location",
    valueName: "location",
  },
];

export default FormInputsData;
