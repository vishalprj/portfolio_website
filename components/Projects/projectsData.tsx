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
    liveLink: 'https://apex-tube.vercel.app/',
    sourceLink: 'https://github.com/vishalprj/video-library',
    id: 'apex-tube',
    title: 'Apex-tube',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1722246504/Screenshot_2024-07-29_at_3.16.40_PM_dtpqoc.png',
    techStack:
      'React, Redux-toolkit, RTK-query, Vanilla CSS and Auth using JWT',
  },
  {
    liveLink: 'https://book-exchange-platform-two.vercel.app/',
    sourceLink: 'https://gitlab.com/vishalprj/book-exchange-platform',
    id: 'apex-book-store',
    title: 'Book-exchange-store',
    img: 'https://res.cloudinary.com/ddlpde95c/image/upload/v1724672880/Screenshot_2024-08-26_at_5.17.21_PM_xmxdm9.png',
    techStack: 'Next JS, MongoDB with Prisma, Module CSS',
  },
];
