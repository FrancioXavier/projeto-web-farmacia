import { InformationLight } from '../../config/colors';
import PropTypes from 'prop-types';
import { DepartmentName } from './styled';

const DepartmentCard = (props) => {
  return (
    <div
      className="col-sm-3 d-flex justify-content-center align-middle my-3"
      style={{ background: InformationLight, width: '80%', height: '80%' }}
    >
      <a
        href="#"
        style={{ textDecoration: 'none', color: 'black', width: '100%' }}
      >
        <img
          src={props.imageSrc}
          alt=""
          style={{ maxWidth: '100%', minWidth: '80%' }}
        />
        <div className="container my-5">
          <DepartmentName className="fw-bold">
            {props.departmentName}
          </DepartmentName>
        </div>
      </a>
    </div>
  );
};

DepartmentCard.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  departmentName: PropTypes.string.isRequired,
};

export default DepartmentCard;
