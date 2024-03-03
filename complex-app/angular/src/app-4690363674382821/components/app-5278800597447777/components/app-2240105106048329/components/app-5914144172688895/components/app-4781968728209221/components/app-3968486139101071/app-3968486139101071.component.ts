import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-3968486139101071',
  standalone: true,
  templateUrl: './app-3968486139101071.component.html',
  styleUrl: './app-3968486139101071.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App3968486139101071Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
