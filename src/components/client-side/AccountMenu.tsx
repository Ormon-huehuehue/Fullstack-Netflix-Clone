import { Account } from "next-auth"
import LogoutButton from "./logoutButton"

interface AccountMenuProps{
    visible: boolean
}

const AccountMenu: React.FC<AccountMenuProps> = ({visible}) => {

    if(!visible){
        return null;
    }

  return (
    <div className = 'bg-black w-56 absolute top-14 right-0 py-5 flex-col border-2 border-gray-800 flex'>
        <div className = "flex flex-col gap-3">
            <div className = "px-3 group/item flex flex-row gap-3 items-center w-full">
            <img className = "w-[40px] rounded-md" src="/profile.webp" alt="" />
            <p className = 'text-white text-sm group-hover/item:underline'>Profile</p>
            </div>
            <hr className ="bg-gray-600 border-0 h-px my-4"/>
            <LogoutButton/>
        </div>

    </div>
  )
}

export default AccountMenu