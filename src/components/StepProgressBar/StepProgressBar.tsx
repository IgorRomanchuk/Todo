import { useState } from "react";
import {
  ButtonStyle,
  ContainerButtonsStyle,
  ContainerStepsStyle,
  ContainerStyle,
  ContentContainerStyle,
  ErrorTextStyle,
  StepItemStyle,
  StepStyle,
} from "./styles";
import { StepItemModel } from "./models/step-item.model";
import Loading from "../Loading";

type Props = {
  data: StepItemModel[];
  selectedUser: string;
  setValue: any;
  error: string;
  loading: boolean;
};

export const StepProgressBar = ({ data, selectedUser, setValue, error, loading }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepForward = () => {
    if (currentStep === data.length + 1) {
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const stepBack = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
    setValue(data[currentStep - 1].name, "");
  };

  const handleClickCircle = (data: StepItemModel[], step: number) => {
    data.forEach((item) => setValue(item.name, ""));
    setCurrentStep(step + 1);
  };

  return (
    <ContainerStyle>
      <ContainerStepsStyle>
        {data.map((_, i) => (
          <StepItemStyle key={i} $complited={i < currentStep}>
            <StepStyle
              $active={i + 1 === currentStep}
              $complite={i + 1 < currentStep}
              onClick={() => handleClickCircle(data.slice(i + 1, currentStep), i)}
            >
              {i + 1}
            </StepStyle>
          </StepItemStyle>
        ))}
      </ContainerStepsStyle>
      <ContentContainerStyle>{data[currentStep - 1].reactNode}</ContentContainerStyle>
      <ContainerButtonsStyle>
        <ButtonStyle type="button" onClick={stepBack}>
          Prev
        </ButtonStyle>
        {selectedUser ? (
          loading ? (
            <Loading />
          ) : (
            <>
              <ButtonStyle type="submit">Create appointment</ButtonStyle>
              {error && <ErrorTextStyle>{error}</ErrorTextStyle>}
            </>
          )
        ) : (
          <ButtonStyle
            type="button"
            $disabled={data[currentStep - 1].disabled}
            onClick={stepForward}
          >
            Next
          </ButtonStyle>
        )}
      </ContainerButtonsStyle>
    </ContainerStyle>
  );
};
