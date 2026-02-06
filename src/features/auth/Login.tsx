import { useAuthStore, type Role } from "../../store/auth.store";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const login = useAuthStore((s) => s.login);
  const navigate = useNavigate();

  const handleLogin = (role: Role) => {
    login(role);
    navigate("/");
  };

  const roles: Role[] = ["admin", "manager", "viewer"];
  return (
    <>
      <header></header>
      <main>
        <div className="h-screen flex items-center justify-center">
          <div className="space-y-4 border p-6 rounded">
            <h1 className="text-lg font-semibold">Login as</h1>
            {roles.map((role) => (
              <button
                key={role}
                onClick={() => handleLogin(role)}
                className="block w-full rounded bg-gray-800 px-4 py-2 text-white"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </main>
      <footer></footer>
    </>
  );
};

export default Login;
