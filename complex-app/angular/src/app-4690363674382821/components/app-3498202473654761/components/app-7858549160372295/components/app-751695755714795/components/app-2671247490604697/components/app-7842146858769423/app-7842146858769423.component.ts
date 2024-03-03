import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7842146858769423',
  standalone: true,
  templateUrl: './app-7842146858769423.component.html',
  styleUrl: './app-7842146858769423.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7842146858769423Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
