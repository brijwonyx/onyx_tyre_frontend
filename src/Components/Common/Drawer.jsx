import { Dialog, Transition } from "@headlessui/react";
import { X } from "lucide-react";
import { Fragment } from "react";

const Drawer = ({ open, onClose, title, children,footer }) => {
  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/40" />
        </Transition.Child>

        {/* Drawer */}
        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full ">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in duration-200"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-xl bg-white shadow-xl flex flex-col">
                  {/* Header */}
                  <div className="flex items-center justify-between py-6 px-4 border-b border-[#8E8E8E]">
                    <Dialog.Title className="font-montserrat font-bold text-2xl text-black">
                      {title}
                    </Dialog.Title>
                    <button
                      onClick={onClose}
                      className="text-gray-400 hover:text-gray-600"
                    >
                      <X />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="flex-1 overflow-y-auto py-4">
                    {children}
                  </div>

                  {footer && (
                    // <div className="flex justify-end gap-2 px-6 py-4 border-t">
                    //   <button
                    //     onClick={onClose}
                    //     className="px-4 py-2 text-sm border rounded"
                    //   >
                    //     Cancel
                    //   </button>
                    //   <button className="px-4 py-2 text-sm bg-black text-white rounded">
                    //     Save
                    //   </button>
                    // </div>
                    {footer}
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default Drawer;
