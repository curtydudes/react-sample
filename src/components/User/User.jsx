import "./User.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPen } from "@fortawesome/free-solid-svg-icons";

// props work like a parameter
function User(props) {
  const { name, email, balance } = props.employee;
  const { houseNo, street, country } = props.address;
  return (
    <div className="user">
      {/* <h1>Hello, {props.employee.name}!</h1>
      <h4>{props.employee.email}</h4>
      <h4>{props.employee.balance}</h4> */}
      <h1>
        {name}
        <FontAwesomeIcon icon={faPen} />
      </h1>
      <h4>{email}</h4>
      <h4>{balance}</h4>
      <h1>
        {houseNo} {street} {country}
      </h1>
    </div>
  );
}

export default User;
