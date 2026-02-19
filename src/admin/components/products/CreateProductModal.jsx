import { Dialog, Transition, Tab, DialogPanel, TabGroup, TabList, TabPanels, TabPanel } from "@headlessui/react";
import { Fragment, useState } from "react";
import BasicInfoTab from "./tabs/BasicInfoTab";
import CategoriesTab from "./tabs/CategoriesTab";
import VariantsTab from "./tabs/VariantsTab";
import PricingTab from "./tabs/PrincingTab";
import { X } from "lucide-react";
import esc from "../../assets/esc.svg";

export default function CreateProductModal({ open, setOpen }) {
  const [formData, setFormData] = useState({});

  return (
    <Transition appear show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={() => setOpen(false)}>
        <div className="fixed inset-0 bg-black/40" />

        <div className="fixed inset-0 flex items-center justify-center p-4">
          <DialogPanel className="w-full bg-white rounded-xl h-[90vh] flex flex-col">
            <TabGroup className="flex flex-col flex-1 overflow-hidden">
              <div className="flex items-center border-b flex-shrink-0">
                <button
                  onClick={() => setOpen(false)}
                  className="bg-[#FAFAFA] text-[#A1A1AA] p-4 max-h-max text-sm font-medium border-r-2 w-24 flex items-center gap-4"
                >
                  <X size={15}/>
                  <img src={esc} salt="esc" />
                </button>
                <TabList className="flex">
                  {["Basic Info", "Categories", "Variants", "Pricing"].map(
                    (tab) => (
                      <Tab
                        key={tab}
                        className={({ selected }) =>
                          `p-4 text-[13px] font-medium font-openSans border-r w-52 ${
                            selected
                              ? "bg-white text-[#18181B]"
                              : "bg-[#FAFAFA] text-[#A1A1AA] "
                          }`
                        }
                      >
                        {tab}
                      </Tab>
                    ),
                  )}
                </TabList>
              </div>

              <TabPanels className="flex-1 overflow-y-auto">
                <TabPanel>
                  {/* <BasicInfoTab formData={formData} setFormData={setFormData} /> */}
                  <BasicInfoTab />
                </TabPanel>

                <TabPanel>
                  <CategoriesTab />
                </TabPanel>

                <TabPanel>
                  <VariantsTab />
                </TabPanel>

                <TabPanel>
                  <PricingTab />
                </TabPanel>
              </TabPanels>
            </TabGroup>

            <div className="flex flex-shrink-0 justify-end gap-3 mt-6 py-4 px-6 border-t ">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-2 border rounded-md"
              >
                Cancel
              </button>

              <button className="px-4 py-2 bg-black text-white rounded-md">
                Save
              </button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
}
