import React from 'react'
import FormFields from './FormFields'

function Form() {
    return (
        <div>
            <div className="mt-4 mb-3">
                <div className="row">
                    <FormFields label="Customer" placeholder="Enter Customer Name" />
                    <FormFields label="Invoice ID" placeholder="Enter Invoice ID" />
                    <FormFields label="Start Date" placeholder="Start Date" />
                    <FormFields label="End Date" placeholder="End Date" />
                </div>
            </div>
        </div>
    )
}

export default Form