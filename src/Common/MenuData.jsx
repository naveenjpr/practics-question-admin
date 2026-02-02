import {
  faBook,
  faPeopleGroup,
  faSliders,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  FaAws,
  FaGithub,
  FaNodeJs,
  FaReact,
  FaWordpress,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiEnglishInput, RiNextjsFill } from "react-icons/ri";
import { MdCss } from "react-icons/md";
import { CgWebsite } from "react-icons/cg";
import {
  SiTypescript,
  SiMysql,
  SiAngular,
  SiPython,
  SiDocker,
  SiTestinglibrary,
  SiPostgresql,
  SiSupabase,
} from "react-icons/si";

export const data = [
  {
    id: 1,
    icon: <FaReact />,
    uid: "React",
    sub1: "Add React",
    sub2: "View React",
    link1: "/addReact",
    link2: "/viewReact",
  },
  {
    id: 2,
    icon: <IoLogoJavascript />,
    uid: "Javascript ",
    sub1: "Add Javascript",
    sub2: "View Javascript",
    link1: "/add-Javascript",
    link2: "/view-Javascript",
  },
  {
    id: 3,
    icon: <FaNodeJs />,
    uid: "Nodejs ",
    sub1: "Add Node.js",
    sub2: "View Node.js",
    link1: "/add-Node",
    link2: "/view-Node",
  },
  {
    id: 4,
    icon: <FaWordpress />,
    uid: "WordPress",
    sub1: "Add WordPress",
    sub2: "View WordPress",
    link1: "/Addwordpress",
    link2: "/Viewwordpress",
  },
  {
    id: 5,
    icon: <MdCss />,
    uid: "HTML CSS",
    sub1: "Add HTML_CSS",
    sub2: "View HTML_CSS",
    link1: "/AddHTML_CSS",
    link2: "/ViewHTML_CSS",
  },
  {
    id: 6,
    icon: <RiEnglishInput />,
    uid: "Eng_Spok",
    sub1: "Add Eng-spoken",
    sub2: "View Eng-spoken",
    link1: "/AddEnglish",
    link2: "/ViewEnglish",
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon={faVideo} />,
    uid: "Live Website",
    sub1: "Add Live Website",
    sub2: "View Live Website",
    link1: "/Add-livewebsite",
    link2: "/View-livewebsite",
  },
  {
    id: 8,
    icon: <FontAwesomeIcon icon={faUsers} />,
    uid: "User",
    sub1: "View User",
    sub2: "",
    link1: "/viewuser",
  },
  {
    id: 9,
    icon: <CgWebsite />,
    uid: "Menka",
    sub1: "Add Menka",
    sub2: "View Menka",
    link1: "/Addmenka",
    link2: "/Viewmenka",
  },
  {
    id: 10,
    icon: <RiNextjsFill />,
    uid: "Nextjs",
    sub1: "Add Nextjs",
    sub2: "View Nextjs",
    link1: "/AddNextjs",
    link2: "/ViewNextjs",
  },
  {
    id: 11,
    icon: <FaAws />,
    uid: "AWS",
    sub1: "Add AWS",
    sub2: "View AWS",
    link1: "/AddAWS",
    link2: "/ViewAWS",
  },
  {
    id: 12,
    icon: <SiTypescript />,
    uid: "Typescript",
    sub1: "Add Typescript",
    sub2: "View Typescript",
    link1: "/AddTypescript",
    link2: "/ViewTypescript",
  },
  {
    id: 13,
    icon: <FaGithub />,
    uid: "Github",
    sub1: "Add Github",
    sub2: "View Github",
    link1: "/AddGithub",
    link2: "/ViewGithub",
  },
  {
    id: 14,
    icon: <SiMysql />,
    uid: "SQL",
    sub1: "Add SQL",
    sub2: "View SQL",
    link1: "/AddSQL",
    link2: "/ViewSQL",
  },
  {
    id: 15,
    icon: <SiAngular />,
    uid: "Angular",
    sub1: "Add Angular",
    sub2: "View Angular",
    link1: "/AddAngular",
    link2: "/ViewAngular",
  },
  {
    id: 16,
    icon: <SiPython />,
    uid: "Python",
    sub1: "Add Python",
    sub2: "View Python",
    link1: "/AddPython",
    link2: "/ViewPython",
  },
  {
    id: 17,
    icon: <SiDocker />,
    uid: "Docker",
    sub1: "Add Docker",
    sub2: "View Docker",
    link1: "/AddDocker",
    link2: "/ViewDocker",
  },
  {
    id: 18,
    icon: <SiTestinglibrary />,
    uid: "Testing",
    sub1: "Add Testing",
    sub2: "View Testing",
    link1: "/AddTesting",
    link2: "/ViewTesting",
  },
  {
    id: 19,
    icon: <SiPostgresql />,
    uid: "PostgreSQL",
    sub1: "Add PostgreSQL",
    sub2: "View PostgreSQL",
    link1: "/AddPostgreSQL",
    link2: "/ViewPostgreSQL",
  },
  {
    id: 20,
    icon: <SiSupabase />,
    uid: "supabase",
    sub1: "Add supabase",
    sub2: "View supabase",
    link1: "/Addsupabase",
    link2: "/Viewsupabase",
  },
];

export const javascriptbaseurl = process.env.REACT_APP_JAVASCRIPT_BASEURL;
export const nodebaseurl = process.env.REACT_APP_NODE_BASEURL;
export const reactbaseurl = process.env.REACT_APP_REACT_BASEURL;
export const WordPressUrl = process.env.REACT_APP_WORDPRESS_URL;
export const HTML_CSSUrl = process.env.REACT_APP_HTML_CSS_URL;
export const EnglishUrl = process.env.REACT_APP_ENGLISH_URL;
export const livewebsiteUrl = process.env.REACT_APP_LIVE_WEBSITE_URL;
export const MenkaUrl = process.env.REACT_APP_MENKA_URL;
export const NextjsUrl = process.env.REACT_APP_NEXTJS_URL;
export const AWSUrl = process.env.REACT_APP_AWS_URL;
export const TypescriptUrl = process.env.REACT_APP_TYPESCRIPT_URL;
export const GithubUrl = process.env.REACT_APP_GITHUB_URL;
export const SQLUrl = process.env.REACT_APP_SQL_URL;
export const AngularUrl = process.env.REACT_APP_ANGULAR_URL;
export const PythonUrl = process.env.REACT_APP_PYTHON_URL;
export const DockerUrl = process.env.REACT_APP_DOCKER_URL;
export const TestingUrl = process.env.REACT_APP_TESTING_URL;
export const PostgreSQLUrl = process.env.REACT_APP_POSTGRESQL_URL;
export const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
console.log("supabaseUrl menu data", supabaseUrl);

