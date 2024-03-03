import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8198839887876861',
  standalone: true,
  templateUrl: './app-8198839887876861.component.html',
  styleUrl: './app-8198839887876861.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8198839887876861Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
