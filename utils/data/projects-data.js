import ayla from "/public/image/ayla.jpg";
import crefin from "/public/image/crefin.jpg";
import realEstate from "/public/image/real-estate.jpg";
import travel from "/public/image/travel.jpg";

export const projectsData = [
  {
    id: 1,
    name: "Weather App",
    description:
      "Your go-to weather app for real-time updates on your current location and worldwide forecasts. Features include automatic location detection, location search, and a five-day forecast. Stay prepared with WeatherNow.",
    tools: ["React", "Tailwind css", "Material UI", "Open Weather Api"],
    role: "React Intern",
    code: "",
    demo: "",
    image: crefin,
  },
  {
    id: 2,
    name: "Silicon ERP",
    description:
      "ReactERP is your all-in-one solution for efficient business management. Built with React, this ERP system streamlines your operations and boosts productivity. With modules for inventory management, sales, HR, and more, ReactERP empowers your team to work smarter, not harder.",
    tools: ["React ", "Tailwind CSS", "React Query", "Formik", "Material UI"],
    role: "React Developer",
    code: "",
    demo: "",
    image: travel,
  },
  {
    id: 3,
    name: "Law App",
    description:
      "Rajpatra is a state-of-the-art legal app tailored specifically for government entities, designed to streamline legal procedures and bolster governance efficacy. Harnessing the power of React technology, Rajpatra redefines how governments handle legal affairs, ensuring adherence to laws, fostering transparency, and promoting accountability.",
    tools: [
      "React",
      "Bootstrap",
      "React-Bootstrap",
      "Formik",
      "Redux",
      "JWT",
      "React-Paginate",
    ],
    code: "",
    role: "React Developer",
    demo: "",
    image: realEstate,
  },
  {
    id: 4,
    name: "Real State Management",
    description:
      "My team and I developed a Real State management dashboard application called Ghaderi Freema. As a front-end developer, I worked on creating the dashboard using React JS, Shad Cn, Redux, Calendar, and other. We used React Redux to manage the application's state and React-hook-form to handle forms.",
    tools: [
      "React JS",
      "Shad CN",
      "Redux",
      "Tailwind Css",
      "React hook form",
      "Yup",
    ],
    code: "",
    demo: "",
    image: ayla,
    role: "React Developer",
  },
];

// Do not remove any property.
// Leave it blank instead as shown below

// {
//     id: 1,
//     name: '',
//     description: "",
//     tools: [],
//     role: '',
//     code: '',
//     demo: '',
//     image: crefin,
// },
