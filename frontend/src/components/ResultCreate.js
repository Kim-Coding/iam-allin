function ResultCreate({ value }) {
  return (
    <div className="ResultCreate">
      {value.map((list, index) => (
        <div className="List" key={index}>
          <p>[ {list.join(", ")} ]</p>
          <button>목록에 추가</button>
        </div>
      ))}
    </div>
  );
}

export default ResultCreate;
