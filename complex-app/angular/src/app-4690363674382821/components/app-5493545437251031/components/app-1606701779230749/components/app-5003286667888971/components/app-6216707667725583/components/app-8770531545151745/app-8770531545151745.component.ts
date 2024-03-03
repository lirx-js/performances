import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8770531545151745',
  standalone: true,
  templateUrl: './app-8770531545151745.component.html',
  styleUrl: './app-8770531545151745.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8770531545151745Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
