export default {
    name: "Andrés Drimer",
    workTitle: "Web Developer",
    moto: "I love building and designing responsive websites to connect people to people.",
    resume:"https://drive.google.com/file/d/1dUO03fxCt7iPKtHVa9kJI7dpocdrnVX_/view?usp=sharing",
    logo: "/assets/logoAD2023-4.png",
    sections: ["home", "about", "skills", "projects", "contact"],
    aboutPhoto: "/assets/portrait2.jpeg",
    status:
      "I´m available for freelance or full-time positions. Contact me and we´ll talk",
    contact: 
      {
        linkedin: "https://www.linkedin.com/in/andres-drimer/",
        github: "https://github.com/AndresDrimer/",
        email: "andresdrimer@hotmail.com",
        whatsapp: "+549116490517",
      },
    resume:
      "https://drive.google.com/file/d/1qK_kooLAZU9H1oNtKwB-rCDA7kbOhgl8/view?usp=sharing",
    about: {
      subtitle: "Everybody´s path is unique. This is mine...",
      paragraph1:
        "I started working at Cafe de las Ciudades, a book publisher specialized in Urbanism, in 2019. I was in charge of comercialization, a role which included dealing with customers, suppliers and book shops. I suggested opening an ecommerce site, which I created with a CMS (TiendaNube). I also ran a strong ad-campaign on social media. They were thrilled to see the results (and their invoicing grew sevenfold!), so then I was in charge of re-designing the website for their monthly newsletter, on its 20th anniversary. I managed to do that with another CMS (Wordpress). I got more and more deeply involved in programing websites and suddenly I realized that I had encountered my new passion. ",
      paragraph2:
        "Then I got a new job at Yaguar.xyz, a network of independent professionals in the field of art and technology applied to entertainment and education. With them I built a set of gamified simulations of job interviews, maintenance of surfaces and textiles, and management of work agenda oriented to the care of the elderly, for the Training Course of the School of Domestic Service.",
      paragraph3:"I got really focused on learning everything about web developing while working on a lot of different projects for people  around (and later for unkowned clients in Feverr). The word kept running mouth to mouth and I ended up building and designing a lot of projects to reach different expectations. Now I have a strong desire to be involved in a group of people to participate in building bigger things, keep the level of complexity going up and to continue learning and growing as a developer.",
      paragraph4:
        "I think I can add a really good base on soft skills, I´m used to working with people from different cultures and can communicate clearly in English, Spanish and Portuguese. I´ve worked in the music industry, in the production field, so I´m used to dealing with deadlines, group leadership and tricky commercial affaires.",
    },
    skills: [
      {
        id: 0,
        tech: "php",
        icon: "/assets/skills/php.webp",
      },
      {
        id: 1,
        tech: "wordpress",
        icon: "/assets/skills/wordpress.png",
      },
      {
        id: 2,
        tech: "next js",
        version: "13.4",
        icon: "/assets/skills/nextjs.png",
      },
      {
        id: 3,
        tech: "react",
        version: "18",
        icon: "/assets/skills/react.png",
      },
      {
        id: 4,
        tech: "tailwind css",
        version: "3",
        icon: "/assets/skills/tailwind.png",
      },
      {
        id: 5,
        tech: "typescript",
        version: "3",
        icon: "/assets/skills/typescript.png",
      },
      {
        id: 6,
        tech: "javascript",
        version: "ECMAScript 2020",
        icon: "/assets/skills/javascript.png",
      },
      {
        id: 7,
        tech: "MySQL",
        icon: "/assets/skills/mysql.png",
      },
      {
        id: 8,
        tech: "firebase",
        icon: "/assets/skills/firebase.png",
      },
      {
        id: 9, 
        tech: "mongo db", 
        icon:"/assets/skills/mongodb.png"
      },
      {
        id: 10,
        tech: "prisma adapter",
        icon: "/assets/skills/prisma.png"
      },
      {
        id: 11,
        tech: "html",
        version: "5",
        icon: "/assets/skills/html.png",
      },
      {
        id: 12,
        tech: "css",
        version: "3",
        icon: "/assets/skills/css.png",
      }, 
      {
        id: 13,
        tech: "bootstrap",
        version: "5",
        icon: "/assets/skills/bootstrap.png",
      },
      {
        id: 14,
        tech: "git",
        icon: "/assets/skills/git.png",
      },
      {
        id: 15,
        tech: "github",
        icon: "/assets/skills/github.png",
      },
      
      {
        id: 16,
        tech: "tiendanube (CMS)",
        icon: "/assets/skills/tiendanube.png",
      },
      {
        id: 17,
        tech: "figma",
        icon: "/assets/skills/figma.png",
      },
      {
        id: 18,
        tech: "photoshop",
        icon: "/assets/skills/photoshop.png",
      },
      {
        id: 19,
        tech: "premiere",
        icon: "/assets/skills/premiere.png",
      }
      
    ],
    projects: [
      {
      id: 0,
      imageInside: "/assets/mockups/desktop/youcab-desktop.png",
      imageBck: "/assets/mockups/iphone/youcab-iphone.png",
      title: "YouCabulary",
      tech: "PHP-API",
      techDetail: ["Php", "MySQL", "CSS", "API", "HTML", "JS"],
      anchor: "youcab",
      externalUrl: "https://youcabulary.adrimer.com.ar/",
      gitHubUrl: "https://github.com/AndresDrimer/youcabulary",
      description:
        "YOCABULARY is an innovative educational application designed to enhance English language learning. The application allows users to add English words to their personal collection. Each word is accompanied by its definition and an audio clip that pronounces the word correctly.This application is specifically designed with an educational purpose in mind, making it an ideal tool for English students. It leverages the power of technology to transform language learning into a more interactive and engaging experience.",
    },
      {
        id: 1,
        imageInside: "/assets/mockups/desktop/ideas-desktop.png",
        imageBck: "/assets/mockups/iphone/ideas-iphone2.png",
        title: "Idea Storage",
        tech: "PHP-OOP",
        techDetail: ["Php", "MySQL", "CSS", "HTML", "JS"],
        anchor: "ideas",
        externalUrl: "https://myideas.com.ar/",
        gitHubUrl: "https://github.com/AndresDrimer/my-notes",
        description:
          "This webpage was born out of a need identified by one of my children. They had brilliant ideas that they often forgot about. In response to this, I decided to create a simple solution as a weekend project. The result is a webpage that allows users to store and retrieve their ideas easily.The webpage is built using PHP - Object Oriented Programming (OOP). It follows the Model-View-Controller (MVC) design pattern.Users can create accounts and log in securely. Once logged in, users can write down their ideas and categorize them. Users can view and edit their ideas whenever they want. The webpage uses a Router to manage the flow of data and establish paths for transmitting information between networks.",
      },
      {
        id: 2,
        imageInside: "/assets/mockups/desktop/desktop-monthly.jpg",
        imageBck: "/assets/mockups/iphone/iphone-monthly.jpg",
        title: "Monthly Budget",
        tech: "PHP-MYSQL",
        techDetail: ["Php", "MySQL", "CSS", "HTML", "JS"],
        anchor: "control",
        externalUrl: "https://monthlybudget.com.ar/",
        gitHubUrl: "https://github.com/AndresDrimer/monthly-budget",
        description:
          "Monthly Budget is a page designed to help control domestic cash flow or small projects. It allows the creation of personal or shared spaces privately. The intention is that it is easy to use, provides a useful service, and is easily scalable. It is designed in PHP and includes HTML, CSS, and Javascript. The database is MySQL.",
      },
      {
        id: 3,
        imageInside: "/assets/mockups/desktop/cdlc-desktop.png",
        imageBck: "/assets/mockups/iphone/cdlc-iphone.png",
        title: "Blog & E-commerce",
        tech: "WORDPRESS",
        techDetail: ["FIGMA", "Tiendanube", "Wordpress"],
        anchor: "urbanism",
        externalUrl: "https://cafedelasciudades.com.ar/",
        gitHubUrl: "https://cafedelasciudades.mitienda.com",
        description:
          "It was quite a beautiful challenge designing for Cafe de las Ciudades. I started with their CMS e-commerce site and then I jumped into re-designing their digital maganize on their 20th anniversary. They have a really strong community so it was important to maintain the previous line as well as injecting new features and a modern design. I received the most wonderful feedback from long time users so I´m quite happy with the results.",
      },
      {
        id: 4,
        imageInside: "/assets/mockups/desktop/max-desktop.png",
        imageBck: "/assets/mockups/iphone/max-iphone.png",
        title: "Artist Website",
        tech: "JAVASCRIPT",
        techDetail: ["Javascript", "CSS", "HTML", "CMS (Tiendanube)"],
        anchor: "artistwebsite",
        externalUrl: "https://maxaguirre.com.ar/",
        gitHubUrl: "https://github.com/AndresDrimer/MaxAguirre",
        description:
          "Personal website for artist Max Aguirre. Written in vanilla JS-CSS. It has beautiful artwork by the artist. It´s integrated with another site I built for the same client, a CMS e-commerce (TiendaNube). My goal was to have a neat continuity between both sites and to capture the artist´s own style.",
      },
      {
        id: 5,
        imageInside: "/assets/mockups/desktop/libertadores-desktop.png",
        imageBck: "/assets/mockups/iphone/libertadores-iphone.png",
        title: "Footbal stamps control",
        tech: "MONGODB-PRISMA-NEXT.JS-TAILWIND",
        techDetail: ["Next.js", "Mongo Db", "Tailwind.css", "Prisma Adapter", "Next-Auth"],
        anchor: "control",
        externalUrl: "https://libertadores-control.vercel.app/",
        gitHubUrl: "https://github.com/AndresDrimer/libertad",
        description:
          "This is an app created to organize an stamp collections. It asks for user authentication, and then it shows a dashboard with missing and found stamps. It also displays stas, and teams images, with a single dedicated page for each one",
      },
      
      
        {
        id: 6,
        imageInside: "/assets/mockups/desktop/talk-desktop.png",
        imageBck: "/assets/mockups/iphone/talk-iphone.png",
        title: "ChatGPT-OpenAI",
        tech: "NEXT-OPEN AI API",
        techDetail: ["Next.js", "Tailwind", "Open AI API", "Axios"],
        anchor: "chat",
        externalUrl: "https://chat-gpt-six-fawn.vercel.app/",
        gitHubUrl: "https://github.com/AndresDrimer/chat-gpt",
        description:
          "Providing a super simple Tailwind UI to be able to chat with ChatGPT. Build on Next.js.",
      },
      {
        id: 7,
        imageInside: "/assets/mockups/desktop/pablo-desktop.png",
        imageBck: "/assets/mockups/iphone/pablo-iphone2.png",
        title: "Filmaker website",
        tech: "REACT",
        techDetail: ["React", "React-router", "EmailJS", "Javascript", "CSS", "HTML"],
        anchor: "filmakerwebsite",
        externalUrl: "https://pablo-coronel.netlify.app/",
        gitHubUrl: "https://github.com/AndresDrimer/pablocoronel-react",
        description:
          "This was a really fun project to build. I decided to use a video background as the main object because it´s a website for a video maker. It includes two different layouts, one for the main section and the other one to show artist´s works and projects, I chosed react-router to manage them and created dynamic routes for portfolio items. I focused on the re-usability of components, making it really easy to update. I used EmailJS to manage sendings from Contact section",
      }
      
    ],
  };
  