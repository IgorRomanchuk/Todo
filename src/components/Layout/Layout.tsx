import Header from "./Header";
import {
  MainLayoutContainerStyle,
  MainLayoutContentStyle,
  MainLayoutStyle,
} from "./styles";

type Props = {
  children: JSX.Element;
};

export const Layout = ({ children }: Props) => {
  return (
    <MainLayoutStyle>
      <Header />
      <MainLayoutContainerStyle>
        <MainLayoutContentStyle>{children}</MainLayoutContentStyle>
      </MainLayoutContainerStyle>
    </MainLayoutStyle>
  );
};
