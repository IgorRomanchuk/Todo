type Props = {
  setSelectedHour: any;
  selectedHour: string;
  hours?: string[];
};

export const AvailableHours = ({ hours, setSelectedHour, selectedHour }: Props) => {
  return (
    <div
      style={{
        width: "100%",
        backgroundColor: "white",
        marginTop: "10px",
        borderRadius: "10px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
        flexWrap: "wrap",
        padding: '10px'
      }}
    >
      {hours?.map((item) => (
        <p
          onClick={() => setSelectedHour(item)}
          style={{
            cursor: "pointer",
            padding: '2px',
            borderRadius: '5px',
            backgroundColor: item === selectedHour ? "black" : "white",
            color: item === selectedHour ? "white" : "black",
          }}
          key={item}
        >{`${item}:00`}</p>
      ))}
    </div>
  );
};
