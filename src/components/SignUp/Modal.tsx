import { useState } from "react";



interface CongratulationsModalProps {
    showModal: boolean;
    toggleModal: () => void;
  }

const CongratulationsModal = ({ showModal, toggleModal }: CongratulationsModalProps) => {
  

  return (
    <>
      <div className="fixed z-10 inset-0 overflow-y-auto  ">
        <div className="flex items-end  justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <div className="fixed inset-0 transition-opacity" aria-hidden="true">
            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>

          <span
            className="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
          >
            &#8203;
          </span>

          <div className="border border-fuchsia-500 inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full">
            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
              <div>
              <div className="flex justify-center items-center mr-[100px]">
  <div className="relative ">
    <img
      src="/assets/modalmark.png"
      alt="hero image"
      className="object-cover"
    />

    <img
      src="/assets/modalboy.png"
      alt="Top Image"
      className="absolute inset-0 object-cover ml-[70px]"
    />
  </div>
</div>


                <div className="text-center  text-base font-semibold font-['Montserrat']">
                  Congratulations
                </div>

                <div className="text-center  text-base font-semibold font-['Montserrat'] mb-6">
                  you have successfully Registered!
                </div>

                <div className="text-center  text-xs font-medium font-['Montserrat'] mb-6">
                  Yes, it was easy and you did it!
                  <br />
                  check your mail box for next step
                </div>

                <button
                onClick={toggleModal}
               
                  type="submit"
                  className="text-white w-full bg-purple-500 py-3 text-center bg-gradient-to-l from-purple-600 via-fuchsia-500 to-pink-500 rounded"
                  
                >
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CongratulationsModal;
