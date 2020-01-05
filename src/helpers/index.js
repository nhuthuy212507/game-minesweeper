export function areaSweep(x, y, data) {
  const el = [];

  //top left
  if (x > 0 && y > 0) {
    el.push(data[x-1][y-1]);
  }

  //top
  if (x > 0) {
    el.push(data[x-1][y]);
  }

  //top right
  if (x > 0 && y < data.length - 1) {
    el.push(data[x-1][y+1]);
  }

  //right
  if (y < data.length - 1) {
    el.push(data[x][y+1]);
  }

  //bottom right
  if ((x < data.length - 1) && (y < data.length - 1)) {
    el.push(data[x+1][y+1]);
  }

  //bottom
  if (x < data.length - 1) {
    el.push(data[x+1][y]);
  }

  //bottom left
  if (x < data.length - 1 && y > 0) {
    el.push(data[x+1][y-1]);
  }

  //left
  if (y > 0) {
    el.push(data[x][y-1]);
  }

  return el;
}

export const generateData = (size, mines) => {
  
  let data = [];

  //generate grid
  for (let x = 0; x < size; x++) {
    data.push([]);
    for (let y = 0; y < size; y++) {
      data[x][y] = {
        x,
        y,
        isMine: false,
        isOpen: false,
      };
    }
  }

  //set mines in grid
  mines.forEach(el => {
    const { x, y } = el;
    data[x][y].isMine = true;
  });

  //set density in grid
  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < data.length; j++) {
      if (data[i][j].isMine !== true) {
        let density = 0;
        const area = areaSweep(data[i][j].x, data[i][j].y, data);
        area.forEach(value => {
          if (value.isMine) {
            density++;
          }
        });
        if (density > 0) {
          data[i][j].density = density;
        }
      }
    }
  }

  return data;
}

export const openCellEmpty = (x, y, data) => {
  let area = areaSweep(x, y, data);
  area.forEach(value => {
    if (!value.isOpen && (value.density === 0 || !value.isMine)) {
      data[value.x][value.y].isOpen = true;
      if (!value.density) {
        openCellEmpty(value.x, value.y, data);
      }
    }
  });
  return data;
}

export const checkWin = (dataGrid, mines) => {
  let cellNotOpen = 0;
  for (let i = 0; i < dataGrid.length; i++) {
    for (let j = 0; j < dataGrid.length; j++) {
      if (dataGrid[i][j].isOpen === false) {
        cellNotOpen++;
      }
    }
  }

  if (cellNotOpen === mines) {
    return true;
  }
  return false;
}

export const msToTime = (s) => {
  function addZ(n) {
    return (n < 10 ? '0' : '') + n;
  }

  s = (s - s % 1000) / 1000;
  const secs = s % 60;
  s = (s - secs) / 60;
  const mins = s % 60;
  const hrs = (s - mins) / 60;
  const tm = addZ(hrs) + ':' + addZ(mins) + ':' + addZ(secs);
  
  return tm;
}