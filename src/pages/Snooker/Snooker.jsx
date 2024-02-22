import "./Snooker.scss";

function Snooker() {
  return (
    <div className="snooker__background">
      <div className="snooker__balls">
        <div className="snooker__y-g-br-balls">
          <button className="snooker__ball snooker__ball--yellow"></button>
          <button className="snooker__ball snooker__ball--green"></button>
          <button className="snooker__ball snooker__ball--brown"></button>
        </div>
        <div className="snooker__b-p-balls">
          <button className="snooker__ball snooker__ball--blue"></button>
          <button className="snooker__ball snooker__ball--pink"></button>
        </div>
        <div className="snooker__r-balls">
          <button className="snooker__ball--red"></button>
        </div>
        <div className="snooker__bl-ball">
          <button className="snooker__ball snooker__ball--black"></button>
        </div>
      </div>
    </div>
  );
}

export default Snooker;
