import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4819361813920363',
  standalone: true,
  templateUrl: './app-4819361813920363.component.html',
  styleUrl: './app-4819361813920363.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4819361813920363Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
