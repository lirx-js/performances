import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4287884735533679',
  standalone: true,
  templateUrl: './app-4287884735533679.component.html',
  styleUrl: './app-4287884735533679.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4287884735533679Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
