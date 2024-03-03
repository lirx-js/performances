import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4126040812084939',
  standalone: true,
  templateUrl: './app-4126040812084939.component.html',
  styleUrl: './app-4126040812084939.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4126040812084939Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
