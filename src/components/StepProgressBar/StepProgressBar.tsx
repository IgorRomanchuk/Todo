import { ReactNode, useState } from "react";
import {
  ButtonStyle,
  ContainerButtonsStyle,
  ContainerStepsStyle,
  ContainerStyle,
  ContentContainerStyle,
  StepItemStyle,
  StepStyle,
} from "./styles";

type Props = {
  steps: string[];
  data: {
    reactNode: ReactNode;
    disabled?: boolean;
  }[];
};

export const StepProgressBar = ({ data, steps }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepForward = () => {
    if (currentStep === steps.length + 1) {
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const stepBack = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <ContainerStyle>
      <ContainerStepsStyle>
        {steps.map((item: string, i) => (
          <StepItemStyle key={i} $complited={i + 1 < currentStep}>
            <StepStyle $active={i + 1 === currentStep} $complite={i + 1 < currentStep}>
              {i + 1}
            </StepStyle>
            <p>{item}</p>
          </StepItemStyle>
        ))}
      </ContainerStepsStyle>
      <ContentContainerStyle>{data[currentStep - 1].reactNode}</ContentContainerStyle>
      <ContainerButtonsStyle>
        <ButtonStyle type="button" onClick={stepBack}>
          Prev
        </ButtonStyle>
        <ButtonStyle type="button" $disabled={data[currentStep - 1].disabled} onClick={stepForward}>
          Next
        </ButtonStyle>
      </ContainerButtonsStyle>
    </ContainerStyle>
  );
};
