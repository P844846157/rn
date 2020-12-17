
import * as actionTypes from "../constants/actionTypes";


export interface IprojectProps {
    label: string,
    value: string
};

export const initialState: IprojectProps = {
    label: 'J3668-Development Project', value: '1'
};

export default function projectReducer(state = initialState, action: any) {
    switch (action.type) {
        case actionTypes.UPDATE_PROJECT:
            return {
                ...state,
                ...action.payload
            }
        default:
            return { ...state }
    }
}