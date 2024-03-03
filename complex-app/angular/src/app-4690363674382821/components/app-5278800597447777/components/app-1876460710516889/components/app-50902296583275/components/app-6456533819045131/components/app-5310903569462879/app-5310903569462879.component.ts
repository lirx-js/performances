import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5310903569462879',
  standalone: true,
  templateUrl: './app-5310903569462879.component.html',
  styleUrl: './app-5310903569462879.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5310903569462879Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
