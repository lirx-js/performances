import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4224696303383241',
  standalone: true,
  templateUrl: './app-4224696303383241.component.html',
  styleUrl: './app-4224696303383241.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4224696303383241Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
