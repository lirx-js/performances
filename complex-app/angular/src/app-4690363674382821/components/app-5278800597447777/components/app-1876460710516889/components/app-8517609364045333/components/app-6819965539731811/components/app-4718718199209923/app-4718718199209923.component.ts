import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4718718199209923',
  standalone: true,
  templateUrl: './app-4718718199209923.component.html',
  styleUrl: './app-4718718199209923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4718718199209923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
