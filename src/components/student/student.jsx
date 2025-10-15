import PropTypes from "prop-types";

function Student({ fnm = "Melissa", lnm = "Paksoy" }) {
  return (
    <div>
      <h4>{fnm} {lnm}</h4>
    </div>
  );
}

Student.propTypes = {
  fnm: PropTypes.string,      
  lnm: PropTypes.string,
};

export default Student;
