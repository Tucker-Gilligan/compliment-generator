function Compliment(props) {
  return (
    <div className="Compliment__container">
      <h3 className="mad__love" value={props.compliment}>
        {props.compliment}
      </h3>
    </div>
  );
}

export default Compliment;
