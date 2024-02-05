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

import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromTravelSimulator from '../reducers/travel-simulator.reducer';
import * as fromUI from './ui.selectors';
import { Page } from '../models';

export const selectTravelSimulatorState = createFeatureSelector<fromTravelSimulator.State>(
  fromTravelSimulator.travelSimulatorKey
);

const selectTravelSimulatorVisible = createSelector(
  fromUI.selectPage,
  (page) =>
    page === Page.RoutesChart || page === Page.RoutesMetadata || page === Page.ShipmentsMetadata
);

const selectTime = createSelector(selectTravelSimulatorState, fromTravelSimulator.selectTime);

const selectActive = createSelector(selectTravelSimulatorState, fromTravelSimulator.selectActive);

export const TravelSimulatorSelectors = {
  selectActive,
  selectTravelSimulatorVisible,
  selectTime,
};

export default TravelSimulatorSelectors;
