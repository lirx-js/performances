import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-982756334011835',
  standalone: true,
  templateUrl: './app-982756334011835.component.html',
  styleUrl: './app-982756334011835.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App982756334011835Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
