import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4553103155575557',
  standalone: true,
  templateUrl: './app-4553103155575557.component.html',
  styleUrl: './app-4553103155575557.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4553103155575557Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
