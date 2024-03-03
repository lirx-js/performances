import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4719503444148375',
  standalone: true,
  templateUrl: './app-4719503444148375.component.html',
  styleUrl: './app-4719503444148375.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4719503444148375Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
