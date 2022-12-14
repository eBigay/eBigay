import { useNavigate } from "react-router-dom";

import PrimaryButton from "../assets/styles/base/Button.styled";
import FeaturedCategoryContainer, {
  FeaturedCategoryImage,
  FeaturedCategoryInfo,
  FeaturedCategoryTitle,
  FeaturedCategoryDesc,
} from "../assets/styles/components/FeaturedCategory.styled";

interface FeaturedCategoryProps {
  title: string;
  description: string;
  imageUrl: string;
  navUrl: string;
}

const FeaturedCategory = ({
  title,
  description,
  imageUrl,
  navUrl,
}: FeaturedCategoryProps) => {
  const navigate = useNavigate();

  return (
    <FeaturedCategoryContainer>
      <FeaturedCategoryImage src={imageUrl} alt={description} />
      <FeaturedCategoryInfo>
        <FeaturedCategoryTitle>{title}</FeaturedCategoryTitle>
        <FeaturedCategoryDesc>{description}</FeaturedCategoryDesc>
        <PrimaryButton
          width="115px"
          height="34"
          fontSize="xs"
          onClick={() => {
            navigate(navUrl);
            window.scroll({ top: 0, behavior: "smooth" });
          }}
        >
          Explore More
        </PrimaryButton>
      </FeaturedCategoryInfo>
    </FeaturedCategoryContainer>
  );
};

export default FeaturedCategory;
