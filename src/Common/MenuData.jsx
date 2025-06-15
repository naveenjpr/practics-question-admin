import {
  faBook,
  faPeopleGroup,
  faSliders,
  faUsers,
  faVideo,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaNodeJs, FaReact, FaWordpress } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiEnglishInput } from "react-icons/ri";
import { MdCss } from "react-icons/md";



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
    icon: <MdCss/>,
    uid: "HTML CSS",
    sub1: "Add HTML_CSS",
    sub2: "View HTML_CSS",
    link1: "/AddHTML_CSS",
    link2: "/ViewHTML_CSS",
  },
  {
    id: 6,
    icon: <RiEnglishInput/>,
    uid: "Eng_Spok",
    sub1: "Add Eng-spoken",
    sub2: "View Eng-spoken",
    link1: "/AddEnglish",
    link2: "/ViewEnglish",
  },
  {
    id: 7,
    icon: <FontAwesomeIcon icon={faUsers} />,
    uid: "User",
    sub1: "View User",
    sub2: "",
    link1: "/viewuser",
  },
];

export const javascriptbaseurl =
  "https://rss-feed-node-js.onrender.com/api/backend/javascript";

export const nodebaseurl =
  "https://rss-feed-node-js.onrender.com/api/backend/node-js-Notes";

export const reactbaseurl =
  "https://rss-feed-node-js.onrender.com/api/backend/ReactNotes";

export const WordPressUrl =
  "https://rss-feed-node-js.onrender.com/api/backend/WordPress";
export const HTML_CSSUrl =
  "https://rss-feed-node-js.onrender.com/api/backend/HTML_CSS";
// export const EnglishUrl =
//   "http://localhost:5000/api/backend/English";
export const EnglishUrl =
  "https://rss-feed-node-js.onrender.com/api/backend/English";

//
