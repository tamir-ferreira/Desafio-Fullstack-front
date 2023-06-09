import { Button } from "../../Button";
import { Input } from "../../Input";
import { StyledForm } from "../styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./schemas";
import { BsFillEyeFill, BsEyeSlash } from "react-icons/bs";
import { useContext } from "react";
import { ClientContext } from "../../../context/ClientContext";
import { Login } from "../../../interfaces";

export const FormLogin = (): JSX.Element => {
  const { loginSubmit, loading, showPass, setShowPass } =
    useContext(ClientContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Login>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  return (
    <StyledForm onSubmit={handleSubmit(loginSubmit)} noValidate>
      <div>
        <h2 className="font-title-0">Login</h2>
      </div>
      <Input
        label="Email"
        type="email"
        placeholder="Digite aqui seu email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Senha"
        type={showPass ? "text" : "password"}
        placeholder="Digite aqui sua senha"
        register={register("password")}
        error={errors.password?.message}
        children={
          showPass ? (
            <BsEyeSlash onClick={() => setShowPass(!showPass)} />
          ) : (
            <BsFillEyeFill onClick={() => setShowPass(!showPass)} />
          )
        }
      />

      <Button model="default" color={!loading ? "colored" : "disabled"}>
        {!loading ? "Entrar" : <span className="loader"></span>}
      </Button>
    </StyledForm>
  );
};
