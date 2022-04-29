import { Component, OnInit } from '@angular/core';
import {DictionaryEntry} from '../../DictionaryEntry';
import {DictionaryService} from '../../service/dictionary.service';

@Component({
  selector: 'app-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.css']
})
export class PageComponent implements OnInit {

  dictionary: DictionaryEntry[];

  constructor(private dictionaryService: DictionaryService) { }

  ngOnInit() {
    this.dictionary = this.dictionaryService.getDictionary();
  }

}
