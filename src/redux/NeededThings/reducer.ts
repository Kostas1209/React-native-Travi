import { Thing } from "src/types/Things"
import { Action } from "redux"
import { addThing, changeThings} from "./actions";

const array: Array<Thing>= [
    {name: "passport", isPicked: false},
    {name: "food", isPicked: false}
]

export interface NeededThingsState
{
    neededThings: Array<Thing>
}


const INITIAL_STATE: NeededThingsState= {
    neededThings: array
}

export function thingsReducer(state: NeededThingsState = INITIAL_STATE, action: Action): NeededThingsState
{
    if(addThing.is(action))
    {
        let newThingsList = Object.assign([], state.neededThings);
        newThingsList.push(action.thing);
        return{
            ...state,
            neededThings: newThingsList
        }
    }
    if(changeThings.is(action))
    {
        return{
            ...state,
            neededThings: action.things
        }
    }
    return state
}