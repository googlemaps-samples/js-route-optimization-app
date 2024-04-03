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

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { Store } from '@ngrx/store';
import { MockStore, provideMockStore } from '@ngrx/store/testing';
import * as fromConfig from 'src/app/core/selectors/config.selectors';
import PreSolveVehicleSelectors from '../selectors/pre-solve-vehicle.selectors';

import { PdfDownloadService } from './pdf-download.service';

describe('PdfDownloadService', () => {
  let service: PdfDownloadService;
  let _store: MockStore;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        provideMockStore({
          selectors: [
            { selector: fromConfig.selectMapApiKey, value: '' },
            { selector: fromConfig.selectMapOptions, value: {} },
            { selector: fromConfig.selectStorageApi, value: { apiRoot: null } },
            { selector: PreSolveVehicleSelectors.selectVehicles, value: [] },
          ],
        }),
      ],
    });
    service = TestBed.inject(PdfDownloadService);
    _store = TestBed.inject(Store) as MockStore<any>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
