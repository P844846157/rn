
export const SET_PROJECT = 'SET_PROJECT';
export const CLEAR_PROJECT = 'CLEAR_PROJECT';

export const ProjectReducer = (prevState: any, action: any) => {
    switch (action.type) {
        case SET_PROJECT:
            
    console.log( action.data)
            return action.data;
        case CLEAR_PROJECT:
            return {};
    }
};

export interface ProjectProps {
    label: string,
    value: string
}

export const projectState: ProjectProps = { label: 'J3668-Development Project', value: '1' };