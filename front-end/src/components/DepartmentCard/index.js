import { InformationLight } from '../../config/colors';
import PropTypes from 'prop-types';

const DepartmentCard = (props) => {
  return (
    <div
      className="col-3 d-flex flex-column justify-content-center align-middle"
      style={{ background: InformationLight }}
    >
      <a
        href="#"
        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
      >
        <img
          src={props.imageSrc}
          alt=""
          style={{ maxWidth: '100%', minWidth: '80%', Height: '80%' }}
        />
        <h3
          style={{
            fontSize: '1.5vw',
          }}
        >
          {props.departmentName}
        </h3>
      </a>
    </div>
  );
};

DepartmentCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  departmentName: PropTypes.string.isRequired,
};

export default DepartmentCard;
