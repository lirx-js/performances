import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-7952369826807329',
  standalone: true,
  templateUrl: './app-7952369826807329.component.html',
  styleUrl: './app-7952369826807329.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App7952369826807329Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
