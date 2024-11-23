import {
  FaLaptopCode,
  FaHeartbeat,
  FaFlask,
  FaFutbol,
  FaBriefcase,
  FaGraduationCap,
  FaFilm,
  FaGlobe,
  FaCouch,
  FaPlane,
  FaLandmark,
  FaTree,
} from "react-icons/fa";
import { IoFastFoodSharp } from "react-icons/io5";
import { GiCrimeSceneTape } from "react-icons/gi";
import { RiMenuFold4Line } from "react-icons/ri";

export const icons = {
  Technology: <FaLaptopCode />,
  Health: <FaHeartbeat />,
  Science: <FaFlask />,
  Sports: <FaFutbol />,
  Business: <FaBriefcase />,
  Education: <FaGraduationCap />,
  Entertainment: <FaFilm />,
  World: <FaGlobe />,
  Lifestyle: <FaCouch />,
  Tourism: <FaPlane />,
  Politics: <FaLandmark />,
  Environment: <FaTree />,
  Food: <IoFastFoodSharp />,
  Crime: <GiCrimeSceneTape />,
  Menu: <RiMenuFold4Line />,
  Travel: <FaPlane />,
};

export const getIcon = (iconName) => {
  return icons[iconName];
};

export const categoryTypes = {
  Politics: "Politics",
  Tech: "technology",
  Sports: "Sports",
  Business: "Business",
  Finance: "Finance",
  Entertainment: "Entertainment",
  Health: "Health",
  Weather: "Weather",
  Lifestyle: "Lifestyle",
  Auto: "Auto",
  Science: "Science",
  Travel: "Travel",
  Environment: "Environment",
  World: "World",
  General: "General",
};

export function getTwoDaysAgo() {
  const today = new Date();
  today.setDate(today.getDate() - 1); // Subtract 1 day from the current date

  const year = today.getFullYear();
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get month (adding 1 as months are zero-indexed)
  const day = String(today.getDate()).padStart(2, "0"); // Get the day of the month

  return `${year}-${month}-${day}`;
}

export function getTodaysDate() {
  const today = new Date();
  const year = today.getFullYear(); // Get the full year (e.g., 2024)
  const month = String(today.getMonth() + 1).padStart(2, "0"); // Get the month (1-based), pad to 2 digits
  const day = String(today.getDate()).padStart(2, "0"); // Get the day of the month, pad to 2 digits

  return `${year}-${month}-${day}`;
}
