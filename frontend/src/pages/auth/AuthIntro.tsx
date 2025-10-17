import Header from "../../components/Header";
import Button from "../../components/Button";
import Footer from "../../components/Footer";
import { useNavigate } from "react-router-dom";

const AuthIntro = () => {
  const links = [
    { title: "Student", url: "/student-login" },
    { title: "Alumni", url: `/coming-soon` },
    { title: "Staff", url: `/coming-soon` },
  ];
  const navigate = useNavigate();
  return (
    <div className="">
      <Header />
      <div className="flex flex-col justify-center items-center pt-40">
        <div className="font-extrabold text-2xl text-tcCrimson pb-5">
          Let's get started
        </div>
        <div className="mx-5">
          <img
            src="/students-walking.jpeg"
            alt="students-walking"
            className="border-l-10 border-r-10 border-tcCrimson max-w-full h-auto "
          />
        </div>
        <div className="py-5">
          What's your current status at Talladega College?
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-y-5 pb-10">
          {links.map((link, index) => (
            <Button
              key={index}
              text={link.title}
              moreCSS="bg-tcCrimson w-[60%] text-white justify-center font-semibold"
              handleAction={() =>
                navigate(link.url, { state: { title: link.title } })
              }
            />
          ))}
        </div>
      </div>
      <div className="pt-7">
        <Footer />
      </div>
    </div>
  );
};
export default AuthIntro;
