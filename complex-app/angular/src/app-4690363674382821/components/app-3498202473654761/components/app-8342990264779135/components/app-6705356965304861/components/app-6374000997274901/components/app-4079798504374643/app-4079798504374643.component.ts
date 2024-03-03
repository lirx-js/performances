import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4079798504374643',
  standalone: true,
  templateUrl: './app-4079798504374643.component.html',
  styleUrl: './app-4079798504374643.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4079798504374643Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
