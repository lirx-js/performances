import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5074987632005923',
  standalone: true,
  templateUrl: './app-5074987632005923.component.html',
  styleUrl: './app-5074987632005923.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5074987632005923Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
