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

import { createAction, props } from '@ngrx/store';
import { ShipmentRoute, Visit } from '../models';

export const cancel = createAction('[Edit Visit] Cancel');

export const save = createAction(
  '[Edit Visit] Save',
  props<{ visits: Visit[]; shipmentRoutes: ShipmentRoute[] }>()
);

export const saveSuccess = createAction(
  '[Edit Visit] Save Success',
  props<{ visits: Visit[]; shipmentRoutes: ShipmentRoute[] }>()
);

export const saveFailure = createAction('[Edit Visit] Save Failure', props<{ error: any }>());

export const saveCancel = createAction('[Edit Visit] Save Cancel');

export const commitChanges = createAction(
  '[Edit Visit] Commit Changes',
  props<{ visits: Visit[]; shipmentRoutes: ShipmentRoute[] }>()
);

export const editShipment = createAction(
  '[Edit Visit] Edit Shipment',
  props<{ shipmentId: number }>()
);
