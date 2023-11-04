import { IState, CompletingAction, ActionTypes } from "./types";

const InitialState:IState = {
    isCompleted:false
}
export const CompletingActionReducer = (state = InitialState, action:CompletingAction):IState => {
    switch (action.type){
        case ActionTypes.TASK_COMPLETING:
            return {...state, isCompleted:action.payload }
        default: return state
    }
};
