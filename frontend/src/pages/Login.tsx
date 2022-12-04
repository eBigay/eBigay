import Loading from "../components/Loading";
import Categories from "../components/Categories";
import { LoginInput, RegisterInput, SearchInput } from "../components/Inputs";

const fakeCategories = [
  {
    category: "Electronics",
    url: "/category/electronics",
  },
  {
    category: "Hardware",
    url: "/category/hardware",
  },
  {
    category: "Man's Clothes",
    url: "/category/mans-clothes",
  },
  {
    category: "Woman's Clothes",
    url: "/category/womans-clothes",
  },
  {
    category: "Furniture",
    url: "/category/furniture",
  },
  {
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
