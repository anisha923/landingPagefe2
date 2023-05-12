import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import OTPInput, { ResendOTP } from "otp-input-react";
import { useHistory } from "react-router-dom";



const OtpVerificationModal = (props) => {
    const [OTP, setOTP] = useState("");
    const history = useHistory();

    const handleVerify = () => {
        if (/^[1-4]{4}$/.test(OTP)) {
            history.push("/home");
        }
    };

    return (
        <Modal show={props.show} centered backdrop="static" className="my_modal">
            <div className="modal-content">
                <div className="modal-header">
                    <button
                        type="button"
                        className="close"
                        onClick={() => props.onHide()}
                    >
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div>
                    <h4 className="text-center mb-4">OTP Verification</h4>
                </div>
                <div className="modal-body">
                    <OTPInput
                        value={OTP}
                        onChange={setOTP}
                        className="otp_input"
                        autoFocus
                        OTPLength={4}
                        otpType="number"
                        disabled={false}
                    />
                    <div className="text-center">
                        <button type="button" onClick={handleVerify} className="btn btn-primary w-25">Verify</button>

                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default OtpVerificationModal;
