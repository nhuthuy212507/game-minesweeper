import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Wrapper, Title } from '../components/App';
import NewGameContainer from './NewGame';
import GridMinesContainer from './GridMines';
import { setData, setDataSuccess, setDataError, setIsPlaying } from '../redux/actions';
import { generateData } from '../helpers';
import { getMines } from '../services/api';

function App({ onSetData, onSetDataSuccess, onSetDataError, onSetIsPlaying, isPlaying }) {
  const [mines, setMines] = useState(10);

  async function onPlayGame(level) {
    const mines = level === 9 ? 10 : 40;
    setMines(mines);
    onSetData();

    try {
      const response = await getMines(level);
      const dataGrid = generateData(level, response);
      onSetDataSuccess(dataGrid);
      onSetIsPlaying();
    } catch (error) {
      onSetDataError(error);
    }
  }

  return (
    <Wrapper>
      <Title>Mini Minesweeper</Title>
      { !isPlaying ? 
        <NewGameContainer onPlayGame={onPlayGame} /> 
      : 
        <GridMinesContainer onPlayGame={onPlayGame} mines={mines} />
      }
    </Wrapper>
  );
}

App.propTypes = {
  isPlaying: PropTypes.bool.isRequired,
  onSetData: PropTypes.func.isRequired,
  onSetDataSuccess: PropTypes.func.isRequired,
  onSetDataError: PropTypes.func.isRequired,
  onSetIsPlaying: PropTypes.func.isRequired,
}

const mapStateToProps = ({ isPlaying }) => {
  return { isPlaying };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetData: () => {
      return dispatch(setData());
    },
    onSetDataSuccess: data => {
      return dispatch(setDataSuccess(data));
    },
    onSetDataError: err => {
      return dispatch(setDataError(err));
    },
    onSetIsPlaying: () => {
      return dispatch(setIsPlaying());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
