import React from "react";
import EntryLine from './EntryLine';
import { Container } from "semantic-ui-react";

function EntryLineLooping({entries, deleteEntry, setIsOpen, editEntry}) {
    return (
        <Container>
        {
            entries.map((entry)=>
            <EntryLine {...entry} key={entry.id} deleteEntry={deleteEntry} setIsOpen={setIsOpen} editEntry={editEntry}/>
            // <EntryLine {...entry} key={EntryLine.id}/>
            //{...entry} doing this would spread the entry and in the 
            //EntryLine component, individual props would go instead of "entry"

            )
        }
        </Container>
    )
}

export default EntryLineLooping;