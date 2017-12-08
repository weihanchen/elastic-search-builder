import esb from '../';

describe('body', () => {
   it('build with custom body', () => {
      //Arrange/Act
      const options = esb().body({
         query: {
            match: {
               message: 'hello world'
            }
         }
      }).build();
      //Assert
      expect(options).toEqual({
         body: {
            query: {
               match: {
                  message: 'hello world'
               }
            }
         }
      });
   });
});