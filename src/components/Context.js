import React, {useContext, useEffect, useReducer} from 'react'
import reducer from './reducer';


const AppContext = React.createContext()
const API = 'https://hn.algolia.com/api/v1/search?';
const ACTION = {
    GET_DATA: 'get-data',
    SET_LOADING: 'set-loading',
    DELETE_POST: 'delete-post',
    SEARCH_POST: 'search-post',
    PREV_PAGE: 'prev-page',
    NEXT_PAGE: 'next-page'
}

function AppProvider ({children}) {

    const initialValue = {
        isLoading: true,
        page: 0,
        nbPages: 0,
        query: 'HTML',
        hits: []
    }

    const [state, dispatch] = useReducer(reducer, initialValue)


    async function fetchData(url){
            dispatch({type: ACTION.SET_LOADING})
            try{
                const res = await fetch(url)
                const data = await res.json()
                
                dispatch({type: ACTION.GET_DATA, payload: {hits: data.hits, page: data.page, nbPages: data.nbPages}})
            }catch(e){
                console.log(e)
            }
    }   

    useEffect(()=>{
        fetchData(`${API}query=${state.query}&page=${state.page}`)
    },[state.query, state.page])

    //!Remove Post
    function removePost(ID){
        
        dispatch({type: ACTION.DELETE_POST, payload: {id: ID}})
    }

    //!Search Post
    function searchPost(query){
        dispatch({type: ACTION.SEARCH_POST, payload: {query: query}} )
    }

    //!Pagination Post
    function getPrevPage(){
        dispatch({type: ACTION.PREV_PAGE} )
    }

    function getNextPage(){
        dispatch({type: ACTION.NEXT_PAGE} )
    }

  console.log(state)
   return (
     <AppContext.Provider value={{...state, removePost, searchPost, getPrevPage, getNextPage}}>
        {children}
    </AppContext.Provider>
    )
}

function useGolbalContext () {
    return useContext(AppContext)
}

export default AppProvider;
export {useGolbalContext, ACTION}