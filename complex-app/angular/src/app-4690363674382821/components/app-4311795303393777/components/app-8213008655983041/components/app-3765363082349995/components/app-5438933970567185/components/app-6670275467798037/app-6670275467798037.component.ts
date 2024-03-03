import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6670275467798037',
  standalone: true,
  templateUrl: './app-6670275467798037.component.html',
  styleUrl: './app-6670275467798037.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6670275467798037Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
