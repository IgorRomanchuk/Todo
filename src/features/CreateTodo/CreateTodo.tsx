import { Controller, useForm } from "react-hook-form";
import Calendar from "../../components/Calendar/Calendar";
import moment from "moment";
import TodosService from "../../service/todos.service";
import { ButtonStyle, FormBoxStyle } from "./styles";
import { TodoModel } from "../../models/todoItem.model";
import { URL_HOME } from "../../constants/clientUrl";
import { useNavigate } from "react-router-dom";

const CreateTodo = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
      status: "todo",
      date: moment().format("YYYY-MM-DD"),
      id: new Date().toISOString(),
    },
  });

  const addTodo = async (todo: TodoModel) => {
    let arr = TodosService.getTodos();
    await TodosService.setTodos([...arr, todo])
    navigate(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit((data: any) => addTodo(data))}>
      <FormBoxStyle>
        <Controller
          name="date"
          control={control}
          render={({ field }) => {
            return <Calendar date={field.value} setDate={field.onChange} />;
          }}
        />
        <input placeholder="title" {...register("title", { required: true })} />
        {errors.title && <p>title is required.</p>}
        <input placeholder="description" {...register("description")} />
        <select {...register("status")}>
          <option value="todo">Todo</option>
          <option value="in progress">In progress</option>
          <option value="done">Done</option>
        </select>

        <ButtonStyle type="submit">Add todo</ButtonStyle>
      </FormBoxStyle>
    </form>
  );
};

export default CreateTodo;
