"use server"

import { connectToDatabase } from "../mongoose"

export async function createCreation(params: any) {
    try {
        connectToDatabase();
    } catch (error) {
        
    }
}