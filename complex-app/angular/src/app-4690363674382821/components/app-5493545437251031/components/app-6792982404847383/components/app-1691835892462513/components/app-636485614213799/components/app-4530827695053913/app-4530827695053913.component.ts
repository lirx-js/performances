import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4530827695053913',
  standalone: true,
  templateUrl: './app-4530827695053913.component.html',
  styleUrl: './app-4530827695053913.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4530827695053913Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
