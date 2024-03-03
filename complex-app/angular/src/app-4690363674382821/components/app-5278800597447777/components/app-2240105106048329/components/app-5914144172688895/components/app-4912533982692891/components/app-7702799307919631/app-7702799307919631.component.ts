import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7702799307919631',
  standalone: true,
  templateUrl: './app-7702799307919631.component.html',
  styleUrl: './app-7702799307919631.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7702799307919631Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
