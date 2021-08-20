function ResultCreate({ value }) {
  return (
    <div className="ResultCreate">
      {value.map((list, index) => (
        <div className="List">
          <p key={index}>
            [ {list[0]},{list[1]},{list[2]},{list[3]},{list[4]},{list[5]} ]
          </p>
          <button>목록에 추가</button>
        </div>
      ))}
    </div>
  );
}

export default ResultCreate;
