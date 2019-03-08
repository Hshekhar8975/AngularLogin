import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import Alias from '../alias';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Alias[];
  
  constructor(private ds: DataService) { }

  ngOnInit() {
    this.ds.getAlias().subscribe( (info: any) => {
      this.data = info;
    })
  }

}
