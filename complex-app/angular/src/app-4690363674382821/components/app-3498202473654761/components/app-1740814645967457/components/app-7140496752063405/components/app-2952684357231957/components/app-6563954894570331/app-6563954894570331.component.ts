import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6563954894570331',
  standalone: true,
  templateUrl: './app-6563954894570331.component.html',
  styleUrl: './app-6563954894570331.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6563954894570331Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
