import { dateTypes } from "../../constants/dateTypes";
import moment from "moment";
import Weather from "../../components/Weather/Weather";
import Board from "../../components/Board/Board";
import { HomePageStyle, ContainerStyle, TitleStyle } from "./styles";
import { useAuth } from "../../utils/hooks/useAuth";

const HomePage = () => {
  const { user } = useAuth();

  return (
    <HomePageStyle>
      <ContainerStyle>
        <TitleStyle>
          {`Hello ${user?.username}`} <br /> Your todo list for today
          </TitleStyle>
        <Board date={moment()} period={[+moment().format(dateTypes.day)]} />
      </ContainerStyle>
      <Weather date={moment()} period={[+moment().format(dateTypes.day)]} />
    </HomePageStyle>
  );
};

export default HomePage;
