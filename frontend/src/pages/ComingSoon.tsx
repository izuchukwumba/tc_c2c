import Header from "../components/Header";
import { useLocation } from "react-router-dom";

const ComingSoon = () => {
  const { state } = useLocation();
  return (
    <div>
      <Header />
      <div className="flex flex-col h-150 justify-center items-center">
        <div className="font-medium text-xl">{state?.title} Login Page</div>
        <div className="font-bold text-4xl text-tcCrimson pt-2">
          Coming Soon Page...
        </div>
      </div>
    </div>
  );
};
export default ComingSoon;
