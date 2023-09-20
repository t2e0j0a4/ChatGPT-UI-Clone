export default interface MyContextTypes {
    togglePopup: boolean,
    handleTogglePopup: () => void,

    smToggleSidebar: boolean,
    handleSmToggleSidebar: () => void,
    
    toggleSidebar: boolean,
    handleToggleSidebar: (payload: boolean) => void,
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