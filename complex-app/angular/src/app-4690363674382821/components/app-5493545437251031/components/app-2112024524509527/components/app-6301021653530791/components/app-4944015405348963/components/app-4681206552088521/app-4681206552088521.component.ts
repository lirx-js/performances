import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-4681206552088521',
  standalone: true,
  templateUrl: './app-4681206552088521.component.html',
  styleUrl: './app-4681206552088521.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App4681206552088521Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
