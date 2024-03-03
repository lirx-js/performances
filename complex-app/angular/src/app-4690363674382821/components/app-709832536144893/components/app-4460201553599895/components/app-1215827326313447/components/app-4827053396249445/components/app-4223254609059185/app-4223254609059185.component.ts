import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4223254609059185',
  standalone: true,
  templateUrl: './app-4223254609059185.component.html',
  styleUrl: './app-4223254609059185.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4223254609059185Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
