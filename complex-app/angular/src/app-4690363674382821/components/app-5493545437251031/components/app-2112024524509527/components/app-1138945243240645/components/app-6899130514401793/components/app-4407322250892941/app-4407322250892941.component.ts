import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4407322250892941',
  standalone: true,
  templateUrl: './app-4407322250892941.component.html',
  styleUrl: './app-4407322250892941.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4407322250892941Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
