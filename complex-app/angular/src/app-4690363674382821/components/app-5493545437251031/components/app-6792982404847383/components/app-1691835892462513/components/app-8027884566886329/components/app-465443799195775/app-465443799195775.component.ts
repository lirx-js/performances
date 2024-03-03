import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-465443799195775',
  standalone: true,
  templateUrl: './app-465443799195775.component.html',
  styleUrl: './app-465443799195775.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App465443799195775Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
