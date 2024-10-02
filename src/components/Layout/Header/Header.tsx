import { useLocation, useNavigate } from "react-router-dom";
import {
  URL_TODO_LIST,
  URL_CREATE_TODO,
  URL_HOME,
  URL_SCHEDULE,
} from "../../../constants/clientUrl";
import { useAuth } from "../../../utils/hooks/useAuth";
import {
  HeaderContainerStyle,
  HeaderMenuItemStyle,
  HeaderMenuStyle,
  HeaderSignOutStyle,
  HeaderStyle,
} from "./styles";

const pages = [
  {
    name: "Home",
    url: URL_HOME,
  },
  {
    name: "Todo List",
    url: URL_TODO_LIST,
  },
  {
    name: "Create todo",
    url: URL_CREATE_TODO,
  },
  {
    name: "Schedule",
    url: URL_SCHEDULE,
  },
];

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut } = useAuth();

  return (
    <HeaderStyle>
      <HeaderContainerStyle>
        <HeaderMenuStyle>
          {pages.map((item) => (
            <HeaderMenuItemStyle
              key={item.name}
              $active={location.pathname === item.url ? true : false}
              onClick={() => navigate(item.url)}
            >
              {item.name}
            </HeaderMenuItemStyle>
          ))}
        </HeaderMenuStyle>
        <HeaderSignOutStyle onClick={signOut}>Sign out</HeaderSignOutStyle>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
