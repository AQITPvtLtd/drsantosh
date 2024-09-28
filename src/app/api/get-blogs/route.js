import pool from "@/helper/db";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const [results] = await pool.query("SELECT * FROM blog");

    return NextResponse.json({
      message: "Success",
      success: true,
      results: results,
    });
  } catch (error) {
    console.log(error.message);
    return NextResponse.json({
      message: error.message,
      success: false,
    });
  }
}
