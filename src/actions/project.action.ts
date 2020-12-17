
import { Action } from "redux";
import * as actionTypes from "../constants/actionTypes";

export interface ProjectActionProp {
    type: Action
}

// 更新选择项目
export function updateProject(data: any) {
    return {
        type: actionTypes.UPDATE_PROJECT,
        payload: data
    };
}