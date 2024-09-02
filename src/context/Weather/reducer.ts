import { Location, Status, Unit, Weather } from '@/types';

export const actions = {
  unitChanged: 'UNIT_CHANGED',
  dataReceived: 'DATA_RECEIVED',
  locationSelected: 'LOCATION_SELECTED',
  locationRemoved: 'LOCATION_REMOVED',
  statusChanged: 'STATUS_CHANGED',
} as const;

export const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actions.locationSelected: {
      return { ...state, location: action.location };
    }

    case actions.locationRemoved: {
      return { ...state, status: 'idle', location: null, weather: null };
    }

    case actions.statusChanged: {
      return { ...state, status: action.status };
    }

    case actions.dataReceived: {
      return { ...state, status: 'success', weather: action.weather };
    }

    case actions.unitChanged: {
      return { ...state, unit: action.unit };
    }

    default: {
      // @ts-expect-error invalid action type
      throw new Error('Unknown action: ' + action.type);
    }
  }
};

export interface State {
  location: Location | null;
  weather: Weather | null;
  status: Status;
  unit: Unit;
}

export type Action =
  | { type: typeof actions.locationSelected; location: Location | null }
  | { type: typeof actions.statusChanged; status: Status }
  | { type: typeof actions.dataReceived; weather: Weather }
  | { type: typeof actions.unitChanged; unit: Unit }
  | { type: typeof actions.locationRemoved };
