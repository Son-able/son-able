import { DialogTrigger } from "~/components/ui/dialog";

const newPostFab = () => (
    <DialogTrigger className="rounded-full text-secondary bg-primary items-center text-center justify-items-center" style={{display: "block", height: "44px", width: "44px"}}>
            <i data-feather="plus" style={{height: "44px", width: "44px", marginRight: "-7px"}} />
    </DialogTrigger>
)

export default newPostFab