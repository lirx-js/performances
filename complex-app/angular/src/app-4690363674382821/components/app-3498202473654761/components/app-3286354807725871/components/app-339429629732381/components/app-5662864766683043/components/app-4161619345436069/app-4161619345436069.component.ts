import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4161619345436069',
  standalone: true,
  templateUrl: './app-4161619345436069.component.html',
  styleUrl: './app-4161619345436069.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4161619345436069Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
