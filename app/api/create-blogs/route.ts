export const POST=(req:Request, res:Response)=>{
    return  Response.json([{
        id:1,
        name:"jahid",
        message:"Hello, World"

    },
    {
        id:2,
        name:"jahid2",
        message:"Hello, World2"
    },
    {
        id:3,
        name:"jahid3",
        message:"Hello, World3"
    }

]);
}