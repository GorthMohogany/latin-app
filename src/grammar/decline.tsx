import React from 'react';

export class Verb {
  infinitive: string
  person = ''
  group = ''
  root = ''
  stem = '' 

  print() {
    console.log(this.root + this.stem)
  }

  setPerson(person: string) {
    this.person = person

    switch(person) {
      case 'first.singular':
        if (this.group === 'a') {
          this.stem = 'o'
        }
        if (this.group === 'i') {
          this.stem = 'io'
        }
        if (this.group === 'e') {
          this.stem = 'eo'
        }
        break;
      case 'first.plural':
        if (this.group === 'a') {
          this.stem = 'amus'
        }
        if (this.group === 'e') {
          this.stem = 'emus'
        }
        if (this.group === 'i') {
          this.stem = 'imus'
        }
        break;
      case 'second.singular':
        if (this.group === 'a') {
          this.stem = 'as'
        }
        if (this.group === 'i') {
          this.stem = 'is'
        }
        if (this.group === 'e') {
          this.stem = 'es'
        }
        break;
      case 'second.plural':
        if (this.group === 'a') {
          this.stem = 'atis'
        }
        if (this.group === 'i') {
          this.stem = 'itis'
        }
        if (this.group === 'e') {
          this.stem = 'etis'
        }
        break;
      case 'third.singular':
        if (this.group === 'a') {
          this.stem = 'at'
        }
        if (this.group === 'i') {
          this.stem = 'it'
        }
        if (this.group === 'e') {
          this.stem = 'et'
        }
        break;
      case 'third.plural':
        if (this.group === 'a') {
          this.stem = 'ant'
        }
        if (this.group === 'i') {
          this.stem = 'iunt'
        }
        if (this.group === 'e') {
          this.stem = 'ent'
        }
        break;
    }
  }

  constructor(infinitive: string) {
    this.infinitive = infinitive

    if (infinitive.endsWith('are')) {
      this.group = 'a'
      this.stem = 'are'
    }

    if (infinitive.endsWith('ire')) {
      this.group = 'i'
      this.stem = 'ire'
    }

    if (infinitive.endsWith('ere')) {
      this.group = 'e'
      this.stem = 'ere'
    }

    this.root = infinitive.slice(0, infinitive.length - 3)
  }
}

/**

noun/pronoun verb




*/
