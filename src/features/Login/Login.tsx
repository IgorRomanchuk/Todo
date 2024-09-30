import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input/Input";
import {
  ButtonStyle,
  ContainerStyle,
  FormBoxStyle,
  TitleStyle,
} from "./styles";
import AuthService from "../../service/auth.service";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { AuthModel } from "../../models/auth.model";
import { useAuth } from "../../utils/hooks/useAuth";

export const Login = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const { getUser } = useAuth();
  
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthModel>({
    defaultValues: {
      telegram_id: "",
      username: "",
      password: "",
    },
  });

  const signIn: SubmitHandler<AuthModel> = async (data) => {
    try {
      setLoading(true);
      const token: string = (await AuthService.signIn(data)).access_token;
      AuthService.setToken(token)
      await getUser()
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <ContainerStyle>
      <TitleStyle>Sign in</TitleStyle>
      <form onSubmit={handleSubmit((data) => signIn(data))}>
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
          {loading ? (
            <Loading />
          ) : (
            <ButtonStyle type="submit">Sign in</ButtonStyle>
          )}

          {error && <p>{error}</p>}
        </FormBoxStyle>
      </form>
    </ContainerStyle>
  );
};
