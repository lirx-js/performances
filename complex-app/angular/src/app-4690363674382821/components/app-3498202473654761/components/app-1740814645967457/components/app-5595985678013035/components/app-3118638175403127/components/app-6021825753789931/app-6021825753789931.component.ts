import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6021825753789931',
  standalone: true,
  templateUrl: './app-6021825753789931.component.html',
  styleUrl: './app-6021825753789931.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6021825753789931Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
