import Login_Registration from "@/components/Login_Registration";
const Login = () => {
  return (
    <>
      <img src="./assets/login.svg" alt="" className="absolute max-w-[48%] max-h-[85%] top-20 right-0  " />
    <Login_Registration
      heading="LOGIN WITH"
      button_text="Login"
      bottom_text={{
        link_text: "Create a new account",
        href: "/signup",
        text: "Do you need an account? ",
      }}
      />
      </>
  );
};

export default Login;
