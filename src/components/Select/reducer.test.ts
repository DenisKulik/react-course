import reducer, {
    CHANGE_HOVERED_ITEM, StateType, TOGGLE_ACTIVE
} from './reducer';

test('active should be true', () => {
    const state: StateType = { active: false, hoveredItemValue: 'Moscow' };
    const newState = reducer(state, { type: TOGGLE_ACTIVE });
    expect(newState.active).toBe(true);
});

test('active should be false', () => {
    const state: StateType = { active: true, hoveredItemValue: 'Moscow' };
    const newState = reducer(state, { type: TOGGLE_ACTIVE });
    expect(newState.active).toBe(false);
});

test('hoveredItemValue should be Krasnoyarsk', () => {
    const state: StateType = { active: false, hoveredItemValue: 'Moscow' };
    const newState = reducer(state,
        { type: CHANGE_HOVERED_ITEM, nextValue: 'Krasnoyarsk' });
    expect(newState.hoveredItemValue).toBe('Krasnoyarsk');
});

test('hoveredItemValue should be Kemerovo', () => {
    const state: StateType = { active: false, hoveredItemValue: 'Krasnoyarsk' };
    const newState = reducer(state,
        { type: CHANGE_HOVERED_ITEM, nextValue: 'Kemerovo' });
    expect(newState.hoveredItemValue).toBe('Kemerovo');
});