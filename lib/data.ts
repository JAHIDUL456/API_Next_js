// local database 

type post={
    id:number,
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

export const deletePost=(id:number)=>{
    data=data.filter((post:post)=>post.id!==id);
}


export const getById=(id:number)=>{
    return data.find((post:post)=>post.id===id);
}