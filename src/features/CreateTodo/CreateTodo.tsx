import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import TodosService from "../../service/todos.service";
import { ButtonStyle, FormBoxStyle } from "./styles";
import Input from "../../components/Form/Input/Input";
import Select from "../../components/Form/Select/Select";
import { URL_HOME } from "../../constants/clientUrl";
import { useNavigate } from "react-router-dom";
import CalendarControllerDate from "../../components/Form/CalendarControllerDate/CalendarControllerDate";
import { CreateTodoModel } from "../../models/form.model";

const CreateTodo = () => {
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
      date: moment().format("YYYY-MM-DD"),
      id: new Date().toISOString(),
    },
  });

  const addTodo: SubmitHandler<CreateTodoModel> = async (todo) => {
    let arr = TodosService.getTodos();
    await TodosService.setTodos([...arr, todo]);
    navigate(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit((data) => addTodo(data))}>
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
