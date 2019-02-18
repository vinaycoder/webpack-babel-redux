const getTopics = name =>{
    return {type:'TOPICS',topic_name:name}
}

export const getTopicsRequest = (name) => (dispatch, getState) => {  
    dispatch(getTopics(name));
}