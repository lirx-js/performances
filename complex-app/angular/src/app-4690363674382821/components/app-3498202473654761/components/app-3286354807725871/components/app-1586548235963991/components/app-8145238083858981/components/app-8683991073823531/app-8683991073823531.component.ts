import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8683991073823531',
  standalone: true,
  templateUrl: './app-8683991073823531.component.html',
  styleUrl: './app-8683991073823531.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8683991073823531Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
