import Header from "./Header";
import Intro from "./Intro";
import Card from "./Card";

const LandingPage = () => {
  const cardsContent = [
    {
      title: "Mentorship",
      description:
        // "Connect with experienced mentors who can guide you through your career journey.",
        "Learn from those who’ve been where you are. Alumni mentors share their experiences, help you navigate college life, and prepare you for life after graduation.",
      image: "/mentor-and-student.jpeg",
      buttonText: "Find your mentor",
    },
    {
      title: "Career Guidance",
      description:
        "Discover your path with confidence. Whether you’re exploring careers or preparing for internships, mentors help you set goals and develop the skills to reach them.",
      image: "/students-walking.jpeg",
      buttonText: "Start now",
    },
    {
      title: "Support",
      description:
        "You’re never alone on your journey. From academic encouragement to personal growth, your mentor will be there to cheer you on and guide you toward success.",
      image: "/supportive-mentorship.jpeg",
      buttonText: "Take the first step",
    },
    {
      title: "Gain Insights",
      description:
        "          The Campus 2 Corporate program is your place to connect, grow, and thrive. Here, Talladega alumni share real experiences, open doors to new opportunities, and help you plan your next big move. It is about support, shared stories, and building a future where every student has a mentor who believes in them and guides them to success. Join the community, learn from the best, and keep the Talladega spirit alive!",
      image: "/student-listening.jpeg",
      buttonText: "Get Started",
    },
  ];
  return (
    <>
      <Header />
      <div className="py-4 mx-2 mt-35">
        <Intro />
        <div className="mt-4 flex flex-col gap-y-10">
          {cardsContent.map((card, index) => (
            <Card
              key={index}
              title={card.title}
              image={card.image}
              description={card.description}
              buttonText={card.buttonText}
            />
          ))}
        </div>
      </div>
      {/* <div className="pt-4">
        <div className="border-t-5 border-tcBlue mr-5 w-[80%]"></div>
        <div className="text-black py-4 px-2 ">
          The Campus 2 Corporate program is your place to connect, grow, and
          thrive. Here, Talladega alumni share real experiences, open doors to
          new opportunities, and help you plan your next big move. It is about
          support, shared stories, and building a future where every student has
          a mentor who believes in them and guides them to success. Join the
          community, learn from the best, and keep the Talladega spirit alive!
        </div>
        <div className="w-[90%] flex items-center justify-center mx-auto pb-6">
          <Button
            text="Get Started"
            moreCSS="w-full justify-center bg-tcCrimson text-white"
            handleAction={() => {
              console.log(`Button 'Get Started' clicked`);
            }}
          />
        </div>
      </div> */}
      <div className="flex item-center justify-center pt-5 pb-2">
        <div className="text-sm">Developed by Izuchukwu Mba, 2025</div>
      </div>
    </>
  );
};
export default LandingPage;
