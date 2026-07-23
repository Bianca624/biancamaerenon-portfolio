
interface Project {
    id: number;
    title: string;
    desc: string;
    img: string;
    link?: string;
    github?: string;
    tags: string[];
  }
  
export const projects: Project[] = [
    {
      id: 0,
      title: "Vesta",
      desc: "A global transaction guarantee company for online purchases, delivering unparalleled approval rates and a frictionless customer experience while eliminating chargebacks and other forms of digital fraud.",
      img: "/static/projects/vesta.jpg",
      link: "https://www.vesta.io/",
      tags: ["ReactJS", "Typescript", "Material UI", "CSS", "Redux Toolkit"],
    },
    {
      id: 1,
      title: "Wealth Securities Inc.",
      desc: "Wealth Securities Inc. (WSI) was incorporated in 1986 primarily to engage in the financial industry business as a broker and/or dealer of securities.",
      img: "/static/projects/wsi.png",
      link: "https://wealthsec.com/",
      tags: ["HTML", "TailwindCSS", "ReactJS", "Redux Toolkit", "Javascript", "Typescript"],
    },
    {
      id: 2,
      title: "Interactive Loop Telecommunication",
      desc: "An urban retreat where value and comfort meet. The Exchange Regency Residence Hotel offers a pleasant respite to modern and modest travelers alike.",
      img: "/static/projects/rpp.png",
      link: "https://www.theexchangeregency.com/",
      tags: ["HTML", "CSS", "PHP"],
    }
  ];