/* =====================================================================
   ALL THE TEXT ON THE SITE LIVES HERE.
   Edit the words between the quotes, save, refresh the page. That's it.

   Tips
   - Keep the quotes and the commas at the end of lines.
   - If your text needs a double quote, write \" or use ’ “ ” instead.
   - Simple HTML works inside any text: <em>, <strong>, <a href="...">.
   - "simple": the shorter text shown when "Simplify" is switched on.
     Leave a field out of "simple" and the full text is used instead.
   - "ai": true  → the item stays visible when "AI experiences" is on.
     "ai": false → the item is hidden when "AI experiences" is on.
   - "image": path to a photo in the images/ folder. Use "" for no photo.
   - To add an experience, copy one { ... } block, paste it, and edit.
     Order on the page = order in this list.
   ===================================================================== */

window.SITE = {

  hero: {
    name: "Hi, I'm Zahra!",
    tagline: "I'm an AI pilled, Data Scientist turned Product Manager. Slightly obsessed with building things people actually use! :D",
    simple: {
      tagline: ""
    }
  },

  // Text on the two buttons in the top bar
  nav: {
    ai: "AI experiences",
    simple: "Simplify",
    showSimple: false   // true = show the "Simplify" button, false = hide it
  },

  // The small headings inside every experience
  labels: {
    built: "What I built",
    challenges: "Challenges"
  },

  experiences: [
    {
      company: "Danone",
      when: "2020",
      place: "",
      title: "The company's first ML product",
      ai: true,
      built: "ML powered sales strategy tool",
      challenges: "Most of the data came from the distributors which came in unstructured and formats across different distributors. The tool needed to be well integrated to the sales team's existing tool to prioritize usability and avoid steep learning curve.",
      simple: {
        built: "ML powered sales strategy tool.",
        challenges: "Getting forecasts actually used."
      },
      image: "images/01-danone.jpg",
      caption: ""
    },
    {
      company: "IBM",
      when: "2021",
      place: "",
      title: "Automating credit scoring",
      ai: false,
      built: "Automated end-to-end credit scoring across 200+ branches of a legacy auto-financing business.",
      challenges: "Revamping the legacy systems, explaining the new processes to the directors.",
      simple: {
        built: "Credit Scoring Automation.",
        challenges: "Revamping the legacy systems, explaining the new processes to the directors."
      },
      image: "images/02-ibm.jpg",
      caption: ""
    },
    {
      company: "GoTo (Gojek Tokopedia)",
      when: "2022",
      place: "",
      title: "Financial access for the Underbanked",
      ai: true,
      built: "Credit scoring models with real time and batch inferences, based on in-app behavior data.",
      challenges: "Dealing with unstructured data and real time inference systems, and navigating potential biases in the data.",
      simple: {
        built: "Credit scoring models with real time and batch inferences, based on in-app behavior data.",
        challenges: "Dealing with unstructured data and real time inference systems, and navigating potential biases in the data."
      },
      image: "images/03-goto-fintech.jpg",
      caption: ""
    },
    {
      company: "GoTo (Gojek Tokopedia)",
      when: "2023",
      place: "",
      title: "Personalized vouchers at scale",
      ai: true,
      built: "Led the team on building the incentive allocation engine that allows for efficient and personalized voucher denominations, with causal inference based ML model and a knapsack optimizer.",
      challenges: "High stake and high visibility problem as it directly manages the company's burn rate, and maintaining the system at scale",
      simple: {
        built: "Led the team that allocates incentives budget.",
        challenges: "Building the routines around the system, not just the system."
      },
      image: "images/04-incentives.jpg",
      caption: ""
    },
    {
      company: "GoTo (Gojek Tokopedia)",
      when: "2025",
      place: "",
      title: "First PM Role! Ads and Recommendations Systems",
      ai: true,
      built: "Semantic based recommendations with LLM based retrieval system.",
      challenges: "Pioneering the first productionalization of LLM in the company, making sure the systems work for our 30M+ users",
      simple: {
        built: "Ads and recommendations product.",
        challenges: "Balancing users, merchants, and the platform."
      },
      image: "images/05-ads.jpg",
      caption: ""
    },
    {
      company: "GoTo (Gojek Tokopedia)",
      when: "2025",
      place: "",
      title: "Redefining affordability",
      ai: false,
      built: "Long term strategy on how the products should be perceived as affordable",
      challenges: "Navigating between affordability and profitability.",
      simple: {
        built: "Ride pricing and shared rides.",
        challenges: "Keeping the cheapest ride a good ride."
      },
      image: "images/06-gocar.jpg",
      caption: ""
    }
  ],

  end: {
    title: "Now: MIT Sloan",
    text: "Next: ?",
    simple: {
      text: "Doing my MBA in Cambridge since 2026. Next: AI native products!"
    },
    links: [
      { label: "Email",    href: "mailto:zahra@wassil.com" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/nabila-zahra-wassil" },
      { label: "GitHub",   href: "https://github.com/nabilazahra" },
      { label: "Resume",   href: "resume.pdf" }
    ]
  },

  // Shown when "AI experiences" is on and no item has ai: true
  emptyMessage: "No experiences tagged as AI yet."
};
