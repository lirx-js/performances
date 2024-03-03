import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-8724167123837121',
  standalone: true,
  templateUrl: './app-8724167123837121.component.html',
  styleUrl: './app-8724167123837121.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App8724167123837121Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
