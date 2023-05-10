type TOGGLE_ACTIVE_TYPE = 'TOGGLE-ACTIVE'
type CHANGE_HOVERED_ITEM_TYPE = 'CHANGE-HOVERED-ITEM'

export const TOGGLE_ACTIVE: TOGGLE_ACTIVE_TYPE = 'TOGGLE-ACTIVE';
export const CHANGE_HOVERED_ITEM: CHANGE_HOVERED_ITEM_TYPE = 'CHANGE-HOVERED-ITEM';

type ToggleActionType = {
    type: TOGGLE_ACTIVE_TYPE
}

type ChangeHoveredItemActionType = {
    type: CHANGE_HOVERED_ITEM_TYPE
    nextValue: any
}

type StateType = {
    active: boolean
    hoveredItemValue: any
}

const reducer = (state: StateType,
                 action: (ToggleActionType | ChangeHoveredItemActionType)): StateType => {
    switch (action.type) {
        case TOGGLE_ACTIVE:
            return { ...state, active: !state.active };
        case CHANGE_HOVERED_ITEM:
            return { ...state, hoveredItemValue: action.nextValue };
        default:
            throw new Error('Action was not found');
    }
};

export default reducer;