import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3903957523463979',
  standalone: true,
  templateUrl: './app-3903957523463979.component.html',
  styleUrl: './app-3903957523463979.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3903957523463979Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
