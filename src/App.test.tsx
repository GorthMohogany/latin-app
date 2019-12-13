import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

import { Verb } from './grammar/decline';

it('renders learn react link', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

fdescribe('Grammar', () => {

  describe('groups', () => {
    it('should have properties for the `a` group', () => {
      let word = new Verb('ambulare')
  
      expect(word.group).toBe('a')
      expect(word.root).toBe('ambul')
      expect(word.stem).toBe('are')
    })
  
    it('should have properties for the `i` group', () => {
      let word = new Verb('dormire')
  
      expect(word.group).toBe('i')
      expect(word.root).toBe('dorm')
      expect(word.stem).toBe('ire')
    })
  
    it('should have properties for the `e` group', () => {
      let word = new Verb('habere')
  
      expect(word.group).toBe('e')
      expect(word.root).toBe('hab')
      expect(word.stem).toBe('ere')
    })
  })

  describe('person', () => {
    it('should be in first person singular', () => {
      let word = new Verb('ambulare')
      word.setPerson('first.singular')
      expect(word.stem).toBe('o')

      word = new Verb('dormire')
      word.setPerson('first.singular')
      expect(word.stem).toBe('io')

      word = new Verb('debere')
      word.setPerson('first.singular')
      expect(word.stem).toBe('eo')
    })

    it('should be in first person plural', () => {
      let word = new Verb('ambulare')
      word.setPerson('first.plural')
      expect(word.stem).toBe('amus')
      
      word = new Verb('dormire')
      word.setPerson('first.plural')
      expect(word.stem).toBe('imus')

      word = new Verb('debere')
      word.setPerson('first.plural')
      expect(word.stem).toBe('emus')
    })
    
    it('should be in second person singular', () => {
      let word = new Verb('ambulare')
      word.setPerson('second.singular')
      expect(word.stem).toBe('as')
      
      word = new Verb('dormire')
      word.setPerson('second.singular')
      expect(word.stem).toBe('is')

      word = new Verb('debere')
      word.setPerson('second.singular')
      expect(word.stem).toBe('es')
    })

    it('should be in second person plural', () => {
      let word = new Verb('ambulare')
      word.setPerson('second.plural')
      expect(word.stem).toBe('atis')
      
      word = new Verb('dormire')
      word.setPerson('second.plural')
      expect(word.stem).toBe('itis')

      word = new Verb('debere')
      word.setPerson('second.plural')
      expect(word.stem).toBe('etis')
    })

    it('should be in third person singular', () => {
      let word = new Verb('ambulare')
      word.setPerson('third.singular')
      expect(word.stem).toBe('at')
      
      word = new Verb('dormire')
      word.setPerson('third.singular')
      expect(word.stem).toBe('it')

      word = new Verb('debere')
      word.setPerson('third.singular')
      expect(word.stem).toBe('et')
    })

    it('should be in third person plural', () => {
      let word = new Verb('ambulare')
      word.setPerson('third.plural')
      expect(word.stem).toBe('ant')
      
      word = new Verb('dormire')
      word.setPerson('third.plural')
      expect(word.stem).toBe('iunt')

      word = new Verb('debere')
      word.setPerson('third.plural')
      expect(word.stem).toBe('ent')
    })

  })

  

})


