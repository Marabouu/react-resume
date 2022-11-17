import './index.css';

function Separator({ type }) {
  let className = 'Separator';

  if (type) {
    className = [className, `Separator--${type}`].join(' ');
  }

  return <hr className={className} />;
}

export default Separator;
