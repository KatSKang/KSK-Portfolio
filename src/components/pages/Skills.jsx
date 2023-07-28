import { useEffect } from "react";
import resume from "../../assets/PDF/Kathy Kang Resume.pdf";
import codeIcon1 from "../../assets/images/code.svg";
import codeIcon2 from "../../assets/images/code-slash.svg";
import codeIcon3 from "../../assets/images/display.svg";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const titleStyle =
  "font-bold text-zinc-900 lg:mb-8 sm:text-5xl lg:text-7xl min-[320px]:text-4xl tracking-wide uppercase text-center";

const listStyle = "py-2 leading-loose font-bold";

const colTitleStyle =
  "skill-top font-bold text-zinc-200 text-3xl flex justify-center items-center tracking-wide";

const btnStyle =
  "bg-zinc-900 text-zinc-200 hover:bg-zinc-200 hover:text-zinc-900 py-2 px-4 rounded-md transition ease-in-out duration-300";

const lang = "Python";
const goals = "Java, Typescript, Vue, Angular, PHP, AWS";

const boxVariant = {
  visible: { opacity: 1, y: 0, transition: { duration: 1 } },
  hidden: { opacity: 0, y: 200 },
};

const Skills = () => {
  const control = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
  }, [control, inView]);

  return (
    <motion.div
      className="box"
      ref={ref}
      variants={boxVariant}
      initial="hidden"
      animate={control}
    >
      <div
        ref={ref}
        className="skill-container grid justify-items-center text-center my-24"
        id="skills"
      >
        <h2 className={titleStyle}>Technical Skills</h2>
        <p>
          These are the technologies I have the most experience in. However, I
          am always open to learning new technologies and languages.{" "}
        </p>

        <div className="grid grid-cols-3 m-8 skill-box max-w-7xl text-center">
          <div className="skill-col">
            <h3 className={colTitleStyle}>
              <img src={codeIcon1} alt="Code Icon" />
              Frontend
              <img src={codeIcon2} alt="Code Icon" />
            </h3>
            <p className="tracking-wide italic p-2">
              Passionate for simple, clean and responsive UI/UX.
            </p>
            <ul className={listStyle}>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript </li>
              <li>jQuery</li>
              <li>Bootstrap and other CSS libraries</li>
            </ul>
          </div>
          <div className="skill-col">
            <h3 className={colTitleStyle}>
              <img src={codeIcon1} alt="Code Icon" />
              Backend
              <img src={codeIcon2} alt="Code Icon" />
            </h3>
            <p className="tracking-wide italic p-2">
              Knowledgeable in REST API and database structures:
            </p>
            <ul className={listStyle}>
              <li>Express</li>
              <li>Sequelize</li>
              <li>NodeJS</li>
              <li>MySQL</li>
              <li>MongoDB</li>
              <li>GraphQL</li>
            </ul>
          </div>
          <div className="skill-col">
            <h3 className={colTitleStyle}>
              <img src={codeIcon3} alt="Code Icon" />
              Other skills
            </h3>
            <p className="tracking-wide italic p-2">
              Various roles in development including:
            </p>
            <ul className={listStyle}>
              <li>Web Design</li>
              <li>Wireframing in Figma</li>
              <li>Team & project management in Trello</li>
              <li>Version control using GitHub and GitLab</li>
              <li>Microsoft Excel, Powerpoint, Word</li>
            </ul>
          </div>
        </div>

        <p className="font-bold">
          Currently in progress:{" "}
          <span className="underline underline-offset-4	 font-normal ">
            {" "}
            {lang}
          </span>
          !
        </p>
        <p className="font-bold italic">
          Future goals: <span className="font-normal">{goals}</span>
        </p>

        <div className="my-12">
          <a
            href={resume}
            target="_blank"
            rel="noopener noreferrer"
            className={btnStyle}
          >
            View My Resume
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
