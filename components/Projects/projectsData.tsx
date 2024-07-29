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
  //   {
  //     liveLink: 'https://nucleus-book.vercel.app',
  //     sourceLink: 'https://github.com/avinashprj/nucleus-book',
  //     id: 'nucleus-book',
  //     title: 'Nucleus-book',
  //     img: 'https://res.cloudinary.com/avinashprj/image/upload/v1670864890/Screenshot_2022-12-12_223737_r9fcsn.png',
  //     techStack: 'React, Redux-toolkit, Vanilla CSS and Auth using JWT',
  //   },
];
