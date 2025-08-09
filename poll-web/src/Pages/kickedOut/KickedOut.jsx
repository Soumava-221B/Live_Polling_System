import "./KickedOut.css";
import stars from "../../assets/spark.svg";

const KickedOut = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <div className="text-center mb-4">
        <div className="btn btn-sm intervue-btn mb-3">
          <img src={stars} className="px-1" alt="" />
          Intervue Poll
        </div>
        <h3 className="poll-title">You've been Kicked out !</h3>
        <p className="poll-description">
          Looks like the teacher had removed you from the poll system. Please Try
          again sometime
        </p>
      </div>
    </div>
  );
};

export default KickedOut;