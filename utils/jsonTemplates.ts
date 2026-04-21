export const skillsTemplate = JSON.stringify(
  [
    { name: 'iconName', formattedName: 'Display Name' },
    { name: 'react', formattedName: 'React' },
  ],
  null,
  2,
);

export const experiencesTemplate = JSON.stringify(
  [
    {
      companyName: 'Company Name',
      activePeriod: { startDate: 'MM/YYYY', endDate: 'MM/YYYY' },
      info: {
        en: {
          position: 'Position Title',
          tasks: [{ task: 'Task description' }, { task: 'Another task' }],
        },
        es: {
          position: 'Título del puesto',
          tasks: [{ task: 'Descripción de tarea' }],
        },
      },
    },
  ],
  null,
  2,
);

export const educationTemplate = JSON.stringify(
  [
    {
      title: 'Degree or Certification',
      content: 'Institution',
      url: 'https://optional-link.com',
    },
  ],
  null,
  2,
);

export const fullCvTemplate = JSON.stringify(
  {
    user: {
      name: 'Full Name',
      email: 'email@example.com',
      phone: '+1234567890',
      location: 'City, Country',
      network: {
        linkedin: { display: 'linkedin/username', url: 'https://linkedin.com/in/username' },
        github: { display: 'github/username', url: 'https://github.com/username' },
      },
      info: {
        candidateTitle: 'Job Title',
        about: 'About me text',
        languages: [{ language: 'English', level: 'Native', flag: 'uk' }],
      },
    },
    skills: [{ name: 'iconName', formattedName: 'Display Name' }],
    workExperience: [
      {
        companyName: 'Company Name',
        activePeriod: { startDate: 'MM/YYYY', endDate: 'MM/YYYY' },
        info: {
          en: { position: 'Position Title', tasks: [{ task: 'Task description' }] },
          es: { position: 'Título del puesto', tasks: [{ task: 'Descripción de tarea' }] },
        },
      },
    ],
    education: [
      {
        title: 'Degree or Certification',
        content: 'Institution',
        url: '',
      },
    ],
  },
  null,
  2,
);
