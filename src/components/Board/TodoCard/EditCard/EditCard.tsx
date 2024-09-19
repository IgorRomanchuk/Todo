import { TodoModel } from "../../../../models/todoItem.model";
import saveIcon from "../../../../assets/img/save.svg";
import { SaveIconStyle } from "./styles";

type Props = {
  todo: TodoModel;
  setTodoList: (e: (value: TodoModel[]) => TodoModel[]) => void;
  setEdit: (e: boolean) => void;
  edit: boolean;
  value: string;
  setValue: (e: string) => void
};

const EditCard = ({ setTodoList, todo, setEdit, edit, value, setValue }: Props) => {
  const handleSetTodoList = () => {
    const arr = JSON.parse(localStorage.getItem("todoList") || "[]");

    setTodoList(
      arr.map((item: TodoModel) => {
        if (todo.id === item.id) {
          return {
            ...item,
            value,
          };
        } else {
          return item;
        }
      })
    );
    setEdit(false);
  };
  return (
    <>
      <textarea
        autoFocus={edit ? true : false}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <SaveIconStyle onClick={handleSetTodoList} src={saveIcon} alt="save" />
    </>
  );
};

export default EditCard;
