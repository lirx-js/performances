import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-9006014000372693',
  standalone: true,
  templateUrl: './app-9006014000372693.component.html',
  styleUrl: './app-9006014000372693.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App9006014000372693Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
