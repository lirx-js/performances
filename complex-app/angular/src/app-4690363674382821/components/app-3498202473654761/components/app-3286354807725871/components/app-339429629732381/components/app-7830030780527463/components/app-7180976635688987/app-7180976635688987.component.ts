import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7180976635688987',
  standalone: true,
  templateUrl: './app-7180976635688987.component.html',
  styleUrl: './app-7180976635688987.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7180976635688987Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
