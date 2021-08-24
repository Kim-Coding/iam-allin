function ResultCreate({ value, cur }) {
  return (
    <div className="ResultCreate">
      {value.map((list, index) => (
        <p className="List" key={index}>
          [ {list.join(", ")} ]
        </p>
      ))}
    </div>
  );
}

export default ResultCreate;
