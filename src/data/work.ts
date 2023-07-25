interface Lang {
  es: Projects;
  en: Projects;
}

interface Projects {
  title: string;
  projects: SingleProject[];
}

interface SingleProject {
  title: string;
  services: string[];
  button: string;
  img: string;
}

const projectsData: Lang = {
  es: {
    title: "Our branding success stories.",
    projects: [
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
    ],
  },
  en: {
    title: "Our branding success stories.",
    projects: [
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
    ],
  },
};
