import 'bootstrap/dist/css/bootstrap.min.css';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Button from 'react-bootstrap/Button';


export default function FormInput({ labelDisplayText, inputType, inputId, enablePopover, enableAutoSelectAll, inputPlaceholder, inputValue, inputEventOnChange, infoPopupHeader, infoPopupPlacement, infoPopupBody }) {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header>{infoPopupHeader}</Popover.Header>
            <Popover.Body>
                {infoPopupBody}
            </Popover.Body>
        </Popover>
    );

    const usePopover = (<OverlayTrigger trigger="focus" placement={infoPopupPlacement} overlay={popover}>
        <Button variant='link' size="sm" className='p-0 m-0' tabIndex={"-1"} style={{ color: 'Highlight' }} aria-label="Info">
            <i className='bi bi-question-square p-0 m-0' style={{ fontSize: '12px' }} />
        </Button>
    </OverlayTrigger>
    );

    const onClickAutoSelectAll = (e) => {
        e.target.select();
    };

    const useAutoSelectAll = (<input type={inputType} className="user-select-all form-control" id={inputId} placeholder={inputPlaceholder} value={inputValue} onChange={inputEventOnChange} onClick={onClickAutoSelectAll} />);
    const noAutoSelectAll = (<input type={inputType} className="form-control" id={inputId} placeholder={inputPlaceholder} value={inputValue} onChange={inputEventOnChange} />);

    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingLeft: '0px', paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={inputId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    {enablePopover ? usePopover : null}
                </div>
                <div className='col-12 p-0 mb-1 m-0'>
                    {enableAutoSelectAll? useAutoSelectAll : noAutoSelectAll}
                </div>
            </div>
        </div>
    );
};


export function FormTextarea({ labelDisplayText, textareaName, textareaId, useAutoSelectAll, useWithPopover, textareaPlaceholder, textareaValue, textareaEventOnChange, infoPopupHeader, infoPopupPlacement, infoPopupBody }) {

    const popover = (
        <Popover id="popover-basic">
            <Popover.Header>{infoPopupHeader}</Popover.Header>
            <Popover.Body>{infoPopupBody}</Popover.Body>
        </Popover>
    );

    const usePopover = (<OverlayTrigger trigger="focus" placement={infoPopupPlacement} overlay={popover}>
        <Button variant='link' size="sm" className='p-0 m-0' tabIndex={"-1"} style={{ color: 'Highlight' }} aria-label="Info">
            <i className='bi bi-question-square p-0 m-0' style={{ fontSize: '12px' }} />
        </Button>
    </OverlayTrigger>)

    const onClickAutoSelectAll = (e) => {
        e.target.select();
    };
    const autoSelectTemplate = (<textarea name={textareaName} className="textarea user-select-all form-control" id={textareaId} placeholder={textareaPlaceholder} value={textareaValue} onChange={textareaEventOnChange} onClick={onClickAutoSelectAll} />);
    const noAutoSelectTemplate = (<textarea name={textareaName} className="textarea form-control" id={textareaId} placeholder={textareaPlaceholder} value={textareaValue} onChange={textareaEventOnChange} />);

    return (
        <div className="container align-items-center p-0 m-0">
            <div className='row p-0 m-0'>
                <div className='col-auto' style={{ paddingLeft: '0px', paddingRight: '.20rem', paddingTop: '0.25rem' }}>
                    <label for={textareaId} className="form-label">{labelDisplayText}</label>
                </div>
                <div className='col p-0 m-0'>
                    {useWithPopover ? usePopover : null}
                </div>
                <div className='col-12 p-0 mb-1 m-0'>
                    {useAutoSelectAll ? autoSelectTemplate : noAutoSelectTemplate}
                </div>
            </div>
        </div>
    );
};
