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

import { browser, by, element } from 'protractor';
import { AppPage } from '../app.po';

export class WelcomePage extends AppPage {
  static readonly path = '/welcome';

  readonly page = element(by.tagName('app-welcome-page'));
  readonly buildScenarioButton = this.page.element(by.buttonText('Build a new scenario'));
  readonly pageTitle = this.page.element(by.css('.mat-title'));
  readonly uploadScenarioButton = this.page.element(by.buttonText('Upload existing scenario'));

  get path() { return WelcomePage.path; }

  navigateTo() {
    return browser.get(this.path);
  }
}
