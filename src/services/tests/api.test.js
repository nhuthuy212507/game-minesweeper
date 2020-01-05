import { getMines } from '../api';

describe("Api", function () {

  beforeEach(function() {
    window.fetch = jest.fn().mockImplementation(() => {
      const response = new Promise((resolve, reject) => {
        resolve({          
          json: () => { 
            return {
              data: [{x: 0, y: 0}],
              msg: "success"
            }
          }
        });
        reject({
          error: 'error'
        })
      });

      return response;
    });
  });

  it("getMines should return response", async () => {
    const response = await getMines(9);
    expect(response).toEqual([{x: 0, y: 0}]);
  });
});
