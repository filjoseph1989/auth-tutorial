"use client"

interface LoginButtonProps {
    children: React.ReactNode,
    mode ?: "modal" | "redirect",
    asChild ?: boolean
}

const onClick = () => {
    console.log("login button is clicked");
}

export const LoginButton = ({ children, mode = 'redirect', asChild}: LoginButtonProps) => {
    return (
        <span onClick={onClick}
            className="cursor-pointer">
            {children}
        </span>
    )
}