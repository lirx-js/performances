import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4265439451132829',
  standalone: true,
  templateUrl: './app-4265439451132829.component.html',
  styleUrl: './app-4265439451132829.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4265439451132829Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
