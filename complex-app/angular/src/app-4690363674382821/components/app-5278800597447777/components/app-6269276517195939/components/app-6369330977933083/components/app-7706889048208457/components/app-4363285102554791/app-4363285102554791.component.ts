import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4363285102554791',
  standalone: true,
  templateUrl: './app-4363285102554791.component.html',
  styleUrl: './app-4363285102554791.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4363285102554791Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
