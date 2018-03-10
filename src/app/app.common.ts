import { AppRoutingModule } from './app-routing.module';
// demo
import { HomeModule } from './home/home.module';
import { MenuModule } from './menu/menu.module';
import { DrumMachineModule } from './drum-machine/drum-machine.module';

export const SHARED_MODULES: any[] = [
  AppRoutingModule,
  HomeModule,
  MenuModule,
  DrumMachineModule
];

export * from './app-routing.module';
