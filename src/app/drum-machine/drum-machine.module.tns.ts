import { NgModule, Optional, SkipSelf, NO_ERRORS_SCHEMA } from '@angular/core';
import { COMPONENT_DECLARATIONS, SHARED_MODULES } from './drum-machine.common';
// app

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENT_DECLARATIONS
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class DrumMachineModule {

  constructor( @Optional() @SkipSelf() parentModule: DrumMachineModule) {
    if (parentModule) {
      throw new Error('DrumMachineModule already loaded; Import in root module only.');
    }
  }
}