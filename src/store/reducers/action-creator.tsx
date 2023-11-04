import { ActionTypes, CompletingAction } from "./types";

export const AuthActionCreators = {
    TaskCompleting: (isCompleted: boolean): CompletingAction => ({type: ActionTypes.TASK_COMPLETING, payload: isCompleted}),
}