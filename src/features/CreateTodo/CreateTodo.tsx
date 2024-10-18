import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import TodosService from "src/services/todos.service";
import { ButtonStyle, FormBoxStyle } from "./styles";
import Input from "src/components/Form/Input";
import Select from "src/components/Form/Select";
import { URL_HOME } from "src/constants/clientUrl";
import { useNavigate } from "react-router-dom";
import CalendarControllerDate from "src/components/Form/CalendarControllerDate";
import { useAuth } from "src/utils/hooks/useAuth";
import { CreateTodoModel } from "./create-todo.model";
import { TodosModel } from "src/models/todos.model";
import { dateTypes } from "src/constants/dateTypes";

export const CreateTodo = () => {
  const { user } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<CreateTodoModel>({
    defaultValues: {
      title: "",
      description: "",
      status: "todo",
      date: moment().format(dateTypes.date),
      id: new Date().toISOString(),
    },
  });

  const addTodo: SubmitHandler<CreateTodoModel> = async (todo) => {
    const arr = TodosService.getTodos();
    const index = arr.findIndex((item: TodosModel) => item.id === user.id);
    if (index > -1) {
      arr[index].todos.push(todo);
    } else {
      arr.push({
        id: user.id,
        todos: [todo],
      });
    }
    await TodosService.setTodos(arr);
    navigate(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <FormBoxStyle>
        <CalendarControllerDate name="date" control={control} />
        <Input name="title" register={register} required={true} error={errors.title} />
        <Input name="description" register={register} />
        <Select name="status" register={register} />
        <ButtonStyle type="submit">Add todo</ButtonStyle>
      </FormBoxStyle>
    </form>
  );
};
