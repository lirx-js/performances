import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4540856959514191',
  standalone: true,
  templateUrl: './app-4540856959514191.component.html',
  styleUrl: './app-4540856959514191.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4540856959514191Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
