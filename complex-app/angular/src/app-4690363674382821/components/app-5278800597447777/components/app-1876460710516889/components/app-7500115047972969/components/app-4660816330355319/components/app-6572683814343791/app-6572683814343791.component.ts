import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6572683814343791',
  standalone: true,
  templateUrl: './app-6572683814343791.component.html',
  styleUrl: './app-6572683814343791.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6572683814343791Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
