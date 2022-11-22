import './index.css';

function Link({ children, LinkSrc, imgSrc, iconAlt }) {
  return (
    <div>
      <img src={imgSrc} alt={iconAlt} />

      <a href={LinkSrc} target="_blank">
        {children}
      </a>
    </div>
  );
}

export default Link;
