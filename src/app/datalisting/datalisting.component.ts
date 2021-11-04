import { Component, OnInit } from '@angular/core';
import { DatafetcherService } from '../datafetcher/datafetcher.service';

import{ AngularFireDatabase, AngularFireAction   } from '@angular/fire/compat/database';
import { Observable, Subscription, BehaviorSubject } from 'rxjs';

import { switchMap  } from 'rxjs/operators';

@Component({
  selector: 'app-datalisting',
  templateUrl: './datalisting.component.html',
  styleUrls: ['./datalisting.component.css']
})
export class DatalistingComponent implements OnInit {
  items$: Observable<AngularFireAction<firebase.default.database.DataSnapshot>[]>;
  Timestamp$: BehaviorSubject<string|null>;

  constructor(db: AngularFireDatabase) {
    this.Timestamp$ = new BehaviorSubject<string|null>(null);
    this.items$ = this.Timestamp$.pipe(
      switchMap(Timestamp => 
        db.list('/data', ref =>
          Timestamp ? ref.orderByChild('Timestamp').equalTo(Timestamp) : ref
        ).snapshotChanges()
      )
    );

  }

  ngOnInit(): void {
  }

  ConvertDate = (ticks: number): Date => {
    return new Date(ticks / 1e+4 + new Date('0001-01-01T00:00:00Z').getTime());
    //return new Date(ticks*1000);
    } 
}
