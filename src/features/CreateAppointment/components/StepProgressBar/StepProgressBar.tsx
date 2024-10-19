import { ReactNode, useState } from "react";
import {
  ButtonStyle,
  ContainerButtonsStyle,
  ContainerStepsStyle,
  StepItemStyle,
  StepStyle,
} from "./styles";

const steps = ["first step", "second step", "third step"];

type Props = {
  data: {
    reactNode: ReactNode;
    disabled?: boolean;
  }[];
  error: string;
};

export const StepProgressBar = ({ data }: Props) => {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const stepForward = () => {
    if (currentStep === steps.length + 1) {
      console.log("navigate to schedule");
      return;
    }
    setCurrentStep((prev) => prev + 1);
  };

  const stepBack = () => {
    if (currentStep === 1) return;
    setCurrentStep((prev) => prev - 1);
  };

  return (
    <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
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
      <div
        style={{
          width: "220px",
          height: "220px",
          margin: "0 auto",
          marginTop: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {data[currentStep - 1].reactNode}
      </div>
      <ContainerButtonsStyle>
        <ButtonStyle onClick={stepBack}>Prev</ButtonStyle>
        <ButtonStyle disabled={data[currentStep - 1].disabled} onClick={stepForward}>
          Next
        </ButtonStyle>
      </ContainerButtonsStyle>
    </div>
  );
};
