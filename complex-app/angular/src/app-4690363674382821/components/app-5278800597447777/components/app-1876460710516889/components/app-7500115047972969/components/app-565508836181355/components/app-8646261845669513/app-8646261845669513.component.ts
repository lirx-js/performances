import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8646261845669513',
  standalone: true,
  templateUrl: './app-8646261845669513.component.html',
  styleUrl: './app-8646261845669513.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8646261845669513Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
