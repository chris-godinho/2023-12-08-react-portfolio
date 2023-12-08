import Project from './Project';
import tuneMuseImage from '../../images/tuneMuse.jpeg';
import travisImage from '../../images/travis.jpg';

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
  ];

  return (
    <div className="flex-page">
      {cardsData.map((card) => (
        <Project key={card.id} imageUrl={card.imageUrl} title={card.title} link={card.link} description={card.description}/>
      ))}
    </div>
  );
}