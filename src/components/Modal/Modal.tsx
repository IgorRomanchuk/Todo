const Modal = ({ value, setValue }: any) => {
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} />
      <button>Save</button>
    </div>
  );
};

export default Modal;
