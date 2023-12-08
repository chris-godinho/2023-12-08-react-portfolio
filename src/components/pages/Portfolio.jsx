import Project from './Project';

export default function Portfolio() {
  const cardsData = [
    {
      id: 1,
      imageUrl: '/tunemuse.jpeg',
      title: 'Tune-Muse',
      link: 'https://tune-muse-team.github.io/tunemuse/',
      repoLink: 'https://github.com/tune-muse-team/tunemuse',
      description: 'An AI-curated music application that provides song recommendations based on a set of parameters and text queries entered by the user.'
    },
    {
      id: 2,
      imageUrl: '/travis.jpg',
      title: 'TravIS',
      link: 'https://travis231017-9762a24c277b.herokuapp.com/',
      repoLink: 'https://github.com/UofTTeam2/TravIS',
      description: 'TravIS (or TRAVel Interface System) is a useful tool for planning your next trip and discovering new horizons to explore.',
    },
    {
      id: 3,
      imageUrl: '/js_quiz.jpeg',
      title: 'JavaScript Quiz',
      link: 'https://kristbg.github.io/2023-08-03-javascript-quiz-game/',
      repoLink: 'https://github.com/chris-godinho/2023-08-03-javascript-quiz-game',
      description: 'An interactive quiz game on basic JavaScript knowledge.',
    },
    {
      id: 4,
      imageUrl: '/techblog.jpeg',
      title: "Chris' Tech Thoughts",
      link: 'https://peaceful-dawn-48719-8b024e4e358e.herokuapp.com/',
      repoLink: 'https://github.com/chris-godinho/2023-10-19-MVC-tech-blog',
      description: "A blog where developers can publish their posts as well as comment on other developers'.",
    },
    {
      id: 5,
      imageUrl: '/weatherforecast.jpeg',
      title: 'Weather Forecast',
      link: 'https://kristbg.github.io/2023-08-21-weather-forecast/',
      repoLink: 'https://github.com/chris-godinho/2023-08-21-weather-forecast',
      description: 'A simple application for obtaining the weather forecast for a given city, obtaining data through the OpenWeather API.',
    },
    {
      id: 6,
      imageUrl: '/notetaker.jpeg',
      title: 'Note Taker',
      link: 'https://immense-brook-26564-3b2b5bd98ff7.herokuapp.com/',
      repoLink: 'https://github.com/chris-godinho/2023-09-27-note-taker',
      description: 'A simple application for taking and saving notes ',
    },
  ];

  return (
    <div className="flex-page">
      {cardsData.map((card) => (
        <Project key={card.id} imageUrl={card.imageUrl} title={card.title} link={card.link} repoLink={card.repoLink} description={card.description}/>
      ))}
    </div>
  );
}