import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-[72px] 2xl:left-[72px] top-0 w-[396px] bg-black h-full shadow-2xl border-r border-neutral-800 flex flex-col z-40">
      <div className="w-[369px] px-3 py-6 inline-flex flex-col justify-center items-start">
        <div className="w-[369px] h-7 px-3 py-6 inline-flex justify-start items-center gap-2.5">
          <div className="justify-start text-neutral-100 text-2xl font-bold font-['Roboto']">Notifications</div>
        </div>
        <div className="w-[369px] h-7 px-3 py-6 inline-flex justify-start items-center gap-2.5">
          <div className="justify-start text-neutral-100 text-base font-semibold font-['Roboto']">Earlier</div>
        </div>
        <div className="w-[369px] h-14 px-3 py-2 inline-flex justify-between items-center overflow-hidden">
          <div className="flex justify-start items-center gap-3">
            <div className="size-11 bg-zinc-300 rounded-full" />
            <div className="w-44 inline-flex flex-col justify-center items-start">
              <div className="justify-start">
                <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                <span className="text-neutral-100 text-sm font-normal font-['Roboto']">started following you. </span>
                <span className="text-neutral-400 text-sm font-normal font-['Roboto']">8w</span>
              </div>
            </div>
          </div>
          <div className="px-5 py-1.5 bg-neutral-700 rounded-lg flex justify-center items-center gap-2.5">
            <div className="justify-start text-white text-sm font-semibold font-['Roboto']">Following</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;