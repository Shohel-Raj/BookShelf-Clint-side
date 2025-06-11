import React, { use, useEffect, useState } from 'react';
import { Stepper, Step } from "react-form-stepper";
import { AuthContext } from '../../Contexts/AuthContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const ReadStatus = ({ datas, setReadingStatus }) => {
    const { reading_status, userEmail } = datas;
    const { user } = use(AuthContext);
    const [show, setShow] = useState(true)


    const [currentStep, setCurrentStep] = useState(0);


    useEffect(() => {
        if (reading_status === 'Want-to-Read') {
            setCurrentStep(0)
            setReadingStatus('Want-to-Read')
        } else if (reading_status === "Reading") {
            setCurrentStep(1)
            setReadingStatus('Reading')
        } else if (reading_status === "Read") {
            setCurrentStep(2)
            setReadingStatus('Read')
        }


        if (user.email !== userEmail) {

            setShow(false)
        }
    }, [reading_status, user, userEmail, setReadingStatus])

    const steps = [
        { label: "Want-to-Read" },
        { label: "Reading" },
        { label: "Read" },
    ];
    const nextStep = () => {
        setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
        if (currentStep === 0) {
            setReadingStatus('Reading');
            const upDate={
                reading_status:"Reading"
            }
            axios.put(`${import.meta.env.VITE_ApiCall}/book/${datas._id}`, upDate).then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Update Successfuly')
                } else if (res.data.matchedCount) {
                    toast.warn(`You didn't change  any data yet`)
                }
            }).catch(error => {
                toast.error(`${error.massage} found try again`)
            })

        } else if (currentStep === 1) {
            setReadingStatus('Read');
            const upDate={
                reading_status:"Read"
            }
            axios.put(`${import.meta.env.VITE_ApiCall}/book/${datas._id}`, upDate).then(res => {
                if (res.data.modifiedCount) {
                    toast.success('Update Successfuly')
                } else if (res.data.matchedCount) {
                    toast.warn(`You didn't change  any data yet`)
                }
            }).catch(error => {
                toast.error(`${error.massage} found try again`)
            })
        }

    };



    return (
        <div className="p-4 mx-auto">
            <Stepper activeStep={currentStep}>
                {steps.map((step, index) => (
                    <Step key={index} label={step.label} />
                ))}
            </Stepper>
            <div className='flex justify-center'>
                {
                    !!show && <>
                        <button onClick={nextStep} className='cursor-pointer  btn uppercase' disabled={currentStep === steps.length - 1}>
                            update
                        </button>
                    </>
                }

            </div>


        </div>
    );
};

export default ReadStatus;