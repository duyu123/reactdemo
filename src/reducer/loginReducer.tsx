import * as ActionEvent from '../constants/actionsEvent'

const initalState = {
    toPath: ''
}

interface ModifyAction  {
    type: String;
    toPath: String;
}

const loginRedirectPath = (state = initalState, action: ModifyAction) => {
    if(action.type ===  ActionEvent.Login_Redirect_Event) {
        return Object.assign({}, state, {
            toPath: action.toPath
        })

        return state
    }
}

export default loginRedirectPath