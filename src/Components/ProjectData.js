import carrE from "../img/project/carr-e.jpg"
import electronStore from "../img/project/electron-store.jpg"
import chuckle from "../img/project/chuckle.jpg"
import livelink from "../img/project/livelink.jpg"
import githelp from "../img/project/githelp.jpg"
import environmoney from "../img/project/environmoney.jpg"

const projects = [
  {
    id: 1,
    image: carrE,
    title: "Carr-E: an autonomous luggage cart",
    link: "https://www.youtube.com/watch?v=v23SoKtrJJM",
    isHackathon: false,
    teamType: "group",
    tech: "C++",
  },
  {
    id: 2,
    image: electronStore,
    title: "Electron: an online store to buy electronics",
    link: "https://electronstore.herokuapp.com/",
    isHackathon: false,
    teamType: "solo",
    tech: "MERN stack",
  },
  {
    id: 3,
    image: chuckle,
    title: "Chuckle: a tool to improve your sense of humor",
    link: "https://devpost.com/software/chuckle",
    isHackathon: true,
    teamType: "solo",
    tech: "React",
  },
  {
    id: 4,
    image: livelink,
    title: "Livelink: AR meets Linkedin",
    link: "https://devpost.com/software/livelink",
    isHackathon: true,
    teamType: "group",
    tech: "Java",
  },
  {
    id: 5,
    image: githelp,
    title: "GitHelp: facilitating contributions on Github",
    link: "https://devpost.com/software/githelp-z79mnd",
    isHackathon: true,
    teamType: "group",
    tech: "React",
  },
  {
    id: 6,
    image: environmoney,
    title: "Environmoney: be the change with your space change",
    link: "https://devpost.com/software/enviromoney",
    isHackathon: true,
    teamType: "group",
    tech: "React Native",
  },
]

export default projects
