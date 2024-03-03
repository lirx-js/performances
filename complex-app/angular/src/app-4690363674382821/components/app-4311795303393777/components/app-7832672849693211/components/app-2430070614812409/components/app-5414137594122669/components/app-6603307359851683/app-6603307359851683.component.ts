import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-6603307359851683',
  standalone: true,
  templateUrl: './app-6603307359851683.component.html',
  styleUrl: './app-6603307359851683.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App6603307359851683Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
