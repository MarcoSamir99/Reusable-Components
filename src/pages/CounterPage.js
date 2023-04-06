// import { useState } from "react";
import produce from "immer";
import { useReducer } from "react";
import Button from "../components/button";
import Panel from "../components/panel";

const reducer = (state, action) => {
    switch (action.type) {          //switch is like the if condition
        case 'increment':
            //Without IMMER
            // return {
            //             ...state,
            //             count: state.count + 1 ,
            //         };

            //FOR IMMER 
            state.count = state.count + 1;
            return;

        case 'change-value-to-add':
            // return {
            //     ...state,
            //     valueToAdd: action.payload ,
            // };

            state.valueToAdd = action.payload;
            return;



        case 'add-value-to-count':
            // return {
            //     ...state,
            //     count: state.count + state.valueToAdd ,
            //     valueToAdd: 0 ,
            // };

            state.count= state.count + state.valueToAdd;
            state.valueToAdd = 0;
            return;
            
        case 'decrement':
            // return {
            //     ...state,
            //     count: state.count - 1 ,
            // };

            state.count = state.count - 1 ;
            return;
        
        default: 
            // throw new Error('unexpected action type' + action.type);
            return;

        
    };
}

//     if (action.type === 'increment') {
//         return {
//             ...state,
//             count: state.count + 1 ,
//         }
//     };

//     if (action.type === 'change-value-to-add') {
//         return {
//             ...state,
//             valueToAdd: action.payload ,
//         }
//     };

//     if (action.type === 'add-value-to-count') {
//         return {
//             ...state,
//             count: state.count + state.valueToAdd ,
//             valueToAdd: "" ,
//         }
//     };

//     if (action.type === 'decrement') {
//         return {
//             ...state,
//             count: state.count - 1 ,
//         }
//     };
// };

function CounterPage ({initialCount}) {
    // const [count, setCount] = useState(0);
    // const [valueToAdd , setValueToAdd] = useState(0);
    const [state , dispatch] = useReducer(produce(reducer), {  //produce () for immer library to make switch more easier
        count: initialCount,
        valueToAdd: 0
    })

    const increment = () => {
        // setCount(count + 1 );
        dispatch({
            type: 'increment'
        });
    };

    const decrement = () => {
        // setCount(count - 1 );
        dispatch({
            type: 'decrement'
        });
    };

    const handleChange = (event) => {
        const value = parseInt(event.target.value) || 0;
        // setValueToAdd(value); 
        dispatch({
            type: 'change-value-to-add',
            payload: value
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        
        // setCount(count + valueToAdd);
        // setValueToAdd(0);
         dispatch({
            type: 'add-value-to-count',
        });

    };

    return (
        <Panel className='m-3'>
            <h1 className="text-lg"> count is {state.count}</h1>
            <div className="flex flex-row">
                <Button success onClick={increment}>increment</Button>
                <Button danger onClick={decrement}>decrement</Button>
            </div>

            <form onSubmit={handleSubmit}>
                <label>Add a lot!</label>
                <input type='number' value={state.valueToAdd || ""} onChange={handleChange} className="p-1 m-3 bg-gray-50 border border-gray-300"/>
                <Button primary>Add it</Button>
            </form>
        </Panel>
    )
}

export default CounterPage;