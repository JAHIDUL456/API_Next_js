
import { addPost, getById, getPosts } from "@/lib/data";
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