import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-611453847742521',
  standalone: true,
  templateUrl: './app-611453847742521.component.html',
  styleUrl: './app-611453847742521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App611453847742521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
