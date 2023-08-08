import { IJobs } from '@/app/types';

const jobsData: IJobs[] = [
  {
    id: 1,
    en: {
      position: 'Front-End Developer',
      activePeriod: 'Nov 2022 - Present',
      companyName: 'Raona',
      comapnyUrl: 'https://www.raona.com/',
      companyLogo: '/raona.png',
      tasks: [
        'Working on developing and deploying scalable applications',
        'Utilizing ReactJS to design and implement front-end features, resulting in improved user experience and satisfaction',
        'Collaborating with the team to deliver high-quality products on time',
      ],
    },
    es: {
      position: 'Desarrollador Front-End',
      activePeriod: 'Nov 2022 - Actual',
      companyName: 'Raona',
      comapnyUrl: 'https://www.raona.com/',
      companyLogo: '/raona.png',
      tasks: [
        "Trabajé en el desarrollo y despliegue de aplicaciones escalables",
        "Utilicé ReactJS para diseñar e implementar características en el front-end, lo que resultó en una experiencia y satisfacción mejoradas para el usuario",
        "Colaboré con el equipo para entregar productos de alta calidad a tiempo",
      ],
    }
  },
  {
    id: 2,
    en: {
      position: 'RPA Developer',
      activePeriod: 'Jul 2022 - Nov 2022',
      companyName: 'Softtek',
      comapnyUrl: 'https://www.softtek.com/',
      companyLogo: '/softtek.png',
      tasks: [
        'Developed and deployed bots to automate business processes, resulting in a 60% reduction in processing time',
        'Successfully implemented RPA solutions that accelerated digital transformation by 80%',
        'Created bots to streamline workflows, reducing the number of errors by 95%',
      ],
    },
    es: {
      position: 'Desarrollador Front-End',
      activePeriod: 'Jul 2022 - Nov 2022',
      companyName: 'Softtek',
      comapnyUrl: 'https://www.softtek.com/',
      companyLogo: '/softtek.png',
      tasks: [
        'Bots desarrollados e implementados para automatizar procesos comerciales, lo que resultó en una reducción del 60% en el tiempo de procesamiento',
        'Soluciones RPA implementadas con éxito que aceleraron la transformación digital en un 80 %',
        'Creé bots para agilizar los flujos de trabajo, reduciendo la cantidad de errores en un 95%',
      ],
    }
  },

  {
    id: 3,
    en: {
      position: 'Front-End Developer',
      activePeriod: 'Sep 2020 - Jun 2022',
      companyName: 'Mercap',
      comapnyUrl: 'https://www.mercapsoftware.com/',
      companyLogo: '/mercap.png',
      tasks: [
        'Developed HTML templates and designed responsive websites',
        'Participated in design meetings with clients to take high-level design requirements and turn them into user stories for the development team',
        'Coded new features for client websites and fixed identified bugs',
      ],
    },
    es: {
      position: 'Desarrollador Front-End',
      activePeriod: 'Sep 2020 - Jun 2022',
      companyName: 'Mercap',
      comapnyUrl: 'https://www.mercapsoftware.com/',
      companyLogo: '/mercap.png',
      tasks: [
        'Plantillas HTML desarrolladas y sitios web receptivos diseñados',
        'Participé en reuniones de diseño con clientes para tomar requisitos de diseño de alto nivel y convertirlos en historias de usuario para el equipo de desarrollo',
        'Nuevas funciones codificadas para sitios web de clientes y errores identificados corregidos',
      ],
    }
  },
];

export default jobsData;