import { SubmitHandler, useForm } from "react-hook-form";
import Input from "../../components/Form/Input/Input";
import {
  ButtonStyle,
  ContainerStyle,
  FormBoxStyle,
  TextAccountStyle,
  TitleStyle,
} from "./styles";
import AuthService from "../../service/auth.service";
import { AuthModel } from "../../models/auth.model";
import { useState } from "react";
import Loading from "../../components/Loading/Loading";
import { useNavigate } from "react-router-dom";
import { URL_HOME, URL_LOGIN } from "../../constants/clientUrl";
import { useAuth } from "../../utils/hooks/useAuth";

export const Registration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();
  const { setIsLogged } = useAuth();

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

  const registrate: SubmitHandler<AuthModel> = async (data) => {
    try {
      setLoading(true);
      const token: string = (await AuthService.register(data)).data
        .access_token;
      AuthService.setToken(token);
      setIsLogged(true);
      navigate(URL_HOME);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
      reset();
    }
  };

  return (
    <ContainerStyle>
      <TitleStyle>Sign up</TitleStyle>
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
          {loading ? (
            <Loading />
          ) : (
            <ButtonStyle type="submit">Register</ButtonStyle>
          )}

          {error && <p>{error}</p>}
        </FormBoxStyle>
      </form>
      <TextAccountStyle>
        Do you have an account?{" "}
        <span onClick={() => navigate(URL_LOGIN)}>
          sign in
        </span>
      </TextAccountStyle>
    </ContainerStyle>
  );
};
