const Intro: React.FC = () => {
  return (
    <div className="text-black font-primary gap-y-5 flex flex-col">
      <div>
        The C2C mentorship program connects current students with accomplished
        alumni who provide real-world advice, professional insight, and lasting
        support. It is your opportunity to learn from alumni who have faced the
        same challenges, made the same decisions, and found success beyond
        Talladega.
      </div>
      <figure>
        <blockquote className="border-l-5 border-tcCrimson">
          <p>
            Every student needs guidance from those who have walked the path
            before them.
          </p>
          <figcaption>
            — <cite>Rakeb Tilahun</cite>
          </figcaption>
        </blockquote>
      </figure>
      {/* <div>
        Exploring career paths? Preparing for internships? Looking for guidance?
        This program is perfect for you!
      </div> */}
    </div>
  );
};

export default Intro;
