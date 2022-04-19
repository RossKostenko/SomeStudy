import { Component, OnInit } from '@angular/core';
import { AuthorsStoreService } from './services/authors-store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  testModalVisable = false;

  constructor(private authorsStoreService: AuthorsStoreService) {}

  ngOnInit(): void {
    this.authorsStoreService.getAll();
  }
}
