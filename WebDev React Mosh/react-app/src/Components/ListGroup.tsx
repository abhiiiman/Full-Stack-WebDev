// import { Fragment } from "react";
// import { MouseEvent } from "react";
import { useState } from "react";

interface Props {
    listItem: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ listItem, heading, onSelectItem }: Props) {
    // listItem = [];

    // event handler.
    // const handleClick = (event: MouseEvent) => console.log(event);

    // selector for the list item.
    // let selectedIndex = 0;

    //state func. Hook/ for dynamic data update in variable.
    const [selectedIndex, setSelectedIndex] = useState(-1);
    // arr[0]; //var selectedIndex.
    // arr[1]; // updater func.

    // for working with strings and updating them.
    // const [name, setname] = useState("");

    return (
        <>
            {/* <Fragment> */}
            {/* <div> */}
            <h1>{heading}</h1>
            {listItem.length === 0 && (
                <p>
                    <strong>No Item Found</strong>
                </p>
            )}
            <ul className="list-group">
                {listItem.map((item, index) => (
                    // <li className={selectedIndex === index ? "list-group-item active": "list-group-item"} key={item} onClick={()=>console.log(item, index)}>{item}</li>

                    <li
                        className={
                            selectedIndex === index
                                ? "list-group-item active"
                                : "list-group-item"
                        }
                        key={item}
                        // for updating the state and making them active on click.
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>
            {/* </div> */}
            {/* </Fragment> */}
        </>
    );
}

export default ListGroup;
