type PrivateProps = {
  title: string;
  description: string;
  imageUrl: string;
};

const CategoryItem = ({ title, description, imageUrl }: PrivateProps) => {
  return (
    <div className="category-container">
      <img src={imageUrl} alt={title} />
      <div className="category-info">
        <h1 className="category-title fs24">{title}</h1>
        <p className="category-desc fs12">{description}</p>
        <button className="primary-btn clean-btn fs12">Explore More</button>
      </div>
    </div>
  );
};

export default CategoryItem;
