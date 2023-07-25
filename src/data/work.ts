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
  img?: React.ReactNode;
}

const projectsData: Lang = {
  es: {
    title: "Our branding success stories.",
    projects: [
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
      },
      { title: "asdf", services: ["hola", "hola"], button: "VIEW PROJECT" },
    ],
  },
  en: {
    title: "Our branding success stories.",
    projects: [
      {
        title: "asdf",
        services: ["hola", "hola"],
        button: "VIEW PROJECT",
      },
      { title: "asdf", services: ["hola", "hola"], button: "VIEW PROJECT" },
    ],
  },
};
