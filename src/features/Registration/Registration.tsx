import { useForm } from "react-hook-form";
import Input from "../../components/Form/Input";
import {
  ButtonStyle,
  ContainerStyle,
  FormBoxStyle,
  TextAccountStyle,
  TitleStyle,
} from "./styles";
import { AuthModel } from "../../models/auth.model";
import Loading from "../../components/Loading";
import { useNavigate } from "react-router-dom";
import { URL_LOGIN } from "../../constants/clientUrl";
import { useAuth } from "../../utils/hooks/useAuth";

export const Registration = () => {
  const navigate = useNavigate();
  const { signUp, loading, error } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthModel>({
    defaultValues: {
      telegram_id: "",
      username: "",
      password: "",
    },
  });

  return (
    <ContainerStyle>
      <TitleStyle>Sign up</TitleStyle>
      <form onSubmit={handleSubmit(signUp)}>
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
        <span onClick={() => navigate(URL_LOGIN)}>sign in</span>
      </TextAccountStyle>
    </ContainerStyle>
  );
};
