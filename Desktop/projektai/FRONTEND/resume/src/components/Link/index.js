import './index.css';

function Link({ children, LinkSrc, imgSrc }) {
  return (
    <div>
      {<img src={imgSrc} />}
      {
        <a href={LinkSrc} target="_blank">
          {' '}
          {children}
        </a>
      }
    </div>
  );
}

export default Link;
