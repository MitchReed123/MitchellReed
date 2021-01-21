import Mock from "../mock";

const database = {
  information: {
    name: "Mitchell Reed",
    aboutContent:
      "I am a Web/Software Developer. I can provide clean code and great design.",
    age: 23,
    phone: "317-605-7387",
    nationality: "American",
    language: "English",
    email: "reed.mitch@live.com",
    address: "Indianapolis, Indiana",
    freelanceStatus: "Available",
    socialLinks: {
      facebook: "",
      twitter: "",
      pinterest: "",
      behance: "",
      linkedin: "https://www.linkedin.com/feed/",
      dribbble: "",
      github: "https://github.com/MitchReed123",
    },
    brandImage: "/images/logos/mrLogoName.png",
    aboutImage: "/images/about-image.jpg",
    aboutImageLg: "/images/about-image-lg.jpg",
    cvfile: "/files/my_resume.pdf",
  },
  services: [
    {
      title: "Web Design",
      icon: "color-pallet",
      details:
        "Together we can create clean and beutiful user interfaces that have functionality.",
    },
    {
      title: "Web Development",
      icon: "code",
      details:
        "Experience working with HTML/CSS/JS, love putting them all together in a beautiful React App.",
    },
    {
      title: "Software Development",
      icon: "code",
      details:
        "Experience working with RAZER pages/CSHTML/C# to create a functional Web/Desktop App",
    },
  ],
  reviews: [
    {
      id: 1,
      content:
        "Mitch is a graduate of the Eleven Fifty Academy's Accelerated Learning Program, where I am responsible for the student and instructor experience. From my perspective during the course, Mitch is a growing developer who is quick to grasp concepts. Mitch will be an asset to any team!",
      author: {
        name: "Jenn Williams",
        designation: "Development Leader",
      },
    },
    // {
    //   id: 2,
    //   content:
    //     "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita impedit nobis tempore quaerat quibusdam.",
    //   author: {
    //     name: "Susan Yost",
    //     designation: "Client",
    //   },
    // },
    // {
    //   id: 3,
    //   content: "Lorem ipsum dolor, sit amet consectetur adipisicing elit.",
    //   author: {
    //     name: "Irving Feeney",
    //     designation: "Fiverr Client",
    //   },
    // },
  ],
  skills: [
    {
      title: "HTML5",
      value: 95,
    },
    {
      title: "CSS3",
      value: 90,
    },
    {
      title: "Javascript",
      value: 85,
    },
    {
      title: "ReactJS",
      value: 80,
    },
    {
      title: "SQL",
      value: 75,
    },
    {
      title: "C#",
      value: 65,
    },
  ],
  portfolios: [
    {
      id: 1,
      title: "Facebook-Clone",
      subtitle: "A functional live DB facebook-clone.",
      imageUrl: "/images/testing.jpg",
      languages: "HTML/CSS/React JS",
      url: "https://facebook-cl-a4449.web.app/",
    },
    {
      id: 2,
      title: "Investment Tracker",
      subtitle: "Awesome way to track Crypto/Stocks",
      imageUrl: "/images/investapp-r.png",
      languages: "C#/MVC/CSHTML/CSS/JS",
      url: "https://facebook.com",
    },
    {
      id: 3,
      title: "The Daily Lotto",
      subtitle: "Active tracking and selection of lotto numbers",
      imageUrl: "/images/lottoApp.png",
      languages: "HTML/CSS/TypeScript JS",
      url: "https://pinterest.com",
    },
    {
      id: 4,
      title: "Movie Rater",
      subtitle: "Movie rating application with profile page",
      imageUrl: "/images/moviePortfolio.png",
      languages: "HTML/CSS/React JS",
      url: "#",
    },
    // {
    //   id: 5,
    //   title: "Instagram Reals Clone",
    //   subtitle: "Live DB instagram clone",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   languages: "HTML/CSS/React JS",
    //   url: "#",
    // },
    {
      id: 6,
      title: "Slack Clone",
      subtitle: "Live DB Slack Clone",
      imageUrl: "/images/slack-clone.png",
      languages: "HTML/CSS/React JS",
      url: "#",
    },
    // {
    //   id: 7,
    //   title: "Whats-App Clone",
    //   subtitle: "functioning messaging app",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   languages: "HTML/CSS/React JS",
    //   url: "https://twitter.com",
    // },
    {
      id: 8,
      title: "Natours",
      subtitle: "Pure HTML/CSS responsive website using SASS(SCSS)",
      imageUrl: "/images/natours2.jpg",
      languages: "HTML/CSS/SASS",
      url: "https://mitchreed123.github.io/Natours/",
    },
    // {
    //   id: 9,
    //   title: "Not sure yet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   url: "#",
    // },
    // {
    //   id: 10,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 11,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 12,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 13,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 14,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
    // {
    //   id: 15,
    //   title: "Pendrive",
    //   subtitle: "Free pendrive mockup design.",
    //   imageUrl: "/images/portfolio-image-6.jpg",
    //   largeImageUrl: ["/images/portfolio-image-6-lg.jpg"],
    // },
    // {
    //   id: 16,
    //   title: "Beautiful Pendrive",
    //   subtitle: "Pendrive with great design & flexible.",
    //   imageUrl: "/images/portfolio-image-7.jpg",
    //   largeImageUrl: ["/images/portfolio-image-7-lg.jpg"],
    //   url: "https://twitter.com",
    // },
    // {
    //   id: 17,
    //   title: "Sticker",
    //   subtitle: "Clip sticker mockup design.",
    //   imageUrl: "/images/portfolio-image-8.jpg",
    //   largeImageUrl: ["/images/portfolio-image-8-lg.jpg"],
    // },
    // {
    //   id: 18,
    //   title: "Packet",
    //   subtitle: "Beautiful packet & product design.",
    //   imageUrl: "/images/portfolio-image-9.jpg",
    //   largeImageUrl: ["/images/portfolio-image-9-lg.jpg"],
    // },
    // {
    //   id: 19,
    //   title: "T-shirt Mockup",
    //   subtitle: "A beautiful t-shirt mockup.",
    //   imageUrl: "/images/portfolio-image-1.jpg",
    //   largeImageUrl: ["/images/portfolio-image-1-lg.jpg"],
    //   url: "https://dribbble.com",
    // },
    // {
    //   id: 20,
    //   title: "Coffee Mug",
    //   subtitle: "Awesome coffee mug design.",
    //   imageUrl: "/images/portfolio-image-4.jpg",
    //   largeImageUrl: [
    //     "/images/portfolio-image-4-lg.jpg",
    //     "/images/portfolio-image-4-lg2.jpg",
    //   ],
    //   url: "https://facebook.com",
    // },
    // {
    //   id: 21,
    //   title: "Tea & Coffee Mug",
    //   subtitle: "Beautiful mug with logo.",
    //   imageUrl: "/images/portfolio-image-2.jpg",
    //   url: "https://pinterest.com",
    // },
    // {
    //   id: 22,
    //   title: "Pen Holder",
    //   subtitle: "A pen holder with beautiful design.",
    //   imageUrl: "/images/portfolio-image-3.jpg",
    //   largeImageUrl: ["/images/portfolio-image-3-lg.jpg"],
    //   url: "#",
    // },
    // {
    //   id: 23,
    //   title: "Mug",
    //   subtitle: "Mug with awesome style",
    //   imageUrl: "/images/portfolio-image-5.jpg",
    //   largeImageUrl: ["/images/portfolio-image-5-lg.jpg"],
    // },
  ],
  experience: {
    workingExperience: [
      {
        id: 1,
        year: "2020 - Present",
        position: "Learning Assistant",
        company: "Eleven Fifty Academy",
        details: "Helping Students with course work, Reviewing course work",
      },
      {
        id: 2,
        year: "2018 - 2020",
        position: "Sales/Assistant Manager",
        company: "Vapor Madness",
        details:
          "Responsible for increasing sales of products, Exceeded sales goals by 13% over a six month period",
      },
      {
        id: 3,
        year: "2016 - 2017",
        position: "Data Contractor",
        company: "Eleven Fifty Consulting",
        details:
          "Coordianted statistical data analysis, design, and information flow. Performed Data Visualization and Analysis utilizing a big data environment. Collaborated with the Data Visualization team at Vectren Gas using OBIEE to enhance real time data retrieval.",
      },
    ],
    educationExperience: [
      {
        id: 1,
        year: "2020 - 2020",
        graduation: "Certificate",
        university: "Eleven Fifty Academy",
        details:
          "12-week immersive learning program for Software Development taught with industry-guided curriculum, real-world project-based learning, and 500+ hours of logged coding time and training. Professional development completed in C#, CSHTML,CSS Addressing and resolving business challenges, portfolio development, Agile team development and methodology, multiple project presentations (individual and team), daily stand-ups",
      },
      {
        id: 2,
        year: "2020 - 2020",
        graduation: "Certificate",
        university: "Eleven Fifty Academy",
        details:
          "12-week immersive learning program for Web Development taught with industry-guided curriculum, real-world project-based learning, and 500+ hours of logged coding time and training. Agile methodology, multiple project presentations(individual and team), project lab time, portfolio development.",
      },
      // {
      //   id: 3,
      //   year: "2015 - 2016",
      //   graduation: "Higher Schoold Graduation",
      //   university: "Abc College",
      //   details:
      //     "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. Deleniti exercitationem nostrum quasi. Molestiae, vel porro.",
      // },
    ],
  },
  blogs: [
    {
      id: 1,
      title: "Markdown & Html supported blog.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/markdown-html-supported-blog.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 2,
      title: "Installing NodeJS on your device.",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/installing-nodejs-on-your-device.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 3,
      title: "UI/UX design starter with Adobe XD.",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/uiux-design-starter-with-adobe-xd.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 4,
      title: "Boost your post for increasing sales.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/boost-your-post-for-increasing-sales.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 5,
      title: "Difference between GatsbyJS & NextJS.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/difference-between-gatsbyjs-and-nextjs.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 6,
      title: "How to choose javascript framework for project.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource:
        "../../blog/how-to-choose-javascript-framework-for-project.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 7,
      title: "Web automation with python language.",
      featuredImage: "/images/blog-image-7.jpg",
      filesource: "../../blog/web-automation-with-python-language.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 8,
      title: "Time to use latest technology for creating a website.",
      featuredImage: "/images/blog-image-8.jpg",
      filesource:
        "../../blog/time-to-use-latest-technology-for-creating-a-website.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 9,
      title: "Think out of the box.",
      featuredImage: "/images/blog-image-9.jpg",
      filesource: "../../blog/think-out-of-the-box.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 10,
      title: "Trending designs in 2020.",
      featuredImage: "/images/blog-image-1.jpg",
      filesource: "../../blog/trending-designs-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 11,
      title: "How to get 10k instagram followers?",
      featuredImage: "/images/blog-image-2.jpg",
      filesource: "../../blog/how-to-get-10k-instagram-followers.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 12,
      title: "What NodeJS can do?",
      featuredImage: "/images/blog-image-3.jpg",
      filesource: "../../blog/what-nodejs-can-do.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 13,
      title: "Futures of javascript.",
      featuredImage: "/images/blog-image-4.jpg",
      filesource: "../../blog/future-of-javascript.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 14,
      title: "Popular javascript library in 2020.",
      featuredImage: "/images/blog-image-5.jpg",
      filesource: "../../blog/popular-javascript-library-in-2020.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
    {
      id: 15,
      title: "Promrammers must read books.",
      featuredImage: "/images/blog-image-6.jpg",
      filesource: "../../blog/programmers-must-read-books.md",
      createDay: "20",
      createMonth: "February",
      createYear: "2020",
    },
  ],
  contactInfo: {
    phoneNumbers: ["317-605-7387"],
    emailAddress: ["reed.mitch@live.com"],
    address: "Indianapolis, Indiana",
  },
};

Mock.onGet("/api/information").reply((config) => {
  const response = database.information;
  return [200, response];
});

Mock.onGet("/api/services").reply((config) => {
  const response = database.services;
  return [200, response];
});

Mock.onGet("/api/reviews").reply((config) => {
  const response = database.reviews;
  return [200, response];
});

Mock.onGet("/api/skills").reply((config) => {
  const response = database.skills;
  return [200, response];
});

Mock.onGet("/api/portfolios").reply((config) => {
  const response = database.portfolios;
  return [200, response];
});

Mock.onGet("/api/experience").reply((config) => {
  const response = database.experience;
  return [200, response];
});

Mock.onGet("/api/blog").reply((config) => {
  const response = database.blogs;
  return [200, response];
});

Mock.onGet("/api/contactinfo").reply((config) => {
  const response = database.contactInfo;
  return [200, response];
});
