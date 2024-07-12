import Login_Registration from "@/components/Login_Registration";

const Signup = () => {
  return (
    <Login_Registration
      heading="SIGN UP WITH"
      button_text="Sign up"
      bottom_text={{
        text: "Do you already have an account? ",
        link_text: "Log in",
        href: "/login",
      }}
      terms_condition={{
        normalText: "I agree to",
        coloredText: "terms & conditions",
      }}
    />
  );
};

export default Signup;
