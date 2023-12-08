export default function Project({ imageUrl, title, link, description }) {
  return (
    <div className="card card-width">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body custom-card-body">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <a href={link} className="btn btn-primary custom-btn">Give it a try</a>
      </div>
    </div>
  );
}