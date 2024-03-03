import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5894509752870071',
  standalone: true,
  templateUrl: './app-5894509752870071.component.html',
  styleUrl: './app-5894509752870071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5894509752870071Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
