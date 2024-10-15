import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import TodosService from "../../service/todos.service";
import { ButtonStyle, FormBoxStyle } from "./styles";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { URL_HOME } from "../../constants/clientUrl";
import { useNavigate } from "react-router-dom";
import CalendarControllerDate from "../../components/Form/CalendarControllerDate/CalendarControllerDate";
import { useAuth } from "../../utils/hooks/useAuth";
import { CreateTodoModel } from "../../models/form.model";
import { TodosModel } from "../../models/todos.model";
import { dateTypes } from "../../constants/dateTypes";

const CreateTodo = () => {
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
    let arr = TodosService.getTodos();
    let index = arr.findIndex((item: TodosModel) => item.id === user.id)
    if (index > -1) {
      arr[index].todos.push(todo)
    } else {
      arr.push({
        id: user.id,
        todos: [todo]
      })
    }
    await TodosService.setTodos(arr);
    navigate(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit(addTodo)}>
      <FormBoxStyle>
        <CalendarControllerDate name="date" control={control} />
        <Input
          name="title"
          register={register}
          required={true}
          error={errors.title}
        />
        <Input name="description" register={register} />
        <Select name="status" register={register} />
        <ButtonStyle type="submit">Add todo</ButtonStyle>
      </FormBoxStyle>
    </form>
  );
};

export default CreateTodo;
