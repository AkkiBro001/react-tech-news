import { ACTION } from "./Context";

function reducer(state, action){
    switch (action.type) {
        case ACTION.GET_DATA:
            return {...state, hits: action.payload.hits, page: action.payload.page, nbPages: action.payload.nbPages, isLoading: false}
        case ACTION.SET_LOADING:
            return {...state, isLoading: true}
        case ACTION.DELETE_POST:
           return {...state,
                    hits: state.hits.filter(curElem => curElem.objectID !== action.payload.id)
            }
        case ACTION.SEARCH_POST:
            return {...state,
                query: action.payload.query
            }
        case ACTION.PREV_PAGE:
            let numPagePrev = state.page - 1;
            if(numPagePrev <= 0){
                numPagePrev = 0;
            }
            return {...state,
                page: numPagePrev
            }
        case ACTION.NEXT_PAGE:
                let numPageNext = state.page + 1;
                if(numPageNext >= state.nbPages){
                    numPageNext = 0;
                }
                
                return {...state,
                    page: numPageNext
                }
        default:
            return state
    }   

   
}

export default reducer;