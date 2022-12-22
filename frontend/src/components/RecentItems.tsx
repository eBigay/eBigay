import { UseQueryResult } from "react-query";
import ItemCard from "./ItemCard";
import Loading from "./Loading";
import { IItem } from "../interfaces/IItem.interface";
import {
  FetchErrorMessage,
  RecentItemsContainer,
  RecentItemsHeader,
} from "../assets/styles/components/RecentItems.styled";
import { v4 as uuidv4 } from "uuid";
import PrimaryButton from "../assets/styles/base/Button.styled";
import { useItems } from "../hooks/useItems";

const RecentItems = () => {
  const { queryAllItems, add, remove } = useItems();

  const {
    isLoading,
    data: items,
    isError,
    error,
    refetch,
  }: UseQueryResult<IItem[], any> = queryAllItems();

  const { mutate: addItem, isError: isAddError, isLoading: isAddLoading } = add;

  const {
    mutate: removeItem,
    isError: isRemoveError,
    isLoading: isRemoveLoading,
  } = remove;

  const handleAddItem = () => {
    const item = {
      id: uuidv4(),
      itemName: "new-s",
      mainImg:
        "https://d3m9l0v76dty0.cloudfront.net/system/photos/9206831/original/537c13befd9d19d5ba3d31ee9c47ebe0.jpg",
      category: "electronics",
      location: "Israel",
      imgs: [
        "        https://d3m9l0v76dty0.cloudfront.net/system/photos/9206831/original/537c13befd9d19d5ba3d31ee9c47ebe0.jpg",
        "        https://s3-alpha-sig.figma.com/img/4ca8/2ca4/3204ca1e782a96f9e282861dfbc025b8?Expires=1670803200&Signature=hSlTqPIWCAFWwYsgnamrBjqK-gAxAidW2KQLy3vBOBxgBSBboKlzy6-4c8NYHQRBlqWycIhePYdI-DIkqxR-F6pbQBpptN18RD-aa2NMIaIqosH5uOpDfE0qsQUiv4IZ4uvCq3XoMFS7CSGMKq8sCkTiBe8iK8hvSFZdrJlOleettcQtg9E7r70XetHJfdUrFkTfGCvSxo36Wuxd4INxSPHRvks6P3mqHjHpenLRtTrh2-ZJnyTfqhutI~LXMH-jlEaDRyXX5WJthCXVmjqTPoAGJORQez1A3xvlAAKlFmSnwjw5PTJIPWdAetIUvXSeHP3XvczGJefvxJZ4PTpZJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
        "        https://www.figma.com/file/145Qhm9vRmkeIrR3X57X6H/image/a407942d9cfd5fce3b16372dc96bf25633a61772?fuid=1170447139434082766",
        "https://www.figma.com/file/145Qhm9vRmkeIrR3X57X6H/image/8a8ba5be890d26fce29f32cc00e1ac484832c177?fuid=1170447139434082766",
      ],
      description: "hey i have 3 available iphone for donation",
      phoneNumber: "065435235",
      qty: 3,
      isAvailable: true,
      createdAt: 1589983468418,
      createdBy: {
        id: uuidv4(),
        fullName: "Koren Turgman",
        imgUrl:
          "https://ca.slack-edge.com/T021743D5T8-U0276DVNY2F-f2361f5e4429-512",
      },
    };
    addItem(item);
  };

  return (
    <>
      <RecentItemsHeader>Recently added</RecentItemsHeader>
      {isLoading && <Loading />}
      {isError && <FetchErrorMessage>{error.message}</FetchErrorMessage>}
      <PrimaryButton
        fontSize="l"
        width="100px"
        height="100px"
        onClick={handleAddItem}
      >
        Add item tester
      </PrimaryButton>
      <RecentItemsContainer>
        {items?.map((item: IItem) => (
          <ItemCard removeItem={removeItem} key={item.id} item={item} />
        ))}
      </RecentItemsContainer>
    </>
  );
};

export default RecentItems;
