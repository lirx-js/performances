import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8081937551150493',
  standalone: true,
  templateUrl: './app-8081937551150493.component.html',
  styleUrl: './app-8081937551150493.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8081937551150493Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
