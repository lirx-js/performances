import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-1460183122037287',
  standalone: true,
  templateUrl: './app-1460183122037287.component.html',
  styleUrl: './app-1460183122037287.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App1460183122037287Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
