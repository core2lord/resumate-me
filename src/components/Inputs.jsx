import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


export default function InputWithPopover({ labelDisplayText, inputType, inputId, inputPlaceholder, inputValue, inputEventOnChange, infoPopupHeader, infoPopupPlacement, infoPopupBody }) {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header>{infoPopupHeader}</Popover.Header>
            <Popover.Body>
                {infoPopupBody}
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingLeft: '0px', paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={inputId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    <OverlayTrigger trigger="focus" placement={infoPopupPlacement} overlay={popover}>
                        <Button variant='link' size="sm" className='p-0 m-0' style={{ color: 'Highlight' }} aria-label="Info">
                            <i className='bi bi-question-square p-0 m-0' style={{ fontSize: '12px' }} />
                        </Button>
                    </OverlayTrigger>
                </div>
                <div className='col-12 p-0 mb-1 m-0'>
                    <input type={inputType} className="form-control" id={inputId} placeholder={inputPlaceholder} value={inputValue} onChange={inputEventOnChange} />
                </div>
            </div>
        </div>
    );
};


export function InputWithoutPopover({ labelDisplayText, inputType, inputId, inputPlaceholder, inputValue, inputEventOnChange }) {

    // This component is similar to InputWithPopover but without the popover functionality
    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={inputId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    {/* No popover here, just a label and input */}
                </div>
                <div className='col-12'>
                    <input type={inputType} className="form-control" id={inputId} placeholder={inputPlaceholder} value={inputValue} onChange={inputEventOnChange} />
                </div>
            </div>
        </div>
    );
};

export function TextareaWithPopover({ labelDisplayText, textareaName, textareaId, textareaPlaceholder, textareaValue, textareaEventOnChange, infoPopupHeader, infoPopupPlacement, infoPopupBody }) {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header>{infoPopupHeader}</Popover.Header>
            <Popover.Body>
                {infoPopupBody}
            </Popover.Body>
        </Popover>
    );

    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingLeft: '0px', paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={textareaId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    <OverlayTrigger trigger="focus" placement={infoPopupPlacement} overlay={popover}>
                        <Button variant='link' size="sm" className='p-0 m-0' style={{ color: 'Highlight' }} aria-label="Info">
                            <i className='bi bi-question-square p-0 m-0' style={{ fontSize: '12px' }} />
                        </Button>
                    </OverlayTrigger>
                </div>
                <div className='col-12 p-0 mb-1 m-0'>
                    <textarea name={textareaName} className="form-control" id={textareaId} placeholder={textareaPlaceholder} value={textareaValue} onChange={textareaEventOnChange} />
                </div>
            </div>
        </div>
    );
};

export function TextareaWithoutPopover({ labelDisplayText, textareaName, textareaId, textareaPlaceholder, textareaValue, textareaEventOnChange }) {

    // This component is similar to InputWithPopover but without the popover functionality
    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={textareaId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    {/* No popover here, just a label and input */}
                </div>
                <div className='col-12'>
                    <textarea name={textareaName} className="form-control" id={textareaId} placeholder={textareaPlaceholder} value={textareaValue} onChange={textareaEventOnChange} />
                </div>
            </div>
        </div>
    );
};
