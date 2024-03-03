import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-653514142667655',
  standalone: true,
  templateUrl: './app-653514142667655.component.html',
  styleUrl: './app-653514142667655.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App653514142667655Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
