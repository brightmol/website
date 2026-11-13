// News posts shown on news.html. Newest first is tidy, but the page sorts by
// date anyway, so the order here doesn't matter.
//
// To add a LinkedIn post:
//   1. On LinkedIn, open the post's "..." menu and choose "Copy link to post".
//   2. Copy one of the blocks below, paste the link as `url` and the post text
//      (or a shortened version) as `text`.
//   3. If the post has a picture, save it in news/images/ and set `image` to
//      its path, e.g. "news/images/2026-11-20-conference.jpg".
//
// The card shows the start of the post; "Read more" opens the whole post on
// the site (full text, uncropped pictures), so paste the complete text.
//
// Fields:
//   date      required  "YYYY-MM-DD"
//   text      required  the full body; line breaks are kept and web addresses
//                       become links. Write it between backticks (`...`) to
//                       paste several paragraphs as they are.
//   title     optional  headline above the text
//   source    optional  small label on the card, e.g. "LinkedIn", "Press",
//                       "Event" (default: "LinkedIn" for linkedin.com links)
//   url       optional  secondary link (the LinkedIn post, an article, a page
//                       of this site such as "survey.html")
//   linkLabel optional  link text (default: "View on LinkedIn" / "Learn more")
//   image     optional  path to a picture, relative to the site root
//   images    optional  several pictures instead of one:
//                       ["news/images/a.jpg", "news/images/b.jpg"].
//                       The first is the one on the card.
//   imageAlt  optional  description of the (first) picture for screen readers
//   highlight optional  true shows this post in the coloured box next to the
//                       page title instead of in the list, so it stands out.
//                       Only one post is shown there (the newest one marked);
//                       remove the line to turn it back into a normal card.
//   id        optional  the post's address is news.html#id. Default: the date
//                       (news.html#2026-11-20). Set it when two posts share a
//                       date and you want their links to stay fixed.
//
// Template:
//   {
//     date: "2026-11-20",
//     source: "LinkedIn",
//     title: "",
//     text: `First paragraph.
//
// Second paragraph.`,
//     url: "https://www.linkedin.com/posts/...",
//     image: "news/images/2026-11-20-picture.jpg",
//     imageAlt: ""
//   },

window.NEWS_POSTS = [
  {
    id: "2026-11-05-gate-bioscience",
    date: "2026-11-05",
    title: "Visiting Gate Bioscience in the San Francisco Bay Area",
    text: `During Ilaria Zeni's stay in California, on Monday, November 2nd, BrightMol had the pleasure of visiting the team at Gate Bioscience in Brisbane, in the San Francisco Bay Area.
Building on our existing collaboration, this visit was a great opportunity to meet in person, strengthen our relationship, and further explore shared scientific and business perspectives.
A special thank you to Brian Cathers and the entire Gate Bioscience team for welcoming me and dedicating an entire afternoon to our discussions.
Visiting their laboratories, exchanging ideas, and catching up on ongoing developments and future perspectives was valuable and inspiring.
We always believe that collaborations are built not only through shared projects but also through personal connections, open discussions, and the continuous exchange of knowledge.

Thank you again for the warm welcome and a very productive afternoon.

#Biotechnology #LifeSciences #ScientificCollaboration #Partnerships #Innovation #BusinessDevelopment`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7524194923194134528/",
    images: [
      "news/images/2026-11-05-gate-bioscience-1.jpg",
      "news/images/2026-11-05-gate-bioscience-2.jpg",
      "news/images/2026-11-05-gate-bioscience-3.jpg"
    ]
  },
  {
    id: "2026-11-04-womens-venture-summit",
    date: "2026-11-04",
    title: "At the Women's Venture Summit, San Diego Startup Week",
    text: `✨ Celebrating women in entrepreneurship at San Diego Startup Week!
BrightMol Biotech had the pleasure of participating in the Women's Venture Summit during San Diego Startup Week!

It was inspiring to connect with other women-led startups, exchange experiences, and witness the strength, ambition, and determination of women building innovative businesses. Seeing such a supportive community reminds us why what we do matters and gives us even more motivation to keep moving forward.
A special thank you to the organizers for creating such a valuable space for connection and empowerment.

Stronger together! 💪

#WomensEntrepreneurship #WomenInBusiness #WomenInBiotech #StartupWeek #SanDiego #BrightMolBiotech`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7523840451175550977/",
    images: [
      "news/images/2026-11-04-womens-venture-summit-1.jpg",
      "news/images/2026-11-04-womens-venture-summit-2.jpg",
      "news/images/2026-11-04-womens-venture-summit-3.jpg",
      "news/images/2026-11-04-womens-venture-summit-4.jpg"
    ]
  },
  {
    id: "2026-11-04-trentino-tv",
    date: "2026-11-04",
    title: "BrightMol on Trentino TV",
    text: `Yesterday, BrightMol had the pleasure to share its story on Trentino TV.

Together with Arianna Conci we had the pleasure of talking about our journey and how the Trentino Startup Valley Programme has been instrumental in shaping and accelerating BrightMol’s growth.

We’re grateful for the support, the network, and the opportunities that Trentino Sviluppo S.p.A. and HIT - Hub Innovazione Trentino have given us.

A special thank you to the Trentino TV team and the whole production crew for this opportunity!

If you’d like to hear our story in full, the video is now available 👉 https://www.trentinotv.it/video-on-demand/mattino-insieme_03-11-2026

#BrightMol #TrentinoStartupValley #Biotech #DrugDiscovery #Startup`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7523678968948940800/"
  },
  {
    id: "2026-10-31-uc-san-diego-ige",
    date: "2026-10-31",
    title: "Visiting the Institute for the Global Entrepreneur at UC San Diego",
    text: `During our journey in San Diego, we had the pleasure of visiting the Institute for the Global Entrepreneur UC San Diego.
We had the opportunity to present our elevator pitch, exchange ideas with experienced professionals, and receive valuable feedback and expert advice to help us refine our vision and strengthen our business approach.
The visit also included a tour of their laboratories, offering us a closer look at the facilities and resources supporting scientific innovation and entrepreneurship.
At BrightMol, we believe that combining scientific expertise with business insights is essential to turning innovative technologies into solutions that meet real industry needs.
A big thank you to the team for the warm welcome and their insights. 🤝

#BrightMolBiotech #Biotech #Entrepreneurship #DrugDiscovery #Innovation #SanDiego #StartupJourney`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7522326993380732928/",
    images: [
      "news/images/2026-10-31-uc-san-diego-ige-1.jpg",
      "news/images/2026-10-31-uc-san-diego-ige-2.jpg",
      "news/images/2026-10-31-uc-san-diego-ige-3.jpg"
    ]
  },
  {
    id: "2026-10-30-aquillius",
    date: "2026-10-30",
    title: "Visiting Aquillius in San Diego",
    text: `As part of our journey in the US, we had the opportunity to visit Aquillius in San Diego.
It was a great opportunity to learn more about an ecosystem that brings together scientific innovation, entrepreneurship, and the resources needed to turn promising ideas into real-world solutions.
At BrightMol, we’re working to accelerate drug discovery through faster biological validation, helping biotech and pharma companies understand whether their compounds work in living cells.
Building connections with the US biotech community is an important step in our journey as we explore new opportunities for collaboration and growth.
A big thank you to the Aquillius team for the opportunity to connect. 🤝

#BrightMolBiotech #Biotech #DrugDiscovery #LifeSciences #SanDiego #Biotechnology #StartupEcosystem`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7521992954165501952/",
    images: [
      "news/images/2026-10-30-aquillius-1.jpg",
      "news/images/2026-10-30-aquillius-2.jpg",
      "news/images/2026-10-30-aquillius-3.jpg",
      "news/images/2026-10-30-aquillius-4.jpg"
    ]
  },
  {
    id: "2026-10-30-market-survey",
    date: "2026-10-30",
    title: "Help us shape faster compound validation",
    text: `🧪 Are you working on innovative drugs or protein degraders?

🚀 At BrightMol Biotech, we're focused on accelerating drug discovery through faster, more reliable biological validation — and we want to ensure the solutions we build address the challenges that matter most to you.

🔬 If you're looking for better ways to test and validate compounds in cells, we'd love to hear from you. It takes just 5 minutes, and your input will directly shape how we develop our platform.

👉 https://www.brightmol.com/survey.html

#degraders #drugdiscovery`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7521947276714618882/"
  },
  {
    id: "2026-10-29-survey-live",
    date: "2026-10-29",
    highlight: true,
    source: "Survey open",
    title: "Our market survey is live",
    text: "We are building a faster way to test and validate compounds in living cells. Are you working on new drugs or protein degraders? Help us understand your needs with a short, confidential questionnaire. Your input will shape solutions for real industry challenges.",
    url: "survey.html",
    linkLabel: "Take the 5-minute survey"
  },
  {
    id: "2026-10-23-san-diego-start",
    date: "2026-10-23",
    title: "BrightMol starts its US journey in San Diego",
    text: `On October 19, BrightMol Biotech began its journey in San Diego to explore the US market, connect with the local biotech ecosystem, and unlock new opportunities for growth.
Excited for what’s ahead! 🚀🧬

#BrightMolBiotech #GlobalStartupProgram #Biotech #USMarket #ItalianInnovation`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7519464981944483841/"
  },
  {
    id: "2026-10-21-mit4ls",
    date: "2026-10-21",
    title: "BrightMol at Meet in Italy for Life Sciences",
    text: `🚀 Last week, we had the pleasure of attending MIT4LS, a great opportunity to network, connect with new people, and exchange ideas with professionals and innovators.

It was an inspiring experience, full of valuable insights, fresh perspectives, and new ideas that can contribute to the growth and development of our startup.

A big thank you to everyone we met and had the opportunity to exchange ideas and experiences with!

#MIT4Life #Startup #Networking #Innovation`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7518663321294745600/",
    image: "news/images/2026-10-21-mit4ls.jpg"
  },
  {
    id: "2026-09-19-strategy-day",
    date: "2026-09-19",
    title: "A productive Saturday at BrightMol",
    text: `A productive Saturday at BrightMol 🧠

We took a step back from the daily routine to focus on what comes next: refining our market strategy, advancing our technology, and challenging our ideas from different perspectives.

Building a biotech startup means not only developing strong technology, but also understanding where it can create value and how to bring it to market.

Plenty of ideas to take forward 🚀

Thanks to Trentino Sviluppo S.p.A. for hosting us at TSpace and supporting moments like this.

#BrightMol #Biotech #LifeSciences #DrugDiscovery #Innovation #Startup`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7507132666383843328/",
    image: "news/images/2026-09-19-strategy-day.jpg"
  },
  {
    id: "2026-09-14-dayone-kickoff",
    date: "2026-09-14",
    title: "DayOne Accelerator kick-off in Basel",
    text: `🚀 Last week, our CEO Ilaria Zeni joined the kick-off of the DayOne Accelerator in Basel!

BrightMol is proud to be among the 15 startups selected for this year’s program, bringing together founders, mentors, and experts from across the pharma and healthcare ecosystem.

The next three months will be an opportunity to learn, build, and create new collaborations, with one goal in mind: accelerating drug discovery through faster biological validation. A big thank you to the BrightMol team Nicole Innocenti, Dino Gasparotto, Alessandro Tait and Emiliano Biasini for contributing every day to the growth of our startup and making this journey possible.

And thank you to DayOne - Healthtech Innovation for this incredible opportunity and for bringing us together with such an inspiring community!

Excited for what’s ahead! 🧬🔬

#BrightMolBiotech #DayOne #DayOneAccelerator #Biotech #Pharma #DrugDiscovery #LifeSciences`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7505251078330912768/",
    images: [
      "news/images/2026-09-14-dayone-kickoff-1.jpg",
      "news/images/2026-09-14-dayone-kickoff-2.jpg",
      "news/images/2026-09-14-dayone-kickoff-3.jpg",
      "news/images/2026-09-14-dayone-kickoff-4.jpg"
    ]
  },
  {
    id: "2026-08-19-dayone-selected",
    date: "2026-08-19",
    title: "Selected for the DayOne Accelerator 2026",
    text: `🚀 We are excited to announce that we were selected for the DayOne Accelerator 2026!

🧪We’re proud to be joining 14 other promising TechBio and HealthTech startups from across Switzerland and Europe for this three-month journey.

🇨🇭 We can’t wait to kick off the journey in Basel this September, see you there!

#DayOneAccelerator #Cohort8 #Innovation #Startups #PharmaRD #Basel`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7495804788660555776/"
  },
  {
    id: "2026-07-29-genesis4lifescience",
    date: "2026-07-29",
    title: "Selected for Genesis4LifeScience, the innovation programme of Meet in Italy for Life Sciences 2026",
    text: `Can't wait to start this new adventure! 🚀 🧪`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7488154292319842304/"
  },
  {
    id: "2026-06-09-biomedical-valley",
    date: "2026-06-09",
    title: "Presenting at the Biomedical Valley Innovation Summit",
    text: `Today we are presenting BrightMol Biotech at the Biomedical valley Innovation Summit🎉

If you are curious about our work and want to know more, come talk to our CEO Ilaria Zeni.
Looking forward to expanding our network and meeting new faces!

#BiomedicalValley #Biotech #DrugDiscovery #Startup #InnovationSummit`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7470124680780255234/",
    image: "news/images/2026-06-09-biomedical-valley.jpg"
  },
  {
    id: "2026-03-27-premio-cambiamenti",
    date: "2026-03-27",
    title: "Presenting at Premio Cambiamenti Nord-Est",
    text: `Last week, we had the opportunity to present BrightMol Biotech at the Nord-Est qualifications of the Premio Cambiamenti, organized by CNA.
It was a valuable experience to showcase our work, connect with inspiring startups, and expand our professional network while meeting talented individuals from across the ecosystem.
A sincere thank you to the organizers for this opportunity, and best of luck to the finalists.`,
    url: "https://www.linkedin.com/feed/update/urn:li:activity:7443348624685662208/",
    images: [
      "news/images/2026-03-27-premio-cambiamenti-1.jpg",
      "news/images/2026-03-27-premio-cambiamenti-2.jpg"
    ]
  }
];
