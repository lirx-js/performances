import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-472055459559785',
  standalone: true,
  templateUrl: './app-472055459559785.component.html',
  styleUrl: './app-472055459559785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App472055459559785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
