import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-653210081114883',
  standalone: true,
  templateUrl: './app-653210081114883.component.html',
  styleUrl: './app-653210081114883.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App653210081114883Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
