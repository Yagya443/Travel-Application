import { CiGlobe } from "react-icons/ci";
import { IoIosFlash } from "react-icons/io";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaPencilAlt } from "react-icons/fa";
import { BsStars } from "react-icons/bs";

const FinancialAudit = () => {
    return (
        <div>
            <div className="grid grid-cols-3 gap-4  justify-between">
                <div className="border rounded-xl flex items-center py-2 px-4 gap-4">
                    <CiGlobe size={25} fill="blue" />
                    <div>
                        <p className="text-[10px]">Region</p>
                        <h4 className="font-semibold text-lg">United State</h4>
                    </div>
                </div>
                <div className="border rounded-xl flex items-center py-2 px-4 gap-4">
                    <IoIosFlash size={25} fill="orange" />
                    <div>
                        <p className="text-[10px]">Daily Burn</p>
                        <h4 className="font-semibold text-lg">$400</h4>
                    </div>
                </div>
                <div className="border rounded-xl flex items-center py-2 px-4 gap-4">
                    <AiFillSafetyCertificate size={25} fill="green" />
                    <div>
                        <p className="text-[10px]">Safety Margin</p>
                        <h4 className="font-semibold text-lg">15% Buffer</h4>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 min-h-100 gap-4  mt-8 ">
                <div className="bg-amber-300 py-2 px-4 rounded-3xl">
                    <h2 className="flex items-center gap-2">
                        <FaPencilAlt /> Resource Allocation
                    </h2>
                    <div className="bg-gray-300">Hello</div>
                </div>
                <div className="bg-amber-300 py-2 px-4 rounded-3xl">
                    <h2 className="flex items-center gap-2">
                        <FaPencilAlt /> Resource Allocation
                    </h2>
                    <div className="bg-gray-300">Hello</div>
                </div>
            </div>

            <div className="bg-blue-500/10 mt-8 rounded-2xl min-h-[200px] flex items-center justify-center flex-col ">
                <BsStars size={40} fill="blue" />
                <h3 className="text-[20px] tracking-wide font-semibold italic">SYNTHESIZE AI INTEL</h3>
                <p className="text-blue-500 text-[10px] tracking-widest ">EXECUTE NEUTRAL LINK FOR OPTIMIZATION</p>
            </div>
        </div>
    );
};

export default FinancialAudit;
