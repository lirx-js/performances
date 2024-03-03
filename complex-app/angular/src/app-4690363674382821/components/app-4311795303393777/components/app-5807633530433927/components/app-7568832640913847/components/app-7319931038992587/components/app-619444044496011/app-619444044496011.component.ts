import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-619444044496011',
  standalone: true,
  templateUrl: './app-619444044496011.component.html',
  styleUrl: './app-619444044496011.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App619444044496011Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
