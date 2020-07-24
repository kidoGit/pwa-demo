import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { Item } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwa-demo';
  items: Array<Item>;
  constructor(private apiService: ApiService) {
  }
  ngOnInit() {
    this.fetchData();
  }
  fetchData() {
    this.apiService.fetch().subscribe((data: Array<Item>) => {
      this.items = data;
    }, (err) => {
      console.log(err);
    });
  }

  openLink(html) {
    html.replace(/[^<]*(<a href="([^"]+)">([^<]+)<\/a>)/g, function () {
      window.open(arguments[2], '_blank');
    });
  }
}
