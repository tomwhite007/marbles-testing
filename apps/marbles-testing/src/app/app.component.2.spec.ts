import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TestScheduler } from 'rxjs/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent]
    }).compileComponents();
  }));

  describe('marbles tests', () => {
    // it('generate the stream correctly', () => {
    //   const testScheduler = new TestScheduler((actual, expected) => {
    //     expect(actual).toEqual(expected);
    //   });
    //   testScheduler.run(helpers => {
    //     const { cold, expectObservable } = helpers;
    //     const s1 = cold('--a--b|', { a: 'x', b: 'y' });
    //     expectObservable(s1).toBe('xxx', 0);
    //   });
    // });
    // fit('generate the stream correctly', () => {
    //   // const testScheduler = new TestScheduler((actual, expected) => {});
    //   testScheduler.run(helpers => {
    //     const { cold, expectObservable } = helpers;
    //     const s1 = cold('--a|', { a: 'x' });
    //     expectObservable(s1).toBe('--a|', ['x']);
    //   });
    // });
  });
});
