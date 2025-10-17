const Header: React.FC = () => {
  return (
    <div className="bg-white flex flex-col items-center font-primary gap-y-1 pt-2 pb-1">
      <img src="/talladega-logo.png" alt="Logo" className="h-16 mx-auto" />
      <div className="font-bold text-2xl ">CAMPUS 2 CORPORATE</div>
      <div className="text-md text-tcCrimson">Mentorship Program</div>
    </div>
  );
};
export default Header;
