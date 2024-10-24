import { useForm } from "react-hook-form";
import Input from "src/components/Form/Input";
import { ButtonStyle, ContainerStyle, FormBoxStyle, TitleStyle } from "./styles";
import Loading from "src/components/Loading";
import { AuthModel } from "src/models/auth.model";
import { useAuth } from "src/utils/hooks/useAuth";

export const Login = () => {
  const { signIn, loading, error } = useAuth();

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
      <TitleStyle>Sign in</TitleStyle>
      <form onSubmit={handleSubmit(signIn)}>
        <FormBoxStyle>
          <Input
            name="telegram_id"
            register={register}
            required={true}
            valueAsNumber={true}
            error={errors.telegram_id}
          />
          <Input name="username" register={register} required={true} error={errors.username} />
          <Input name="password" register={register} required={true} error={errors.password} />
          {loading ? <Loading /> : <ButtonStyle type="submit">Sign in</ButtonStyle>}

          {error && <p>{error}</p>}
        </FormBoxStyle>
      </form>
    </ContainerStyle>
  );
};
