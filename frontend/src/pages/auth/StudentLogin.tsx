import Header from "../../components/Header";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
const StudentLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <Header />
      <div className="pt-40 px-7 w-full">
        <div className="font-black font-inter text-3xl">Student Login</div>
        <img
          src="/students-walking.jpeg"
          alt="students-walking"
          className="border-l-10 border-r-10 border-tcCrimson max-w-full h-auto mt-3"
        />
        <div className="mt-10 text-poppins font-medium">Your school email</div>
        <input
          type="email"
          className="border-1 border-black px-2 py-3 w-full "
          placeholder=""
        />
        <Button
          text={"Get Code"}
          moreCSS={
            "bg-tcCrimson text-white mt-5 w-full justify-center font-semibold"
          }
          handleAction={() => {
            console.log("logged in");
          }}
        />{" "}
        <div
          className="underline pt-7 cursor-pointer font-medium"
          onClick={() =>
            navigate("/coming-soon", { state: { title: "Sign Up" } })
          }
        >
          Don't have an account?{" "}
          <span className="text-tcCrimson font-medium">Sign Up Here</span>
        </div>
      </div>
    </div>
  );
};
export default StudentLogin;
