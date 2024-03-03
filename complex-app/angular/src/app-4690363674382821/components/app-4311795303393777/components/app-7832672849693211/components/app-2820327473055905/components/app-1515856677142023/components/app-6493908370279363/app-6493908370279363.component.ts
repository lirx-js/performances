import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6493908370279363',
  standalone: true,
  templateUrl: './app-6493908370279363.component.html',
  styleUrl: './app-6493908370279363.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6493908370279363Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
