import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Content, PlayButton } from '../components/NewGame';

function NewGameContainer({ onPlayGame, isStarting }) {
  const [level, setLevel] = useState(9);

  return (
    <Content>
      <select onChange={(e) => setLevel(parseInt(e.target.value))}>
        <option value={9}>Beginner</option>
        <option value={16}>Advantage</option>
      </select>
      <PlayButton onClick={() => onPlayGame(level)}>
        {isStarting ? 'Please wait' : 'Play game'}
      </PlayButton>
    </Content>
  )
}

NewGameContainer.propTypes = {
  isStarting: PropTypes.bool.isRequired,
  onPlayGame: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => {
  return {
    isStarting: state.isSetting,
  };
}

export default connect(mapStateToProps)(NewGameContainer);