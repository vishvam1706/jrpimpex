const blogsData = {
  categories: [
    { id: "all", title: "All Posts" },
    { id: "agri-insights", title: "Agri Insights" },
    { id: "export-tips", title: "Export Tips" },
    { id: "sustainability", title: "Sustainability" },
    { id: "market-trends", title: "Market Trends" },
  ],

  posts: [
    {
      id: 1,
      slug: "global-spice-trade-trends-2024",
      title: "Global Spice Trade Trends Shaping 2024",
      excerpt:
        "An in-depth look at how shifting consumer demands and geopolitical factors are reshaping the global spice export market and what it means for importers worldwide.",
      content:
        "The global spice trade has seen unprecedented shifts in 2024, driven by changing consumer preferences and evolving trade policies...",
      category: "market-trends",
      categoryLabel: "Market Trends",
      image: "/about_us.jpg",
      date: "February 10, 2025",
      readTime: "6 min read",
      featured: true,
      tags: ["Spices", "Export", "Global Trade"],
      author: {
        name: "Rajiv Patel",
        role: "Export Strategist",
        avatar: "/about_us.jpg",
      },
    },
    {
      id: 2,
      slug: "sustainable-packaging-agro-exports",
      title: "Sustainable Packaging in Agro Exports",
      excerpt:
        "How eco-conscious packaging solutions are not only reducing carbon footprints but also becoming a decisive factor for international buyers and global certifications.",
      content:
        "Sustainability is no longer optional in the agro-export sector. Buyers across Europe and North America are mandating eco-friendly packaging...",
      category: "sustainability",
      categoryLabel: "Sustainability",
      image: "/about_us.jpg",
      date: "January 28, 2025",
      readTime: "5 min read",
      featured: false,
      tags: ["Packaging", "Eco-Friendly", "Exports"],
      author: {
        name: "Priya Shah",
        role: "Sustainability Lead",
        avatar: "/about_us.jpg",
      },
    },
    {
      id: 3,
      slug: "quality-certification-guide",
      title: "Quality Certifications Every Agro Exporter Needs",
      excerpt:
        "From FSSAI to ISO 22000, navigating the certification landscape can be daunting. We break down the essentials for smooth export operations.",
      content:
        "Certifications are the backbone of international trade credibility. Without them, your products may not even clear customs in key destination markets...",
      category: "export-tips",
      categoryLabel: "Export Tips",
      image: "/about_us.jpg",
      date: "January 15, 2025",
      readTime: "8 min read",
      featured: false,
      tags: ["Certification", "ISO", "Compliance"],
      author: {
        name: "Mehul Joshi",
        role: "Compliance Director",
        avatar: "/about_us.jpg",
      },
    },
    {
      id: 4,
      slug: "cumin-production-rajasthan",
      title: "Inside Rajasthan's Cumin Production Belt",
      excerpt:
        "We take you behind the scenes into the heart of India's cumin farming regions — understanding soil, climate, and harvest practices that produce world-class quality.",
      content:
        "Rajasthan accounts for nearly 80% of India's cumin output. The arid climate, ironically, is exactly what cumin thrives in...",
      category: "agri-insights",
      categoryLabel: "Agri Insights",
      image: "/about_us.jpg",
      date: "December 20, 2024",
      readTime: "7 min read",
      featured: false,
      tags: ["Cumin", "Rajasthan", "Farming"],
      author: {
        name: "Anita Verma",
        role: "Agri Researcher",
        avatar: "/about_us.jpg",
      },
    },
    {
      id: 5,
      slug: "cold-chain-logistics-fresh-produce",
      title: "Cold Chain Logistics for Fresh Agro Produce",
      excerpt:
        "Maintaining product integrity across thousands of miles requires more than refrigeration. Explore the technology and planning behind modern cold chain exports.",
      content:
        "Cold chain logistics is an intricate science combining temperature control, real-time monitoring, and meticulous documentation...",
      category: "export-tips",
      categoryLabel: "Export Tips",
      image: "/about_us.jpg",
      date: "December 5, 2024",
      readTime: "6 min read",
      featured: false,
      tags: ["Logistics", "Cold Chain", "Fresh Produce"],
      author: {
        name: "Rajiv Patel",
        role: "Export Strategist",
        avatar: "/about_us.jpg",
      },
    },
    {
      id: 6,
      slug: "organic-farming-future-india",
      title: "Organic Farming: India's Export Future",
      excerpt:
        "With global organic food demand surging, Indian farmers and exporters are uniquely positioned to capitalize — if the right support systems are built.",
      content:
        "India is the world's largest producer of organic farmers by number, yet organic exports remain a fraction of their potential...",
      category: "agri-insights",
      categoryLabel: "Agri Insights",
      image: "/about_us.jpg",
      date: "November 18, 2024",
      readTime: "9 min read",
      featured: false,
      tags: ["Organic", "Farming", "Future"],
      author: {
        name: "Priya Shah",
        role: "Sustainability Lead",
        avatar: "/about_us.jpg",
      },
    },
  ],
};

export default blogsData;