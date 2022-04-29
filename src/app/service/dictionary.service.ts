import {Injectable} from '@angular/core';
import {DictionaryEntry} from '../DictionaryEntry';

@Injectable({
  providedIn: 'root'
})
export class DictionaryService {

  constructor() {
  }

  dictionary: DictionaryEntry[] = [
    {
      word: 'hello',
      meaning: 'xin chào'
    },
    {
      word: 'table',
      meaning: 'cái bàn'
    },
    {
      word: 'chair',
      meaning: 'cái ghế'
    },
    {
      word: 'bottle',
      meaning: 'bình (nước)'
    },
    {
      word: 'water',
      meaning: 'nước'
    },
    {
      word: 'glasses',
      meaning: 'kính mắt'
    },
    {
      word: 'house',
      meaning: 'nhà'
    },
    {
      word: 'wall',
      meaning: 'tường'
    },
    {
      word: 'picture',
      meaning: 'bức ảnh'
    },
  ];

  search(word: string): DictionaryEntry {
    for (let entry of this.dictionary){
      if (entry.word === word) {
        return entry;
      }
    }
    return null;
  }

  getDictionary() {
    return this.dictionary;
  }
}
