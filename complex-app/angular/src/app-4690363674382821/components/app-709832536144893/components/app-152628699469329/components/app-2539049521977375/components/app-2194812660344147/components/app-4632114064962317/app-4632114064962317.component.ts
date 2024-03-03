import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4632114064962317',
  standalone: true,
  templateUrl: './app-4632114064962317.component.html',
  styleUrl: './app-4632114064962317.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4632114064962317Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
