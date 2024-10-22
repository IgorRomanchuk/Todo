import { ReactNode } from "react";

export interface StepItemModel {
  reactNode: ReactNode;
  disabled?: boolean;
  name: string;
}
