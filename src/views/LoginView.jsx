import LoginForm from "../components/Login/LoginForm";

const LoginView = () => {
  return (
    <section className="card bg-white text-dark p-3">
      <div className="row g-3">
        <article className="col-12 col-md-6">
            <h1>Bienvenido</h1>
            <hr />
            <LoginForm />
        </article>
        <article className="col-12 col-md-6">
          <img
            alt="sanwi de milanga con una mirinda"
            className="rounded w-100"
            src="https://www.eltucumano.com/fotos/notas/2023/01/30/230130182315_91314.jpg"
          />
        </article>
      </div>
    </section>
  );
};
export default LoginView;
