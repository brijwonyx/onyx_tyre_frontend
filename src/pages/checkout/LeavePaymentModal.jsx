import React from 'react';

import { useNavigate } from 'react-router-dom';

const LeavePaymentModal = (props) => {
    const {showExitModal , setShowExitModal} = props;
    const navigate = useNavigate();
  return (
        <Modal
        open={showExitModal}
        onClose={() => setShowExitModal(false)}
        title="Leave payment?"
        size="md"
      >
        <div className="space-y-5">
          <p className="font-openSans text-sm text-[#5B5B5B]">
            Your payment is not completed yet. If you leave now, you can return
            later and try again with a fresh payment session.
          </p>

          <div className="rounded-lg border border-[#E6E6E6] bg-gray-50 p-4">
            <ul className="space-y-2 font-openSans text-sm text-[#5B5B5B]">
              <li>Your checkout items will stay in place.</li>
              <li>No successful charge will be created by leaving now.</li>
              <li>You can come back and restart payment when you are ready.</li>
            </ul>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-end">
            <button
              type="button"
              onClick={() => setShowExitModal(false)}
              className="rounded-full bg-primary px-6 py-2 font-montserrat text-sm font-semibold uppercase text-white"
            >
              Continue Payment
            </button>
            <button
              type="button"
              onClick={() => navigate("/checkout/review")}
              className="rounded-full border border-black px-6 py-2 font-montserrat text-sm font-semibold uppercase text-black"
            >
              Leave To Review
            </button>
          </div>
        </div>
      </Modal>
  )
}

export default LeavePaymentModal