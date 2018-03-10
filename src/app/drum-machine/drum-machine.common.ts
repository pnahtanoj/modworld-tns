// vendor dependencies
// app
import { SharedModule } from '../shared';
import { RouterModule } from '../common';
import { DrumMachineComponent } from './components/drum-machine.component';
import { DrumMachineRoutes } from './drum-machine.routes';

export const SHARED_MODULES: any[] = [
  SharedModule,
  RouterModule.forChild(<any>DrumMachineRoutes),
];


export const COMPONENT_DECLARATIONS: any[] = [
  DrumMachineComponent
];
