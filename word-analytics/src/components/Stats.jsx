const Stats = ({stats}) => {
  return (
    <section className="stats">
      <Stat number={stats.numberOfWords} label={"Words"} />
      <Stat number={stats.numberOfCharacters} label={"Characters"} />
      <Stat number={stats.instagramLeft} label={"Instagram"} />
      <Stat number={stats.facebookLeft} label={"Facebook"} />
    </section>
  );
};

const Stat = ({ label, number }) => {
  return (
    <section className="stat">
      <span className={`stat__number ${number < 0 && 'stat__number--limit'}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
};

export default Stats;
