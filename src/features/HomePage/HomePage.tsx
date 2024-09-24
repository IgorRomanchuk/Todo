import { dateTypes } from "../../constants/dateTypes";
import moment from "moment";
import Weather from "../../components/Weather/Weather";
import Board from "../../components/Board/Board";
import { HomePageStyle, ContainerStyle, TitleStyle } from "./styles";

const HomePage = () => {
  return (
    <HomePageStyle>
      <ContainerStyle>
        <TitleStyle>Your todo list for today</TitleStyle>
        <Board date={moment()} period={[+moment().format(dateTypes.day)]} />
      </ContainerStyle>
      <Weather date={moment()} period={[+moment().format(dateTypes.day)]} />
    </HomePageStyle>
  );
};

export default HomePage;
