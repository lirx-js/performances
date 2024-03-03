import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5889407737768043',
  standalone: true,
  templateUrl: './app-5889407737768043.component.html',
  styleUrl: './app-5889407737768043.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5889407737768043Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
