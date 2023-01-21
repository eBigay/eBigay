import { useState, useEffect, ChangeEvent } from "react";
import { Link } from "react-router-dom";
import { Formik, FormikValues } from "formik";
import useAuth from "../hooks/useAuth";
import Input from "./Input";
import Logo from "./layout/Logo";
import { IUserRegister } from "../interfaces/IUser.interface";
import SignUpSchema from "../schemas/SignUpSchema";
import FormInputsData from "../data/FormInputsData";
import useUploadImage from "../hooks/useUploadImage";
import LoginInputContainer, {
  ImageInput,
  UserImageName,
  PrivacyPolicy,
  SignUpImageContainer,
  SignUpPlusImage,
  ErrorMessage,
} from "../assets/styles/components/LoginInput.styled";
import PrimaryButton from "../assets/styles/base/Button.styled";
import {
  FormLoading,
  FormLoadingContainer,
  FormLoadingLabel,
} from "../assets/styles/pages/LoginSignup.styled";
import FadeIn from "../assets/styles/layout/FadeIn.styled";
import SignUpProfile from "../assets/svgs/SignUpProfile.svg";
import SignUpPlus from "../assets/svgs/SignUpPlus.svg";

const SignUpInput = () => {
  const { signup } = useAuth();
  const { mutate: signupUser, isError, error, isLoading, isSuccess } = signup;

  const initialValues: IUserRegister = {
    username: "",
    email: "",
    password: "",
    phoneNumber: "",
    location: "",
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
    isSuccess: isUploadSuccess,
    isError: isUploadError,
    error: uploadError,
    refetch,
  } = useUploadImage(userImage!);

  useEffect(() => {
    if (typeof userImage !== "undefined") {
      refetch();
    }
  }, [userImage, refetch]);

  const onImageInvalid = (event: ChangeEvent<HTMLInputElement>) =>
    event.target.setCustomValidity("Select profile image");

  const onImageInput = (event: ChangeEvent<HTMLInputElement>) =>
    event.target.setCustomValidity("");

  const onImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      setUserImage(event.target.files[0]);
    }
  };

  const submitForm = (values: IUserRegister) => {
    const imgUrl: string | undefined = isUploadSuccess && data.data.url;
    const valuesToSubmit: IUserRegister = { ...values, imgUrl };
    signupUser(valuesToSubmit);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={submitForm}
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
                onInvalid={onImageInvalid}
                onInput={onImageInput}
                onChange={onImageChange}
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
                valueName={input.valueName}
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
              disabled={isUploading}
            >
              Sign up
            </PrimaryButton>
            <FormLoadingContainer>
              {isUploading && (
                <>
                  <FormLoading size="small" absolutePos signupPage />
                  <FormLoadingLabel>Uploading image</FormLoadingLabel>
                </>
              )}
              {(isLoading || isSuccess) && (
                <FormLoading size="small" absolutePos signupPage />
              )}
              {isUploadError && uploadError instanceof Error && (
                <h2>{uploadError.message}</h2>
              )}
              {isError && (
                <FadeIn>
                  {/* @ts-ignore */}
                  <ErrorMessage>{error.response.data.message}</ErrorMessage>
                </FadeIn>
              )}
            </FormLoadingContainer>
          </>
        </LoginInputContainer>
      )}
    </Formik>
  );
};

export default SignUpInput;
