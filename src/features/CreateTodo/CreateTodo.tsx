import { SubmitHandler, useForm } from "react-hook-form";
import moment from "moment";
import TodosService from "../../service/todos.service";
import { ButtonStyle, FormBoxStyle } from "./styles";
import InputForm from "../../components/Form/InputForm/InputForm";
import SelectForm from "../../components/Form/SelectForm/SelectForm";
import { URL_HOME } from "../../constants/clientUrl";
import { useNavigate } from "react-router-dom";
import ControllerForm from "../../components/Form/ControllerForm/ControllerForm";
import { IForm } from "../../models/form.model";

const CreateTodo = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IForm>({
    defaultValues: {
      title: "",
      description: "",
      status: "todo",
      date: moment().format("YYYY-MM-DD"),
      id: new Date().toISOString(),
    },
  });

  const addTodo: SubmitHandler<IForm> = async (todo) => {
    let arr = TodosService.getTodos();
    await TodosService.setTodos([...arr, todo]);
    navigate(URL_HOME);
  };

  return (
    <form onSubmit={handleSubmit((data) => addTodo(data))}>
      <FormBoxStyle>
        <ControllerForm name="date" control={control} />
        <InputForm
          name="title"
          register={register}
          required={true}
          error={errors.title}
        />
        <InputForm name="description" register={register} />
        <SelectForm name="status" register={register} />
        <ButtonStyle type="submit">Add todo</ButtonStyle>
      </FormBoxStyle>
    </form>
  );
};

export default CreateTodo;
