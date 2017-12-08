import esb from '../';

describe('options', () => {
   const answer = {
      index: '20170701,20170702',
      type: 'employee',
      ignoreUnavailable: true,
      allowNoIndices: true
   };
   it('build with custom options', () => {
      //Arrange/Act
      const options = esb().options(answer).build();
      //Assert
      expect(options).toEqual(answer);
   });
});