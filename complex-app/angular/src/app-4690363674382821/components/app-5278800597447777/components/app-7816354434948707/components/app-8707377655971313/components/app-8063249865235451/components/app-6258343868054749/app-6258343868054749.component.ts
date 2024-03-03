import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6258343868054749',
  standalone: true,
  templateUrl: './app-6258343868054749.component.html',
  styleUrl: './app-6258343868054749.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6258343868054749Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
