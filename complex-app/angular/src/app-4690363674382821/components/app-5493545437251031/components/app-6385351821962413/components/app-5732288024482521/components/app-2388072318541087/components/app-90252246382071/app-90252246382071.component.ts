import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-90252246382071',
  standalone: true,
  templateUrl: './app-90252246382071.component.html',
  styleUrl: './app-90252246382071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App90252246382071Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
