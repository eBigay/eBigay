interface IInputProps {
  image?: string;
  otherImage?: string; // optional argument - for the password and location inputs
  type: string;
  placeholder: string;
  width?: number;
  height?: number;
  name: string;
}

export default IInputProps;
