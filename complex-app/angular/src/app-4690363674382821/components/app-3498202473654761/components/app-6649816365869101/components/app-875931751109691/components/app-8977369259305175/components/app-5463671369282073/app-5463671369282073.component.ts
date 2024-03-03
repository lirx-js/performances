import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5463671369282073',
  standalone: true,
  templateUrl: './app-5463671369282073.component.html',
  styleUrl: './app-5463671369282073.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5463671369282073Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
