import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6665672949802851',
  standalone: true,
  templateUrl: './app-6665672949802851.component.html',
  styleUrl: './app-6665672949802851.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6665672949802851Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
