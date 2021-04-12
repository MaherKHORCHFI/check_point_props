import React from "react"
import PropTypes from "prop-types"

const Profile = (props) => {

    // Destructuring Props 
  const {
    fullName,
    profession,
    bio,
    children,
      } = props;

    return (
        <div>
            {props.handleName(props.fullName)}

            <h2>{fullName}</h2>
            <h2>{profession}</h2>
            <p>{bio}</p>
            {children}

        </div>
    )
}

// Default Props
Profile.defaultProps = {
    fullName: 'Maher KHORCHFI',
    profession: ' IT Ingenieur'
  };
  
  //PropTypes
Profile.propTypes = {
    fullName: PropTypes.string.isRequired,
    profession: PropTypes.string,
    bio: PropTypes.string.isRequired,
    children: PropTypes.object.isRequired,
  };
  
export default Profile