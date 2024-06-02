import Post from "@/model/Post";
import connect from "@/utils/db";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  try {
    await connect();
    const posts = await Post.find();
    return new NextResponse(posts, { status: 200 });
  } catch (err) {
    return new NextResponse("connection error!", { status: 500 });
  }
};
