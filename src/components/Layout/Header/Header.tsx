import { useLocation, useNavigate } from "react-router-dom";
import {
  URL_TODO_LIST,
  URL_CREATE_TODO,
  URL_HOME,
  URL_SCHEDULE,
  URL_CREATE_APPOINTMENT,
} from "src/constants/clientUrl";
import { useAuth } from "src/utils/hooks/useAuth";
import {
  HeaderContainerStyle,
  HeaderMenuItemStyle,
  HeaderMenuStyle,
  HeaderProfileStyle,
  HeaderSignOutStyle,
  HeaderStyle,
  ProfileUserNameStyle,
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
  {
    name: "Create appointment",
    url: URL_CREATE_APPOINTMENT,
  },
];

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signOut, user } = useAuth();

  return (
    <>
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
          <HeaderProfileStyle>
            <ProfileUserNameStyle>{user?.username}</ProfileUserNameStyle>
            <HeaderSignOutStyle onClick={signOut}>Sign out</HeaderSignOutStyle>
          </HeaderProfileStyle>
        </HeaderContainerStyle>
      </HeaderStyle>
    </>
  );
};
