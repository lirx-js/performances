import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4895621073416355',
  standalone: true,
  templateUrl: './app-4895621073416355.component.html',
  styleUrl: './app-4895621073416355.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4895621073416355Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
