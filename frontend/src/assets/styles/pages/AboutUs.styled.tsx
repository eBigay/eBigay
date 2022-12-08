import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 1rem 5rem;
`;

export const BackLink = styled.p`
  display: inline;
  position: absolute;
  width: 36px;
  height: 21px;
  left: 100.41px;
  top: 158.29px;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 21px;
  color: rgba(0, 0, 0, 0.62);
`;

export const BackImage = styled.img`
  position: absolute;
  left: 80px;
  top: 166px;
`;

export const AboutUsHeader = styled.h1`
  width: 137px;
  height: 70px;
  margin: 165px auto 0;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 70px;

  display: flex;
  align-items: flex-end;
  text-align: center;
`;

export const AboutUsImage = styled.img`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
`;

export const AboutUsText = styled.p`
  display: inline-block;
  margin: 2rem auto;
  width: 100%;
  font-family: "Poppins";
  font-style: normal;
  font-weight: 400;
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  line-height: 167.2%;
  color: ${({ theme }) => theme.colors.clr3};
`;

export default StyledAbout;
