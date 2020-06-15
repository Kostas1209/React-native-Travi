import { defineAction } from "rd-redux-utils"
import { Thing } from "src/types/Things";

export const addThing = defineAction<{
    thing: Thing
}>("ADD THING");

export const changeThings = defineAction<{
    things: Array<Thing>
}>("CHANGE THING");
