import { Button } from "~/components/ui/button"
import { Menubar, MenubarTrigger } from "~/components/ui/menubar"


const fabBar = () => {
    return (
        <>
            <Menubar className="justify-items-end items-right z-50" style={{position: "fixed", bottom: "0px", width: "100%"}}>
                <MenubarTrigger dir="rtl">

                    <Button>test</Button>
                    
                </MenubarTrigger>
            </Menubar>
        </>
    )
}

export default fabBar;