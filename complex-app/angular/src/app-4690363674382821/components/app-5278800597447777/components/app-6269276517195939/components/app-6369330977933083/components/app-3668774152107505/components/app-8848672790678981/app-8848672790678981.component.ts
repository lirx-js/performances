import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8848672790678981',
  standalone: true,
  templateUrl: './app-8848672790678981.component.html',
  styleUrl: './app-8848672790678981.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8848672790678981Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
