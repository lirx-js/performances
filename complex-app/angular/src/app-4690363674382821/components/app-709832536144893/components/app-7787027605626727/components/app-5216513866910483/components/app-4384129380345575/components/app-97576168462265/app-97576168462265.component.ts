import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-97576168462265',
  standalone: true,
  templateUrl: './app-97576168462265.component.html',
  styleUrl: './app-97576168462265.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App97576168462265Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
