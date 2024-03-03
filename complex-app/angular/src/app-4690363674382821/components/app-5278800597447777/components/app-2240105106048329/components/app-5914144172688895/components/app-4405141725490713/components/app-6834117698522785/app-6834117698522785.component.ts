import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6834117698522785',
  standalone: true,
  templateUrl: './app-6834117698522785.component.html',
  styleUrl: './app-6834117698522785.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6834117698522785Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
