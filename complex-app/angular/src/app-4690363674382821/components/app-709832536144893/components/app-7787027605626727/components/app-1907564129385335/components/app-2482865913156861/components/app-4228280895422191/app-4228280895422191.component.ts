import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4228280895422191',
  standalone: true,
  templateUrl: './app-4228280895422191.component.html',
  styleUrl: './app-4228280895422191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4228280895422191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
