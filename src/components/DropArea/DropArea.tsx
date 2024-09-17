import { useState } from "react";
import { DropAreaStyle } from "./styles";

type Prop = {
  onDrag: (e: string) => void;
  status: string;
};

const DropArea = ({ onDrag, status }: Prop) => {
  const [showDrop, setShowDrop] = useState(false);
  return (
    <DropAreaStyle $showDrop={showDrop}
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrag(status);
        setShowDrop(false);
      }}
      onDragOver={(e) => e.preventDefault()}
    >
      drop here
    </DropAreaStyle>
  );
};

export default DropArea;
