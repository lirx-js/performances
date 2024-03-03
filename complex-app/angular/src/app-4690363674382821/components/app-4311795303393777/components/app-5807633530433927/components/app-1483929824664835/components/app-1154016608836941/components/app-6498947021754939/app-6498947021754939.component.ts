import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6498947021754939',
  standalone: true,
  templateUrl: './app-6498947021754939.component.html',
  styleUrl: './app-6498947021754939.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6498947021754939Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
