import { computed, effect, IReadonlySignal, ISignal, SIGNAL, signal } from '@lirx/core';

function run(): void {
  run0();
  // run1();
}


function run0(): void {
  console.time('total');
  console.time('generate-signals');
  const signals = Array.from({ length: 1e5 }, (_, index: number) => signal(index));
  console.timeEnd('generate-signals');

  console.time('generate-computed-signals');
  const computedSignals = Array.from({ length: 1e5 }, () => computed((): number => {
    return signals.reduce((sum: number, signal: IReadonlySignal<number>) => {
      return sum + signal();
    }, 0);
  }));
  console.timeEnd('generate-computed-signals');
  computedSignals.splice(1e2, Number.POSITIVE_INFINITY);

  let value: number = 0;

  console.time('read-signals');
  value = signals.reduce((sum: number, signal: IReadonlySignal<number>) => {
    return sum + signal();
  }, 0);
  console.timeEnd('read-signals');
  console.log(value);

  console.time('read-computed-signals');
  value = computedSignals.reduce((sum: number, signal: IReadonlySignal<number>) => {
    return sum + signal();
  }, 0);
  console.timeEnd('read-computed-signals');
  console.log(value);

  console.time('read-computed-signals-cached');
  value = computedSignals.reduce((sum: number, signal: IReadonlySignal<number>) => {
    return sum + signal();
  }, 0);
  console.timeEnd('read-computed-signals-cached');
  console.log(value);

  console.time('update-signals');
  signals.forEach((signal: ISignal<number>): void => {
    signal.set(signal() + 1);
  });
  console.timeEnd('update-signals');

  console.time('update-signals-2');
  signals.forEach((signal: ISignal<number>): void => {
    signal.set(signal() + 1);
  });
  console.timeEnd('update-signals-2');

  let cmd: number = 0;

  console.time('effect-0');
  effect(() => {
    if (cmd === 0) {
      cmd++;
      value = computedSignals.reduce((sum: number, signal: IReadonlySignal<number>) => {
        return sum + signal();
      }, 0);
      console.timeEnd('effect-0');
      console.log(value);

      queueMicrotask(() => {
        console.time('effect-1');
        signals.forEach((signal: ISignal<number>): void => {
          signal.set(signal() + 1);
        });
      });
    } else if (cmd === 1) {
      cmd++;
      console.timeEnd('effect-1');
      console.time('effect-1.1');
      value = signals.reduce((sum: number, signal: IReadonlySignal<number>) => {
        return sum + signal();
      }, 0);
      console.timeEnd('effect-1.1');
      console.log(value);
      queueMicrotask(() => {
        console.time('effect-2');
        signals[0].set(0);
      });
    } else if (cmd === 2) {
      cmd++;
      console.timeEnd('effect-2');
      console.timeEnd('total');
    }
  });
}

function run1(): void {
  const originSignal = signal(1);

  const sumSignals = (signals: readonly IReadonlySignal<number>[]): IReadonlySignal<number> => {
    return computed((): number => {
      return signals.reduce((sum: number, signal: IReadonlySignal<number>) => {
        return sum + signal();
      }, 0);
    });
  };

  const recursive = (count: number): IReadonlySignal<number> => {
    if (count <= 0) {
      return originSignal;
    } else {
      return sumSignals(Array.from({ length: count }, () => recursive(count - 1)));
    }
  };

  console.time('generate');
  const count = recursive(9);
  console.timeEnd('generate');

  console.time('read-1');
  let value: number = count();
  console.timeEnd('read-1');
  console.log(value);

  console.time('read-1-cached');
  value = count();
  console.timeEnd('read-1-cached');
  console.log(value);

  console.time('update-1');
  // console.log((count[SIGNAL] as any).signalChangeListeners.length);
  originSignal.set(2);
  console.timeEnd('update-1');

  console.time('update-2');
  for (let i = 0; i < 1e5; i++) {
    originSignal.set(i);
  }
  console.timeEnd('update-2');
  console.log(originSignal());


  console.time('read-2');
  value = count();
  console.timeEnd('read-2');
  console.log(value);

  console.time('effect');
  effect(() => {
    if (count() === 0) {
      console.timeEnd('effect');
    }
  });
  for (let i = 0; i < 100; i++) {
    originSignal.set(i);
  }
  originSignal.set(0);
}

function main(): void {
  run();
  // setTimeout(run, 500);
}

window.onload = main;

