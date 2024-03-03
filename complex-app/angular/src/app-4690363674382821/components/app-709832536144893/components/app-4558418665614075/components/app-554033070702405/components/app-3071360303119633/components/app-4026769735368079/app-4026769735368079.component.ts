import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4026769735368079',
  standalone: true,
  templateUrl: './app-4026769735368079.component.html',
  styleUrl: './app-4026769735368079.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4026769735368079Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
