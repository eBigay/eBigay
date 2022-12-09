import Loading from "../components/Loading";
import Categories from "../components/Categories";
import { LoginInput, RegisterInput, SearchInput } from "../components/Inputs";

const fakeCategories = [
  {
    id: 0,
    category: "Electronics",
    url: "/category/electronics",
  },
  {
    id: 1,
    category: "Hardware",
    url: "/category/hardware",
  },
  {
    id: 2,
    category: "Man's Clothes",
    url: "/category/mans-clothes",
  },
  {
    id: 3,
    category: "Woman's Clothes",
    url: "/category/womans-clothes",
  },
  {
    id: 4,
    category: "Furniture",
    url: "/category/furniture",
  },
  {
    id: 5,
    category: "etc",
    url: "/category/etc",
  },
];

const Login = () => {
  return (
    <div className="fade-in" style={{ paddingTop: "10rem" }}>
      <LoginInput />
      <br /> <br />
      <RegisterInput />
      <br /> <br />
      <SearchInput />
      <Categories categories={fakeCategories} />
      <Loading />
    </div>
  );
};
export default Login;
