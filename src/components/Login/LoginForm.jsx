import { useForm } from "react-hook-form";
import Input from "../ui/Input/Input";
import { Link } from "react-router-dom";

const LoginForm = () => {
  //RHF
  const {
    register,
    handleSubmit: onSubmitRHF,
    formState: { errors },
  } = useForm();

  //HANDLERS
  const handleSubmit = (data) => {
    console.log(data);
  };

  //RENDERIZADO
  return (
    <form onSubmit={onSubmitRHF(handleSubmit)}>
      <Input
        className="mb-3"
        error={errors.username}
        label="Nombre de usuario"
        name="username"
        options={{
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          minLength: 3,
          maxLength: 20,
        }}
        register={register}
      />
      <Input
        error={errors.password}
        label="Contraseña"
        name="password"
        options={{
          required: {
            value: true,
            message: "Este campo es requerido",
          },
          minLength: 3,
          maxLength: 20,
        }}
        register={register}
        type="password"
      />
      <div className="text-end mt-3">
        <button className="btn btn-danger" type="submit">
          Ingresar
        </button>
      </div>
      <p className="text-center text-md-start mt-2 mt-lg-0">
        ¿Primera vez? <Link to="/regsiter">Crear un usuario</Link>
      </p>
    </form>
  );
};
export default LoginForm;
