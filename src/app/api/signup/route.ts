import User from "@/models/User";
import connect from "@/utils/db";
import bcrypt from "bcryptjs"   ;
import { NextResponse } from "next/server";

export const POST = async (request: any) => {
  const { email, password } = await request.json();

  await connect();

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return new NextResponse("This email already exists, try logging in.", {
      status: 400,
    });
  }

  const hashedPassword = await bcrypt.hash(password, 5);
  const newUser = new User({
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();
    return new NextResponse("User is registered.", { status: 200 });
  } catch (error: any) {
    return new NextResponse(error, { status: 500 });
  }
};
