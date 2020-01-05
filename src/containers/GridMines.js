import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setDataSuccess, resetGame } from '../redux/actions';
import { Grid, Row, Cell } from '../components/GridMines';
import { Modal, ModalContent } from '../components/Modal';
import { openCellEmpty, checkWin, msToTime } from '../helpers';
import Button from '../components/Button';
import ButtonGroup from '../components/ButtonGroup';

function GridMinesContainer({ 
  dataGrid, onSetDataSuccess, onResetGame, 
  onPlayGame, isSetting, mines 
}) {
  const [showModal, setShowModal] = useState(null);
  const [startTime, setStartTime] = useState(0);
  const [endTime, setEndTime] = useState(0);

  function openCell(cell) {
    if (startTime === 0) {
      setStartTime(performance.now());
    }

    const { x, y, isMine } = cell;
    if (isMine) {
      setEndTime(performance.now());
      setShowModal('lost');
      openGrid();
    } else {
      let newData = dataGrid;
      newData[x][y].isOpen = true;
      if (checkWin(dataGrid, mines)) {
        setEndTime(performance.now());
        setShowModal('won');
      }
      if (!newData[x][y].density) {
        newData = openCellEmpty(x, y, newData);
      }
      onSetDataSuccess(newData);
    }
  }

  function openGrid() {
    for (let i = 0; i < dataGrid.length; i++) {
      for (let j = 0; j < dataGrid.length; j++) {
        if (!dataGrid[i][j].isOpen && dataGrid[i][j].isMine) {
          dataGrid[i][j].isOpen = true;
        }
      }
    }
    onSetDataSuccess(dataGrid);
  }

  async function onNewGame() {
    await onPlayGame(dataGrid.length);
    setShowModal(null);
    setStartTime(0);
  }

  return (
    <>
      <Grid>
        {dataGrid.map((row, x) => (
          <Row key={x}>
            {row.map((cell, y) => (
              <Cell 
                key={y} 
                isOpen={cell.isOpen} 
                isMine={cell.isMine}
                density={cell.density} 
                onClick={() => openCell(cell)}
              >
                {cell.isOpen ? cell.isMine ? '💣' : cell.density : ''}
              </Cell>
            ))}
          </Row>
        ))}
      </Grid>
      {showModal && 
        <Modal>
          <ModalContent>
            <p>{`You ${showModal} the game in ${msToTime(endTime - startTime)}`}</p>
            <ButtonGroup>
              <Button onClick={onNewGame}>
                {isSetting ? 'Please wait' : 'New Game'}
              </Button>
              <Button onClick={() => onResetGame() && setShowModal(null)}>Home Page</Button>
            </ButtonGroup>
          </ModalContent>
        </Modal>
      }
    </>
  )
}

GridMinesContainer.propTypes = {
  dataGrid: PropTypes.array.isRequired,
  isSetting: PropTypes.bool.isRequired,
  onSetDataSuccess: PropTypes.func.isRequired,
  onResetGame: PropTypes.func.isRequired,
  onPlayGame: PropTypes.func.isRequired,
  mines: PropTypes.number.isRequired,
}

const mapStateToProps = ({ data, isSetting }) => {
  return {
    dataGrid: data,
    isSetting
  };
}

const mapDispatchToProps = dispatch => {
  return {
    onSetDataSuccess: (data) => {
      return dispatch(setDataSuccess(data));
    },
    onResetGame: () => {
      return dispatch(resetGame());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(GridMinesContainer);