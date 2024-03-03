import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-2751902145474515',
  standalone: true,
  templateUrl: './app-2751902145474515.component.html',
  styleUrl: './app-2751902145474515.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App2751902145474515Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
