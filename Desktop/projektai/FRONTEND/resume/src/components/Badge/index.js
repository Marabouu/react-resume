import './index.css';

function Badge({ color, children }) {
  let className = 'Badge';

  if (color) {
    className = [className, `Badge--${color}`].join(' ');
  }

  return <div className={className}>{children}</div>;
}

export default Badge;
