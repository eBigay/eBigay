import styled from "styled-components";

const StyledAbout = styled.div`
  padding: 1rem 5rem;

  a {
    p {
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
    }
    img {
      position: absolute;
      left: 80px;
      top: 166px;
    }
  }

  h1 {
    width: 137px;
    height: 70px;
    margin: 165px auto 0;
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 70px;
    /* identical to box height, or 233% */

    display: flex;
    align-items: flex-end;
    text-align: center;
  }

  .aboutUsImage,
  .aboutUsDescription {
    display: inline-block;
    margin: 2rem auto;
    width: 100%;
  }

  .aboutUsDescription {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 167.2%;
    color: ${({ theme }) => theme.colors.clr3};
  }
`;

export default StyledAbout;
