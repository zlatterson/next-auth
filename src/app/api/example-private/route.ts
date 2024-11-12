import { NextResponse } from 'next/server';
import { auth } from '@/auth';

export async function POST(req: Request) {
    const session = await auth();

    // example of private route
    if (!session?.user.id) {
        return NextResponse.json({ error: 'Not logged in' }, { status: 401 });
    }

    return NextResponse.json({ response: "logged in" });
}
