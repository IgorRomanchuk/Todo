import { useNavigate } from "react-router-dom";
import { URL_TODO_LIST, URL_CREATE_TODO, URL_HOME } from "../../../constants/clientUrl";
import { HeaderContainerStyle, HeaderListStyle, HeaderStyle } from "./styles";

const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderStyle>
      <HeaderContainerStyle>
        <HeaderListStyle>
          <li onClick={() => navigate(URL_HOME)}>Home</li>
          <li onClick={() => navigate(URL_TODO_LIST)}>Todo List</li>
          <li onClick={() => navigate(URL_CREATE_TODO)}>Create task</li>
        </HeaderListStyle>
      </HeaderContainerStyle>
    </HeaderStyle>
  );
};

export default Header;
