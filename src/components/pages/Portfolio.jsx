import Project from './Project';
import tuneMuseImage from '../../images/tuneMuse.jpeg';
import travisImage from '/images/travis.jpg';
import noteTakerImage from '/images/notetaker.jpeg';
import weatherForecastImage from '/images/weatherforecast.jpeg';
import jsQuizImage from '/images/js_quiz.jpeg';
import techBlogImage from '/images/techblog.jpeg';

export default function Portfolio() {
  const cardsData = [
    {
      id: 1,
      imageUrl: tuneMuseImage,
      title: 'Tune-Muse',
      link: 'https://tune-muse-team.github.io/tunemuse/',
      description: 'An AI-curated music application that provides song recommendations based on a set of parameters and text queries entered by the user.'
    },
    {
      id: 2,
      imageUrl: travisImage,
      title: 'TravIS',
      link: 'https://travis231017-9762a24c277b.herokuapp.com/',
      description: 'TravIS (or TRAVel Interface System) is a useful tool for planning your next trip and discovering new horizons to explore.',
    },
    {
      id: 3,
      imageUrl: jsQuizImage,
      title: 'JavaScript Quiz',
      link: 'https://kristbg.github.io/2023-08-03-javascript-quiz-game/',
      description: 'An interactive quiz game on basic JavaScript knowledge.',
    },
    {
      id: 4,
      imageUrl: techBlogImage,
      title: "Chris' Tech Thoughts",
      link: 'https://peaceful-dawn-48719-8b024e4e358e.herokuapp.com/',
      description: "A blog where developers can publish their posts as well as comment on other developers'.",
    },
    {
      id: 5,
      imageUrl: weatherForecastImage,
      title: 'Weather Forecast',
      link: 'https://kristbg.github.io/2023-08-21-weather-forecast/',
      description: 'A simple application for obtaining the weather forecast for a given city, obtaining data through the OpenWeather API.',
    },
    {
      id: 6,
      imageUrl: noteTakerImage,
      title: 'Note Taker',
      link: 'https://immense-brook-26564-3b2b5bd98ff7.herokuapp.com/',
      description: 'A simple application for taking and saving notes ',
    },
  ];

  return (
    <div className="flex-page">
      {cardsData.map((card) => (
        <Project key={card.id} imageUrl={card.imageUrl} title={card.title} link={card.link} description={card.description}/>
      ))}
    </div>
  );
}