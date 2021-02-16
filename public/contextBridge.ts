/***********************************************************
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License
 **********************************************************/
import { contextBridge } from 'electron';
import { generateSettingsInterface } from './factories/settingsInterfaceFactory';
import { generateDirectoryInterface } from './factories/directoryInterfaceFactory';
import { generateModelRepositoryInterface } from './factories/modelRepositoryInterfaceFactory';
import { generateDeviceInterface } from './factories/deviceInterfaceFactory';
import { API_INTERFACES } from './constants';

contextBridge.exposeInMainWorld(API_INTERFACES.DEVICE, generateDeviceInterface());
contextBridge.exposeInMainWorld(API_INTERFACES.DIRECTORY, generateDirectoryInterface());
contextBridge.exposeInMainWorld(API_INTERFACES.MODEL_DEFINITION, generateModelRepositoryInterface());
contextBridge.exposeInMainWorld(API_INTERFACES.SETTINGS, generateSettingsInterface());
