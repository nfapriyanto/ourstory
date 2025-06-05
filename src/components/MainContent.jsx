import React from 'react';

const MainContent = () => {
  return (
    <div className="absolute left-[244px] 2xl:left-[335px] top-0 right-0 h-full px-12 lg:px-16 xl:px-20 2xl:px-20 pt-16 lg:pt-20 xl:pt-24 2xl:pt-24 flex justify-left items-start overflow-auto">
      <div className="w-full max-w-sm lg:max-w-md xl:max-w-lg 2xl:max-w-[468px] flex flex-col justify-start items-center gap-6 lg:gap-8">
        {/* Post Container */}
        <div className="w-full flex flex-col justify-start items-center gap-2">
          {/* Post Header */}
          <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-[464px] flex justify-between items-center">
            <svg width="32" height="32" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px] 2xl:w-[42px] 2xl:h-[42px]">
              <circle cx="21" cy="21" r="16" fill="white"/>
            </svg>
            
            <div className="w-64 lg:w-80 xl:w-96 2xl:w-96 flex flex-col justify-start items-start">
              <div className="w-full max-w-64 lg:max-w-80 xl:max-w-96 2xl:max-w-96 flex justify-start items-center gap-1">
                <div className="flex justify-center items-center gap-2.5">
                  <div className="justify-start text-white text-xs lg:text-sm font-semibold font-['Roboto']">Username</div>
                </div>
                <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="2" cy="2" r="2" fill="#A8A8A8"/>
                </svg>
                <div className="flex justify-center items-center gap-2.5">
                  <div className="justify-start text-neutral-400 text-xs lg:text-sm font-semibold font-['Roboto']">30d</div>
                </div>
              </div>
              <div className="w-full max-w-64 lg:max-w-80 xl:max-w-96 2xl:max-w-96 flex justify-center items-center gap-2.5">
                <div className="flex-1 justify-start text-white text-xs font-normal font-['Roboto']">Place</div>
              </div>
            </div>
            
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[22px] lg:h-[22px] xl:w-[24px] xl:h-[24px]">
              <path d="M5 10C3.9 10 3 10.9 3 12C3 13.1 3.9 14 5 14C6.1 14 7 13.1 7 12C7 10.9 6.1 10 5 10ZM19 10C17.9 10 17 10.9 17 12C17 13.1 17.9 14 19 14C20.1 14 21 13.1 21 12C21 10.9 20.1 10 19 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" fill="white"/>
            </svg>
          </div>

          {/* Post Image */}
          <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-[468px] aspect-square bg-white rounded-lg"></div>

          {/* Post Actions */}
          <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-[468px] flex justify-between items-center">
            <div className="w-64 lg:w-80 xl:w-96 2xl:w-96 flex justify-start items-center">
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]">
                <path d="M13.25 8C9.52265 8 6.5 10.9824 6.5 14.6619C6.5 17.6322 7.68125 24.6817 19.3088 31.808C19.5173 31.9336 19.7564 32 20 32C20.2437 32 20.4827 31.9336 20.6912 31.808C32.3201 24.6817 33.5 17.6322 33.5 14.6619C33.5 10.9824 30.4774 8 26.75 8C23.0227 8 20 12.0375 20 12.0375C20 12.0375 16.9774 8 13.25 8Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]">
                <path d="M32 8L8 15.7647L17.1765 20L27.0588 12.9412L20 22.8235L24.2353 32L32 8Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <svg width="32" height="32" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[36px] lg:h-[36px] xl:w-[40px] xl:h-[40px]">
              <path d="M30.7997 24.9076V18.9173C30.7997 13.7695 30.7997 11.1979 29.2181 9.59836C27.6366 8 25.0902 8 19.9999 8C14.9097 8 12.3633 8 10.7818 9.59836C9.2002 11.1967 9.2002 13.7719 9.2002 18.9173V24.9088C9.2002 28.6239 9.2002 30.4827 10.081 31.2939C10.501 31.6814 11.0314 31.925 11.5965 31.9898C12.7809 32.1254 14.1645 30.9015 16.9304 28.4547C18.1544 27.3735 18.7652 26.8329 19.4997 26.8329C20.2342 26.8329 20.845 27.3735 22.069 28.4547C24.8349 30.9015 26.2185 32.1254 27.4029 31.9898C27.968 31.925 28.4984 31.6814 28.9184 31.2939C29.7992 30.4827 29.7992 28.6239 29.7992 24.9088L30.7997 24.9076Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M23.5999 12.7998H16.4" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
            </svg>
          </div>

          {/* Post Content */}
          <div className="w-full max-w-xs lg:max-w-sm xl:max-w-md 2xl:max-w-[468px] flex flex-col justify-start items-start gap-1.5">
            {/* Likes */}
            <div className="flex justify-start items-center gap-1">
              <svg width="24" height="12" viewBox="0 0 28 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="lg:w-[26px] lg:h-[13px] xl:w-[28px] xl:h-[14px]">
                <circle cx="7" cy="7" r="6.5" fill="#A8A8A8" stroke="black"/>
                <circle cx="14" cy="7" r="6.5" fill="#F5F5F5" stroke="black"/>
                <circle cx="21" cy="7" r="6.5" fill="white" stroke="black"/>
              </svg>
              <div className="justify-start">
                <span className="text-neutral-100 text-xs lg:text-sm font-normal font-['Roboto']">Liked by </span>
                <span className="text-neutral-100 text-xs lg:text-sm font-semibold font-['Roboto']">Username</span>
                <span className="text-neutral-100 text-xs lg:text-sm font-normal font-['Roboto']"> and </span>
                <span className="text-neutral-100 text-xs lg:text-sm font-semibold font-['Roboto']">others</span>
              </div>
            </div>

            {/* Caption */}
            <div className="w-full flex justify-center items-center gap-2.5">
              <div className="flex-1 justify-start">
                <span className="text-neutral-100 text-xs lg:text-sm font-semibold font-['Roboto']">Username </span>
                <span className="text-neutral-100 text-xs lg:text-sm font-normal font-['Roboto']">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis a tincidunt enim. Phasellus vitae felis cursus, porta magna in, tincidunt ante. Sed eu nisi lobortis, ultricies purus in, vehicula felis.</span>
              </div>
            </div>

            {/* View Comments */}
            <div className="w-full flex justify-center items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-400 text-xs lg:text-sm font-normal font-['Roboto']">
                View all 9 comments
              </div>
            </div>

            {/* Add Comment */}
            <div className="w-full flex justify-center items-center gap-2.5">
              <div className="flex-1 justify-start text-neutral-400 text-xs lg:text-sm font-normal font-['Roboto']">
                Add a comment...
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;