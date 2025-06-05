import React from 'react';

const NotificationModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-[72px] 2xl:left-[72px] top-0 w-[396px] bg-black h-full shadow-2xl border-r border-neutral-800 flex flex-col z-40">
      <div className="w-[396px] bg-black inline-flex flex-col justify-start items-center gap-6 overflow-hidden h-full">
        {/* Header */}
        <div className="w-[396px] h-20 px-3 py-6 flex flex-col justify-center items-start">
          <div className="w-[364px] h-7 px-3 py-2 inline-flex justify-between items-center gap-2.5">
            <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Roboto']">Notifications</div>
          </div>
        </div>
        
        {/* Earlier Section */}
        <div className="w-[396px] px-6 inline-flex justify-start items-center overflow-hidden">
          <div className="justify-start text-neutral-100 text-base font-semibold font-['Roboto']">Earlier</div>
        </div>
        
        {/* Notifications List */}
        <div className="flex flex-col justify-start items-start flex-1 overflow-y-auto">
          {/* Following Notification */}
          <div className="w-[396px] h-16 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div className="w-11 h-11 bg-zinc-300 rounded-full"></div>
              <div className="w-44 inline-flex flex-col justify-center items-start">
                <div className="justify-start">
                  <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                  <span className="text-neutral-100 text-sm font-normal font-['Roboto']">started following you. </span>
                  <span className="text-neutral-400 text-sm font-normal font-['Roboto']">8w</span>
                </div>
              </div>
            </div>
            <div className="px-5 py-1.5 bg-neutral-700 rounded-lg flex justify-center items-center gap-2.5 hover:bg-neutral-600 transition-colors">
              <div className="justify-start text-white text-sm font-semibold font-['Roboto']">Following</div>
            </div>
          </div>

          {/* Like Notification */}
          <div className="w-[396px] h-16 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div className="w-11 h-11 bg-zinc-300 rounded-full"></div>
              <div className="w-44 inline-flex flex-col justify-center items-start">
                <div className="justify-start">
                  <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                  <span className="text-neutral-100 text-sm font-normal font-['Roboto']">liked your photo. </span>
                  <span className="text-neutral-400 text-sm font-normal font-['Roboto']">1d</span>
                </div>
              </div>
            </div>
            <div className="w-11 h-11 bg-white rounded"></div>
          </div>

          {/* Comment Notification */}
          <div className="w-[396px] h-16 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div className="w-11 h-11 bg-zinc-300 rounded-full"></div>
              <div className="w-44 inline-flex flex-col justify-center items-start">
                <div className="justify-start">
                  <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                  <span className="text-neutral-100 text-sm font-normal font-['Roboto']">commented: "Nice photo!" </span>
                  <span className="text-neutral-400 text-sm font-normal font-['Roboto']">2d</span>
                </div>
              </div>
            </div>
            <div className="w-11 h-11 bg-white rounded"></div>
          </div>

          {/* Follow Request Notification */}
          <div className="w-[396px] h-16 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div className="w-11 h-11 bg-zinc-300 rounded-full"></div>
              <div className="w-44 inline-flex flex-col justify-center items-start">
                <div className="justify-start">
                  <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                  <span className="text-neutral-100 text-sm font-normal font-['Roboto']">requested to follow you. </span>
                  <span className="text-neutral-400 text-sm font-normal font-['Roboto']">3d</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <div className="px-4 py-1.5 bg-sky-500 rounded-lg flex justify-center items-center hover:bg-sky-600 transition-colors">
                <div className="text-white text-sm font-semibold font-['Roboto']">Confirm</div>
              </div>
              <div className="px-4 py-1.5 bg-neutral-700 rounded-lg flex justify-center items-center hover:bg-neutral-600 transition-colors">
                <div className="text-white text-sm font-semibold font-['Roboto']">Delete</div>
              </div>
            </div>
          </div>

          {/* More notifications can be added here */}
          <div className="w-[396px] h-16 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div className="w-11 h-11 bg-zinc-300 rounded-full"></div>
              <div className="w-44 inline-flex flex-col justify-center items-start">
                <div className="justify-start">
                  <span className="text-neutral-100 text-sm font-semibold font-['Roboto']">Username </span>
                  <span className="text-neutral-100 text-sm font-normal font-['Roboto']">mentioned you in a comment. </span>
                  <span className="text-neutral-400 text-sm font-normal font-['Roboto']">1w</span>
                </div>
              </div>
            </div>
            <div className="w-11 h-11 bg-white rounded"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationModal;