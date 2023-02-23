import { useState } from "react";
import { Link } from "react-router-dom";
import { Formik, FormikValues } from "formik";
import { Avatar } from "@mui/material";
import useAuth from "../hooks/useAuth";
import Logo from "./layout/Logo";
import SignUpSchema from "../schemas/SignUpSchema";
import FormInputsData from "../data/FormInputsData";
import LoginInputContainer, {
  UserImageName,
  PrivacyPolicy,
  SignUpImageContainer,
  SignUpPlusImage,
} from "../assets/styles/components/LoginInput.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import SignUpPlus from "../assets/svgs/SignUpPlus.svg";
import { IUserRegister } from "../interfaces/IUser.interface";

// @ts-ignore
import UploadWidget from "./UploadWidget";
import FormikController from "./layout/FormControl";

interface SignUpValues {
  username: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: string;
}
const SignUpInput = () => {
  const [imageUrl, updateImageUrl] = useState<string>();
  const [signUpError, setSignUpError] = useState<string>("");

  const { signup } = useAuth();
  const { mutate: signupUser } = signup;

  const imageName = () => {
    if (!imageUrl) return "";
    return imageUrl.length > 25 ? `${imageUrl.slice(0, 25)}...` : imageUrl;
  };

  function handleOnUpload(error: any, result: any, widget: any) {
    if (error) {
      setSignUpError(error);
      widget.close({
        quiet: true,
      });
      return;
    }
    updateImageUrl(result?.info?.secure_url);
  }

  const initialValues: SignUpValues = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {
        const valuesToSubmit: IUserRegister = { ...values, imageUrl };
        signupUser(valuesToSubmit);
      }}
      validationSchema={SignUpSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <>
            <SignUpImageContainer>
              {/* eslint-disable */}
              <UploadWidget onUpload={handleOnUpload}>
                {({ open }: any) => {
                  function handleOnClick(e: any) {
                    e.preventDefault();
                    open();
                  }
                  return (
                    <div onClick={handleOnClick}>
                      <Avatar src={imageUrl} sx={{ width: 120, height: 120 }} />
                      <SignUpPlusImage src={SignUpPlus} alt="new profile" />
                    </div>
                  );
                }}
              </UploadWidget>
              {/* eslint-enable */}
            </SignUpImageContainer>
            <UserImageName>{imageName()}</UserImageName>
            {FormInputsData.map((input) => (
              <FormikController
                control="input"
                key={input.placeholder}
                image={input.image}
                otherImage={input.otherImage}
                type={input.type}
                placeholder={input.placeholder}
                name={input.name}
              />
            ))}
            <PrivacyPolicy>
              By signing up you agree to our{" "}
              <Link to="privacyPolicy">Privacy Policy</Link>
            </PrivacyPolicy>
            <PrimaryButton
              width="500px"
              height="70px"
              fontSize="l"
              type="submit"
            >
              Sign up
            </PrimaryButton>
            {signUpError !== "" && <h2>{signUpError}</h2>}
          </>
        </LoginInputContainer>
      )}
    </Formik>
  );
};

export default SignUpInput;
