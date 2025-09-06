import { Button } from "react-bootstrap";

export default function AddRemoveButtons({ onclickAdd, onclickRemove, enableAdd, enableRemove}) {

    let addButton = (<Button variant="link m-0 p-0" onClick={onclickAdd}>+ Add</Button>
    );

    let removeButton = (<Button variant="link m-0 p-0" onClick={onclickRemove}>- Remove</Button>
    );

    return (
        <div className="d-flex flex-nowrap row flex-grow-1 justify-content-end local-addRemoveButtons me-4 m-0 p-0 ">

            <div className="col flex-fill text-end p-0 me-3">
                {enableAdd ? addButton : null}
            </div>
            <div className="col text-nowrap p-0 me-3">
                {enableRemove ? removeButton : null}
            </div>
        </div>
    )
}