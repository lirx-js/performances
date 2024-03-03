import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-5734037303679495',
  standalone: true,
  templateUrl: './app-5734037303679495.component.html',
  styleUrl: './app-5734037303679495.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App5734037303679495Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
