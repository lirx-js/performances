import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6713703711748271',
  standalone: true,
  templateUrl: './app-6713703711748271.component.html',
  styleUrl: './app-6713703711748271.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6713703711748271Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
