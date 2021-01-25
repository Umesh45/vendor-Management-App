const initialstate = {
    vendor: [],
    name:''
};

const reducer=(state=initialstate,action:any)=>{
    console.log("simple_name reducer is called")
    switch (action.type) {
        case 'GET_VENDOR':
            return {
                ...state,
                vendor:action.payload
            };
        case 'SIMPLE_NAME_CHANGE':
        return{
            ...state,
            name:"hi"+" "+ action.payload
        }
            default:
            return state;
    }
};


export default reducer;