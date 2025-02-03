import Link from 'next/link';
import React from 'react';
import { AiOutlineUser, AiOutlineStar, AiOutlineClose, AiOutlineLogout } from 'react-icons/ai';
import { BsCardList } from 'react-icons/bs';

const Sidebar: React.FC = () => {
  
  return (
    <aside className="w-60 h-full bg-gradient-to-b from-gray-900 to-purple-900 bg-transparent text-white py-4 px-2">
      <nav className="space-y-2">
        {/* Menu Items */}
        <SidebarItem icon={<AiOutlineUser />} label="Manage My Account" lin="/account" />
        <SidebarItem icon={<BsCardList />} label="My Order" lin="/cart" />
        <SidebarItem icon={<AiOutlineClose />} label="My Cancellations" lin="/" />
        <SidebarItem icon={<AiOutlineStar />} label="My Reviews" lin="/" />
        <SidebarItem icon={<AiOutlineLogout />} label="Logout"  lin="/login"/>
      </nav>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  lin: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label , lin }) => {
  return (
    <Link href={lin}> <div className="flex items-center gap-2 text-1xl hover:bg-purple-500 p-3 cursor-pointer z-20">
    <div className="text-2xl">{icon}</div>
      <span>{label}</span>
      
    </div>
    </Link>

  );
};

export default Sidebar;
