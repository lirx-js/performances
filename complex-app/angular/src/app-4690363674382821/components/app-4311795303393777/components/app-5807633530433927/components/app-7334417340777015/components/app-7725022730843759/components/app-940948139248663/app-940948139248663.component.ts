import { Component, ChangeDetectionStrategy, inject, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-940948139248663',
  standalone: true,
  templateUrl: './app-940948139248663.component.html',
  styleUrl: './app-940948139248663.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class App940948139248663Component {
  date: string = '';

  constructor() {
    const changeDetectorRef: ChangeDetectorRef = inject(ChangeDetectorRef);
    setInterval(() => {
      this.date = new Date().toString();
      changeDetectorRef.markForCheck();
    }, 1000);
  }
}
