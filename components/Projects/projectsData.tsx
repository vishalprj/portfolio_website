export type ProjectDataTypes = {
  liveLink: string;
  sourceLink: string;
  id: string;
  title: string;
  techStack: string;
  img: string;
};

export const projectsData: ProjectDataTypes[] = [
  {
    liveLink: 'https://apex-store.vercel.app/',
    sourceLink: 'https://github.com/vishalprj/Ecommerce-store',
    id: 'apex-store',
    title: 'Apex-store',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1722246333/Screenshot_2024-07-29_at_3.15.12_PM_x2d5ah.png',
    techStack: 'React, react-query, Vanilla CSS and Auth using JWT',
  },

  {
    liveLink: 'https://scrum-beta.vercel.app',
    sourceLink: 'Zscrum - Task Management Platform',
    id: 'Zscrum',
    title: 'Zscrum - Task Management Platform',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1751307883/Screenshot_2025-06-30_at_11.54.26_PM_mugt35.png',
    techStack: 'Next.js, Clerk, ShadCN, Prisma',
  },
  {
    liveLink: 'https://medimeet-v2.vercel.app/',
    sourceLink: 'https://gitlab.com/vishalprj/medimeet',
    id: 'medimeet',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1751310013/Screenshot_2025-07-01_at_12.29.53_AM_ymykrs.png',
    title: 'Medimeet – Online Doctor Consultation Platform',
    techStack: 'Next.js, Clerk, ShadCN, Prisma',
  },
  {
    liveLink: 'https://book-exchange-platform-two.vercel.app/',
    sourceLink: 'https://gitlab.com/vishalprj/book-exchange-platform',
    id: 'apex-book-store',
    title: 'Book-exchange-store',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1724672880/Screenshot_2024-08-26_at_5.17.21_PM_xmxdm9.png',
    techStack: 'Next JS, MongoDB with Prisma, Module CSS',
  },
  //   {
  //     liveLink: 'https://apex-tube.vercel.app/',
  //     sourceLink: 'https://github.com/vishalprj/video-library',
  //     id: 'apex-tube',
  //     title: 'Apex-tube',
  //     img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1722246504/Screenshot_2024-07-29_at_3.16.40_PM_dtpqoc.png',
  //     techStack:
  //       'React, Redux-toolkit, RTK-query, Vanilla CSS and Auth using JWT',
  //   },
];
