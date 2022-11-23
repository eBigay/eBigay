import { useNavigate } from "react-router-dom";
import PrimaryButton from "../assets/styledComponents/base/Button.styled";
import FeaturedCategoryContainer, {
  FeaturedCategoryImage,
  FeaturedCategoryInfo,
  FeaturedCategoryTitle,
  FeaturedCategoryDesc,
} from "../assets/styledComponents/components/FeaturedCategory.styled";

interface ICategoryProps {
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
}: ICategoryProps) => {
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
          onClick={() => navigate(navUrl)}
        >
          Explore More
        </PrimaryButton>
      </FeaturedCategoryInfo>
    </FeaturedCategoryContainer>
  );
};

export default FeaturedCategory;
