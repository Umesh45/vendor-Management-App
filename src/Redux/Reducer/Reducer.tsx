const initialstate = {
    vendor: [],
    name:'',
};

const reducer=(state=initialstate,action:any)=>{
    console.log("simple_name reducer is called")
    switch (action.type) {
        case 'GET_VENDOR':
            return {
                ...state,
                vendor:action.payload
            };
        case 'ADD_VENDOR':
            console.log("add reducer")
            return{
                ...state,
                vendor:action.payload,
            };

        case 'EDIT_VENDOR':
         console.log("edit reducer is called")
            return{
                ...state,
                vendor:action.payload
            };

        case 'DELETE_VENDOR':
            return{
                ...state
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