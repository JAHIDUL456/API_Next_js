//the get http response
import { addPost, getById, getPosts } from "@/lib/data";
import { NextResponse } from "next/server";

// to get the data from the code
export const GET = async (req:Request,res:Response)=>{
    try{

        const post=getPosts();
        return NextResponse.json(post);

    }
    catch(e:any){
        return NextResponse.json({error:e.message},{status:500});
    }
   
}

//to add the data to the database
export const POST= async (req:Request, res:Response)=>{

    try{

        const body=await req.json();
        
        addPost(body);

        const post=getPosts();
        return NextResponse.json(post);

    }

    catch(e){
        return NextResponse.json`{error:e.message}`;
    }

}

//here is the code to delete the entire data



