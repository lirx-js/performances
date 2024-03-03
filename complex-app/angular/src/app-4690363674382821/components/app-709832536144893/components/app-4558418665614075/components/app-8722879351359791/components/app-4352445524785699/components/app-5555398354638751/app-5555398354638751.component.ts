import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5555398354638751',
  standalone: true,
  templateUrl: './app-5555398354638751.component.html',
  styleUrl: './app-5555398354638751.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5555398354638751Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
