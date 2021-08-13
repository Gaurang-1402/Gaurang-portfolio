import chemistryIa from "../img/research/chemistry_ia.jpg"
import econComm1 from "../img/research/econ_comm1.jpg"
import econComm2 from "../img/research/econ_omm2.jpg"
import econComm3 from "../img/research/econ_comm3.jpg"
import mathIa from "../img/research/math_ia.jpg"
import physicsEe from "../img/research/physics_ee.jpg"
import physicsIa from "../img/research/physics_ia.jpg"
import tok from "../img/research/tok.jpg"
import cS from "../img/research/computer_science.jpg"

import physicsEePaper from "../PDFs/physics-ee.pdf"
import physicsIaPaper from "../PDFs/physics-ia.pdf"
import mathsIaPaper from "../PDFs/maths-ia.pdf"
import cSPaper from "../PDFs/cs.pdf"
import econComm1Paper from "../PDFs/economics-micro.pdf"
import econComm2Paper from "../PDFs/economics-macro.pdf"
import econComm3Paper from "../PDFs/economics-international.pdf"
import chemistryIaPaper from "../PDFs/chemistry-ia.pdf"
import tokPaper from "../PDFs/tok.pdf"

const researchWork = [
  {
    id: 1,
    category: "Physics",
    icon1: "G",
    icon2: "Y",
    downloadLink: physicsEePaper,
    image: physicsEe,
    title: "What is the ideal spot to target on a Squash racquet?",
    paragraph: "Physics",
  },
  {
    id: 2,
    category: "Mathematics",
    icon1: "G",
    icon2: "Y",
    downloadLink: mathsIaPaper,
    image: mathIa,
    title: "What is the ideal service in a Squash court?",
    paragraph: "Mathematics",
  },
  {
    id: 3,
    category: "Chemistry",
    icon1: "G",
    icon2: "Y",
    image: chemistryIa,
    downloadLink: chemistryIaPaper,
    title: "To what extent can vinegar be reused after pickling?",
    paragraph: "Chemistry",
  },
  {
    id: 4,
    category: "Economics",
    icon1: "G",
    icon2: "Y",
    image: econComm1,
    downloadLink: econComm1Paper,
    title: "Repurcussions of a Price Floor on Indian sugarcane farmers",
    paragraph: "Microeconomics",
  },
  {
    id: 5,
    category: "Economics",
    downloadLink: econComm2Paper,
    icon1: "G",
    icon2: "Y",
    image: econComm2,
    title: "An analysis of India's rapid GDP growth",
    paragraph: "Macroeconomics",
  },
  {
    id: 6,
    category: "Economics",
    downloadLink: econComm3Paper,
    icon1: "G",
    icon2: "Y",
    image: econComm3,
    title: "Policies used by Hong Kong to maintain a stable exchange rate",
    paragraph: "International Economics",
  },
  {
    id: 7,
    category: "Physics",
    icon1: "G",
    icon2: "Y",
    image: physicsIa,
    downloadLink: physicsIaPaper,
    title: "What is the optimum temperature of a Squash ball?",
    paragraph: "Physics",
  },
  {
    id: 8,
    category: "Theory of Knowledge",
    icon1: "G",
    icon2: "Y",
    downloadLink: tokPaper,
    image: tok,
    title: "What role do analogies play in shaping human knowledge",
    paragraph: "Theory of Knowledge",
  },
  {
    id: 9,
    category: "Computer Science",
    icon1: "G",
    icon2: "Y",
    image: cS,
    downloadLink: cSPaper,
    title: "What mistakes do first time programmers make?",
    paragraph: "Computer Science",
  },
]

export default researchWork
