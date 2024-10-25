import PropTypes from "prop-types";

const Selected = ({ player, showAvailable }) => {
  const {image, name} = player;

  return (
    <div>
      {showAvailable ? (
        <div className="player-grid">
          
            <div className="player-card">
              <img src={image} alt="" />
              <h3>{name}</h3>
            </div>
          
        </div>
      ) : (
        <div className="player-grid">
          
            <div className="player-card">
                <img src={image} alt="" />
              <h3>{name}</h3>
            </div>
          
        </div>
      )}
    </div>
  );
};

Selected.propTypes = {
  player: PropTypes.object,
  showAvailable: PropTypes.func,
};

export default Selected;
