//to perform things using specific id
import { addPost, getById, getPosts, deletePost } from "@/lib/data";
import { NextResponse } from "next/server";


export const GET=(req:Request, res:Response)=>{
    

    try{

        const id = req.url.split("/").pop();
        const post=getById(id);
        return NextResponse.json(post);


    }
    catch(e:any){
        return NextResponse.json({error:e.message});
    }
}

//to delete the post

export const DELETE= async(req:Request, res:Response)=>{
    try{

        const id=req.url.split("/").pop();
        deletePost(id);
        const post=getPosts();
        return NextResponse.json(post);

    }

    catch(e:any){
        return NextResponse.json({error:e.message},{status:404});
    }
}