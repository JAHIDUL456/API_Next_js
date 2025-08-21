// local database code
type post={
    id:string,
    title:string,
    des:string
}

let data:post[]=[];

export const getPosts=()=>{
    return data;
}

export const addPost=(post:post)=>{
    data.push(post);
}

export const deletePost=(id:string)=>{
    data=data.filter((post:post)=>post.id!==id);
}


export const getById=(id:string)=>{
    return data.find((post:post)=>post.id===id);
}