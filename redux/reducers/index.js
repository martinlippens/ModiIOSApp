import { combineReducers } from 'redux'

const userinfo = (state = {
    user: null,
    bookinginfo: null,
    bookingdata: null,
    CostReportDetail: null,
    loginType: null,

}, action) => {

    switch (action.type) {
        case 'json_store':
            state = { ...state, objData: action.value }
            break;

        case 'BookingData_store':
            state = {
                ...state, bookingdata: action.value
            }
            break;
        case 'LoginType_store':
            state = {
                ...state, loginType: action.value
            }
            break;


        case 'CostReportDetail':
            state = {
                ...state, CostReportDetail: action.value
            }
            break;

        case 'info_store':
            state = {
                ...state, user: action.value
            }
            break;
        case 'Bookinginfo_store':
            state = {
                ...state, bookinginfo: action.value
            }
            break;

        case 'upsellorderinfo_store':
            let upsellstate = action.value;
            state = {
                ...state, order_info: {
                    ...state.order_info,
                    page: upsellstate.page,

                    orderIdStep2: upsellstate.orderId
                }
            }
            break;

        case 'mobile_shipping':
            let mobile_shippingState = action.value;
            state = {
                ...state, order_info: {
                    ...state.order_info,
                    page: mobile_shippingState.page
                }
            }
            break;

        case 'exitpopupstate_store':
            let popState = action.value
            state = {
                ...state, order_info: {
                    ...state.order_info,
                    exitpopState: popState.door
                }
            }
            break;

        case 'paramData_store':
            let paramData = action.value;
            state = {
                ...state, order_info: {
                    ...state.order_info,
                    AFFD: paramData.AFFD,
                    SID: paramData.SID,
                    AFFID: paramData.AFFID,
                    C1: paramData.C1,
                    C2: paramData.C2,
                    C3: paramData.C3
                }
            }
            break;
        case 'acceptpopupstate_store':
            let acceptpopState = action.value
            state = {
                ...state, order_info: {
                    ...state.order_info,
                    acceptpopState: acceptpopState.acceptWin
                }
            }
            break;
        case 'json_nonaacceptStates':
            let nonacceptStates = action.value
            state = { ...state, nonacceptStatesData: nonacceptStates }
            break;
        default:
            break;
    }
    return state
}

export default combineReducers({
    userinfo
})