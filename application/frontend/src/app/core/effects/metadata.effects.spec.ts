/*
Copyright 2024 Google LLC

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    https://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Actions } from '@ngrx/effects';
import { provideMockActions } from '@ngrx/effects/testing';
import { provideMockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import * as fromUndoRedo from '../selectors/undo-redo.selectors';
import { UndoRedoEffects } from './undo-redo.effects';

describe('UndoRedoEffects', () => {
  let actions$: Observable<any>;
  let effects: UndoRedoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [
        UndoRedoEffects,
        provideMockStore({
          selectors: [
            { selector: fromUndoRedo.selectUndo, value: [] },
            { selector: fromUndoRedo.selectRedo, value: [] },
          ],
        }),
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(UndoRedoEffects);
    actions$ = TestBed.inject(Actions);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
