import Loading from "../components/Loading";
import ProductImagesSlider from "../components/ProductImagesSlider";

const Search = () => {
  const images = [
    "https://d3m9l0v76dty0.cloudfront.net/system/photos/9206831/original/537c13befd9d19d5ba3d31ee9c47ebe0.jpg",
    "https://s3-alpha-sig.figma.com/img/4ca8/2ca4/3204ca1e782a96f9e282861dfbc025b8?Expires=1670803200&Signature=hSlTqPIWCAFWwYsgnamrBjqK-gAxAidW2KQLy3vBOBxgBSBboKlzy6-4c8NYHQRBlqWycIhePYdI-DIkqxR-F6pbQBpptN18RD-aa2NMIaIqosH5uOpDfE0qsQUiv4IZ4uvCq3XoMFS7CSGMKq8sCkTiBe8iK8hvSFZdrJlOleettcQtg9E7r70XetHJfdUrFkTfGCvSxo36Wuxd4INxSPHRvks6P3mqHjHpenLRtTrh2-ZJnyTfqhutI~LXMH-jlEaDRyXX5WJthCXVmjqTPoAGJORQez1A3xvlAAKlFmSnwjw5PTJIPWdAetIUvXSeHP3XvczGJefvxJZ4PTpZJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
    "https://www.figma.com/file/145Qhm9vRmkeIrR3X57X6H/image/a407942d9cfd5fce3b16372dc96bf25633a61772?fuid=1170447139434082766",
    "https://www.figma.com/file/145Qhm9vRmkeIrR3X57X6H/image/8a8ba5be890d26fce29f32cc00e1ac484832c177?fuid=1170447139434082766",
  ];
  return (
    <>
      <ProductImagesSlider images={images} />
    </>
  );
};

export default Search;
