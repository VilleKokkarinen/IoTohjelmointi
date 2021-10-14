import { Component, OnInit } from '@angular/core';
import { DatafetcherService } from '../datafetcher/datafetcher.service';

@Component({
  selector: 'app-datalisting',
  templateUrl: './datalisting.component.html',
  styleUrls: ['./datalisting.component.css']
})
export class DatalistingComponent implements OnInit {

  constructor(private datafetcherService: DatafetcherService) { }

  data = this.datafetcherService.getData();

  ngOnInit(): void {
  }

}
