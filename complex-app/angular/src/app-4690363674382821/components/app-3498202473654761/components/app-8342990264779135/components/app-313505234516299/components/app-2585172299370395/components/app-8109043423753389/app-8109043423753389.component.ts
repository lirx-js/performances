import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8109043423753389',
  standalone: true,
  templateUrl: './app-8109043423753389.component.html',
  styleUrl: './app-8109043423753389.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8109043423753389Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
