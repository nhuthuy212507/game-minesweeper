export const getMines = async (level) => {
  const mines = level === 9 ? 10 : 40;
  try {
    const response = await fetch(`https://tiki-minesweeper.herokuapp.com/getMines?size=${level}&mines=${mines}`);
    if (response) {
      const result = await response.json();
      const { data, msg } = result;
      if (msg === "success")
      return data;
    } else {
      throw new Error ("Error");
    }
  } catch (error) {
    throw error;
  }  
}