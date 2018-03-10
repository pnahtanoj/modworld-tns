import { NgModule, Optional, SkipSelf } from '@angular/core';
import { COMPONENT_DECLARATIONS, SHARED_MODULES } from './drum-machine.common';

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [...COMPONENT_DECLARATIONS]
})
export class DrumMachineModule {
  constructor( @Optional() @SkipSelf() parentModule: DrumMachineModule) {
    if (parentModule) {
      throw new Error('DrumMachineModule already loaded; Import in root module only.');
    }
  }
}
