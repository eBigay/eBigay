import styled from "styled-components";
import RespondTo, { MinWidth } from "../../theme/responsive";

export const StyledNewItemContainer = styled.div`
  margin-top: 50px;
  ${RespondTo.wideBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.laptopBreakpoint`
    padding: 0 5rem;
    `}
  ${RespondTo.mobileBreakpoint`
       padding: 0 2rem;
      `}
  ${MinWidth.wideBreakpoint`
  padding: 0 15rem;
  `}
`;

export const StyledAddNewItemText = styled.h1`
  font-size: ${({ theme }) => theme.fontSizes.fsXL};
  font-weight: 400;
  color: ${({ theme }) => theme.colors.clr3};
  padding-bottom: 2rem;
`;

export const ImageWrapper = styled.div`
  position: relative;
`;

export const AddNewItemImage = styled.img`
  max-height: 4rem;
`;

export const AddNewItemImageContainer = styled.div`
  position: relative;
  display: flex;
  gap: 0.6rem;
  padding: 1rem 0;
  flex-wrap: wrap;
`;
export const StyledCancelButton = styled.button`
  position: absolute;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  top: 0;
  right: 100%;
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: #676767;
`;
export const StyledAddPhotosButton = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(144, 135, 170, 0.5);
  background-color: transparent;
  border-radius: 10px;
  cursor: pointer;
  width: 500px;
  height: 70px;
  ${RespondTo.laptopBreakpoint`
  width: unset;
  min-width: 90%;
`}
  ${RespondTo.tabletBreakpoint`
    width: unset;

  min-width: 100%;
  `}
  ${RespondTo.mobileBreakpoint`
    width: unset;

  min-width: 90%;
  `}
`;

export const StyledForm = styled.form.attrs({
  className: "add-new-form",
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
