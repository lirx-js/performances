import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-492985803766073',
  standalone: true,
  templateUrl: './app-492985803766073.component.html',
  styleUrl: './app-492985803766073.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App492985803766073Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
