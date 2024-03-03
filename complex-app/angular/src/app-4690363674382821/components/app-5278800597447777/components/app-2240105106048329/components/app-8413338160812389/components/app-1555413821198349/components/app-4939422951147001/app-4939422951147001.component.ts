import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4939422951147001',
  standalone: true,
  templateUrl: './app-4939422951147001.component.html',
  styleUrl: './app-4939422951147001.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4939422951147001Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
