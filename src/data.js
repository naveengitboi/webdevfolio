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
    proj: "CCD NITC",
    projDescription: "Revamped a website for elegance and functionality using React JS, expanding my expertise in the framework.",
    skillsUsed: ["React JS", "Routers"],
    projLink: "https://github.com/CCD-NITC-Website/ccd-react-website",
    imgUrl: '/assets/works/ccd/5.png',
    linkType: "github",
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
    skillsUsed: ["React JS", "Routers", "Node js", "Express Js"],
    projLink: "https://github.com/naveengitboi/walletmanagerapp",
    imgUrl: '/assets/works/wm/9.png',
    linkType: "github",
  },
  {
    proj: "Algozenith",
    projDescription: "Revamped a website for elegance and functionality using React JS, expanding my expertise in the framework.",
    skillsUsed: ["React JS", "Routers"],
    projLink: "https://github.com/naveengitboi/Algozenith-NITC-Codingclub",
    imgUrl: '/assets/works/az/1.png',
    linkType: "github",
  }
]


export const moreAboutProject = [

  {
    projectName: 'Wallet Manager',
    introduction: {
      name: 'Wallet Manager-2024',
      description: 'Made with LOVE 2024',
      img: '/assets/works/wm/0.png',
      bgColor: '#F2D2C9',
      projectLink: 'https://github.com/naveengitboi/walletmanagerapp'
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
      bgColor: '#6A8C13',
      projectLink: 'https://github.com/naveengitboi/pswebsite'
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
          typeHeader: 'Design flow',
          typeSubHeader: 'I have lame concept in head',
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
          typeHeader: 'Everything at once!  ',
          typeSubHeader: 'Very fewer components',
          typeContent: "I made very fewer components for this website, as you might have guessed it already. Apart from this I added paralax scrolling effect for body section, where top, hero section, scrolls on top of body section. Its quiet interesting overall. "
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              isVideo: true,
              text: 'Two.O Video Loops !',
              icon: <GiClubs />,
              img: '/assets/works/ps/3.mp4'
            }
          },
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
            header: ' Paralax is a plus point to the website.',
            useNums: false
          }
        ]
      },

      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'showcase',
          typeHeader: 'How gallary Looks?',
          typeSubHeader: 'Gallary showcase ',
          typeContent: 'Gallary is made simple with the grid layout, having the images covered inside each block and fixing the layout for 3-4 in large screens and 1 smaller screens.'
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'Two.O Grid Layout Design !',
              icon: <GiClubs />,
              img: '/assets/works/ps/1.png'
            }
          },
        ]
      },

      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'output',
          typeHeader: 'Yahooo, deployed!',
          typeSubHeader: 'This project encourage me enough',
          typeContent: "Although it was my starter development using react js, I gone through multple concepts and gained knowledge."
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: GREEN_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,
            header: 'Build Layouts',
            content: 'After going through multiple layouts fixed one for minimal look .',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Learned',
            content: 'Gone through multiple lectures, docs, stack overflow queries  to get parallax effect',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Deploying',
            content: 'Learned how to deploy website in Netlify.',
            useNums: true,
          }
        ],
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
            note: 'Know me',
            header: 'Let me share something with you!',
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
            isImage: true,
            data: {
              icon: <GiClubs />,
              text: 'Extra.One.O My Journey',
              img: '/assets/works/ps/4.png'
            }
          }
        ]
      },
    ]
  },

  {
    projectName: 'CCD NITC',
    introduction: {
      name: 'CCD - 2023',
      description: '@Internship at NITC 2023',
      img: '/assets/works/ccd/0.png',
      bgColor: '#121212',
      projectLink: 'https://github.com/CCD-NITC-Website/ccd-react-website'
    },
    summary: {

      role: {
        type: 'Frontend Developer',
        context: ',Building Multiple components, and giving clean look!'

      },
      isTeam: true,
      team: [{
        teamate: 'Pranav',
        twork: 'Senior Developer '
      },
      {
        teamate: 'Jaljith',
        twork: 'UI/UX'
      }],
      own: 'Worked on it from scratch, learning different languages.',
      timeline: '2 full Months',
      completed: true,
      progress: 'We team successfully completed task within time period.',
      overview: [
        "We have only 2months to build a website that will be a place for hiring manager to apply for recruitment process in NITC.",
        "We have given full two months of time to complete a fully fledged both frontend and backend application to present on the table. "
      ],
    },

    projectDetails: [
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Challange',
          typeHeader: 'Everything is a head!',
          typeSubHeader: 'The point is clear!',
          typeContent: 'Have a lot of things to do! Making the components build correctly and moreover should be reusable!'
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: RED_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,
            header: 'Initiation',
            content: 'Setting up project for both frontend and backend.',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Coding',
            content: 'Turning out the lines of design to reusable code snippets!',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <GiClubs />,
            header: 'Deploying',
            content: 'After Frontend and Backend, hosting is the final stage to go!',
            useNums: true
          }
        ],
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Components',
          typeHeader: 'Buildiing Phase',
          typeSubHeader: 'Braking down the structure!',
          typeContent: 'Braking down the components makes our work more simpler. I showed one example how I built a timeline in this websiite. This is the most efficeint way of coding!'
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'One.O  workflow of the website',
              icon: <GiClubs />,
              img: '/assets/works/ccd/6.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'In similar Fashion',
              typeContent: 'Understanding the content and their placement helps UI to be clean and gives a surface finished look to the site.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Two.O Glimpse of Small Components',
              icon: <GiClubs />,
              img: '/assets/works/ccd/3.png'
            }
          },
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
            note: 'Key Challange',
            header: 'Making the Horizontal component seems not the easy at start, but Framer Motion made easy!',
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
              typeSubHeader: 'So much stuff',
              typeContent: 'Making this About section took all day with multiple revisions and figma disign was changing in a blink of eye. But dev has no choice to scream, huhuhuh'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Three.O About section Component',
              icon: <GiClubs />,
              img: '/assets/works/ccd/7.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Simplicity ',
              typeContent: 'Used only CSS to achieve the morque effect, i.e horizontal scrolling , instead of using the Framer motion to do so. Challanged myself to do so? huh'
            }
          },

          {
            isImage: true,
            data: {
              text: 'Six.0 Entry to site',
              icon: <GiClubs />,
              img: '/assets/works/ccd/2.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Really a Challange!',
              typeContent: 'It was really a challanging task to finish. Have given a design and to turn it into animations, by randomly popping out the company logos whenever user scrolls to that section in home.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Eight.O Deleting Account',
              icon: <GiClubs />,
              img: '/assets/works/ccd/4.png'
            }
          },


        ]
      },
      {
        isHeaderExist: false,
        isBlocksExist: true,
        isSupportContentExist: false,
        blocksColor: BLUE_COLOR,
        blocks: [
          {
            isFinal: true,
            icon: <PiFigmaLogoDuotone />,
            note: 'More Components',
            header: 'Contributed more in frontend like,  404 page, Student Page, Loader, Lazyloading images etc',
            useNums: false
          }
        ]
      },
      {
        isHeaderExist: false,
        isBlocksExist: false,
        isSupportContentExist: true,
        supportContent: [

          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Helping peer dev',
              typeContent: 'Contributed to Horizontal drag effect using Framer motion and build responsive footer, and easy peasy cool looking cursor animation, which has a trailer to it.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Seven.O All settings',
              icon: <GiClubs />,
              img: '/assets/works/ccd/5.png'
            }
          },
        ]
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Output',
          typeHeader: 'Deploying',
          typeSubHeader: 'Finidings are pretty good when bugs came!',
          typeContent: "This is a really good tenure of mine, sitting at desk going through bugs that came from no where in production. Im very happy with what I did from myside and contributing the other side. "
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: GREEN_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,
            header: 'Achievment',
            content: 'Done all our tasks with in time and completed intern successfully',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Greater UI',
            content: 'Seamless UI and overall Effect is greater for visitors',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Lessons',
            content: 'Apart from plenty technical knowledge, I gained more patience to solve errors.',
            useNums: true,
          }
        ],
      },
    ]
  },
  {
    projectName: 'Algozenith',
    introduction: {
      name: 'Algozenith - 2023',
      description: 'Coding Club at NITC 2023',
      img: '/assets/works/az/0.png',
      bgColor: '#6E68A9',
      projectLink:'https://github.com/naveengitboi/Algozenith-NITC-Codingclub'
    },
    summary: {

      role: {
        type: 'Full Stack & UI',
        context: 'Crafting the website design and tranforming into code!'

      },
      isTeam: true,
      team: [{
        teamate: 'Harshavardhan',
        twork: 'Senior Developer'
      },
      ],
      timeline: '50+ Nights',
      completed: true,
      progress: 'Done Developing and deploying',
      overview: [
        "Website that club to reach students well enough for many purposes, like Jobs References, POTD, Contest etc.",
        "It should showcase the Placed students reviews and their approach to a company. So lots of content and revisions are obvious."
      ],
    },

    projectDetails: [
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Challange',
          typeHeader: 'Should start from Zero',
          typeSubHeader: 'Clean and To the point',
          typeContent: 'Have no Idea from where should I start. Also no proper refereces according to the context of the website.'
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: RED_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,
            header: 'Design',
            content: 'Design should include all the sections in it.',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Full Stack',
            content: 'Turning the design corners and edges into code',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <GiClubs />,
            header: 'Production',
            content: 'After Frontend and Backend, deploying is the final stage to put on!',
            useNums: true
          }
        ],
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Components',
          typeHeader: 'UI Phase',
          typeSubHeader: 'Building bricks by bricks',
          typeContent: 'Building each component and layout step by step and having multiple revisions in between. Parallay coding where we are sure and layout is fixed. '
        },
        isSupportContentExist: true,
        isBlocksExist: false,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'One.O  workflow of the website',
              icon: <GiClubs />,
              img: '/assets/works/az/az.png'
            }
          },
        ]
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Components',
          typeHeader: 'Blocks Stage',
          typeSubHeader: 'Building components',
          typeContent: 'Building and creating content to make website reachable to the targeted audience. This is ensure the smooth flow of design as well'
        },
        isBlocksExist: false,
        isSupportContentExist: true,
        supportContent: [
          {
            isImage: true,
            data: {
              text: 'Two.O All in one and website intro',
              icon: <GiClubs />,
              img: '/assets/works/az/1.png'
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
            note: 'Key',
            header: 'The above design turned the website all the way from zero to hero',
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
              typeSubHeader: 'What they do?',
              typeContent: 'To know the visitors what they really do in club, I decided to keep a actions header in the design.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Three.O What they do?',
              icon: <GiClubs />,
              img: '/assets/works/az/2.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Understandable Info',
              typeContent: 'Cards should be readable and undestandable at first look without any distractions to the viewers eyes. So I came up with this ideas '
            }
          },

          {
            isImage: true,
            data: {
              text: 'Four.0 Cards components',
              icon: <GiClubs />,
              img: '/assets/works/az/3.png'
            }
          },
          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'Minimal UI ',
              typeContent: 'I went through multiple ideas on club guides page, events page, and placement talks. I finally ended up with minimal UI that follows the trend of the website from start. '
            }
          },
          {
            isImage: true,
            data: {
              text: 'Five.O Minima UI components',
              icon: <GiClubs />,
              img: '/assets/works/az/4.png'
            }
          },


        ]
      },
      {
        isHeaderExist: false,
        isBlocksExist: true,
        isSupportContentExist: false,
        blocksColor: BLUE_COLOR,
        blocks: [
          {
            isFinal: true,
            icon: <PiFigmaLogoDuotone />,
            note: 'More Components',
            header: 'Contributed more in frontend like,  404 page, Student Page, Loader, Lazyloading images etc',
            useNums: false
          }
        ]
      },
      {
        isHeaderExist: false,
        isBlocksExist: false,
        isSupportContentExist: true,
        supportContent: [

          {
            isImage: false,
            data: {
              isHeader: false,
              typeSubHeader: 'CTA',
              typeContent: 'This sets aprt from other clubs. Calling the talent early with no particular date/time. So we may not miss any skilled students even after inductions done.'
            }
          },
          {
            isImage: true,
            data: {
              text: 'Six.O Contribute & Part of us',
              icon: <GiClubs />,
              img: '/assets/works/az/5.png'
            }
          },
        ]
      },
      {
        isHeaderExist: true,
        headerContent: {
          isHeader: true,
          type: 'Output',
          typeHeader: 'Deploying',
          typeSubHeader: 'Finidings are pretty good when bugs came!',
          typeContent: "This is a really good tenure of mine, sitting at desk going through bugs that came from no where in production. Im very happy with what I did from myside and contributing the other side. "
        },
        isSupportContentExist: false,
        isBlocksExist: true,
        blocksColor: GREEN_COLOR,
        blocks: [
          {
            isFinal: false,
            icon: <PiFigmaLogoDuotone />,
            header: 'Achievment',
            content: 'Done all our tasks with in time and completed intern successfully',
            useNums: true,
          },
          {
            isFinal: false,
            icon: <PiGameControllerDuotone />,
            header: 'Greater UI',
            content: 'Seamless UI and overall Effect is greater for visitors',
            useNums: true,
          },
          {
            icon: <GiClubs />,
            isFinal: false,
            header: 'Lessons',
            content: 'Apart from plenty technical knowledge, I gained more patience to solve errors.',
            useNums: true,
          }
        ],
      },
    ]
  }

]



