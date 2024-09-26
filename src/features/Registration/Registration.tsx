import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input/Input";
import { ButtonStyle, ContainerStyle, FormBoxStyle } from "./styles";
import AuthService from "../../service/auth.service";
import { RegisterModel } from "./model/registrate.model";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";

export const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterModel>({
    defaultValues: {
      telegram_id: "",
      username: "",
      password: "",
    },
  });

  const registrate: SubmitHandler<RegisterModel> = async (data) => {
    try {
      setLoading(true);
      const token = await AuthService.register(data);
      console.log(token.data.access_token);
    } catch (err: any) {
      console.log(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <ContainerStyle>
      <form onSubmit={handleSubmit((data) => registrate(data))}>
        <FormBoxStyle>
          <Input
            name="telegram_id"
            register={register}
            required={true}
            valueAsNumber={true}
            error={errors.telegram_id}
          />
          <Input
            name="username"
            register={register}
            required={true}
            error={errors.username}
          />
          <Input
            name="password"
            register={register}
            required={true}
            error={errors.password}
          />
          <ButtonStyle type="submit">Register</ButtonStyle>
          {error && <p>{error}</p>}
        </FormBoxStyle>
      </form>
    </ContainerStyle>
  );
};
