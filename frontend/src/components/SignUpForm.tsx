import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Formik, FormikValues } from "formik";
// import useAuth from "../hooks/useAuth";
import Input from "./Input";
import Loading from "./Loading";
import Logo from "./layout/Logo";
import SignUpSchema from "../schemas/SignUpSchema";
import FormInputsData from "../data/FormInputsData";
import useUploadImage from "../hooks/useUploadImage";
import LoginInputContainer, {
  ImageInput,
  UserImageName,
  PrivacyPolicy,
  SignUpImageContainer,
  SignUpPlusImage,
} from "../assets/styles/components/LoginInput.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import {
  FormLoadingContainer,
  FormLoadingLabel,
} from "../assets/styles/pages/LoginSignup.styled";
import SignUpProfile from "../assets/svgs/SignUpProfile.svg";
import SignUpPlus from "../assets/svgs/SignUpPlus.svg";

interface SignUpValues {
  Username: string;
  Email: string;
  Password: string;
  PhoneNumber: string;
  Location: string;
}
const SignUpInput = () => {
  // const { signup } = useAuth();

  const initialValues: SignUpValues = {
    Username: "",
    Email: "",
    Password: "",
    PhoneNumber: "",
    Location: "",
  };

  const [userImage, setUserImage] = useState<File>();

  const imageName = () => {
    if (!userImage) return "";
    return userImage.name.length > 25
      ? `${userImage.name.slice(0, 25)}...`
      : userImage.name;
  };

  const {
    data,
    isFetching: isUploading,
    isSuccess,
    isError,
    error,
    refetch,
  } = useUploadImage(userImage!);

  useEffect(() => {
    if (typeof userImage !== "undefined") {
      refetch();
    }
  }, [userImage, refetch]);

  return (
    <Formik
      initialValues={initialValues}
      /* eslint-disable-next-line */
      onSubmit={(values) => {
        const ImageUrl = isSuccess && data.data.url;
        const valuesToSubmit = { ...values, ImageUrl };
        alert(JSON.stringify(valuesToSubmit)); /* eslint-disable-line */
      }}
      validationSchema={SignUpSchema}
    >
      {({ handleSubmit }: FormikValues) => (
        <LoginInputContainer onSubmit={handleSubmit}>
          <>
            <Logo noNavigate />
            <SignUpImageContainer>
              <ImageInput
                type="file"
                name="userImage"
                accept=".jpg,.jpeg,.png"
                required
                onInvalid={(event: ChangeEvent<HTMLInputElement>) =>
                  event.target.setCustomValidity("Select profile image")
                }
                onInput={(event: ChangeEvent<HTMLInputElement>) =>
                  event.target.setCustomValidity("")
                }
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  if (event.target.files) {
                    setUserImage(event.target.files[0]);
                  }
                }}
              />
              <img src={SignUpProfile} alt="new profile" />
              <SignUpPlusImage src={SignUpPlus} alt="new profile" />
            </SignUpImageContainer>
            <UserImageName>{imageName()}</UserImageName>
            {FormInputsData.map((input) => (
              <Input
                key={input.placeholder}
                image={input.image}
                otherImage={input.otherImage}
                type={input.type}
                placeholder={input.placeholder}
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
            {isUploading && (
              <FormLoadingContainer>
                <Loading size="small" absolutePos />
                <FormLoadingLabel>Uploading image</FormLoadingLabel>
              </FormLoadingContainer>
            )}
            {isError && error instanceof Error && <h2>{error.message}</h2>}
          </>
        </LoginInputContainer>
      )}
    </Formik>
  );
};

export default SignUpInput;
