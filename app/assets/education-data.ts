import { IEducation } from '@/app/types';

const educationData: IEducation[] = [
    {
        id: 1,
        en: {
            title: "Bachelor's degree in computer programming",
            content: "Teclab instituto tencico",
            url: ""
        },
        es: {
            title: "Tecnicatura en Programacion",
            content: "Teclab instituto tencico",
            url: ""
        }
    },
    {
        id: 2,
        en: {
            title: "PluralSight path",
            content: "150+ hours of Front-End development path",
            url: ""
        },
        es: {
            title: "Curso de Pluralsight",
            content: "150+ horas de curso de desarrollo front-end en React.js ",
            url: ""
        }
    },
    {
        id: 3,
        en: {
            title: "Cloud Computing",
            content: "AZ-900 certified",
            url: "https://www.credly.com/badges/5d54f43d-768f-4d3f-89d8-8fcb3678c89e"
        },
        es: {
            title: "Desarrollo en la nube ",
            content: "Certificacion AZ-900",
            url: "https://www.credly.com/badges/5d54f43d-768f-4d3f-89d8-8fcb3678c89e"
        }
    },
    {
        id: 4,
        en: {
            title: "React",
            content: "National Technological University",
            url: "reactCert"
        },
        es: {
            title: "React",
            content: "Universidad Tecnologica Nacional",
            url: "reactCert"
        }
    },
];


export default educationData;