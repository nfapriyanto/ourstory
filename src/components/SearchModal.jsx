import React from 'react';

const SearchModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute left-[72px] 2xl:left-[72px] top-0 w-[396px] bg-black h-full shadow-2xl border-r border-neutral-800 flex flex-col z-40">
      <div className="w-[396px] bg-black inline-flex flex-col justify-start items-center gap-3 overflow-hidden h-full">
        <div className="w-[396px] h-36 px-3 py-6 flex flex-col justify-center items-start gap-5">
          <div className="w-[364px] h-7 px-3 py-2 inline-flex justify-between items-center gap-2.5">
            <div className="justify-start text-neutral-100 text-2xl font-semibold font-['Roboto']">Search</div>
          </div>
          <div className="w-[364px] h-[46px] px-4 py-[3px] bg-neutral-700 rounded-lg inline-flex justify-between items-center overflow-hidden">
            <input 
              type="text" 
              placeholder="Search" 
              className="flex-1 bg-transparent text-neutral-100 text-base font-light font-['Roboto'] outline-none placeholder-neutral-400"
              autoFocus
            />
            <div className="flex items-center gap-2">
              <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M9 0.5C13.9701 0.5 18 4.52994 18 9.5C18 14.4701 13.9701 18.5 9 18.5C4.02994 18.5 0 14.4701 0 9.5C3.22211e-08 4.52994 4.02994 0.5 9 0.5ZM13.2627 5.2373C12.8722 4.84692 12.2391 4.84693 11.8486 5.2373L9 8.08594L6.15137 5.2373L6.0752 5.16895C5.68243 4.84869 5.10339 4.87123 4.7373 5.2373C4.37122 5.60338 4.34869 6.18242 4.66895 6.5752L4.7373 6.65137L7.58594 9.5L4.7373 12.3486C4.34692 12.7391 4.34692 13.3722 4.7373 13.7627C5.1278 14.1531 5.76087 14.1531 6.15137 13.7627L9 10.9141L11.8486 13.7627L11.9238 13.8311C12.3166 14.1517 12.8965 14.1289 13.2627 13.7627C13.6289 13.3965 13.6517 12.8166 13.3311 12.4238L13.2627 12.3486L10.4141 9.5L13.2627 6.65137C13.6531 6.26087 13.6531 5.6278 13.2627 5.2373Z" fill="#A8A8A8"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="w-[396px] px-6 inline-flex justify-between items-start overflow-hidden">
          <div className="justify-start text-neutral-100 text-base font-semibold font-['Roboto']">Recent</div>
          <div className="justify-start text-sky-500 text-sm font-normal font-['Roboto'] cursor-pointer">Clear all</div>
        </div>
        
        <div className="flex flex-col justify-start items-start flex-1 overflow-y-auto">
          {/* Search results */}
          <div className="w-[396px] h-14 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div data-svg-wrapper="true">
                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="22.9" cy="22" r="22" fill="#D9D9D9"/>
                </svg>
              </div>
              <div className="inline-flex flex-col justify-center items-start">
                <div className="justify-start text-neutral-100 text-sm font-semibold font-['Roboto']">Username</div>
                <div className="inline-flex justify-start items-center gap-1">
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="justify-start text-neutral-400 text-sm font-normal font-['Roboto']">Description</div>
                  </div>
                  <div data-svg-wrapper="true">
                    <svg width="5" height="4" viewBox="0 0 5 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="2.89999" cy="2" r="2" fill="#A8A8A8"/>
                    </svg>
                  </div>
                  <div className="flex justify-center items-center gap-2.5">
                    <div className="justify-start text-neutral-400 text-sm font-normal font-['Roboto']">100K followers</div>
                  </div>
                </div>
              </div>
            </div>
            <div data-svg-wrapper="true" className="cursor-pointer hover:bg-neutral-800 rounded p-1 transition-colors">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1 17.7034L10.138 23.6654C9.91496 23.8885 9.63106 24 9.28632 24C8.94158 24 8.65767 23.8885 8.43461 23.6654C8.21154 23.4423 8.10001 23.1584 8.10001 22.8137C8.10001 22.4689 8.21154 22.185 8.43461 21.962L14.3966 16L8.43461 10.038C8.21154 9.81496 8.10001 9.53105 8.10001 9.18631C8.10001 8.84157 8.21154 8.55767 8.43461 8.3346C8.65767 8.11153 8.94158 8 9.28632 8C9.63106 8 9.91496 8.11153 10.138 8.3346L16.1 14.2966L22.062 8.3346C22.285 8.11153 22.569 8 22.9137 8C23.2584 8 23.5423 8.11153 23.7654 8.3346C23.9885 8.55767 24.1 8.84157 24.1 9.18631C24.1 9.53105 23.9885 9.81496 23.7654 10.038L17.8034 16L23.7654 21.962C23.9885 22.185 24.1 22.4689 24.1 22.8137C24.1 23.1584 23.9885 23.4423 23.7654 23.6654C23.5423 23.8885 23.2584 24 22.9137 24C22.569 24 22.285 23.8885 22.062 23.6654L16.1 17.7034Z" fill="#A8A8A8"/>
              </svg>
            </div>
          </div>
          
          <div className="w-[396px] h-14 px-6 py-2 inline-flex justify-between items-center overflow-hidden hover:bg-neutral-900 transition-colors cursor-pointer">
            <div className="flex justify-start items-center gap-3">
              <div data-svg-wrapper="true">
                <svg width="45" height="44" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.899994" width="44" height="44" rx="22" fill="#262626"/>
                  <path d="M30.9 30L25.5667 24.6667M14.9 20.2222C14.9 21.0393 15.0609 21.8484 15.3736 22.6034C15.6863 23.3583 16.1447 24.0442 16.7224 24.622C17.3002 25.1998 17.9862 25.6581 18.7411 25.9708C19.496 26.2835 20.3051 26.4444 21.1222 26.4444C21.9393 26.4444 22.7484 26.2835 23.5034 25.9708C24.2583 25.6581 24.9442 25.1998 25.522 24.622C26.0998 24.0442 26.5581 23.3583 26.8708 22.6034C27.1835 21.8484 27.3444 21.0393 27.3444 20.2222C27.3444 19.4051 27.1835 18.596 26.8708 17.8411C26.5581 17.0862 26.0998 16.4002 25.522 15.8224C24.9442 15.2447 24.2583 14.7863 23.5034 14.4736C22.7484 14.1609 21.9393 14 21.1222 14C20.3051 14 19.496 14.1609 18.7411 14.4736C17.9862 14.7863 17.3002 15.2447 16.7224 15.8224C16.1447 16.4002 15.6863 17.0862 15.3736 17.8411C15.0609 18.596 14.9 19.4051 14.9 20.2222Z" stroke="#F5F5F5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="justify-start text-neutral-100 text-sm font-normal font-['Roboto']">Searching</div>
            </div>
            <div data-svg-wrapper="true" className="cursor-pointer hover:bg-neutral-800 rounded p-1 transition-colors">
              <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1 17.7034L10.138 23.6654C9.91496 23.8885 9.63106 24 9.28632 24C8.94158 24 8.65767 23.8885 8.43461 23.6654C8.21154 23.4423 8.10001 23.1584 8.10001 22.8137C8.10001 22.4689 8.21154 22.185 8.43461 21.962L14.3966 16L8.43461 10.038C8.21154 9.81496 8.10001 9.53105 8.10001 9.18631C8.10001 8.84157 8.21154 8.55767 8.43461 8.3346C8.65767 8.11153 8.94158 8 9.28632 8C9.63106 8 9.91496 8.11153 10.138 8.3346L16.1 14.2966L22.062 8.3346C22.285 8.11153 22.569 8 22.9137 8C23.2584 8 23.5423 8.11153 23.7654 8.3346C23.9885 8.55767 24.1 8.84157 24.1 9.18631C24.1 9.53105 23.9885 9.81496 23.7654 10.038L17.8034 16L23.7654 21.962C23.9885 22.185 24.1 22.4689 24.1 22.8137C24.1 23.1584 23.9885 23.4423 23.7654 23.6654C23.5423 23.8885 23.2584 24 22.9137 24C22.569 24 22.285 23.8885 22.062 23.6654L16.1 17.7034Z" fill="#A8A8A8"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;