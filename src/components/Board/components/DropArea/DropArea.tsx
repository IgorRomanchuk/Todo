import { useState } from "react";
import { DropAreaStyle } from "./styles";

type Props = {
  onDrop: () => void;
};

export const DropArea = ({ onDrop }: Props) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <DropAreaStyle
      $showDrop={showDrop}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      drop here
    </DropAreaStyle>
  );
};
