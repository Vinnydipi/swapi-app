import Card from "../components/cards/Card";
import LoginForm from "../components/form/LoginForm";
import Header from "../components/header/Header";

function Login() {
  return (
    <Card customStyle="login-card">
      <Header />
      <LoginForm />
    </Card>
  )
}

export default Login;