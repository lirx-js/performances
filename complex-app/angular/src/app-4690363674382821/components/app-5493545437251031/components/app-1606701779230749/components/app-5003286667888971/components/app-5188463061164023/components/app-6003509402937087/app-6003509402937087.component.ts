import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6003509402937087',
  standalone: true,
  templateUrl: './app-6003509402937087.component.html',
  styleUrl: './app-6003509402937087.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6003509402937087Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
