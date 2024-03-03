import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2077930950566233',
  standalone: true,
  templateUrl: './app-2077930950566233.component.html',
  styleUrl: './app-2077930950566233.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2077930950566233Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
