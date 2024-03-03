import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6434645819164037',
  standalone: true,
  templateUrl: './app-6434645819164037.component.html',
  styleUrl: './app-6434645819164037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6434645819164037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
