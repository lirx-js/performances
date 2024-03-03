import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4441983687755667',
  standalone: true,
  templateUrl: './app-4441983687755667.component.html',
  styleUrl: './app-4441983687755667.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4441983687755667Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
