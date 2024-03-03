import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6847226522827947',
  standalone: true,
  templateUrl: './app-6847226522827947.component.html',
  styleUrl: './app-6847226522827947.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6847226522827947Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
