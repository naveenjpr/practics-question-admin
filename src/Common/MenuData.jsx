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

//

