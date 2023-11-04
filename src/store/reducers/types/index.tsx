export interface IState {
    isCompleted:boolean
}

export interface CompletingAction{
    type:ActionTypes.TASK_COMPLETING,
    payload:boolean
}

export const enum ActionTypes {
    TASK_COMPLETING="TaskCompleting"
}