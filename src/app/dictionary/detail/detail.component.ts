import {Component, OnInit} from '@angular/core';
import {DictionaryService} from '../../service/dictionary.service';
import {DictionaryEntry} from '../../DictionaryEntry';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  dictionaryEntry: DictionaryEntry;
  constructor(private dictionaryService: DictionaryService,
              private activatedRoute: ActivatedRoute,
  ) {

  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      console.log(paramMap);
      let word = paramMap.get('word');
      this.dictionaryEntry = this.dictionaryService.search(word);
    });
  }

}
