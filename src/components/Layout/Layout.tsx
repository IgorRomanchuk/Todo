import Header from "./Header/Header";
import { MainLayoutContainerStyle, MainLayoutContentStyle, MainLayoutStyle } from "./styles";

type Props = {
  children: JSX.Element;
};
const Layout = ({ children }: Props) => {
  return (
    <MainLayoutStyle>
      <Header />
      <MainLayoutContainerStyle>
        <MainLayoutContentStyle>{children}</MainLayoutContentStyle>
      </MainLayoutContainerStyle>
    </MainLayoutStyle>
  );
};

export default Layout;
