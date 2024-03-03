import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8007377946546673',
  standalone: true,
  templateUrl: './app-8007377946546673.component.html',
  styleUrl: './app-8007377946546673.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8007377946546673Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
