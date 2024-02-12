"use server";

import User from "@/database/user.modal";
import { connectToDatabase } from "../mongoose";
import { GetAllUsersParams } from "./shared.types";

export async function getUserById(params: any) {
  try {
    connectToDatabase();

    const { userId } = params;

    const user = await User.findOne({
      clerkId: userId,
    });
    return user;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function getAllUsers(params: GetAllUsersParams) {
  try {
    connectToDatabase();
    const { page = 0, pageSize = 20, filter, searchQuery } = params;
    const users = await User.find({}).sort({ createdAt: -1 });
    return {users};

  } catch (error) {
    console.log(error);
    throw error;
  }
}
