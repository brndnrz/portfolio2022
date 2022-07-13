const data = [
  {
    id: 0,
    title: "Trending Trailers",
    featureIMG: ["/trendingTrailers/trendingTrailer.svg"],
    images: [],
    tagline: `A simple, clean, and engaging user interface for exploring currently trending trailers from ${(
      <i>The Movie Database</i>
    )}}.`,
    stack: ["Next.js", "React", "TMDB API", "CSS Modules", "SSG", "SSR"],
    description: `The goal for this project was to simply the process of discovering new and trending trailers. Many websites are littered with ads and CTAs that completely disrupt what should be an exciting experience anticipating upcoming films. The UI was designed to feel big while displaying only the most essential information to aid each movie trailer. Next.js’s Static Site Generation was the perfect tool to deliver fast currently trending movie pages updated once a day. For the search feature sites are delivered using Server Side Rending for movies that aren’t currently trending. Trending Trailers uses The Movie Database for movie information and Youtube for all movie trailers.`,
    link: "https://trendingtrailers.vercel.app/",
  },
  {
    id: 1,
    title: "Augment News",
    featureIMG: ["/augment/augment.png"],
    images: [],
    tagline:
      "Augment News is a daily news link aggregator featuring currently trending news from business, pop culture, sports, tech, and science sources across the web.",
    stack: ["Next.js", "React", "NewsAPI", "Tailwind CSS", "SSG", "SSR"],
    description:
      "Augment News is a daily news link aggregator featuring currently trending news from business, pop culture, sports, tech, and science sources across the web.",
    link: "https://augment.vercel.app/",
  },
];

export default data;
