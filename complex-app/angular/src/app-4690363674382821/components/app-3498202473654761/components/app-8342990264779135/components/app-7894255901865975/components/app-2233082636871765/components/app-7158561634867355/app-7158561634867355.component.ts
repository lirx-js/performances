import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7158561634867355',
  standalone: true,
  templateUrl: './app-7158561634867355.component.html',
  styleUrl: './app-7158561634867355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7158561634867355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
