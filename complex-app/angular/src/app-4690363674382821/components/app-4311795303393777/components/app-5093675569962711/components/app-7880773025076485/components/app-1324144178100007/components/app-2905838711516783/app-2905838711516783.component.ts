import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2905838711516783',
  standalone: true,
  templateUrl: './app-2905838711516783.component.html',
  styleUrl: './app-2905838711516783.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2905838711516783Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
