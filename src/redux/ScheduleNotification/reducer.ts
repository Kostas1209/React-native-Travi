import Immutable from 'immutable';
import { ScheduleNotification } from 'src/types/ScheduleNotification';
import { Action } from 'redux';
import { addNotification } from './action';

export interface NotificationState
{
    notificationMap: Immutable.Map<number, ScheduleNotification[]>;
}

const INITIAL_STATE: NotificationState = 
{
    notificationMap : Immutable.Map()
}


export function notificationReducer(state: NotificationState = INITIAL_STATE, action: Action): NotificationState
{
    if(addNotification.is(action))
    {
        return{
            ...state,
        };
    }
    
    return {
        ...state
    }
}