import { auth } from "@clerk/nextjs";

const adminIds = [
    "user_2evCqCmUCBfvjAxTxBp5lv6TwMD"
];

export const isAdmin = () => {
    const { userId } = auth();

    if (!userId) {
        return false;
    }

    return adminIds.indexOf(userId) !== -1;
}