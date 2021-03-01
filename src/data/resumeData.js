const resumeData = {
  name: "João André Coelho",
  street: "Rua Just a Dummy, Street, 1234-123, Portugal",
  dateOfBirth: "1990-10-16",
  placeOfBirth: "Lisbon",
  nationality: "Portuguese",
  contact: "+1234567890",
  email: "justfordemo@demo.com",
  linkedin: "linkedin.com/in/joaomcoelho90",
  github: "github.com/joaomcoelho",
  summary: [
    {
      quote:
        "Committed Software Engineer passionate about programming and problem solving. Experienced in Full Stack Development with C#, ASP.Net MVC, SQL, JavaScript and modern web responsive techniques. Efficient in implementing strategies that improve user experience and engagement. Experienced in visualizing and delivering expected results, having the ability to understand business objectives and implement solutions that perform."
    },
    {
      quote:
        "Motivated and eager to learn new things. Enjoys being part of a team to connect with others in a collaborative environment where ideas start to flow, which is always a fun part."
    }
  ],
  experiences: [
    {
      img:
        "https://media.licdn.com/dms/image/C560BAQERQf3Hwe3Yew/company-logo_200_200/0?e=2159024400&v=beta&t=f9LF6q6pM1H02A4PV0YyYVGb15TkKjPCgN8nQEtno-s",
      title: "Software Engineer at Finsolutia, Lisbon",
      dateStart: "November 2017",
      dateEnd: "Present",
      bullets: [
        {
          description:
            "developed good quality software that answered and helped the business to perform"
        },
        {
          description:
            "maintain, support and develop web solutions using modern technologies"
        },
        {
          description:
            "ETL and database modelling to speed up and implement processes"
        },
        {
          description:
            "performed code review and identify functional gaps, always fixed in a performant manner"
        },
        {
          description:
            "implemented GDPR administration, appraisal module and several banking solutions and new features for business"
        }
      ]
    },
    {
      img:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQELgLELjHGtng/company-logo_200_200/0/1609742123161?e=1622678400&v=beta&t=L0OJB_vfuvhBkUH5VSAQtifSU53yVSvdQfp2fm6o2Ak",
      title: "Analyst Consultant at Capgemini, Lisbon",
      dateStart: "May 2016",
      dateEnd: "November 2017",
      bullets: [
        {
          description:
            "developed solutions that perform for financial, health and energy industries"
        },
        {
          description:
            "implemented custom web tools that improved the efficiency of the team"
        },
        {
          description:
            "developed web applications and database modelling in several projects using C#, ASP.Net MVC and Oracle SQL"
        },
        {
          description:
            "ETL, dashboard and report development as Business Intelligence Analyst"
        }
      ]
    },
    {
      img:
        "https://media-exp1.licdn.com/dms/image/C4D0BAQELgLELjHGtng/company-logo_200_200/0/1609742123161?e=1622678400&v=beta&t=L0OJB_vfuvhBkUH5VSAQtifSU53yVSvdQfp2fm6o2Ak",
      title: "Trainee at Capgemini, Lisbon",
      dateStart: "September 2015",
      dateEnd: "May 2016",
      bullets: [
        {
          description:
            "implemented a core banking solution along with the Business Intelligence Team"
        },
        {
          description:
            "developed dashboards and reports using OBIEE and Oracle BI Publisher 10g"
        },
        {
          description: "reporting and data modelling using Oracle PL/SQL"
        },
        {
          description:
            "custom front-end manipulation on dashboards using HTML, CSS and JavaScript"
        }
      ]
    }
  ],
  programmingSkills: [
    {
      title: "C#, ASP .NET, JavaScript",
      score: 0.95
    },
    {
      title: "NodeJS, Express",
      score: 0.6
    }
  ],
  webSkills: [
    {
      title: "REST, SOAP",
      score: 0.95
    },
    {
      title: "HTML5, CSS, Bootstrap, jQuery",
      score: 0.95
    },
    {
      title: "React, Vue",
      score: 0.66
    }
  ],
  loadingSkills: [
    {
      title: "Flutter, Go",
      score: 0.3
    }
  ],
  dataModelSkills: [
    {
      title: "JSON, XML",
      score: 0.95
    }
  ],
  dataManagementSkills: [
    {
      title: "SQL Server, T-SQL",
      score: 0.95
    },
    {
      title: "Oracle SQL, PostgreSQL",
      score: 0.66
    },
    {
      title: "NoSQL, Firebase",
      score: 0.66
    }
  ],
  languages: [
    {
      title: "Portuguese",
      score: 1
    },
    {
      title: "English",
      score: 0.9
    },
    {
      title: "Spanish",
      score: 0.7
    }
  ],
  education: [
    {
      img: "",
      course:
        "Bachelor of Science (BSc) and Masters of Science (MSc) in Biomedical Engineering",
      university:
        "Instituto Superior Técnico, Technical University of Lisbon , Lisbon",
      dateStart: "September 2008",
      dateEnd: "June 2015",
      description:
        "Master GPA of 16/20. Master Thesis 'WebCam based optical tracker for free-hand ultrasound' grade 17/20. ",
      courses:
        " Machine Learning, Artificial Intelligence, Image Processing, Algorithms and Data Structures."
    }
  ],
  activities: [
    {
      description:
        'Co-organizer of the "I Jornadas de Engenharia Biomédica" in Lisbon'
    },
    {
      description:
        "Board Member, Supervisory Board Chairman at “Núcleo de Engenharia Biomédica” "
    },
    {
      description: "Tennis, Volleyball, Snowboard and Bodyboard"
    },
    {
      description: "Playing the piano, guitar"
    },
    {
      description:
        "Travelling, knowing new places and connecting with people from different countries and cultures."
    }
  ],
  projects: [
    {
      title: "Kobonotes, www.thekobonotes.com",
      description:
        "Kobonotes is a note extractor tool for Kobo e-readers, built using Vue.js as front-end framework and Firebase as back-end. The main objective was to improve skills in Vue.js and also in the use of NoSQL databases that improve performance. This learning experience was transformed into a project which has around 100 active users today."
    }
  ],
  keywords: [
    "Problem Solving",
    "Algorithms and Datastructures",
    "Web Development",
    "Data Modelling",
    "Data Management",
    "Team Work",
    "Language Agnostic",
    "Agile SCRUM"
  ]
};

export default resumeData;
