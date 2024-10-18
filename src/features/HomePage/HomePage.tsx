import { dateTypes } from "src/constants/dateTypes";
import moment from "moment";
import Weather from "./components/Weather";
import Board from "src/components/Board";
import { HomePageStyle, ContainerStyle, TitleStyle } from "./styles";
import { useAuth } from "src/utils/hooks/useAuth";

export const HomePage = () => {
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
