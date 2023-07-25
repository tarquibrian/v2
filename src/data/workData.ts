interface Lang {
  es: Projects;
  en: Projects;
}

interface Projects {
  title: string;
  projects: SingleProject[];
}

interface SingleProject {
  id: string;
  title: string;
  services: string[];
  button: string;
  img: string;
}

export const projectsData: Lang = {
  es: {
    title: "Our branding success stories.",
    projects: [
      {
        id: "pauls-burger",
        title: "PAULS BURGER",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
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
        id: "pauls-burger",
        title: "PAULS BURGER",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
      {
        id: "pauls-burger",
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
        img: "p1",
      },
    ],
  },
};
