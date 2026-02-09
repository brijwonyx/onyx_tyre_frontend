import { Dialog } from "@headlessui/react";

const Modal = ({ open, onClose, title, children, size = "md" }) => {
  const sizes = {
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
  };

  return (
    <Dialog open={open} onClose={onClose} className="relative z-50">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30" aria-hidden="true" />

      {/* Center container */}
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel
          className={`w-full ${sizes[size]} bg-white rounded-lg shadow-lg`}
        >
          {/* Header */}
          {title && (
            <div className="px-4 py-3 border-b">
              <Dialog.Title className="text-sm font-medium">
                {title}
              </Dialog.Title>
            </div>
          )}

          {/* Content */}
          <div className="p-4">{children}</div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
};

export default Modal;
