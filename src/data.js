import { GiClubs } from "react-icons/gi";
import { SiMaterialdesignicons } from "react-icons/si";
import { PiGameControllerDuotone, PiFigmaLogoDuotone } from "react-icons/pi";
import { ORANGE_COLOR, RED_COLOR, GREEN_COLOR, BLUE_COLOR } from "./constants/colors";


export const profileInfo = [

  {
    question: "Status",
    answer: "Prefinal Undergrad Mechanical student @NITC.  I love doing stuff which i feel worthy to attempt, never see for a hint in life while taking a step.",
    imgUrl: '/assets/mine.jpg',
  },
  {
    question: "What Else?",
    answer: "I do Photoshop. I started casually and here it is, its still with me :)",
    imgUrl: '/assets/photoshopasteroid.jpg',
  },
  {
    question: "Any Hobbies?",
    answer: "I do pen, pencil arts in my freetime. Same here I started for fun and now I'm loving this. Sometimes hobbies turns to Love",
    imgUrl: '/assets/artwork.jpg',
  }, {
    question: "You know Blender?",
    answer: "Hmm! Lets give a try and started working on blender, but my PC isn't that good enough to render images, for now I kept it aside.",
    imgUrl: '/assets/blender.jpg',
  },
]

export const skillInfo = [
  {
    category: 'Web Dev',
    stuff: ['react js', 'node js', 'express js', 'mongodb']
  },


  {
    category: 'Database',
    stuff: ['SQLite3', 'mongodb', 'firebase']
  },

  {
    category: 'Programming',
    stuff: ['DSA', 'Python', 'C++(intermediate)', 'JavaScript', 'C', 'OOPs']
  },

  {
    category: 'AI/ML(Beginner)',
    stuff: ['Numpy', 'Pandas', 'Matplotlib', 'SkLearn']
  },
  {
    category: 'Interest',
    stuff: ['Next JS', 'THREE JS', 'Web Dev + AI']
  },
  {
    category: 'IDE',
    stuff: ['VSCode', 'NeoVim(+1Month)']
  }

]

export const experienceInfo = [
  {
    company: "CCD NITC",
    position: "Web Developer",
    interval: "06/06/23 - 30/07/23",
    description: "Crafted website content highlighting campus remarkable placement statistics to attract and engage discerning recruiting firms."
  },
  {
    company: "Freelancing",
    position: "Graphic Designer",
    interval: "Present",
    description: "Engaged as a freelance designer, I participated in a collaborative venture focused on an intriguing assignment for a YouTube content producer."
  },

]


export const projectsInfo = [
  {
    proj: "Youtube Clone",
    projDescription: "I mastered React and backend tools, excelling in crafting powerful web applications with engaging interfaces",
    skillsUsed: ["React JS", "Mongo DB", "Authentication", "REST API", "Routers"],
    projLink: "https://github.com/naveengitboi/youtubeclone",
    imgUrl: '/assets/youtube.jpg',
    linkType: "github",

  },
  {
    proj: "Student Learning Tracker",
    projDescription: "Creating a website to track student learning and provide essential tools, driven by the need for a personal learning journey companion.",
    skillsUsed: ["React JS", "Express", "Mongo DB", "Authentication", "REST API", "Routers"],
    projLink: "https://github.com/naveengitboi/student_tracker",
    imgUrl: '/assets/sttracker.jpg',
    linkType: "github"
  },
  {
    proj: "Basic Dept clone",
    projDescription: "Revamped a website for elegance and functionality using React JS, expanding my expertise in the framework.",
    skillsUsed: ["React JS", "Routers"],
    projLink: "https://github.com/naveengitboi/basic_dept_clone",
    imgUrl: '/assets/basicdept.jpg',
    linkType: "github"
  },
  {
    proj: "Graphic Designfolio",
    projDescription: "Executed a design project, showcasing adept skills in Photoshop and design tools, underscoring extensive experience",
    skillsUsed: ["React JS", "Routers"],
    projLink: "https://graphicdesignerau.netlify.app/",
    imgUrl: '/assets/gdfolio.jpg',
    linkType: "server"

  },


  {
    proj: "Wallet Manager",
    projDescription: "Revamped a website for elegance and functionality using React JS, expanding my expertise in the framework.",
    skillsUsed: ["React JS", "Routers"],
    projLink: "https://github.com/naveengitboi/basic_dept_clone",
    imgUrl: '/assets/basicdept.jpg',
    linkType: "github",
  },
]


export const moreAboutProject = [

  {
    projectName: 'Wallet Manager',
    introduction: {
      name: 'Wallet Manager-2024',
      description: 'Made with LOVE 2024',
      img: '/assets/works/wm/0.png',
      bgColor: '#073F6E'
    },
    summary: {

      role: {
        type: 'Developer',
        context: 'Feature Scoping, Research and Devloping'

      },
      isTeam: false,
      team: [{
        teamate: 'Naveen',
        twork: 'Frontend Developer'
      },
      {
        teamate: 'Naveen',
        twork: 'Frontend Developer'
      }, {
        teamate: 'Naveen',
        twork: 'Frontend Developer'
      }],
      own: 'Worked on it from scratch, learning different languages.',
      timeline: '1+Month',
      completed: false,
      progress: 'currently woriking on Charts and analytics',
      overview: [
        "Test on Hub was a campanion web app originally built to be used by stadia game and we are taking over it",
        "I owned and lead design stategy for the futer of the Test Hub in support of Stadia's B2B pivot- playing a critical role in scoping and prototyping the game", "Test Hub Next's Vision was highly praised by key stake holder but was unfortunately, sunste along side..."

      ],
    },





    projectDetails: [
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Challange',
          typeHeader: 'Exposing myself to bigger codebase',
          typeSubHeader: 'Embracing complex coding challenges to accelerate my growth as a developer.',
          typeContent: "Tackling more daunting coding challenges allows me to elevate my skills. By constructing everything from scratch, including the UI and code, I'm forced to delve deeper and learn more effectively.Moreover, propelling each other forward to achieve collective growth is an even greater undertaking that requires a collaborative effort."
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: RED_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,

            header: 'User Interface',
            content: 'Have to create website User Interface from zero, using Figma tool. (HLD)',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Initiation',
            content: 'Kicking off the project by collecting all necessary resources and uploading them to GitHub.',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Learnings',
            content: 'Have to learn various tools and get exposure of those to make project look acheivable.',
            useNums: true,
          }
        ],
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Work Flow',
          typeHeader: 'How I approach Problem',
          typeSubHeader: 'I condensed my ideas and process into a canvas',
          typeContent: "I began by crafting a website layout and structure using Figma, ensuring a solid foundation for the design. This step allowed me to visualize the overall architecture. Next, I created detailed user database schemas to gain a deeper understanding of the data requirements. This thorough planning phase sets the stage for a successful website development process."
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'One.O  workflow of the website',
              icon: <GiClubs />,
              img: '/assets/works/wm/10.png'
            }
          },
        ]

      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Glimpse',
          typeHeader: 'Understanding Core',
          typeSubHeader: 'Working of Reusable Components',
          typeContent: "Built Reusable componenents like forms, transation table, history table, Graphs/ Analytics, Register, Login forms, User profile, so on. These sort of reusability enhanced the entire work flow of the website."
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'Two.O Glimpse of Small Components',
              icon: <GiClubs />,
              img: '/assets/works/wm/1.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Its interesting and challanging.',
              typeContent: 'Crafted reusable components that streamlined my workflow, making tasks more efficient and streamlined. These components now enable me to tackle projects with ease and consistency.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Three.O Forgot password component',
              icon: <GiClubs />,
              img: '/assets/works/wm/2.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'History/ Heart of website',
              typeContent: 'Created all sort of functionality a actual or a real website has. More functionality and more user friendly, Downloading history is what everyone wanted.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Four.O Very Recent history',
              icon: <GiClubs />,
              img: '/assets/works/wm/4.png'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Five.O All Transaction history',
              icon: <GiClubs />,
              img: '/assets/works/wm/5.png'
            }
          }

        ]
      },
      {
        isHeaderExist: false,
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: BLUE_COLOR,
        blocks: [
          {
            isFinal: true,
            icon: <PiFigmaLogoDuotone />,
            note: 'Findings',

            header: 'Things became more tricky to understand when lines are increasing, in high frequency! But No stops!',
            useNums: false

          }
        ]
      },
      {
        isHeaderExist: false,
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Entry Point?',
              typeContent: 'Integrated Firebase Authentication for google login. Apart from that, actual Registration and login procedure is also followed. This helps the user to not focus on form filling, and hence ease in entering application.'
            }
          },

          {
            isImage: true,
            data: {
              text: 'Six.0 Entry to site',
              icon: <GiClubs />,
              img: '/assets/works/wm/7.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'One page for all options!',
              typeContent: 'You have everything on table. Just know what to do. You have option to change password, 2factor authentication, deleting account, so on...'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Seven.O All settings',
              icon: <GiClubs />,
              img: '/assets/works/wm/9.png'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Eight.O Deleting Account',
              icon: <GiClubs />,
              img: '/assets/works/wm/3.png'
            }
          },


        ]
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Output',
          typeHeader: 'Finally we reach end of sea.',
          typeSubHeader: 'This project enriched my design skills as well as coding skills. ',
          typeContent: "It exposed me to different tools and errors. Like Apex charts, React Charts, Data integration with charts, Axios Cors Errors, Deploying errors, Protected Routes, Authentications with firebase, React and express routers, MongodB  so on...."
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: GREEN_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,

            header: 'Completed Figma',
            content: 'Learned creating components, maskings, design principles so on.',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Decoded Figma',
            content: 'Decoded various task by breaking them into chunks and components to build website.',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Seekings',
            content: 'Learned a lot of things in building website, as I explained above',
            useNums: true,
          }
        ],
      }
    ]
  },
  {
    projectName: 'Graphic Designfolio',
    introduction: {
      name: 'GDFolio',
      description: 'Graphic Design Portfolio - 2021',
      img: '/assets/works/ps/0.png',
      bgColor: '#073F6E'
    },
    summary: {

      role: {
        type: 'Developer',

        context: 'Designing and Developing'

      },
      isTeam: false,
      own: 'Crafted from basics to showcase my design skills',
      timeline: '7 Days',
      completed: true,
      progress: 'Deployed in Netlify',
      overview: ['Designed this Portfolio to showcase my photoshop skills, that I developed while I was working with development on the other side.', 'I have good touch with drawings as well apart from designing and developing.', 'This was the 3rd project when I started learning React from youtube. Despite its basic in UI, I learned a lot while working on this project.']
    },





    projectDetails: [
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Problem',
          typeHeader: 'How to share my PS files? ',
          typeSubHeader: 'One place for everyone to reach out for!',
          typeContent: 'It became obvious that I cannot send my drive files to someone who wants to take a look on Photoshop Skills. So I wanted to develop simple ui site that showcases my PS skills.'
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: RED_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,

            header: 'Inspiration',
            content: 'Going through multiple websites to get idea what Im gonna build',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Initiation',
            content: 'Setting things ready to work with  website',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Skill',
            content: 'Yet this was my third project in react, Im confident enough to take up on.',
            useNums: true,
          }
        ],
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Idea',
          typeHeader: 'Basic Design flow',
          typeSubHeader: 'I have lame and basic design layout for the website in mind!',
          typeContent: "I kept thinking of what could be the layout of website! and I came up with a basic layout design that can effectivly work."
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'One.O  Layout of the website',
              icon: <GiClubs />,
              img: '/assets/works/ps/2.png'
            }
          },
        ]

      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Glimpse',
          typeHeader: 'Understanding Core',
          typeSubHeader: 'Working of Reusable Components',
          typeContent: "Built Reusable componenents like forms, transation table, history table, Graphs/ Analytics, Register, Login forms, User profile, so on. These sort of reusability enhanced the entire work flow of the website."
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'Two.O Glimpse of Small Components',
              icon: <GiClubs />,
              img: '/assets/works/wm/1.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Its interesting and challanging.',
              typeContent: 'Crafted reusable components that streamlined my workflow, making tasks more efficient and streamlined. These components now enable me to tackle projects with ease and consistency.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Three.O Forgot password component',
              icon: <GiClubs />,
              img: '/assets/works/wm/2.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'History/ Heart of website',
              typeContent: 'Created all sort of functionality a actual or a real website has. More functionality and more user friendly, Downloading history is what everyone wanted.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Four.O Very Recent history',
              icon: <GiClubs />,
              img: '/assets/works/wm/4.png'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Five.O All Transaction history',
              icon: <GiClubs />,
              img: '/assets/works/wm/5.png'
            }
          }

        ]
      },
      {
        isHeaderExist: false,
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: BLUE_COLOR,
        blocks: [
          {
            isFinal: true,
            icon: <PiFigmaLogoDuotone />,
            note: 'Findings',

            header: 'Things became more tricky to understand when lines are increasing, in high frequency! But No stops!',
            useNums: false

          }
        ]
      },
      {
        isHeaderExist: false,
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Entry Point?',
              typeContent: 'Integrated Firebase Authentication for google login. Apart from that, actual Registration and login procedure is also followed. This helps the user to not focus on form filling, and hence ease in entering application.'
            }
          },

          {
            isImage: true,
            data: {
              text: 'Six.0 Entry to site',
              icon: <GiClubs />,
              img: '/assets/works/wm/7.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'One page for all options!',
              typeContent: 'You have everything on table. Just know what to do. You have option to change password, 2factor authentication, deleting account, so on...'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Seven.O All settings',
              icon: <GiClubs />,
              img: '/assets/works/wm/9.png'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Eight.O Deleting Account',
              icon: <GiClubs />,
              img: '/assets/works/wm/3.png'
            }
          },


        ]
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Output',
          typeHeader: 'Finally we reach end of sea.',
          typeSubHeader: 'This project enriched my design skills as well as coding skills. ',
          typeContent: "It exposed me to different tools and errors. Like Apex charts, React Charts, Data integration with charts, Axios Cors Errors, Deploying errors, Protected Routes, Authentications with firebase, React and express routers, MongodB  so on...."
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: GREEN_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,

            header: 'Completed Figma',
            content: 'Learned creating components, maskings, design principles so on.',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Decoded Figma',
            content: 'Decoded various task by breaking them into chunks and components to build website.',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Seekings',
            content: 'Learned a lot of things in building website, as I explained above',
            useNums: true,
          }
        ],
      }
    ]
  }

]
