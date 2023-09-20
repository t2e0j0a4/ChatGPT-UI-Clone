export default interface MyContextTypes {
    toggleSidebar: boolean,
    smToggleSidebar: boolean,
    handleToggleSidebar: (payload: boolean) => void,
    handleSmToggleSidebar: () => void,
}

type MyDemoPromptsType = {
    id: number,
    title: string,
    description: string
}

type NavbarMoreOptions = {
    id: number,
    option: string
}

type NavbarOptions = {
    id: number,
    option: string,
    moreOptions: NavbarMoreOptions[]
}

export type { MyDemoPromptsType, NavbarOptions }