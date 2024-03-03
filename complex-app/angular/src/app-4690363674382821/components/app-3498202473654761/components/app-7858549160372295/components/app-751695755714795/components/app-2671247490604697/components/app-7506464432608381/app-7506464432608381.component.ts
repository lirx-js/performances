import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7506464432608381',
  standalone: true,
  templateUrl: './app-7506464432608381.component.html',
  styleUrl: './app-7506464432608381.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7506464432608381Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
