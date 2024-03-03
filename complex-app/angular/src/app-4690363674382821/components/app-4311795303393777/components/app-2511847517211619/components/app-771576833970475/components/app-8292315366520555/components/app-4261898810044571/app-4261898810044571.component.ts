import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4261898810044571',
  standalone: true,
  templateUrl: './app-4261898810044571.component.html',
  styleUrl: './app-4261898810044571.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4261898810044571Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
