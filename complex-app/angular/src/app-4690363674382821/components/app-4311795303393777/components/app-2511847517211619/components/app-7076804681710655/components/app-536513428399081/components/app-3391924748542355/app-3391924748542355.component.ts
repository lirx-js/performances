import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3391924748542355',
  standalone: true,
  templateUrl: './app-3391924748542355.component.html',
  styleUrl: './app-3391924748542355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3391924748542355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
