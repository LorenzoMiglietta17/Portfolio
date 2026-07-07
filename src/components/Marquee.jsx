function Marquee({ items }) {
  // Duplicate items for seamless loop
  const doubled = [...items, ...items];

  return (
    <div className="marquee-track" aria-hidden="true">
      {doubled.map((item, i) => (
        <span key={i} className="marquee-item">
          <span className="marquee-item-icon">{item.icon}</span>
          {item.name}
        </span>
      ))}
    </div>
  );
}

export default Marquee;
