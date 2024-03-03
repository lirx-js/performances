import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4399756294332187',
  standalone: true,
  templateUrl: './app-4399756294332187.component.html',
  styleUrl: './app-4399756294332187.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4399756294332187Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
