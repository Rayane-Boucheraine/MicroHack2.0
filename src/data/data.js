import dashboard from "../../public/Aside/dashboard.svg";
import tasks from "../../public/Aside/tasks.svg";
import employers from "../../public/Aside/employers.svg";
import problems from "../../public/Aside/problems.svg";
import help from "../../public/Aside/help.svg";
import Samy from "../../public/Header/human.svg"
import Samy1 from "../../public/Header/human1.svg"
import Samy2 from "../../public/Header/human2.svg"
import {FaStar} from 'react-icons/fa'

export const links1 = [
  {
    icon: dashboard,
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    icon: tasks,
    name: "Tasks",
    href: "/dashboard/tasks",
  },
  {
    icon: problems,
    name: "Problems",
    href: "/dashboard/problems",
  },
  {
    icon: employers,
    name: "Workers",
    href: "/dashboard/employers",
  },
];

export const links2 = [
  {
    icon: help,
    name: "Help",
    href: "/dashboard/help",
  },
  {
    icon: help,
    name: "Settings",
    href: "/dashboard/settings",
  },
];

export const workers = [
  {
    img: Samy,
    name: "Samy Rahim",
    status: "Free",
  },
  {
    img: Samy1,
    name: "Samy Rahim",
    status: "Soon to be free",
  },
  {
    img: Samy2,
    name: "Samy Rahim",
    status: "Soon to be free",
  },
  {
    img: Samy2,
    name: "Samy Rahim",
    status: "Free",
  },
  {
    img: Samy1,
    name: "Samy Rahim",
    status: "Soon to be free",
  },
  {
    img: Samy,
    name: "Samy Rahim",
    status: "Free",
  },
];



export const Employers = [
  {
    img: Samy,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Working",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy1,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Working",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Free",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy2,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Free",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy1,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Off Shit",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Working",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Working",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy2,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Free",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Idle",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
  {
    img: Samy1,
    name: "Samy Rahim",
    speciality: "Plomberie",
    status: "Working",
    rating: (
      <>
        <FaStar /> <FaStar /> <FaStar />
      </>
    ),
  },
];