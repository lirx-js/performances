import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8370744056593257',
  standalone: true,
  templateUrl: './app-8370744056593257.component.html',
  styleUrl: './app-8370744056593257.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8370744056593257Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
